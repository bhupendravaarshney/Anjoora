import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const opsBaseUrl = process.env.ANJOORA_OPS_API_URL?.trim();
  const integrationSecret = process.env.ANJOORA_INTEGRATION_SECRET?.trim();
  if (!opsBaseUrl || !integrationSecret) {
    return NextResponse.json(
      { error: "The AnjooraOps connection is not configured." },
      { status: 503 },
    );
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > 32_768) {
    return NextResponse.json({ error: "Consultation payload is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid consultation payload." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid consultation payload." }, { status: 400 });
  }

  const mutablePayload = payload as Record<string, unknown>;
  if (process.env.TURNSTILE_SECRET_KEY) {
    const token = typeof mutablePayload.anti_bot_token === "string" ? mutablePayload.anti_bot_token : "";
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    }).then((response) => response.json()).catch(() => ({ success: false })) as { success?: boolean };
    if (!verification.success) {
      return NextResponse.json({ error: "Anti-bot verification failed." }, { status: 422 });
    }
  }
  delete mutablePayload.anti_bot_token;

  try {
    const endpoint = new URL(
      "api/v1/consultations",
      opsBaseUrl.endsWith("/") ? opsBaseUrl : `${opsBaseUrl}/`,
    );
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Anjoora-Integration-Key": integrationSecret,
        "X-Anjoora-Client-Ip": String(request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown").split(",")[0].trim(),
        "X-Request-Id": crypto.randomUUID(),
      },
      body: JSON.stringify(mutablePayload),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const responseBody = await response.text();

    return new Response(responseBody, {
      status: response.status,
      headers: { "Content-Type": response.headers.get("content-type") || "application/json" },
    });
  } catch (error) {
    console.error("AnjooraOps consultation request failed", error);
    return NextResponse.json(
      { error: "AnjooraOps is temporarily unavailable. Your folio was not submitted." },
      { status: 502 },
    );
  }
}

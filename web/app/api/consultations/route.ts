import { NextResponse } from "next/server";

export const runtime = "nodejs";

function opsBaseUrl() {
  return (process.env.ANJOORA_OPS_URL || process.env.ANJOORA_OPS_API_URL || "").trim();
}

function publicError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function trustedClientIp(request: Request) {
  return String(
    request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown",
  )
    .split(",")[0]
    .trim()
    .slice(0, 128);
}

function sameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || request.headers.get("host")?.trim();
  if (!host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function GET() {
  const baseUrl = opsBaseUrl();
  if (!baseUrl) {
    return publicError("The consultation service is temporarily unavailable.", 503);
  }

  try {
    const endpoint = new URL(
      "api/v1/consent",
      baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
    );
    const response = await fetch(endpoint, {
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("content-type") || "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("AnjooraOps consent policy request failed", error);
    return publicError("The current consent text is temporarily unavailable.", 502);
  }
}

export async function POST(request: Request) {
  if (!sameOriginRequest(request)) {
    return publicError("The consultation request origin could not be verified.", 403);
  }

  const baseUrl = opsBaseUrl();
  const integrationSecret = process.env.ANJOORA_INTEGRATION_SECRET?.trim();
  if (!baseUrl || !integrationSecret) {
    return publicError("The consultation service is temporarily unavailable.", 503);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > 32_768) {
    return publicError("Consultation payload is too large.", 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return publicError("Invalid consultation payload.", 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return publicError("Invalid consultation payload.", 400);
  }

  const mutablePayload = payload as Record<string, unknown>;
  if (process.env.TURNSTILE_SECRET_KEY) {
    const token = typeof mutablePayload.anti_bot_token === "string" ? mutablePayload.anti_bot_token : "";
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    })
      .then((response) => response.json())
      .catch(() => ({ success: false })) as { success?: boolean };

    if (!verification.success) {
      return publicError("Anti-bot verification failed.", 422);
    }
  }
  delete mutablePayload.anti_bot_token;

  const requestId = crypto.randomUUID();

  try {
    const endpoint = new URL(
      "api/v1/consultations",
      baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
    );
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Anjoora-Integration-Key": integrationSecret,
        "X-Anjoora-Client-Ip": trustedClientIp(request),
        "X-Request-Id": requestId,
      },
      body: JSON.stringify(mutablePayload),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    const responseBody = await response.text();
    const headers = new Headers({
      "Content-Type": response.headers.get("content-type") || "application/json",
      "Cache-Control": "no-store",
      "X-Request-Id": response.headers.get("x-request-id") || requestId,
    });

    const replayed = response.headers.get("idempotent-replayed");
    const retryAfter = response.headers.get("retry-after");
    if (replayed) headers.set("Idempotent-Replayed", replayed);
    if (retryAfter) headers.set("Retry-After", retryAfter);

    return new Response(responseBody, {
      status: response.status,
      headers,
    });
  } catch (error) {
    console.error("AnjooraOps consultation request failed", error);
    return publicError(
      "We couldn't save your consultation securely. Please try again.",
      502,
    );
  }
}

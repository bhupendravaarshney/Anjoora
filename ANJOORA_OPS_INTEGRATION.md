# ANJOORA → ANJOORA Ops integration

## Final flow

```text
Questionnaire
→ Folio
→ POST /api/consultations on ANJOORA
→ authenticated server-to-server POST to ANJOORA Ops /api/v1/consultations
→ Ops saves customer / consultation / folio / review case
→ Ops returns customer_id / consultation_id / folio_id / case_id
→ ANJOORA stores safe trace IDs for the current browser session
→ WhatsApp opens only after successful Ops persistence
```

## ANJOORA Railway variables

```env
ANJOORA_OPS_URL=https://<actual-anjoora-ops-domain>.up.railway.app
ANJOORA_INTEGRATION_SECRET=<exact same value configured in ANJOORA Ops>
GO_LIVE=false
```

`ANJOORA_INTEGRATION_SECRET` is server-only. Never rename it with a `NEXT_PUBLIC_` prefix.

The older `ANJOORA_OPS_API_URL` variable is accepted temporarily as a compatibility alias. Prefer `ANJOORA_OPS_URL`; if both are configured they must be identical.

## Deployment smoke test

1. Verify `GET /api/consultations` on ANJOORA returns the current Ops consent policy through the proxy.
2. Complete a test questionnaire.
3. Submit the folio.
4. Confirm ANJOORA Ops returns a successful result and creates one consultation.
5. Confirm WhatsApp opens only after the save succeeds.
6. Retry the same submission ID and confirm Ops does not create a duplicate consultation.

No ANJOORA UI redesign is required for this integration.

# ANJOORA Web PWA

This is the production web application. Deploy this folder to one HTTPS domain and the same application can be installed from Chrome on Android and Safari on iPhone.

For plain-language customer and staff instructions, see the [English and Hindi user handbook](../../AnjooraOps/docs/USER_HANDBOOK.md).

## Requirements

- Node.js 22.13 or newer
- npm
- An HTTPS domain

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

### Important: installing on a phone

Opening the development server from a phone at an address such as `http://192.168.x.x:3000` supports layout and interaction testing, but browsers do not allow PWA installation or service-worker registration from an insecure LAN HTTP origin. The Install button will explain that HTTPS is required.

To test installation, deploy the `web` folder to an HTTPS preview/domain and open that URL on the phone. Android Chrome can show its install prompt; iPhone/iPad installation uses Safari's **Share → Add to Home Screen**. `http://localhost` is a browser development exception only on the device where localhost is running—it does not make the computer's LAN address secure on a phone.

## Production build

```bash
npm ci
npm run build
npm start
```

The production server uses port 3000 unless the hosting platform supplies another `PORT`.

## PWA files that must remain public

- `/manifest.webmanifest`
- `/sw.js`
- `/offline.html`
- `/icons/anjoora-192.png`
- `/icons/anjoora-512.png`
- `/icons/anjoora-maskable-512.png`
- `/icons/anjoora-apple-touch.png`

The domain must use HTTPS. Do not redirect these files to a login page or another origin.

## Mobile installation

### Android

Open the domain in Chrome, tap **Install** in the ANJOORA header, and approve the browser installation prompt.

### iPhone/iPad

Open the domain in Safari, tap **Install**, then choose **Share → Add to Home Screen → Add**.

The installed app opens in full-screen standalone mode. Consultation progress is saved only in that device's browser storage.

## WhatsApp handoff

The consultation is saved in AnjooraOps before WhatsApp opens. The Anjoora assessment carries one primary concern, up to three linked concerns, and the completed safety screen into the saved plan. The `/connect` page sends that structured payload to its server-side `/api/consultations` proxy, which then calls AnjooraOps.

Configure the server-only Ops origin:

```bash
cp .env.example .env.local
```

```env
ANJOORA_OPS_API_URL=http://localhost:3000
ANJOORA_INTEGRATION_SECRET=<same server-only random value configured in AnjooraOps>
```

Do not expose either setting through a `NEXT_PUBLIC_*` variable. For local integration testing, run AnjooraOps on port `3000` and this frontend on port `3001`:

```bash
npm run dev -- -p 3001
```

If Ops persistence fails, the customer remains on the form and WhatsApp does not open. After a successful save, the customer reviews the prefilled message and presses **Send** in WhatsApp.

### Connected WhatsApp operations

AnjooraOps now provides signed Meta webhook intake, exact event deduplication, a durable message outbox, bounded retries, delivery/read/failure tracking, deterministic status intents, and human handoff. Do not place Meta access tokens in client-side code or `NEXT_PUBLIC_*` variables.

Production activation still requires:

1. A verified Meta Business portfolio and WhatsApp Business Account.
2. The production phone-number ID, WhatsApp Business Account ID, and a server-side access token.
3. The public AnjooraOps HTTPS webhook registered with Meta.
4. Approved message templates for business-initiated dispatch, delivery, and refill conversations.
5. A scheduler for the outbox/refill/maintenance jobs and alerts for delayed or dead jobs.
6. Named operational staff with least-privilege roles, rotated passwords, and MFA.
7. Provider-owned backups and retention/privacy approval described in the AnjooraOps operations runbook.

Suggested first interactive acknowledgement:

- **Confirm details**
- **Request a change**
- **Speak to the team**

A later recommendation message could offer **Accept recommendation**, **Ask a question**, and **Decide later**. Human Vaidya review, consent, safety escalation, and payment rules must remain authoritative; automation must not generate or approve a wellness recommendation by itself.

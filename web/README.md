# ANJOORA Web PWA

This is the production web application. Deploy this folder to one HTTPS domain and the same application can be installed from Chrome on Android and Safari on iPhone.

## Requirements

- Node.js 22.13 or newer
- npm
- An HTTPS domain

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Important: installing on a phone

Opening the development server from a phone at an address such as `http://192.168.x.x:3000` supports layout and interaction testing, but browsers do not allow PWA installation or service-worker registration from an insecure LAN HTTP origin. The Install button will explain that HTTPS is required.

To test installation, deploy the `web` folder to an HTTPS preview/domain and open that URL on the phone. Android Chrome can show its install prompt; iPhone/iPad installation uses Safari's **Share → Add to Home Screen**. `http://localhost` is a browser development exception only on the device where localhost is running—it does not make the computer's LAN address secure on a phone.

## Production build

```bash
npm install
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

The current release uses a click-to-WhatsApp link for the official ANJOORA number. After completing the consultation, the customer receives a structured, prefilled folio containing personal details, present pattern, body and daily rhythm, inner climate, preparation preference, consent, and a clear request for human Vaidya review.

The customer must review the prefilled message and press **Send** in WhatsApp. No lead database or backend copy is created. A normal `wa.me` link supports prefilled text only; it cannot create native WhatsApp buttons, menus, automated replies, message-status handling, or a guided conversation.

### Future extension: WhatsApp Business Platform

True interactive WhatsApp messages should be implemented as a separate backend integration. Do not place Meta access tokens in client-side code or `NEXT_PUBLIC_*` variables.

The future implementation will require:

1. A verified Meta Business portfolio and WhatsApp Business Account.
2. The production phone-number ID, WhatsApp Business Account ID, and a server-side access token.
3. A secure Next.js route handler or separate backend service for sending messages.
4. A public HTTPS webhook with Meta verification and signature validation.
5. Secure lead/consultation storage and a privacy/retention policy before transmitting sensitive wellness information automatically.
6. Approved message templates for business-initiated conversations where Meta requires them.
7. Webhook handling for customer replies, button selections, delivery status, retries, and duplicate events.
8. Operational access for the ANJOORA team to review and continue conversations.

Suggested first interactive acknowledgement:

- **Confirm details**
- **Request a change**
- **Speak to the team**

A later recommendation message could offer **Accept recommendation**, **Ask a question**, and **Decide later**. Human Vaidya review, consent, safety escalation, and payment rules must remain authoritative; automation must not generate or approve a wellness recommendation by itself.

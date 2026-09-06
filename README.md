# ANJOORA: web testing and domain deployment

ANJOORA contains two projects:

- `web/` - the main Next.js 16 progressive web app (PWA).
- `native-wrapper/` - an optional Capacitor shell for Android Studio and Xcode. It loads the deployed website and is not required for normal web or PWA use.

The recommended release path is to deploy `web/` to an HTTPS domain. Visitors can use it as a website, install it from Chrome on Android, or add it to the Home Screen from Safari on iPhone/iPad.

## Project scan summary

- Runtime: Node.js 22.13 or newer (Node 24 also tested successfully).
- Package manager: npm.
- Framework: Next.js 16.2.6, React 19, TypeScript and Tailwind CSS.
- No database, API keys, or required `.env` variables were found.
- Consultation progress and the generated plan are stored in that browser's `localStorage`; they are not synchronized between devices.
- The PWA service worker is `web/public/sw.js` and provides basic offline caching.
- The current app expects to be hosted at the root of a domain, such as `https://example.com/`, not under a subpath such as `https://example.com/anjoora/`.
- The `/checkout` route redirects to `/connect`; recommendations and payment handoff continue through WhatsApp rather than an integrated website checkout.

Validation performed on 6 September 2026:

```text
npm run lint   PASS
npm run build  PASS
```

The build produced these routes: `/`, `/apothecary`, `/assessment`, `/checkout`, `/connect`, `/how-it-works`, and `/standards`.

## 1. Test the website locally

Open PowerShell in the project root and run:

```powershell
cd web
npm ci
npm run dev
```

If `npm ci` reports that the lockfile is missing, use `npm install` once and then use `npm ci` for subsequent clean installs.

Open <http://localhost:3000>. Stop the server with `Ctrl+C`.

To expose a different port:

```powershell
npm run dev -- --port 3001
```

### Test on a phone on the same Wi-Fi network

Start Next.js on all network interfaces:

```powershell
npm run dev -- --hostname 0.0.0.0
```

Find the computer's IPv4 address:

```powershell
ipconfig
```

On the phone, open `http://YOUR-PC-IP:3000`, for example `http://192.168.1.20:3000`. Allow Node.js through Windows Firewall for private networks if prompted.

This is suitable for layout and navigation tests. PWA installation and service-worker behavior should be tested on the final HTTPS domain because browsers generally require a secure context (localhost is a special exception).

## 2. Test the production build

Run the same build that will be used by the host:

```powershell
cd web
npm ci
npm run lint
npm run build
npm start
```

Open <http://localhost:3000>. A successful `npm run dev` is not a substitute for a successful production build.

### Manual test checklist

- Open every route listed above and check desktop and mobile layouts.
- Complete `/assessment`, refresh midway, and confirm that the draft resumes.
- Finish the assessment and confirm that `/connect` shows the saved plan.
- Check every WhatsApp/contact link on a real phone.
- Confirm that the browser console has no unexpected errors.
- After HTTPS deployment, open `/manifest.webmanifest`, `/sw.js`, `/offline.html`, and all four files under `/icons/` directly.
- In Chrome DevTools, use **Application → Manifest** and **Application → Service Workers** to verify installation.
- Test offline mode only after visiting the pages online at least once.
- Android: open the domain in Chrome and use **Install app**.
- iPhone/iPad: open the domain in Safari and use **Share → Add to Home Screen**.

When testing a new deployment, an older service worker may temporarily show cached content. In Chrome DevTools, use **Application → Storage → Clear site data**, or unregister the service worker, and reload.

## 3. Recommended deployment: Vercel

Vercel is the simplest option for this Next.js application.

1. Put this project in a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Set **Root Directory** to `web`.
4. Vercel should detect Next.js automatically. Use:
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Output directory: leave blank (use the Next.js default)
5. Deploy and test the temporary `*.vercel.app` URL.
6. In the project, open **Settings → Domains**, add `yourdomain.com`, and optionally add `www.yourdomain.com`.
7. At the company where the domain's DNS is managed, create exactly the DNS records Vercel displays. DNS values can change, so copy them from the Vercel domain screen rather than from an old tutorial.
8. Choose either the root domain or `www` as the primary domain and redirect the other version to it.
9. Wait for DNS verification and the automatic TLS/SSL certificate, then test `https://yourdomain.com`.

Do not use URL forwarding or iframe/masked forwarding at the registrar. The DNS records must point the domain to the deployment platform.

### Deploy without Git

From `web/`, the Vercel CLI can also deploy the project:

```powershell
npx vercel
npx vercel --prod
```

The dashboard still needs to be used (or its equivalent CLI flow followed) to attach and verify the custom domain.

## 4. Alternative deployment: a Node.js VPS

Use this option when you control an Ubuntu/Debian server. The domain examples below must be replaced with the real domain.

### Server setup

Install Node.js 22 LTS or newer, Nginx, and PM2. Copy or clone the project onto the server, then run:

```bash
cd /var/www/anjoora/web
npm ci
npm run build
sudo npm install -g pm2
pm2 start npm --name anjoora -- start
pm2 save
pm2 startup
```

Run the additional command printed by `pm2 startup`. Confirm the app responds locally with `curl http://127.0.0.1:3000`.

### Nginx reverse proxy

Create `/etc/nginx/sites-available/anjoora`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable and validate it:

```bash
sudo ln -s /etc/nginx/sites-available/anjoora /etc/nginx/sites-enabled/anjoora
sudo nginx -t
sudo systemctl reload nginx
```

At the DNS provider, point the root domain's `A` record to the VPS public IPv4 address. Point `www` to the root with a `CNAME`, or create another `A` record. Add an `AAAA` record only if IPv6 is correctly configured on the server.

After DNS resolves, enable HTTPS:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
sudo certbot renew --dry-run
```

Allow only SSH, HTTP, and HTTPS through the server firewall. Do not expose port 3000 publicly.

For later releases, pull/copy the updated code and run:

```bash
cd /var/www/anjoora/web
npm ci
npm run lint
npm run build
pm2 restart anjoora
```

## 5. Shared hosting and static hosting

The repository currently uses `next start`, so a hosting account that supports only uploaded HTML/PHP files cannot run it as-is. Use a Next.js-capable platform or a hosting plan with Node.js support.

The current routes happen to build as static pages, so a separate change to `next.config.ts` could enable `output: "export"` for Cloudflare Pages, Netlify static hosting, cPanel file hosting, or similar services. That should be treated as a code/configuration change and fully re-tested; future server features would not work in that mode. Do not upload the `.next` directory to ordinary shared hosting and expect it to run.

## 6. Before a public launch

`npm audit --omit=dev` currently reports high-severity advisories in the pinned Next.js dependency chain and suggests a newer Next.js release. Do not run `npm audit fix --force` blindly. Upgrade Next.js deliberately, then repeat lint, production build, route testing, and PWA testing before launch:

```powershell
cd web
npm outdated
npm install next@latest eslint-config-next@latest
npm run lint
npm run build
npm audit --omit=dev
```

Also verify the following:

- The real business contact/WhatsApp destination and all customer-facing wording.
- Privacy policy, terms, cookie/storage disclosure, medical disclaimers, and consent requirements applicable to the launch country.
- Analytics or error monitoring, if required.
- Uptime monitoring and a rollback method.
- DNS access remains with the owner and auto-renewal is enabled for both domain and hosting.

## 7. Optional Android/iOS wrapper

Deploy and verify the HTTPS website first. Then follow `native-wrapper/README.md` if an Android Studio project, APK, Xcode project, or TestFlight build is required. Set `ANJOORA_APP_URL` to the final HTTPS domain before synchronizing the Capacitor project.

## 8. Future interactive WhatsApp extension

The current website intentionally uses a prefilled `wa.me` message and does not require a backend. Native WhatsApp reply buttons, selection lists, automated acknowledgements, and response tracking require the WhatsApp Business Platform, server-only Meta credentials, and HTTPS webhooks.

The implementation and security checklist is documented in `web/README.md` under **Future extension: WhatsApp Business Platform**. Keep the present click-to-WhatsApp flow available until the API integration has been configured, privacy-reviewed, and tested with the production ANJOORA WhatsApp Business account.

import fs from 'node:fs';
import path from 'node:path';

for (const filename of ['.env', '.env.local']) {
  const environmentFile = path.resolve(process.cwd(), filename);
  if (!fs.existsSync(environmentFile)) continue;
  for (const sourceLine of fs.readFileSync(environmentFile, 'utf8').split(/\r?\n/)) {
    const line = sourceLine.trim();
    if (!line || line.startsWith('#') || !/^[A-Za-z_][A-Za-z0-9_]*=/.test(line)) continue;
    const separator = line.indexOf('=');
    const name = line.slice(0, separator);
    if (process.env[name] !== undefined) continue;
    let value = line.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    process.env[name] = value;
  }
}

function fail(message) { throw new Error(`Configuration error: ${message}`); }
function placeholder(value) { return /placeholder|replace|change.?me|your-domain|example(?:\.|$)/i.test(String(value || '')); }

const sensitivePublicNames = Object.entries(process.env)
  .filter(([name, value]) => name.startsWith('NEXT_PUBLIC_') && /(?:SECRET|TOKEN|PASSWORD|PRIVATE|DATABASE|ACCESS_KEY|API_KEY)/.test(name) && Boolean(value))
  .map(([name]) => name);
if (sensitivePublicNames.length) fail(`Server secrets must never use NEXT_PUBLIC_* variables: ${sensitivePublicNames.join(', ')}.`);

if (process.env.GO_LIVE && !['true', 'false'].includes(process.env.GO_LIVE)) fail('GO_LIVE must be true or false.');
const goLive = process.env.GO_LIVE === 'true';
const integrationSecret = String(process.env.ANJOORA_INTEGRATION_SECRET || '');
if (integrationSecret.length < 32 || placeholder(integrationSecret)) {
  fail('ANJOORA_INTEGRATION_SECRET must be the matching independent server-only secret of at least 32 characters.');
}

const canonicalOpsUrl = String(process.env.ANJOORA_OPS_URL || '').trim();
const legacyOpsUrl = String(process.env.ANJOORA_OPS_API_URL || '').trim();
if (canonicalOpsUrl && legacyOpsUrl && canonicalOpsUrl !== legacyOpsUrl) {
  fail('ANJOORA_OPS_URL and legacy ANJOORA_OPS_API_URL are both set but do not match. Keep ANJOORA_OPS_URL as the canonical value.');
}
const configuredOpsUrl = canonicalOpsUrl || legacyOpsUrl;

let opsUrl;
try { opsUrl = new URL(configuredOpsUrl); } catch { fail('ANJOORA_OPS_URL must be an absolute URL.'); }
const local = ['localhost', '127.0.0.1', '::1'].includes(opsUrl.hostname);
if (opsUrl.username || opsUrl.password || opsUrl.search || opsUrl.hash) fail('ANJOORA_OPS_URL must not contain credentials, query parameters, or a fragment.');
if (goLive && local) fail('GO_LIVE=true cannot use a localhost AnjooraOps endpoint.');
if (!local && (opsUrl.protocol !== 'https:' || placeholder(opsUrl.hostname))) fail('A non-local ANJOORA_OPS_URL must use a real HTTPS endpoint.');
if (local && !['http:', 'https:'].includes(opsUrl.protocol)) fail('The local AnjooraOps endpoint must use HTTP or HTTPS.');

const turnstileSecret = String(process.env.TURNSTILE_SECRET_KEY || '');
if (turnstileSecret && (placeholder(turnstileSecret) || turnstileSecret === integrationSecret)) {
  fail('TURNSTILE_SECRET_KEY must be a real secret distinct from ANJOORA_INTEGRATION_SECRET.');
}

console.log(`ANJOORA frontend environment validation passed (${goLive ? 'go-live' : 'pre-live'} mode).`);

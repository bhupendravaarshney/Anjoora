import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const webRoot = fileURLToPath(new URL('..', import.meta.url));
const relevantNames = [
  'GO_LIVE', 'ANJOORA_OPS_URL', 'ANJOORA_OPS_API_URL', 'ANJOORA_INTEGRATION_SECRET', 'TURNSTILE_SECRET_KEY',
  'NEXT_PUBLIC_ANJOORA_INTEGRATION_SECRET', 'NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN',
];

function validate(overrides = {}) {
  const env = { ...process.env };
  for (const name of relevantNames) env[name] = '';
  Object.assign(env, {
    GO_LIVE: 'false',
    ANJOORA_OPS_URL: 'http://127.0.0.1:3000',
    ANJOORA_INTEGRATION_SECRET: 'integration-secret-which-is-random-long-0002',
  }, overrides);
  return spawnSync(process.execPath, ['scripts/validate-env.mjs'], { cwd: webRoot, env, encoding: 'utf8' });
}

test('accepts an explicit local pre-live integration', () => {
  const result = validate();
  assert.equal(result.status, 0, result.stderr);
});

test('accepts a real HTTPS go-live integration', () => {
  const result = validate({ GO_LIVE: 'true', ANJOORA_OPS_URL: 'https://ops.anjoora.in' });
  assert.equal(result.status, 0, result.stderr);
});

test('accepts legacy ANJOORA_OPS_API_URL as a temporary compatibility alias', () => {
  const result = validate({ ANJOORA_OPS_URL: '', ANJOORA_OPS_API_URL: 'https://ops.anjoora.in' });
  assert.equal(result.status, 0, result.stderr);
});

test('rejects conflicting canonical and legacy Ops URLs', () => {
  const result = validate({
    ANJOORA_OPS_URL: 'https://ops.anjoora.in',
    ANJOORA_OPS_API_URL: 'https://different.anjoora.in',
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /both set but do not match/);
});

test('rejects localhost go-live and public secrets', () => {
  const local = validate({ GO_LIVE: 'true' });
  assert.notEqual(local.status, 0);
  assert.match(local.stderr, /cannot use a localhost/);

  const leaked = validate({ NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN: 'must-not-be-public' });
  assert.notEqual(leaked.status, 0);
  assert.match(leaked.stderr, /must never use NEXT_PUBLIC/);
});

test('rejects placeholder, insecure remote, and reused server secrets', () => {
  assert.notEqual(validate({ ANJOORA_INTEGRATION_SECRET: 'replace-with-secret' }).status, 0);
  assert.notEqual(validate({ ANJOORA_OPS_URL: 'http://ops.anjoora.in' }).status, 0);
  const reused = validate({ TURNSTILE_SECRET_KEY: 'integration-secret-which-is-random-long-0002' });
  assert.notEqual(reused.status, 0);
  assert.match(reused.stderr, /must be a real secret distinct/);
});

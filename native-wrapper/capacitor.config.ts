import type { CapacitorConfig } from "@capacitor/cli";

const appUrl = process.env.ANJOORA_APP_URL ?? "https://your-domain.com";
const appHost = new URL(appUrl).hostname;

const config: CapacitorConfig = {
  appId: "com.anjoora.app",
  appName: "ANJOORA",
  webDir: "www",
  server: {
    url: appUrl,
    cleartext: false,
    allowNavigation: [appHost],
  },
};

export default config;

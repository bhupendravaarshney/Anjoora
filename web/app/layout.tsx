import type { Metadata, Viewport } from "next";

import { MobileAppNav } from "@/components/mobile-app-nav";
import { PwaProvider } from "@/components/pwa-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ANJOORA — Your Personal Apothecary",
    template: "%s | ANJOORA",
  },
  description:
    "A human-reviewed personal apothecary experience shaped around your concerns, body rhythms, daily life, emotions and safety context.",
  applicationName: "ANJOORA",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ANJOORA",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [{ url: "/anjoora-logo-mark.svg", type: "image/svg+xml" }],
    shortcut: "/anjoora-logo-mark.svg",
    apple: "/icons/anjoora-apple-touch.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#173f33",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <PwaProvider>
          {children}
          <MobileAppNav />
        </PwaProvider>
      </body>
    </html>
  );
}

"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Download, MoreHorizontal, Share2, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type InstallChoice = { outcome: "accepted" | "dismissed"; platform: string };
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<InstallChoice>;
};

type PwaContextValue = {
  installed: boolean;
  ready: boolean;
  requestInstall: () => Promise<void>;
};

const PwaContext = createContext<PwaContextValue | null>(null);

function runningStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches ||
    Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone);
}

export function PwaProvider({ children }: { children: React.ReactNode }) {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [ready, setReady] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [ios, setIos] = useState(false);
  const [secureContext, setSecureContext] = useState(true);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      setInstalled(runningStandalone());
      setIos(/iphone|ipad|ipod/i.test(window.navigator.userAgent));
      setSecureContext(window.isSecureContext);
      setReady(true);
    }, 0);

    const capturePrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    const markInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", capturePrompt);
    window.addEventListener("appinstalled", markInstalled);
    return () => {
      window.clearTimeout(hydrationTimer);
      window.removeEventListener("beforeinstallprompt", capturePrompt);
      window.removeEventListener("appinstalled", markInstalled);
    };
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") return;

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => registration.update())
        .catch(() => undefined);
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    return () => window.removeEventListener("load", register);
  }, []);

  const value = useMemo<PwaContextValue>(() => ({
    installed,
    ready,
    requestInstall: async () => {
      if (runningStandalone()) {
        setInstalled(true);
        return;
      }

      if (!installPrompt) {
        setInstructionsOpen(true);
        return;
      }

      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      if (choice.outcome === "accepted") setInstalled(true);
      setInstallPrompt(null);
    },
  }), [installPrompt, installed, ready]);

  return (
    <PwaContext.Provider value={value}>
      {children}
      <Dialog open={instructionsOpen} onOpenChange={setInstructionsOpen}>
        <DialogContent className="max-w-md rounded-sm border-[#8b6b42]/30 bg-[#f6ead4] p-0 text-[#20352a]">
          <div className="apothecary-wood flex items-center gap-4 p-5 text-[#fffaf0]">
            <Image src="/anjoora-logo-mark.svg" alt="" width={54} height={54} unoptimized className="size-14" />
            <div>
              <p className="eyebrow text-[#d9b874]">ANJOORA mobile app</p>
              <p className="font-display mt-1 text-2xl">Keep the apothecary close.</p>
            </div>
          </div>
          <DialogHeader className="px-6 pt-2 text-left">
            <DialogTitle className="font-display text-3xl font-normal tracking-[-.03em]">Add ANJOORA to your Home Screen</DialogTitle>
            <DialogDescription className="text-base leading-7 text-[#66655c]">
              {!secureContext
                ? "Installation is unavailable from a local-network HTTP address. Open ANJOORA on an HTTPS domain to install it."
                : ios
                ? "Safari installs ANJOORA through the Share menu."
                : "Your browser can place ANJOORA on the Home Screen like an app."}
            </DialogDescription>
          </DialogHeader>
          <ol className="space-y-3 px-6 pb-6">
            {!secureContext ? (
              <>
                <li className="flex gap-3 border-t border-[#6b4b2e]/16 pt-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#263f32] text-[#fffaf0]">1</span>
                  <span className="pt-1.5 leading-6 text-[#4f6258]">Deploy the <strong>web</strong> project to an HTTPS domain.</span>
                </li>
                <li className="flex gap-3 border-t border-[#6b4b2e]/16 pt-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#263f32] text-[#fffaf0]">2</span>
                  <span className="pt-1.5 leading-6 text-[#4f6258]">Open that HTTPS address in {ios ? "Safari" : "Chrome"} on this phone.</span>
                </li>
                <li className="flex gap-3 border-t border-[#6b4b2e]/16 pt-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#263f32] text-[#fffaf0]">3</span>
                  <span className="pt-1.5 leading-6 text-[#4f6258]">Use <strong>{ios ? "Share → Add to Home Screen" : "Install app"}</strong>.</span>
                </li>
              </>
            ) : (
              <>
            <li className="flex gap-3 border-t border-[#6b4b2e]/16 pt-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#263f32] text-[#fffaf0]">1</span>
              <span className="pt-1.5 leading-6 text-[#4f6258]">
                {ios ? <><Share2 className="mr-1.5 inline size-4" />Tap <strong>Share</strong> in Safari.</> : <><MoreHorizontal className="mr-1.5 inline size-4" />Open your browser menu.</>}
              </span>
            </li>
            <li className="flex gap-3 border-t border-[#6b4b2e]/16 pt-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#263f32] text-[#fffaf0]">2</span>
              <span className="pt-1.5 leading-6 text-[#4f6258]">Choose <strong>{ios ? "Add to Home Screen" : "Install app"}</strong>.</span>
            </li>
            <li className="flex gap-3 border-t border-[#6b4b2e]/16 pt-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#263f32] text-[#fffaf0]">3</span>
              <span className="pt-1.5 leading-6 text-[#4f6258]">Open the ANJOORA icon for a full-screen app experience.</span>
            </li>
              </>
            )}
          </ol>
        </DialogContent>
      </Dialog>
    </PwaContext.Provider>
  );
}

export function InstallAppButton({ className = "" }: { className?: string }) {
  const context = useContext(PwaContext);
  if (!context) throw new Error("InstallAppButton must be used inside PwaProvider");
  if (!context.ready || context.installed) return null;

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={context.requestInstall}
      aria-label="Install ANJOORA on this device"
      className={`h-10 rounded-sm border border-[#6b4b2e]/20 bg-[#fbf5e7]/55 px-3 text-[#294738] hover:bg-[#ead9bb] ${className}`}
    >
      <Download className="size-4" />
      <span className="hidden min-[480px]:inline">Install</span>
    </Button>
  );
}

export function InstalledAppBadge() {
  const context = useContext(PwaContext);
  if (!context?.installed) return null;
  return <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#6b675d]"><Smartphone className="size-4" /> App mode</span>;
}

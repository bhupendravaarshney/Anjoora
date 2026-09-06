import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
  expanded?: boolean;
};

export function BrandMark({ inverted = false, compact = false, expanded = false }: BrandMarkProps) {
  const lockupVisibility = compact ? "hidden" : expanded ? "flex" : "hidden sm:flex";

  return (
    <Link
      href="/"
      aria-label="ANJOORA — Ancient wisdom. Made personal."
      className={`inline-flex shrink-0 items-center gap-3.5 ${inverted ? "text-[#fffaf0]" : "text-[#173f33]"}`}
    >
      <Image
        src="/anjoora-logo-mark.svg"
        alt=""
        width={52}
        height={52}
        unoptimized
        aria-hidden="true"
        className="size-11 shrink-0 drop-shadow-[0_4px_10px_rgba(26,49,37,.16)] sm:size-12"
      />
      <span className={`${lockupVisibility} min-w-0 flex-col`}>
        <span className="font-display text-[1.16rem] font-semibold leading-none tracking-[.22em] sm:text-[1.22rem]">ANJOORA</span>
        <span className={`mt-1.5 whitespace-nowrap text-[.53rem] font-semibold uppercase leading-none tracking-[.19em] ${inverted ? "text-[#d9bc82]" : "text-[#76654c]"}`}>
          Ancient wisdom. Made personal.
        </span>
      </span>
    </Link>
  );
}

export function BrandSignature() {
  return (
    <Link
      href="/"
      aria-label="ANJOORA — Ancient wisdom. Made personal."
      className="inline-flex w-full max-w-[15rem] items-center justify-center border border-[#d4a55f]/35 bg-[#f2e8d2] p-4 shadow-[0_18px_45px_rgba(0,0,0,.2)]"
    >
      <Image
        src="/anjoora-logo-full.webp"
        alt="ANJOORA — Ancient wisdom. Made personal."
        width={640}
        height={731}
        unoptimized
        loading="eager"
        sizes="240px"
        className="h-auto w-full"
      />
    </Link>
  );
}

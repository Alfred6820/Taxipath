import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#fares", label: "Fares" },
  { href: "#enquiry", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-backwater text-ricewhite shadow-md shadow-backwater-dark/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link href="#main" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/taxipath-logo.svg"
            alt="TaxiPath logo"
            width={150}
            height={50}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 font-body text-sm font-medium text-ricewhite/90"
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_TEL_HREF}
          className="flex shrink-0 items-center gap-2 rounded-full bg-gold px-3 py-2 font-data text-xs font-semibold text-charcoal transition-colors hover:bg-gold-dark sm:text-sm sm:px-4"
        >
          <span aria-hidden className="text-base leading-none">☎</span>
          <span className="hidden xs:inline">{PHONE_DISPLAY}</span>
          <span className="xs:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

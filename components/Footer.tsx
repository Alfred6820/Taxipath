import Image from "next/image";
import { ADDRESS, OPERATING_HOURS, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_NAME, WHATSAPP_BASE } from "@/lib/constants";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#fares", label: "Fares" },
  { href: "#enquiry", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ricewhite/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Image
              src="/brand/taxipath-logo.svg"
              alt={`${SITE_NAME} logo`}
              width={150}
              height={50}
              className="h-10 w-auto"
            />
            <p className="mt-3 font-body text-sm">
              Hatchback &amp; MPV taxi service in Kochi — airport transfers,
              Sabarimala trips, and outstation hires.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ricewhite">
              Navigate
            </h2>
            <nav aria-label="Footer" className="mt-3 flex flex-col gap-2 font-body text-sm">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-gold transition-colors w-fit">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ricewhite">
              Contact
            </h2>
            <dl className="mt-3 space-y-2 font-body text-sm">
              <div>
                <a href={PHONE_TEL_HREF} className="font-data text-gold">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi TaxiPath, I'd like to enquire about a taxi.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp us
                </a>
              </div>
              <div>{ADDRESS}</div>
              <div>
                {OPERATING_HOURS}{" "}
                <span className="text-ricewhite/40">(hours to be confirmed)</span>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-10 border-t border-ricewhite/10 pt-6 font-body text-xs text-ricewhite/40">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

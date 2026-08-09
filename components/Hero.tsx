import { PHONE_DISPLAY, PHONE_TEL_HREF, TAGLINE, WHATSAPP_BASE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-backwater text-ricewhite"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:gap-16 lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <p className="font-data text-xs tracking-[0.3em] text-gold uppercase">
            Kochi · Kerala
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            {TAGLINE.split(", ").map((part, i) => (
              <span key={part} className={i === 1 ? "text-gold italic" : ""}>
                {part}
                {i === 0 ? ", " : ""}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-base text-ricewhite/85 sm:text-lg mx-auto lg:mx-0">
            Hatchback and MPV taxis in Kochi — airport transfers, Sabarimala
            trips, and outstation hires with a driver who shows up on time.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={PHONE_TEL_HREF}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-body text-lg font-semibold text-charcoal transition-colors hover:bg-gold-dark sm:w-auto"
            >
              <span aria-hidden>☎</span>
              {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi TaxiPath, I'd like to enquire about a taxi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-ricewhite/40 px-6 py-3.5 font-body font-semibold text-ricewhite transition-colors hover:border-ricewhite hover:bg-ricewhite/10 sm:w-auto"
            >
              <span aria-hidden>💬</span>
              WhatsApp Us
            </a>
          </div>
          <p className="mt-3 text-xs text-ricewhite/60">
            Call or WhatsApp the same number — whichever&apos;s faster for you.
          </p>
        </div>

        {/* Signature hero moment: an animated route line tracing a pickup to a drop-off, echoing the brand name. */}
        <div className="w-full flex-1 max-w-md lg:max-w-none">
          <svg
            viewBox="0 0 400 300"
            role="img"
            aria-label="Illustration of a dashed route line connecting a pickup point to a drop-off point"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="roadFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F5B400" />
                <stop offset="100%" stopColor="#C4491D" />
              </linearGradient>
            </defs>

            <circle cx="60" cy="230" r="7" fill="#F5B400" />
            <circle cx="60" cy="230" r="13" fill="none" stroke="#F5B400" strokeOpacity="0.4" strokeWidth="2" />

            <path
              d="M60 230 C 130 230, 110 120, 190 110 S 300 60, 340 70"
              fill="none"
              stroke="url(#roadFade)"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={100}
              className="animate-route-draw"
            />

            <g transform="translate(340 70)">
              <path
                d="M0 -26 C14 -26 25 -15 25 -1 C25 17 0 34 0 34 C0 34 -25 17 -25 -1 C-25 -15 -14 -26 0 -26 Z"
                fill="#C4491D"
              />
              <circle cx="0" cy="-1" r="8" fill="#F6F1E4" />
            </g>

            <text x="30" y="260" className="font-data" fontSize="12" fill="#F6F1E4" opacity="0.75">
              PICKUP
            </text>
            <text x="308" y="118" className="font-data" fontSize="12" fill="#F6F1E4" opacity="0.75">
              DROP
            </text>
          </svg>
        </div>
      </div>

      <div aria-hidden className="h-3 w-full bg-gradient-to-r from-gold via-laterite to-backwater-dark" />
    </section>
  );
}

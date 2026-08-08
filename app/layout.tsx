import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import StickyContactButton from "@/components/StickyContactButton";
import RouteRail from "@/components/RouteRail";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, TAGLINE } from "@/lib/constants";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Taxi in Kochi | ${TAGLINE}`,
    template: `%s | ${SITE_NAME} Kochi`,
  },
  description:
    "TaxiPath is a Kochi-based taxi service offering hatchback and MPV rides, airport taxi service in Kochi, and Sabarimala taxi service. Call or WhatsApp +91 99952 07388 for an instant quote.",
  keywords: [
    "taxi in Kochi",
    "Kochi taxi service",
    "airport taxi service Kochi",
    "Sabarimala taxi Kochi",
    "Kochi cab booking",
    "Ernakulam taxi",
  ],
  openGraph: {
    title: `${SITE_NAME} — ${TAGLINE}`,
    description:
      "Hatchback & MPV taxi service in Kochi. Airport transfers, Sabarimala trips, outstation hires. Call or WhatsApp +91 99952 07388.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b4d3e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ricewhite text-charcoal font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-backwater focus:text-ricewhite focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Nav />
        <RouteRail />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyContactButton />
      </body>
    </html>
  );
}

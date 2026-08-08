"use client";

import { useEffect, useState } from "react";

const STOPS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "fleet", label: "Fleet" },
  { id: "fares", label: "Fares" },
  { id: "reviews", label: "Reviews" },
  { id: "enquiry", label: "Contact" },
];

/**
 * Signature element: a vertical route line running down the page spine,
 * with each stop marking a section — a literal rendering of "Path".
 * Desktop-only (lg+) so it never competes with the bottom-left call/WhatsApp
 * fab on mobile.
 */
export default function RouteRail() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    STOPS.forEach((stop) => {
      const el = document.getElementById(stop.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="hidden lg:flex fixed left-6 top-1/2 z-30 -translate-y-1/2 flex-col items-center"
    >
      <div className="relative flex flex-col items-center gap-8 py-2">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l-2 border-dashed border-monsoon/50"
        />
        {STOPS.map((stop) => {
          const isActive = stop.id === activeId;
          return (
            <a
              key={stop.id}
              href={`#${stop.id}`}
              className="group relative flex items-center"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                aria-hidden
                className={`relative z-10 block h-3 w-3 rounded-full border-2 transition-colors ${
                  isActive
                    ? "border-laterite bg-laterite"
                    : "border-monsoon bg-ricewhite group-hover:border-laterite"
                }`}
              />
              <span className="pointer-events-none absolute left-6 whitespace-nowrap rounded bg-charcoal px-2 py-1 font-body text-xs text-ricewhite opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {stop.label}
              </span>
              <span className="sr-only">{stop.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

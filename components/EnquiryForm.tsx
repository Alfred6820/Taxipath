"use client";

import { useState, type FormEvent } from "react";
import { buildEnquiryWhatsAppUrl } from "@/lib/whatsapp";
import { ADDRESS, OPERATING_HOURS, PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_BASE } from "@/lib/constants";

const VEHICLE_OPTIONS = [
  { value: "", label: "Any / not sure" },
  { value: "Hatchback (Wagon R)", label: "Hatchback (Wagon R)" },
  { value: "MPV (Ertiga / Innova Crysta / Mobilio)", label: "MPV (Ertiga / Innova Crysta / Mobilio)" },
];

export default function EnquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);

    // Option A flow: no backend — the enquiry is packed into a WhatsApp
    // message and the visitor is handed off to WhatsApp to hit send.
    // Nothing is stored server-side; the WhatsApp chat itself is the record.
    const url = buildEnquiryWhatsAppUrl({
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      pickup: String(form.get("pickup") || ""),
      drop: String(form.get("drop") || ""),
      date: String(form.get("date") || ""),
      time: String(form.get("time") || ""),
      vehicle: String(form.get("vehicle") || ""),
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <section id="enquiry" aria-labelledby="enquiry-heading" className="bg-ricewhite py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="font-data text-xs tracking-[0.3em] text-laterite uppercase">Get a ride</p>
          <h2 id="enquiry-heading" className="font-display mt-2 text-3xl font-semibold text-backwater sm:text-4xl">
            Send us your trip details
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-charcoal/70">
            Fill in your details below and our team will get back to you with
            the details ASAP. Submitting opens WhatsApp with your trip
            pre-filled — just hit send.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="font-body text-sm font-semibold text-backwater">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-body text-sm text-charcoal focus-visible:border-laterite"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone" className="font-body text-sm font-semibold text-backwater">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="98xxxxxxxx"
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-data text-sm text-charcoal focus-visible:border-laterite"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="pickup" className="font-body text-sm font-semibold text-backwater">
                Pickup location
              </label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-body text-sm text-charcoal focus-visible:border-laterite"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="drop" className="font-body text-sm font-semibold text-backwater">
                Drop location
              </label>
              <input
                id="drop"
                name="drop"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-body text-sm text-charcoal focus-visible:border-laterite"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="date" className="font-body text-sm font-semibold text-backwater">
                Trip date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-data text-sm text-charcoal focus-visible:border-laterite"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="time" className="font-body text-sm font-semibold text-backwater">
                Preferred time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-data text-sm text-charcoal focus-visible:border-laterite"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="vehicle" className="font-body text-sm font-semibold text-backwater">
                Vehicle type <span className="font-normal text-charcoal/50">(optional)</span>
              </label>
              <select
                id="vehicle"
                name="vehicle"
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-body text-sm text-charcoal focus-visible:border-laterite"
              >
                {VEHICLE_OPTIONS.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-laterite px-6 py-3.5 font-body text-base font-semibold text-ricewhite transition-colors hover:bg-laterite-dark disabled:opacity-60 sm:w-auto"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>

          <p className="mt-4 font-body text-xs text-charcoal/50">
            Prefer not to fill a form?{" "}
            <a href={PHONE_TEL_HREF} className="font-semibold text-laterite underline underline-offset-2">
              Call {PHONE_DISPLAY}
            </a>{" "}
            or{" "}
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi TaxiPath, I'd like to enquire about a taxi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-laterite underline underline-offset-2"
            >
              message us directly
            </a>
            .
          </p>
        </div>

        <aside className="h-fit rounded-2xl bg-backwater p-6 text-ricewhite sm:p-7">
          <h3 className="font-display text-lg font-semibold">Reach us directly</h3>
          <dl className="mt-4 space-y-4 font-body text-sm">
            <div>
              <dt className="text-ricewhite/60">Phone &amp; WhatsApp</dt>
              <dd>
                <a href={PHONE_TEL_HREF} className="font-data text-base font-semibold text-gold">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ricewhite/60">Operating hours</dt>
              <dd>{OPERATING_HOURS}</dd>
              <dd className="mt-0.5 text-xs text-ricewhite/50">
                (placeholder — to be confirmed by TaxiPath)
              </dd>
            </div>
            <div>
              <dt className="text-ricewhite/60">Based in</dt>
              <dd>{ADDRESS}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

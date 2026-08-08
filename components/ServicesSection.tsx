import { SERVICES } from "@/data/services";
import EnquiryCTA from "./EnquiryCTA";
import Reveal from "./Reveal";

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ricewhite py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-data text-xs tracking-[0.3em] text-laterite uppercase">
              What we drive
            </p>
            <h2 id="services-heading" className="font-display mt-2 text-3xl font-semibold text-backwater sm:text-4xl">
              Four ways to get where you&apos;re going
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl border border-monsoon/25 bg-white p-6 shadow-sm shadow-backwater/5"
              >
                <h3 className="font-display text-xl font-semibold text-backwater">
                  {service.title}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-laterite">
                  {service.summary}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/80">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 font-body text-sm text-charcoal/70">
                      <span aria-hidden className="mt-1 text-gold-dark">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <EnquiryCTA compact />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { TESTIMONIALS } from "@/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} out of 5 stars`} className="flex gap-0.5 text-gold" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-data text-xs tracking-[0.3em] text-laterite uppercase">Word of mouth</p>
          <h2 id="reviews-heading" className="font-display mt-2 text-3xl font-semibold text-backwater sm:text-4xl">
            What riders say
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="rounded-2xl border border-monsoon/25 bg-ricewhite p-5">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-backwater font-display text-sm font-semibold text-ricewhite"
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <figcaption className="font-body text-sm font-semibold text-charcoal">
                    {t.name}
                  </figcaption>
                  <Stars rating={t.rating} />
                </div>
              </div>
              <blockquote className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
                “{t.text}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

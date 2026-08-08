import { FARE_RATES } from "@/data/fares";

export default function FareTable() {
  return (
    <section id="fares" aria-labelledby="fares-heading" className="bg-ricewhite py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-data text-xs tracking-[0.3em] text-laterite uppercase">Straight numbers</p>
          <h2 id="fares-heading" className="font-display mt-2 text-3xl font-semibold text-backwater sm:text-4xl">
            Per-km fares
          </h2>
          <p className="mt-3 font-body text-sm text-charcoal/70">
            Base per-kilometre rates by vehicle. Final fare depends on actual
            distance travelled; tolls, parking, and waiting charges are extra.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-monsoon/30">
          <table className="w-full min-w-[420px] border-collapse font-body text-sm">
            <caption className="sr-only">TaxiPath per-kilometre fare rates by vehicle type</caption>
            <thead>
              <tr className="bg-backwater text-ricewhite">
                <th scope="col" className="px-5 py-3.5 text-left font-semibold">
                  Car Type
                </th>
                <th scope="col" className="px-5 py-3.5 text-right font-semibold">
                  KM Charge
                </th>
              </tr>
            </thead>
            <tbody>
              {FARE_RATES.map((rate, i) => (
                <tr
                  key={rate.id}
                  className={i % 2 === 0 ? "bg-white" : "bg-ricewhite"}
                >
                  <td className="px-5 py-3.5 text-charcoal">
                    {rate.name}{" "}
                    <span className="font-data text-xs uppercase tracking-wide text-charcoal/50">
                      ({rate.category})
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right font-data font-semibold text-laterite">
                    ₹{rate.ratePerKm}/km
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

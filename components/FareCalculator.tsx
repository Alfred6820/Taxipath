"use client";

import { useMemo, useState } from "react";
import { PRESET_ROUTES } from "@/data/routes";
import { FARE_RATES, type VehicleId } from "@/data/fares";

const CUSTOM_ROUTE_ID = "custom";

export default function FareCalculator() {
  const [routeId, setRouteId] = useState<string>(PRESET_ROUTES[0].id);
  const [customKm, setCustomKm] = useState<string>("");
  const [vehicleId, setVehicleId] = useState<VehicleId | "all">("all");

  const selectedRoute = PRESET_ROUTES.find((r) => r.id === routeId);
  const distanceKm =
    routeId === CUSTOM_ROUTE_ID
      ? Math.max(0, Number(customKm) || 0)
      : selectedRoute?.distanceKm ?? 0;

  const results = useMemo(() => {
    const vehicles = vehicleId === "all" ? FARE_RATES : FARE_RATES.filter((v) => v.id === vehicleId);
    return vehicles.map((v) => ({ ...v, estimate: Math.round(v.ratePerKm * distanceKm) }));
  }, [vehicleId, distanceKm]);

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="bg-backwater-dark py-16 text-ricewhite sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-data text-xs tracking-[0.3em] text-gold uppercase">Before you call</p>
          <h2 id="calculator-heading" className="font-display mt-2 text-3xl font-semibold sm:text-4xl">
            Quick fare estimate
          </h2>
          <p className="mt-3 font-body text-sm text-ricewhite/75">
            Pick a common route or enter a distance yourself. This is an
            estimate, not a locked-in quote — tolls and waiting charges
            aren&apos;t included.
          </p>
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl bg-ricewhite p-5 text-charcoal sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div>
              <label htmlFor="route-select" className="font-body text-sm font-semibold text-backwater">
                Route
              </label>
              <select
                id="route-select"
                value={routeId}
                onChange={(e) => setRouteId(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-body text-sm text-charcoal focus-visible:border-laterite"
              >
                {PRESET_ROUTES.map((route) => (
                  <option key={route.id} value={route.id}>
                    {route.label} (~{route.distanceKm} km)
                  </option>
                ))}
                <option value={CUSTOM_ROUTE_ID}>My route isn&apos;t listed — enter distance</option>
              </select>
            </div>

            {routeId === CUSTOM_ROUTE_ID && (
              <div>
                <label htmlFor="custom-km" className="font-body text-sm font-semibold text-backwater">
                  Approximate distance (km)
                </label>
                <input
                  id="custom-km"
                  type="number"
                  min={0}
                  inputMode="numeric"
                  value={customKm}
                  onChange={(e) => setCustomKm(e.target.value)}
                  placeholder="e.g. 45"
                  className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-data text-sm text-charcoal focus-visible:border-laterite"
                />
              </div>
            )}

            <div>
              <label htmlFor="vehicle-select" className="font-body text-sm font-semibold text-backwater">
                Vehicle
              </label>
              <select
                id="vehicle-select"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value as VehicleId | "all")}
                className="mt-1.5 w-full rounded-lg border border-monsoon/40 bg-white px-3 py-2.5 font-body text-sm text-charcoal focus-visible:border-laterite"
              >
                <option value="all">Compare all vehicles</option>
                {FARE_RATES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-xl bg-ricewhite border border-monsoon/25 p-4">
            <p className="font-data text-xs uppercase tracking-wide text-charcoal/50">
              Estimate for ~{distanceKm || 0} km
            </p>
            <ul className="mt-3 space-y-2.5">
              {results.map((r) => (
                <li key={r.id} className="flex items-center justify-between border-b border-monsoon/15 pb-2.5 last:border-0 last:pb-0">
                  <span className="font-body text-sm text-charcoal">{r.name}</span>
                  <span className="font-data text-base font-semibold text-laterite">
                    ₹{r.estimate.toLocaleString("en-IN")}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-xs text-charcoal/50">
              Estimate only — final fare confirmed on call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

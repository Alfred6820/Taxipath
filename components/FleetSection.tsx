import { FLEET } from "@/data/fleet";
import EnquiryCTA from "./EnquiryCTA";
import VehiclePlaceholderArt from "./VehiclePlaceholderArt";

export default function FleetSection() {
  return (
    <section id="fleet" aria-labelledby="fleet-heading" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-data text-xs tracking-[0.3em] text-laterite uppercase">Our fleet</p>
          <h2 id="fleet-heading" className="font-display mt-2 text-3xl font-semibold text-backwater sm:text-4xl">
            Four cars, one reliable driver each
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET.map((vehicle) => (
            <div key={vehicle.id} className="rounded-2xl border border-monsoon/25 p-4">
              <VehiclePlaceholderArt
                label={vehicle.name}
                variant={vehicle.category === "Hatchback" ? "hatchback" : "mpv"}
              />
              <h3 className="font-display mt-4 text-lg font-semibold text-backwater">
                {vehicle.name}
              </h3>
              <p className="mt-1 font-data text-xs uppercase tracking-wide text-laterite">
                {vehicle.category} · {vehicle.seats}
              </p>
              <p className="mt-2 font-body text-sm text-charcoal/70">{vehicle.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-xl">
          <EnquiryCTA />
        </div>
      </div>
    </section>
  );
}

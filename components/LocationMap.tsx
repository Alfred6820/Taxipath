import { ADDRESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_SRC, SITE_NAME } from "@/lib/constants";

export default function LocationMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-monsoon/25">
      <iframe
        title={`${SITE_NAME} location on Google Maps — ${ADDRESS}`}
        src={MAPS_EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-56 w-full sm:h-64"
      />
      <a
        href={MAPS_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 bg-backwater py-2.5 font-body text-sm font-semibold text-ricewhite transition-colors hover:bg-backwater-dark"
      >
        <span aria-hidden>📍</span> Get directions on Google Maps
      </a>
    </div>
  );
}

/**
 * PLACEHOLDER ART — not a real photo. Renders a labelled illustrated
 * silhouette so the fleet section looks finished for launch review.
 * Swap this component's usage in FleetSection for a real <Image> of each
 * TaxiPath vehicle before going live.
 */
export default function VehiclePlaceholderArt({
  label,
  variant,
}: {
  label: string;
  variant: "hatchback" | "mpv";
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder illustration of the ${label} — replace with an actual TaxiPath fleet photo before launch`}
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-backwater to-backwater-dark"
    >
      <svg viewBox="0 0 200 120" className="h-2/3 w-2/3" aria-hidden>
        {variant === "hatchback" ? (
          <path
            d="M20 90 L28 70 Q34 58 50 56 L70 56 L82 44 Q88 38 98 38 L128 38 Q138 38 144 46 L154 56 L172 60 Q180 62 180 72 L180 90 Z"
            fill="#F5B400"
            opacity="0.9"
          />
        ) : (
          <path
            d="M14 90 L20 66 Q26 50 44 48 L54 48 L62 36 Q68 30 78 30 L150 30 Q162 30 168 40 L178 58 L188 62 Q194 64 194 74 L194 90 Z"
            fill="#F5B400"
            opacity="0.9"
          />
        )}
        <circle cx="55" cy="92" r="12" fill="#211F1A" />
        <circle cx="55" cy="92" r="5" fill="#F6F1E4" />
        <circle cx={variant === "hatchback" ? 145 : 158} cy="92" r="12" fill="#211F1A" />
        <circle cx={variant === "hatchback" ? 145 : 158} cy="92" r="5" fill="#F6F1E4" />
      </svg>
      <span className="absolute bottom-2 right-2 rounded-full bg-charcoal/70 px-2.5 py-1 font-data text-[10px] uppercase tracking-wide text-ricewhite/90">
        Placeholder photo
      </span>
    </div>
  );
}

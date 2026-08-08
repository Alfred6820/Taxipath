// Hardcoded approximate route distances for the fare calculator (v1).
// UPGRADE PATH: replace with live distance calculation via Google Maps
// Distance Matrix API (or similar) once the site has a Maps API budget —
// these numbers are rounded road-distance estimates from Kochi, not
// turn-by-turn measured figures.
export interface PresetRoute {
  id: string;
  label: string;
  fromLabel: string;
  toLabel: string;
  distanceKm: number;
}

export const PRESET_ROUTES: PresetRoute[] = [
  { id: "airport-city", label: "Kochi Airport → Kochi City", fromLabel: "Cochin International Airport (COK)", toLabel: "Kochi City (Ernakulam)", distanceKm: 35 },
  { id: "kochi-sabarimala", label: "Kochi → Sabarimala (Pamba)", fromLabel: "Kochi", toLabel: "Sabarimala (Pamba base camp)", distanceKm: 110 },
  { id: "kochi-munnar", label: "Kochi → Munnar", fromLabel: "Kochi", toLabel: "Munnar", distanceKm: 130 },
  { id: "kochi-alleppey", label: "Kochi → Alleppey", fromLabel: "Kochi", toLabel: "Alleppey (Alappuzha)", distanceKm: 60 },
  { id: "kochi-thekkady", label: "Kochi → Thekkady", fromLabel: "Kochi", toLabel: "Thekkady", distanceKm: 175 },
  { id: "kochi-guruvayur", label: "Kochi → Guruvayur", fromLabel: "Kochi", toLabel: "Guruvayur", distanceKm: 85 },
  { id: "kochi-varkala", label: "Kochi → Varkala", fromLabel: "Kochi", toLabel: "Varkala", distanceKm: 145 },
  { id: "kochi-thrissur", label: "Kochi → Thrissur", fromLabel: "Kochi", toLabel: "Thrissur", distanceKm: 80 },
];

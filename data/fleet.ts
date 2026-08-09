export interface FleetVehicle {
  id: string;
  name: string;
  category: "4 Seater" | "7 Seater";
  note: string;
}

// PLACEHOLDER FLEET — vehicle art below is a styled illustration, not a real
// photo. Swap for TaxiPath's actual fleet photography before launch (see
// components/VehiclePlaceholderArt.tsx).
export const FLEET: FleetVehicle[] = [
  { id: "wagonr", name: "Wagon R", category: "4 Seater", note: "Light, city-friendly, easiest on fuel and fare." },
  { id: "mobilio", name: "Honda Mobilio", category: "7 Seater", note: "Compact MPV with room for small families." },
  { id: "ertiga", name: "Ertiga", category: "7 Seater", note: "Popular outstation choice, good boot space." },
  { id: "innova", name: "Innova Crysta", category: "7 Seater", note: "Top comfort pick for long hauls and groups." },
];

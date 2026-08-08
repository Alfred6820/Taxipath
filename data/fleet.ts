export interface FleetVehicle {
  id: string;
  name: string;
  category: "Hatchback" | "MPV";
  seats: string;
  note: string;
}

// PLACEHOLDER FLEET — vehicle art below is a styled illustration, not a real
// photo. Swap for TaxiPath's actual fleet photography before launch (see
// components/VehiclePlaceholderArt.tsx).
export const FLEET: FleetVehicle[] = [
  { id: "wagonr", name: "Wagon R", category: "Hatchback", seats: "4 seater", note: "Light, city-friendly, easiest on fuel and fare." },
  { id: "mobilio", name: "Honda Mobilio", category: "MPV", seats: "6 seater", note: "Compact MPV with room for small families." },
  { id: "ertiga", name: "Ertiga", category: "MPV", seats: "6 seater", note: "Popular outstation choice, good boot space." },
  { id: "innova", name: "Innova Crysta", category: "MPV", seats: "6–7 seater", note: "Top comfort pick for long hauls and groups." },
];

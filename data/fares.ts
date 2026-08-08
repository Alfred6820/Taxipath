export type VehicleId = "wagonr" | "mobilio" | "ertiga" | "innova";

export interface FareRate {
  id: VehicleId;
  name: string;
  category: "Hatchback" | "MPV";
  ratePerKm: number;
  seats: string;
}

export const FARE_RATES: FareRate[] = [
  { id: "wagonr", name: "Wagon R", category: "Hatchback", ratePerKm: 15, seats: "4 passengers" },
  { id: "mobilio", name: "Honda Mobilio", category: "MPV", ratePerKm: 18, seats: "6 passengers" },
  { id: "ertiga", name: "Ertiga", category: "MPV", ratePerKm: 18.5, seats: "6 passengers" },
  { id: "innova", name: "Innova Crysta", category: "MPV", ratePerKm: 22, seats: "6–7 passengers" },
];

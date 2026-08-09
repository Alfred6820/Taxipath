export interface Service {
  id: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    id: "hatchback",
    title: "4 Seater Taxi Service",
    summary: "Wagon R — light, quick, easy on the fare.",
    description:
      "Built around the Wagon R for solo travellers, couples, and short local hops — office commutes, city errands, railway station runs, or a light-luggage airport drop for one or two people. It's the cab you book when you don't need the extra seats and don't want to pay for them.",
    bullets: ["Seats up to 4", "AC, meter-friendly per-km fare", "Best for 1–2 passengers, city & short outstation"],
  },
  {
    id: "mpv",
    title: "7 Seater Taxi Service",
    summary: "Ertiga, Innova Crysta, Honda Mobilio — for the whole group.",
    description:
      "For families, groups, and outstation trips where luggage and legroom matter — a temple visit with grandparents, a weekend at Munnar, an airport run with three suitcases. Choose from the Honda Mobilio, Ertiga, or Innova Crysta depending on group size and comfort level.",
    bullets: ["Seats up to 6–7", "More boot space for outstation trips", "Best for families, groups, multi-day hires"],
  },
  {
    id: "airport",
    title: "Airport Taxi Service in Kochi",
    summary: "Cochin International Airport (COK) — pickup or drop, any hour.",
    description:
      "Reliable transfers to and from Cochin International Airport (COK), including early-morning and late-night flights. Give us your flight time when you call and we'll plan the pickup with enough buffer for check-in or arrival formalities — no watching the clock yourself.",
    bullets: ["Early morning & late night availability", "4 Seater or 7 Seater depending on luggage", "Confirm flight time when booking"],
  },
  {
    id: "sabarimala",
    title: "Sabarimala Taxi Service in Kochi",
    summary: "Pilgrim-route drivers who know the hill road and the checkpoints.",
    description:
      "For pilgrims travelling from Kochi to Sabarimala — drivers who are used to the hill route, the checkpoints, and the early-start timing that Sabarimala trips need. Available in both 4 Seater and 7 Seater depending on your group size, with drop at the Pamba base camp.",
    bullets: ["Drivers experienced on the Sabarimala route", "Early-morning departures", "Group-friendly 7 Seater options available"],
  },
];

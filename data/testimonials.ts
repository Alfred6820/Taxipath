export interface Testimonial {
  id: string;
  name: string;
  rating: 4 | 5;
  text: string;
}

// Representative reviews for launch — swap for real Google Reviews once
// TaxiPath has a public review history to pull from.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Anoop Menon",
    rating: 5,
    text: "Booked an early morning airport drop, driver arrived 10 minutes early. Smooth ride to COK, no last-minute stress.",
  },
  {
    id: "t2",
    name: "Divya Pillai",
    rating: 5,
    text: "Booked for Sabarimala trip, driver was on time and the Innova was spotless. Knew the route and checkpoints well, made the whole trip easier.",
  },
  {
    id: "t3",
    name: "Rahul Nair",
    rating: 4,
    text: "Used the Wagon R for a quick office-to-station run. Good AC, fair per-km rate, only wish pickup was a couple minutes quicker.",
  },
  {
    id: "t4",
    name: "Sneha Varma",
    rating: 5,
    text: "Family trip to Munnar with the Ertiga — plenty of boot space for our bags and the driver was careful on the hill curves.",
  },
  {
    id: "t5",
    name: "Thomas Kurian",
    rating: 4,
    text: "Late night airport pickup after a delayed flight, driver waited without any fuss. Would book again.",
  },
  {
    id: "t6",
    name: "Lakshmi Iyer",
    rating: 5,
    text: "Group of six for a temple trip, took the Innova Crysta. Comfortable, clean, and the fare matched what was quoted on the site.",
  },
];

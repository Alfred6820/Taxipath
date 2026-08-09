import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import FareTable from "@/components/FareTable";
import FareCalculator from "@/components/FareCalculator";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Taxi in Kochi | Airport & Sabarimala Taxi Service",
  description:
    "Book a 4 Seater or 7 Seater taxi in Kochi. Airport taxi service in Kochi, Sabarimala taxi service, and outstation trips. Call or WhatsApp +91 99952 07388 for a fare estimate.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FleetSection />
      <FareTable />
      <FareCalculator />
      <Testimonials />
      <EnquiryForm />
    </>
  );
}

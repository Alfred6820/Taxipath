import { WHATSAPP_BASE } from "./constants";

export interface EnquiryDetails {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  vehicle: string;
}

export function buildEnquiryWhatsAppUrl(details: EnquiryDetails): string {
  const lines = [
    "New TaxiPath enquiry:",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Pickup: ${details.pickup}`,
    `Drop: ${details.drop}`,
    `Date: ${details.date || "Not specified"}`,
    `Preferred time: ${details.time || "Not specified"}`,
    `Vehicle preference: ${details.vehicle || "Any"}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `${WHATSAPP_BASE}?text=${text}`;
}

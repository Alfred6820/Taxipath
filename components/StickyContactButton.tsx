import { PHONE_TEL_HREF, WHATSAPP_BASE } from "@/lib/constants";

export default function StickyContactButton() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <a
        href={PHONE_TEL_HREF}
        aria-label="Call TaxiPath now"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-laterite text-ricewhite shadow-lg shadow-charcoal/30 ring-2 ring-ricewhite transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <span aria-hidden className="text-xl">☎</span>
      </a>
      <a
        href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi TaxiPath, I'd like to enquire about a taxi.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message TaxiPath on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-ricewhite shadow-lg shadow-charcoal/30 ring-2 ring-ricewhite transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <svg aria-hidden viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor">
          <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.13.56 4.13 1.62 5.9L3 29l8.31-2.55a12.9 12.9 0 0 0 4.71.9h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.76 22.65 3.4 16.02 3.4Zm0 21.86h-.01a10 10 0 0 1-4.98-1.34l-.36-.21-4.93 1.52 1.55-4.83-.24-.37a9.9 9.9 0 0 1-1.53-5.3c0-5.5 4.5-9.98 10.03-9.98 2.68 0 5.2 1.05 7.09 2.94a9.9 9.9 0 0 1 2.94 7.05c0 5.5-4.5 9.52-9.56 9.52Zm5.5-7.13c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}

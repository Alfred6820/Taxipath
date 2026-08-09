import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_BASE } from "@/lib/constants";

export default function EnquiryCTA({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-monsoon/30 bg-ricewhite ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
    >
      <p className="font-body text-sm text-charcoal/80">
        Fill in your details below and our team will get back to you with the
        details ASAP.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <a
          href="#enquiry"
          className="rounded-full bg-backwater px-5 py-2.5 font-body text-sm font-semibold text-ricewhite transition-colors hover:bg-backwater-dark"
        >
          Fill Enquiry Form
        </a>
        <span className="font-body text-xs text-charcoal/50">or</span>
        <a
          href={PHONE_TEL_HREF}
          className="inline-flex items-center gap-1.5 rounded-full border border-laterite px-4 py-2.5 font-body text-sm font-semibold text-laterite transition-colors hover:bg-laterite hover:text-ricewhite"
        >
          <span aria-hidden>☎</span> Call {PHONE_DISPLAY}
        </a>
        <a
          href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi TaxiPath, I'd like to enquire about a taxi.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366] px-4 py-2.5 font-body text-sm font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366] hover:text-ricewhite"
        >
          <span aria-hidden>💬</span> WhatsApp
        </a>
      </div>
    </div>
  );
}

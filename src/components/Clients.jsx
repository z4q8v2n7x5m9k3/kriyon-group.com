import { motion } from 'framer-motion';

export default function Clients() {
  const clientNames = [
    'Mera Halwai',
    'Prem Sweets',
    'Rutba Couture',
    'Bragit Social',
    'Burger Bazaar',
    'Talla Jewels',
    'Samaira Bridal',
    'Khet Artisanal',
    'Blue Couture',
    'PixelOne Media',
    'Aura Health',
    'Zenith Logistics',
  ];

  const industries = [
    'FASHION',
    'JEWELLERY',
    'FOOD',
    'HEALTHCARE',
    'HOSPITALITY',
    'TECHNOLOGY',
    'RETAIL',
    'PROFESSIONAL SERVICES'
  ];

  return (
    <section id="clients" className="py-24 sm:py-36 bg-[#F5F5F2] film-grain border-b border-[#090909]/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-[#090909]/15 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] mb-3 block">
              Track Record
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-[#090909] leading-none">
              Trusted<br />
              <span className="font-serif italic font-normal">Across the Group.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#090909] leading-snug">
              "Different businesses. Different challenges. One standard of execution."
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#5A5A58] mt-3">
              Representing engagements from ₹20,000 to comprehensive enterprise mandates.
            </p>
          </div>
        </div>

        {/* Elegant Monochrome Client Logo / Typographic Wall */}
        <div className="py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#090909]/10 border border-[#090909]/10">
          {clientNames.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F2] h-28 sm:h-36 flex items-center justify-center p-4 text-center group hover:bg-white transition-colors duration-300"
            >
              <span className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-[#090909]/70 group-hover:text-[#090909] group-hover:scale-105 transition-all duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Industry Tags Underneath */}
        <div className="pt-12 sm:pt-16 border-t border-[#090909]/10">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#5A5A58] font-semibold block mb-6 text-center sm:text-left">
            Specialized Industry Practice Areas
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="text-[11px] sm:text-xs uppercase tracking-[0.18em] px-4 py-2 bg-transparent border border-[#090909]/20 text-[#090909] font-medium hover:border-[#090909] transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

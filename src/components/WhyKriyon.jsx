import { Network } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelatedIcon from './PixelatedIcon';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18, scale: 0.985 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function WhyKriyon() {
  return (
    <section
      id="why-kriyon"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">

        {/* Section Header */}
        <motion.div {...reveal(0)} className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              03 // WHY KRIYON
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans max-w-[980px]">
            More capability. Less complexity.
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans max-w-[720px]">
            Work with one group while accessing specialist capabilities across brand, technology, production and digital presence.
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* CARD 01 — Frosted Glass White: 1 GROUP */}
          <motion.div {...reveal(0.04)} className="relative isolate lg:col-span-3 overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#55585A] p-6 sm:p-7 flex flex-col justify-between min-h-[390px] sm:min-h-[420px] text-white border border-white/20 shadow-[0_14px_38px_rgba(0,0,0,0.12)]">
            <img src="/assets/one-group-core.jpg" alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-95 brightness-[0.78] contrast-[1.08]" loading="lazy" />
            <div className="absolute inset-0 -z-10 bg-black/[0.34]" aria-hidden="true" />
            <div className="flex items-center justify-between gap-3">
              <div className="w-9 h-9 rounded-[12px] bg-[#111111] flex items-center justify-center">
                <Network className="w-4 h-4 text-[#88EA15] stroke-[2]" />
              </div>
              <span className="text-[11px] font-sans font-medium tracking-[0.14em] text-white/80 uppercase drop-shadow-sm">
                ONE RELATIONSHIP
              </span>
            </div>

            <div className="my-auto py-5">
              <span className="text-[46px] sm:text-[54px] font-bold text-white tracking-[-0.045em] leading-none font-sans block drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
                1 GROUP
              </span>
              <p className="text-[13.5px] text-white/90 font-normal leading-[1.55] font-sans mt-3 max-w-[230px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                One point of accountability across multiple specialist capabilities.
              </p>
            </div>

            <div className="pt-4 border-t border-white/30">
              <span className="text-[12px] text-white font-semibold font-sans block tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Less coordination. Clearer execution.
              </span>
            </div>
          </motion.div>

          {/* CARD 02 — Stacked: 3 Ventures */}
          <motion.div {...reveal(0.1)} className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            {/* Top: avatars + 3 VENTURES */}
            <div className="relative isolate overflow-hidden rounded-[22px] sm:rounded-[26px] bg-[#111111] p-5 sm:p-6 border border-black/[0.05] flex-1 flex flex-col justify-between min-h-[286px] text-white">
              <img
                src="/assets/three-ventures-core.jpg"
                alt="Kriyon specialist ventures"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-75 scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-black/[0.58] backdrop-blur-[1.5px]" aria-hidden="true" />
              <span className="text-[11px] font-sans font-medium tracking-[0.14em] text-white/65 uppercase block">
                SPECIALIST DEPTH
              </span>

              <div className="flex items-center justify-center py-4">
                <div className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[16px] border border-white/20 bg-black/35 backdrop-blur-xl shadow-lg">
                  <PixelatedIcon className="h-[10px] w-[20px]" color="#FFFFFF" />
                </div>
              </div>

              <div className="text-center">
                <span className="text-[30px] sm:text-[34px] font-bold text-white tracking-tight leading-none font-sans block drop-shadow-lg">
                  3 VENTURES
                </span>
                <span className="text-[12px] text-white/70 font-sans mt-1.5 block">
                  Independent depth. Connected delivery.
                </span>
              </div>
            </div>

            {/* Bottom: text sub-card */}
            <div className="rounded-[20px] sm:rounded-[22px] bg-white/[0.68] backdrop-blur-xl p-4 sm:p-5 border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.035)] flex items-center">
              <p className="text-[13px] sm:text-[13.5px] text-[#1E1E24] font-medium leading-[1.45] font-sans">
                Focused teams for brand &amp; technology, creative production and digital presence—working as one when the brief demands it.
              </p>
            </div>
          </motion.div>

          {/* CARD 03 — Light: Radial dial */}
          <motion.div {...reveal(0.16)} className="lg:col-span-3 rounded-[24px] sm:rounded-[28px] bg-[#DDE2E6]/75 backdrop-blur-2xl p-6 sm:p-7 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.045)] flex flex-col justify-between min-h-[390px] sm:min-h-[420px]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-sans font-medium tracking-[0.14em] text-[#55555A] uppercase">
                CONNECTED CAPABILITY
              </span>
              <div className="w-2 h-2 rounded-full bg-[#88EA15]" />
            </div>

            {/* Radial SVG */}
            <div className="my-auto flex items-center justify-center py-3">
              <div className="relative w-[130px] h-[130px] flex items-center justify-center">
                <svg className="w-full h-full animate-[spin_50s_linear_infinite]" viewBox="0 0 140 140">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angle = i * 10;
                    return (
                      <line
                        key={i}
                        x1="70" y1="10"
                        x2="70" y2={i % 3 === 0 ? '24' : '18'}
                        stroke="#111111"
                        strokeWidth={i % 3 === 0 ? '1.6' : '1'}
                        opacity={i % 3 === 0 ? '0.45' : '0.22'}
                        transform={`rotate(${angle} 70 70)`}
                      />
                    );
                  })}
                </svg>
                <div className="absolute w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center shadow-md border-2 border-white">
                  <PixelatedIcon className="w-[18px] h-[9px]" color="#88EA15" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.07]">
              <span className="text-[15px] sm:text-[16px] font-bold text-[#0A0A0A] tracking-tight leading-snug font-sans block">
                BUILD → CREATE → CONNECT
              </span>
              <p className="text-[12.5px] text-[#555555] font-normal leading-relaxed font-sans mt-1.5">
                From identity and digital products to campaigns and customer action.
              </p>
              <span className="text-[12px] text-[#111111] font-semibold font-sans mt-1.5 block">
                Built to work together.
              </span>
            </div>
          </motion.div>

          {/* CARD 04 — White: One Brief */}
          <motion.div {...reveal(0.22)} className="lg:col-span-3 rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-7 border border-black/[0.05] flex flex-col justify-between min-h-[390px] sm:min-h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.035)]">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-sans font-medium tracking-[0.14em] text-[#888888] uppercase">
                BUILT AROUND THE REQUIREMENT
              </span>
              {/* Quotation badge */}
              <div className="w-8 h-8 rounded-[11px] bg-[#F5F5F8] border border-black/[0.05] flex items-center justify-center text-[#111111] shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <div className="my-auto py-5">
              <span className="text-[36px] sm:text-[42px] font-bold text-[#0A0A0A] tracking-tight leading-none font-sans block">
                ONE BRIEF
              </span>
              <p className="text-[13.5px] text-[#444444] font-normal leading-[1.55] font-sans mt-3">
                Bring us the problem. Kriyon brings the right capability to the table.
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06]">
              <span className="text-[12px] text-[#888888] font-normal font-sans leading-relaxed block">
                You don't need to choose the venture first.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

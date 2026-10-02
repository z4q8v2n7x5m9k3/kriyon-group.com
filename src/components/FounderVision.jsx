import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function FounderVision() {
  return (
    <section
      id="vision"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-16 sm:py-22 lg:py-26 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Section Header with Section Eyebrow */}
        <motion.div {...reveal(0)} className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 mb-3.5 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              <PixelText text="05 // FOUNDER VISION" delay={0.06} />
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans max-w-none">
            <PixelText text="The vision behind Kriyon." delay={0.12} stagger={0.05} />
          </h2>

          <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-2.5 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
            <PixelText
              text="Building a future-focused group across industries — turning ideas into systems, products and ventures."
              delay={0.24}
              stagger={0.03}
            />
          </p>
        </motion.div>

        {/* Founder Card — Monochrome, Apple Frosted Glass with Clean Editorial 2-Col Layout */}
        <motion.div
          {...reveal(0.12)}
          className="relative isolate overflow-hidden rounded-[26px] sm:rounded-[30px] bg-white/[0.82] backdrop-blur-2xl border border-white/95 p-6 sm:p-9 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.035),inset_0_1px_1px_rgba(255,255,255,1)]"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-black/[0.03] to-transparent blur-3xl opacity-70"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left: Founder Portrait Container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="relative group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none aspect-[4/5] overflow-hidden rounded-[22px] sm:rounded-[24px] bg-[#111111] shadow-[0_12px_40px_rgba(0,0,0,0.09)] border border-black/[0.08]"
              >
                {/* Monochrome Portrait with subtle scale and depth */}
                <img
                  src="/assets/founder-placeholder.webp"
                  alt="Krishang Sharma Dhar — Founder & CEO, Kriyon Group"
                  className="w-full h-full object-cover object-center grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />

                {/* Subtle vignette gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Micro badge over image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 pointer-events-none">
                  <span className="text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-white/80 drop-shadow-sm">
                    KRISHANG SHARMA DHAR
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#88EA15] shadow-[0_0_8px_#88EA15]" />
                    <span className="text-[10px] font-mono tracking-wider text-white/70 uppercase">
                      CEO
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Vision, Philosophy & Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
              
              {/* Optional Microcopy Pill: ONE VISION. MANY INDUSTRIES. */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#111111] bg-black/[0.04] px-3 py-1.5 rounded-[10px] border border-black/[0.04]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#88EA15]" />
                  ONE VISION. MANY INDUSTRIES.
                </span>
              </div>

              {/* Founder Quote / Vision Statement */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-[24px] sm:text-[30px] lg:text-[34px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.18] font-sans">
                  Building a future-focused group across industries, turning ideas into systems, products and ventures that create real value.
                </h3>

                <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] text-[#555555] font-normal leading-[1.62] font-sans max-w-[620px]">
                  Kriyon was founded on a singular premise: complex modern ambitions require deep specialization with zero friction. We engineer independent ventures across brand, technology, production, education and emerging categories — all united under one cohesive ecosystem.
                </p>
              </div>

              {/* Founder Signature & Role Meta */}
              <div className="pt-5 sm:pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-[17px] sm:text-[18px] font-semibold text-[#0A0A0A] tracking-tight font-sans">
                    Krishang Sharma Dhar
                  </h4>
                  <p className="text-[12.5px] sm:text-[13px] text-[#666666] font-normal font-sans mt-0.5">
                    Founder &amp; CEO, Kriyon Group Pvt. Ltd.
                  </p>
                </div>

                {/* Subtle LinkedIn CTA Button */}
                <a
                  href="https://www.linkedin.com/in/krishang-sharma-dhar-23bb8a32a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-[12px] bg-white hover:bg-[#111111] text-[#111111] hover:text-white border border-black/[0.08] hover:border-[#111111] shadow-sm transition-all duration-200 active:scale-95 cursor-pointer text-[12.5px] sm:text-[13px] font-medium tracking-tight w-fit"
                >
                  <span>View LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function FounderVision() {
  return (
    <section
      id="vision"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1320px] mx-auto min-w-0">
        
        {/* Section Header with Eyebrow */}
        <motion.div {...reveal(0)} className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 mb-3 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[18px] sm:w-[20px] h-[9.5px] sm:h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[11.5px] sm:text-[12.5px] font-sans font-medium tracking-[0.16em] text-[#111111] uppercase">
              <PixelText text="05 // THE VISION BEHIND KRIYON" delay={0.06} />
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.14] font-sans">
            <PixelText text="One vision. Many industries." delay={0.12} stagger={0.05} />
          </h2>
        </motion.div>

        {/* Seamless Open Minimal Editorial Layout — No heavy card box */}
        <motion.div
          {...reveal(0.12)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center"
        >
          {/* Left: Perfectly Proportioned Executive Portrait (4:3 natural framing) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] aspect-[4/3] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.075)] bg-[#111111] border border-black/[0.06] group">
              <img
                src="/assets/krishang-4x3.webp"
                alt="Krishang Sharma Dhar — Founder & CEO, Kriyon Group"
                className="w-full h-full object-cover object-center contrast-[1.04] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Subtle Tag over image */}
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <span className="text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-white/90 drop-shadow-sm">
                  Krishang Sharma Dhar
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#88EA15] shadow-[0_0_6px_#88EA15]" />
                  <span className="text-[10px] font-mono tracking-wider uppercase text-white/80">
                    Founder &amp; CEO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean, Open Editorial Typography */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            
            {/* Vision Statement */}
            <p className="text-[20px] sm:text-[23px] md:text-[26px] lg:text-[28px] font-medium text-[#0A0A0A] tracking-[-0.025em] leading-[1.28] font-sans">
              Building a future-focused group across industries, turning ideas into systems, products and ventures that create real value.
            </p>

            {/* Concise Supporting Perspective */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#555555] font-normal leading-[1.62] font-sans max-w-[620px]">
              Kriyon is engineered around the belief that modern enterprises need specialized depth without operational friction. We build autonomous ventures across brand, technology, education and media — connected under one shared standard of excellence.
            </p>

            {/* Founder Identity Meta & Actions Row */}
            <div className="pt-4 border-t border-black/[0.07] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0A0A0A] tracking-tight font-sans">
                  Krishang Sharma Dhar
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-[#777777] font-normal font-sans mt-0.5">
                  Founder &amp; CEO, Kriyon Group Pvt. Ltd.
                </p>
              </div>

              {/* Action Buttons: LinkedIn + Founder Email */}
              <div className="flex items-center gap-2.5">
                {/* Official LinkedIn Logo Button */}
                <a
                  href="https://www.linkedin.com/in/krishang-sharma-dhar-23bb8a32a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-[11px] bg-white hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-black/[0.08] hover:border-[#0A66C2] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-200 active:scale-95 text-[12.5px] font-medium"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct Founder Email Button */}
                <a
                  href="mailto:founder@kriyongroup.com"
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-[11px] bg-black/[0.04] hover:bg-[#111111] text-[#111111] hover:text-white border border-black/[0.04] hover:border-[#111111] transition-all duration-200 active:scale-95 text-[12.5px] font-medium"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>founder@kriyongroup.com</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

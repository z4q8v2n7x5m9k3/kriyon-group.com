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
          {/* Left: Compact, Elegant Founder Portrait */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] aspect-[4/5] rounded-[20px] sm:rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-[#111111] border border-black/[0.06] group">
              <img
                src="/assets/founder-placeholder.webp"
                alt="Krishang Sharma Dhar"
                className="w-full h-full object-cover object-center grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Subtle Tag over image */}
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white pointer-events-none">
                <span className="text-[10px] font-mono tracking-wider uppercase text-white/80">
                  Krishang S. Dhar
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#88EA15] shadow-[0_0_6px_#88EA15]" />
              </div>
            </div>
          </div>

          {/* Right: Clean, Open Editorial Typography */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-center space-y-5 sm:space-y-6">
            
            {/* Vision Statement */}
            <p className="text-[20px] sm:text-[23px] md:text-[26px] lg:text-[28px] font-medium text-[#0A0A0A] tracking-[-0.025em] leading-[1.28] font-sans">
              Building a future-focused group across industries, turning ideas into systems, products and ventures that create real value.
            </p>

            {/* Concise Supporting Perspective */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#555555] font-normal leading-[1.62] font-sans max-w-[620px]">
              Kriyon is engineered around the belief that modern enterprises need specialized depth without operational friction. We build autonomous ventures across brand, technology, education and media — connected under one shared standard of excellence.
            </p>

            {/* Founder Identity Meta & Subtle CTA Row */}
            <div className="pt-4 border-t border-black/[0.07] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0A0A0A] tracking-tight font-sans">
                  Krishang Sharma Dhar
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-[#777777] font-normal font-sans mt-0.5">
                  Founder &amp; CEO, Kriyon Group Pvt. Ltd.
                </p>
              </div>

              {/* Minimal Text/Pill LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/krishang-sharma-dhar-23bb8a32a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-medium text-[#111111] hover:text-black py-1.5 px-3 rounded-[10px] bg-black/[0.04] hover:bg-black/[0.08] transition-all duration-200"
              >
                <span>View LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555555] group-hover:text-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

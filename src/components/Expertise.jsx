import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Brand & Identity',
    subtitle: 'Brand Strategy, Packaging & Design Systems',
    description: 'We craft comprehensive visual and strategic foundations that command premium value. From fundamental positioning to packaging engineering, every touchpoint reflects uncompromising intent.',
    deliverables: ['Brand Strategy & Positioning', 'Visual Identity Systems', 'Packaging Architecture', 'Editorial Guidelines'],
  },
  {
    id: '02',
    title: 'Technology & Digital Products',
    subtitle: 'Websites, Platforms & Custom Automation',
    description: 'Websites, applications, e-commerce, platforms and automation. We engineer high-velocity digital experiences designed for instantaneous responsiveness and global conversion.',
    deliverables: ['Custom Web Platforms', 'E-Commerce Infrastructure', 'Web & Mobile Applications', 'Custom Integrations'],
  },
  {
    id: '03',
    title: 'Creative Production',
    subtitle: 'Campaigns, Films, CGI & Visual Content',
    description: 'Campaigns, photography, films, CGI and visual content. Full-scale commercial storytelling built to earn audience attention and elevate consumer brand perception.',
    deliverables: ['Brand Campaigns & Films', 'High-End Product Photography', '3D CGI & Motion Graphics', 'Social Storytelling'],
  },
  {
    id: '04',
    title: 'Digital Presence & Customer Experience',
    subtitle: 'Customer Journeys, Bookings & Action',
    description: 'Customer journeys, bookings, payments, discovery and unified digital presence. We eliminate consumer drop-off by consolidating disparate digital touchpoints into one seamless destination.',
    deliverables: ['Unified Digital Presence', 'Customer Journey Mapping', 'Frictionless Booking & Orders', 'Action Analytics'],
  },
];

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="expertise" className="py-24 sm:py-36 bg-[#0A0B0E] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#88EA15] block mb-2 font-bold">
              01 · Capabilities
            </span>
            <h2 className="font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-white leading-none">
              What We Do
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/70 max-w-md font-sans">
            Four specialized disciplines engineered to solve complex commercial challenges under one accountable partner.
          </p>
        </div>

        {/* Interactive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Services List */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {services.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-[24px] border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-white/10 border-[#88EA15] shadow-lg ring-1 ring-[#88EA15]/30'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-sm font-bold text-[#88EA15]">
                      {item.id}
                    </span>
                    <div>
                      <h4 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#88EA15] transition-colors leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isActive ? 'bg-[#88EA15] text-black scale-105' : 'bg-white/10 text-white group-hover:bg-white/20'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Showcase Card */}
          <div className="lg:col-span-7 bg-white/[0.04] p-8 sm:p-12 md:p-14 rounded-[32px] border border-white/15 backdrop-blur-md min-h-[460px] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#88EA15]/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-black px-3.5 py-1 bg-[#88EA15] rounded-full uppercase tracking-wider">
                    Discipline {activeService.id}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#88EA15] mt-2 font-mono">
                    {activeService.subtitle}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                  {activeService.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-widest font-mono text-white/50 block mb-3">
                    Deliverables & Outputs
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs uppercase tracking-wider px-3.5 py-1.5 bg-white/10 border border-white/15 text-white/90 font-medium rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-8 border-t border-white/10 mt-8 relative z-10">
              <a
                href="#contact"
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-bold bg-[#88EA15] text-black px-8 py-4 rounded-full hover:bg-white transition-all shadow-md active:scale-95"
              >
                <span>Engage Capability</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { capabilities } from '../data/capabilities';

export default function Capabilities({ onStartProject }) {
  // Default open the first capability
  const [activeId, setActiveId] = useState('01');

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="capabilities" className="py-24 sm:py-36 bg-[#F5F5F2] film-grain border-b border-[#090909]/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 sm:pb-16 border-b border-[#090909]/15 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] mb-3 block">
              What We Do
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-9xl uppercase tracking-tighter text-[#090909] leading-none">
              Capabilities
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg text-[#090909] font-normal leading-relaxed">
              Four specialized disciplines engineered to solve complex commercial challenges under one accountable partner.
            </p>
          </div>
        </div>

        {/* Large Typographic Accordion Rows */}
        <div className="divide-y divide-[#090909]/15">
          {capabilities.map((cap) => {
            const isOpen = activeId === cap.id;

            return (
              <div
                key={cap.id}
                className={`transition-colors duration-300 ${isOpen ? 'bg-[#ECECE8]/40' : 'hover:bg-[#ECECE8]/20'}`}
              >
                {/* Main Row Trigger */}
                <button
                  onClick={() => toggleAccordion(cap.id)}
                  className="w-full text-left py-8 sm:py-12 px-2 sm:px-4 flex items-center justify-between group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline space-x-6 sm:space-x-12">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#5A5A58]">
                      {cap.id}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#090909] group-hover:translate-x-2 transition-transform duration-300">
                        {cap.title}
                      </h3>
                      <p className="hidden md:block text-xs uppercase tracking-[0.16em] text-[#5A5A58] mt-1.5 font-medium">
                        {cap.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Circular Toggle Indicator */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#090909]/20 flex items-center justify-center group-hover:border-[#090909] transition-colors shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#090909]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#090909] group-hover:rotate-90 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Smooth Animated Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 sm:px-4 pb-10 sm:pb-14 pt-2">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#090909]/10 pt-8">
                          {/* Tagline & Description */}
                          <div className="lg:col-span-6 space-y-4">
                            <p className="font-serif italic text-2xl sm:text-3xl text-[#090909] leading-snug">
                              "{cap.tagline}"
                            </p>
                            <p className="text-base text-[#090909]/80 leading-relaxed font-normal">
                              {cap.description}
                            </p>
                            <div className="pt-2">
                              <button
                                onClick={onStartProject}
                                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-[#090909] border-b border-[#090909] pb-0.5 hover:opacity-60 transition-opacity"
                              >
                                <span>Commission {cap.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Items Breakdown Checklist */}
                          <div className="lg:col-span-6">
                            <span className="text-[11px] uppercase tracking-[0.22em] text-[#5A5A58] font-semibold block mb-4">
                              Core Specializations:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {cap.items.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-3 p-3 bg-[#F5F5F2] border border-[#090909]/10"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#090909]" />
                                  <span className="text-xs uppercase tracking-[0.14em] font-medium text-[#090909]">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

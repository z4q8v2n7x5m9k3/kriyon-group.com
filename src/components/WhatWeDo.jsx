import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

const capabilities = [
  {
    id: '01',
    number: '01',
    title: 'Web & Product Design',
    description:
      'We design premium digital experiences that make your brand look credible, guide users clearly and turn visitors into customers.',
    tags: ['Landing Pages', 'Product Interfaces', 'E-commerce Platforms'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
        {/* Soft studio back glow */}
        <div className="absolute w-[220px] h-[220px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

        {/* 2 Layered / Tilted Design Boards matching reference angle */}
        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[190px] sm:h-[220px]">
          {/* Back Tablet / Mockup */}
          <div className="absolute left-6 top-3 w-[78%] h-[82%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#1A1D24] border border-white/20 shadow-2xl transform rotate-6 hover:rotate-4 transition-transform duration-500">
            <img
              src="/assets/what-we-do/card-01-brand.jpg"
              alt="Brand Packaging & Identity"
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Front Tablet / Mockup */}
          <div className="absolute left-0 bottom-1 w-[82%] h-[84%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#0D0F14] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-02-web.jpg"
              alt="Brand Visual Direction"
              className="w-full h-full object-cover filter contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '02',
    number: '02',
    title: 'Website & App Development',
    description:
      'We engineer ultra-fast websites, modern web applications, and custom digital infrastructure built for performance, security, and scalability.',
    tags: ['Web Development', 'Mobile Apps', 'Custom Portals'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[190px] sm:h-[220px]">
          {/* Back Tablet: Angled Store Layout */}
          <div className="absolute left-8 top-2 w-[76%] h-[82%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#161820] border border-white/20 shadow-2xl transform rotate-8 hover:rotate-5 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-03-app.jpg"
              alt="Store Platform UI"
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
          </div>

          {/* Front Tablet: Main Store Landing */}
          <div className="absolute left-1 bottom-1 w-[82%] h-[84%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#0A0C10] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-5 hover:-rotate-2 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-02-web.jpg"
              alt="Website and E-commerce Design"
              className="w-full h-full object-cover filter contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '03',
    number: '03',
    title: 'Branding & Identity',
    description:
      'We craft iconic brand systems, design language, guidelines, and tactile packaging that give your business unmatched authority.',
    tags: ['Brand Strategy', 'Visual Identity', 'Packaging Design'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[190px] sm:h-[220px]">
          {/* Back Tablet */}
          <div className="absolute left-8 top-3 w-[76%] h-[80%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#181C26] border border-white/20 shadow-2xl transform rotate-7 hover:rotate-4 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-02-web.jpg"
              alt="App Architecture"
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
          </div>

          {/* Front Tablet: SaaS Dashboard */}
          <div className="absolute left-1 bottom-1 w-[82%] h-[84%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#0E121B] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-03-app.jpg"
              alt="SaaS Platform Admin Panel"
              className="w-full h-full object-cover filter contrast-115"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '04',
    number: '04',
    title: 'Automation & Business Systems',
    description:
      'Smart workflows and connected systems that eliminate repetitive manual tasks and accelerate leads, bookings, payments and operations.',
    tags: ['AI Automation', 'Lead Funnels', 'Booking Systems'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[190px] sm:h-[220px]">
          {/* Back Tablet */}
          <div className="absolute left-7 top-2 w-[76%] h-[82%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#12151D] border border-white/20 shadow-2xl transform rotate-7 hover:rotate-4 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-03-app.jpg"
              alt="Workflow Integration"
              className="w-full h-full object-cover filter contrast-105"
              loading="lazy"
            />
          </div>

          {/* Front Tablet: Automation Hub */}
          <div className="absolute left-1 bottom-1 w-[82%] h-[84%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#0A0D14] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
            <img
              src="/assets/what-we-do/card-01-brand.jpg"
              alt="Automation Workflow System"
              className="w-full h-full object-cover filter contrast-115"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
              <span className="text-[10px] font-mono text-[#88EA15]">
                ● End-to-End Automated Pipeline
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '05',
    number: '05',
    title: 'Content, Campaigns & Production',
    description:
      'Creative commercial campaigns, product photography, editorial reels and CGI that give your business a distinctive, premium visual presence.',
    tags: ['Campaigns', 'Product Shoots', 'Reels & Films'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[190px] sm:h-[220px]">
          {/* Back Tablet */}
          <div className="absolute left-8 top-2 w-[76%] h-[82%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#161618] border border-white/20 shadow-2xl transform rotate-8 hover:rotate-5 transition-transform duration-500">
            <img
              src="/assets/what-we-do/card-01-brand.jpg"
              alt="Production Stills"
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
          </div>

          {/* Front Tablet: Film Campaign Still */}
          <div className="absolute left-1 bottom-1 w-[82%] h-[84%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#080808] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-5 hover:-rotate-2 transition-transform duration-500">
            <img
              src="/assets/what-we-do/card-05-content.jpg"
              alt="Campaign Stills & Films"
              className="w-full h-full object-cover filter contrast-115"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
              <span className="text-[10px] font-mono text-white/90">
                4K Cinema Production · 9:16 &amp; 16:9
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '06',
    number: '06',
    title: 'Digital Presence & Customer Experience',
    description:
      'Everything that helps customers discover, trust, contact and take action with your business online — from smart QR touchpoints to booking flows.',
    tags: ['OneLink Cards', 'QR Systems', 'Reviews'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[190px] sm:h-[220px]">
          {/* Back Tablet */}
          <div className="absolute left-8 top-2 w-[76%] h-[82%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#121620] border border-white/20 shadow-2xl transform rotate-7 hover:rotate-4 transition-transform duration-500">
            <img
              src="/assets/what-we-do/mockup-02-web.jpg"
              alt="Action Journeys"
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
          </div>

          {/* Front Tablet: OneLink Action Hub */}
          <div className="absolute left-1 bottom-1 w-[82%] h-[84%] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#0A0D15] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
            <img
              src="/assets/onelink-mockup-new.jpg"
              alt="OneLink Smart Digital Action Hub"
              className="w-full h-full object-cover filter contrast-115"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
              <span className="text-[10px] font-mono text-[#88EA15]">
                NFC + QR Instant Customer Hub
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function WhatWeDo({ onContact }) {
  // Default first row expanded
  const [activeId, setActiveId] = useState('01');

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onContact) {
      onContact();
    }
  };

  return (
    <section
      id="what-we-do"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Reverted Header: Consistent Kriyon Website Typography & Style */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              <PixelText text="02 // CAPABILITIES" delay={0.06} />
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans">
            <PixelText text="What we help build" delay={0.12} stagger={0.06} />
          </h2>

          <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-[880px]">
            <PixelText
              text="From branding and websites to apps, automation, content and digital customer experience — Kriyon brings the right capabilities together under one group."
              delay={0.24}
              stagger={0.03}
            />
          </p>
        </div>

        {/* Expandable Capability Rows - Consistent Kriyon Clean Styling */}
        <div className="space-y-3 sm:space-y-3.5">
          {capabilities.map((item) => {
            const isExpanded = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full rounded-[24px] sm:rounded-[28px] transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-[#101010] text-white border-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.18)]'
                    : 'bg-white/[0.88] hover:bg-white text-[#0A0A0A] border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
                }`}
              >
                {/* Header Row Bar */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left px-6 sm:px-9 md:px-10 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                >
                  {/* Left: Number + Spaced Dot + Title with matching sizing & weighting */}
                  <div className="flex items-center gap-5 sm:gap-7 md:gap-9 min-w-0">
                    <span
                      className={`text-[19px] sm:text-[22px] md:text-[24px] font-medium tracking-tight shrink-0 transition-colors font-sans ${
                        isExpanded ? 'text-white' : 'text-[#333333]'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Dot */}
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                        isExpanded ? 'bg-[#88EA15]' : 'bg-black/30'
                      }`}
                    />

                    <h3
                      className={`text-[19px] sm:text-[23px] md:text-[26px] font-medium tracking-[-0.02em] font-sans truncate transition-colors ${
                        isExpanded ? 'text-white' : 'text-[#111111]'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Round Toggle Button */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#88EA15] text-black rotate-0 scale-100 shadow-sm'
                        : 'bg-[#0E0E0E] text-white hover:scale-105'
                    }`}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-9 md:px-10 pb-8 sm:pb-9 pt-0">
                        {/* Internal Left Indentation matching the Header text column */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center lg:pl-[68px]">
                          {/* Left Column: Description + Pill Chips */}
                          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5">
                            <p className="text-[13.5px] sm:text-[14.5px] md:text-[15px] text-[#A0A0A0] font-normal leading-[1.65] font-sans max-w-[500px]">
                              {item.description}
                            </p>

                            {/* Dark Oval Chips with subtle border */}
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center text-[11.5px] sm:text-[12px] font-normal text-white/90 bg-[#1E1E1E] border border-white/10 rounded-full px-4 py-1.5 transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                              <span className="inline-flex items-center text-[11px] font-mono text-white/60 bg-[#1E1E1E] border border-white/10 rounded-full px-2.5 py-1.5">
                                +2
                              </span>
                            </div>

                            {/* Direct Project Inquiry Link */}
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={handleScrollToContact}
                                className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#88EA15] hover:text-white transition-colors cursor-pointer group"
                              >
                                <span>Discuss {item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>

                          {/* Right Column: Layered Tablet/Laptop Visual Mockup */}
                          <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            {item.renderVisual()}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Ways to Work Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 rounded-[22px] sm:rounded-[26px] bg-white/[0.88] backdrop-blur-2xl border border-white p-5 sm:p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          {/* Left: Ways to work with us */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#111111] uppercase tracking-[0.08em] whitespace-nowrap">
              Ways to work with us:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                'One-time Projects',
                'Launch Packages',
                'Monthly Retainers',
                'Custom Solutions',
              ].map((model) => (
                <span
                  key={model}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#222222] bg-[#F3F4F4] rounded-[10px] px-3 py-1.5 border border-black/[0.04]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] stroke-[2.2]" />
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA Button */}
          <button
            type="button"
            onClick={handleScrollToContact}
            className="group inline-flex items-center justify-between gap-4 bg-[#111111] hover:bg-black text-white px-5 sm:px-6 py-3.5 rounded-[16px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer text-left shrink-0"
          >
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.14em] text-white/60 font-medium">
                Not sure what fits?
              </span>
              <span className="text-[13.5px] sm:text-[14px] font-medium text-white tracking-tight">
                Tell us about your business
              </span>
            </div>
            <div className="w-8 h-8 rounded-[10px] bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white stroke-[2]" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

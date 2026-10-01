import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Globe,
  Zap,
  Film,
  QrCode,
  Palette,
  ExternalLink,
} from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

const capabilities = [
  {
    id: '01',
    number: '01',
    title: 'Branding & Identity',
    description:
      'For businesses that need a stronger identity, better positioning and launch-ready brand assets.',
    tags: ['Brand Strategy', 'Logo Systems', 'Packaging', 'Launch Assets'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[290px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#101012] border border-white/10 shadow-2xl flex items-center justify-center p-4">
        {/* Ambient Dark Image Background */}
        <img
          src="/assets/what-we-do/card-01-brand.jpg"
          alt="Branding & Packaging Identity"
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter contrast-125 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

        {/* Floating Identity & Packaging Board */}
        <div className="relative z-10 w-full max-w-[340px] bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-[16px] p-4 text-white shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#88EA15]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/90">
                Identity Spec
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
              2026 Ready
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-black/40 rounded-[10px] p-2 border border-white/10 text-center">
              <span className="text-[8.5px] font-mono text-white/50 block mb-1">MONOGRAM</span>
              <div className="w-6 h-6 rounded-[5px] bg-[#88EA15] text-black font-black text-[12px] flex items-center justify-center mx-auto">
                K
              </div>
            </div>
            <div className="bg-black/40 rounded-[10px] p-2 border border-white/10 text-center">
              <span className="text-[8.5px] font-mono text-white/50 block mb-1">COLORWAY</span>
              <div className="flex items-center justify-center gap-1 mt-1.5">
                <span className="w-3 h-3 rounded-full bg-[#0A0A0A] border border-white/30" />
                <span className="w-3 h-3 rounded-full bg-[#EBEBED]" />
                <span className="w-3 h-3 rounded-full bg-[#88EA15]" />
              </div>
            </div>
            <div className="bg-black/40 rounded-[10px] p-2 border border-white/10 text-center">
              <span className="text-[8.5px] font-mono text-white/50 block mb-1">PACKAGING</span>
              <span className="text-[11px] font-semibold text-white block mt-0.5">14 SKUs</span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
            <span>POSITIONING: PREMIUM</span>
            <span className="text-[#88EA15]">ASSETS 100% READY</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '02',
    number: '02',
    title: 'Websites & E-commerce',
    description:
      'Websites and store experiences built to present your business clearly and convert better.',
    tags: ['Business Websites', 'Landing Pages', 'Online Stores', 'Redesigns'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[290px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#0C0E14] border border-white/10 shadow-2xl flex items-center justify-center p-3 sm:p-5">
        {/* Angled Laptop / Desktop Mockup Frame */}
        <div className="relative w-full max-w-[390px] rounded-[14px] overflow-hidden bg-[#16181F] border border-white/20 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          {/* Browser Top Bar */}
          <div className="bg-[#1C1F28] px-3 py-2 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <div className="bg-black/50 rounded-full px-3 py-0.5 text-[9.5px] font-mono text-white/70 flex items-center gap-1">
              <span className="text-[#88EA15]">https://</span>store.brand.com
            </div>
            <span className="text-[9px] font-mono text-[#88EA15] font-semibold">99+ CVR</span>
          </div>

          {/* Actual Site Screenshot preview */}
          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <img
              src="/assets/what-we-do/mockup-02-web.jpg"
              alt="E-commerce Store UI"
              className="w-full h-full object-cover object-top filter contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <div className="flex items-center justify-between w-full text-white text-[10.5px]">
                <span className="font-semibold tracking-tight">Direct Consumer Ordering Platform</span>
                <span className="font-mono text-[#88EA15] text-[9.5px]">Sub-Second Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: '03',
    number: '03',
    title: 'Apps, SaaS & Platforms',
    description:
      'Custom digital products, portals and platforms designed for real business use.',
    tags: ['Web Apps', 'Mobile Apps', 'SaaS Products', 'Admin Panels'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[290px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#0A0D15] border border-white/10 shadow-2xl flex items-center justify-center p-3 sm:p-5">
        <div className="relative w-full max-w-[390px] rounded-[14px] overflow-hidden bg-[#141824] border border-white/20 shadow-2xl">
          {/* App / Dashboard Top Header */}
          <div className="bg-[#1A2030] px-3 py-2 flex items-center justify-between border-b border-white/10 text-white">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-[3px] bg-[#88EA15]" />
              <span className="text-[10.5px] font-semibold tracking-tight">SaaS Admin Portal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#88EA15] animate-pulse" />
              <span className="text-[9px] font-mono text-[#88EA15]">LIVE PRODUCTION</span>
            </div>
          </div>

          {/* App Screenshot Preview */}
          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <img
              src="/assets/what-we-do/mockup-03-app.jpg"
              alt="Custom Business SaaS Platform"
              className="w-full h-full object-cover object-top filter contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3">
              <div className="flex items-center justify-between w-full text-white">
                <span className="text-[10px] font-mono text-white/80">Next.js · PostgreSQL · RBAC</span>
                <span className="text-[9.5px] font-mono text-[#88EA15]">0s DOWNTIME</span>
              </div>
            </div>
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
      'Smart workflows that reduce manual work and improve leads, bookings and operations.',
    tags: ['AI Automation', 'Lead Funnels', 'Booking Systems', 'Integrations'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[290px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#0D0E12] border border-white/10 shadow-2xl flex items-center justify-center p-4">
        {/* Connected Node Architecture Diagram */}
        <div className="w-full max-w-[340px] bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-[16px] p-4 text-white shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#88EA15]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/90">
                End-to-End Pipeline
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-[#88EA15] bg-[#88EA15]/10 px-2 py-0.5 rounded">
              Active Flow
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2.5 bg-black/40 rounded-[9px] p-2 border border-white/10">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                01
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-white block truncate">
                  Inbound Lead &amp; Booking
                </span>
                <span className="text-[9px] font-mono text-white/50">Website, OneLink, Instagram</span>
              </div>
              <span className="text-[9px] font-mono text-[#88EA15]">TRIGGER</span>
            </div>

            <div className="flex items-center gap-2.5 bg-[#88EA15]/10 rounded-[9px] p-2 border border-[#88EA15]/20">
              <span className="w-5 h-5 rounded-full bg-[#88EA15] text-black flex items-center justify-center text-[10px] font-mono font-black">
                AI
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-white block truncate">
                  AI Qualification &amp; CRM Sync
                </span>
                <span className="text-[9px] font-mono text-white/60">Instant WhatsApp routing</span>
              </div>
              <span className="text-[9px] font-mono text-[#88EA15]">0.2s</span>
            </div>

            <div className="flex items-center gap-2.5 bg-black/40 rounded-[9px] p-2 border border-white/10">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                03
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-white block truncate">
                  Payment, Contract &amp; Onboard
                </span>
                <span className="text-[9px] font-mono text-white/50">Zero manual intervention</span>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#88EA15]" />
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
            <span>SAVED: ~24 HRS / WK</span>
            <span className="text-[#88EA15]">100% LEAD CAPTURE</span>
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
      'Creative content, campaigns and visual production that help your business communicate and grow.',
    tags: ['Campaigns', 'Product Shoots', 'Reels & Films', 'CGI & Visuals'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[290px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl flex items-center justify-center p-3">
        {/* Full Cinematic Campaign Image */}
        <img
          src="/assets/what-we-do/card-05-content.jpg"
          alt="Creative Film and Campaign Production"
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-110 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60" />

        <div className="relative z-10 w-full max-w-[340px] bg-black/60 backdrop-blur-xl border border-white/20 rounded-[16px] p-3.5 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider text-white uppercase">
                4K Cinema Production
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-white/60">9:16 &amp; 16:9 MASTER</span>
          </div>

          <div className="bg-white/10 rounded-[10px] p-2.5 border border-white/10 flex items-center justify-between my-2">
            <div>
              <span className="text-[12px] font-medium text-white block">Commercial Campaign</span>
              <span className="text-[9.5px] font-mono text-white/60">
                Editorial Stills · Motion Reels · 3D
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#88EA15] text-black flex items-center justify-center">
              <Film className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center mt-2 pt-2 border-t border-white/10 text-[9px] font-mono text-white/80">
            <span className="bg-white/5 py-1 rounded">REELS</span>
            <span className="bg-white/5 py-1 rounded">PRODUCT</span>
            <span className="bg-white/5 py-1 rounded text-[#88EA15]">CGI / 3D</span>
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
      'Everything that helps customers discover, trust, contact and take action with your business online.',
    tags: ['OneLink Cards', 'QR Systems', 'Reviews', 'Customer Journeys'],
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[290px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#0A0E18] border border-white/10 shadow-2xl flex items-center justify-center p-4">
        {/* Smart Hub Phone Mockup Card */}
        <div className="w-full max-w-[340px] bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-[16px] p-4 text-white shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#88EA15]" />
              <span className="text-[11px] font-semibold tracking-tight text-white">
                OneLink Smart Hub
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-[#88EA15] bg-[#88EA15]/10 px-2 py-0.5 rounded">
              NFC + QR Active
            </span>
          </div>

          <div className="flex items-center gap-3 bg-black/40 rounded-[12px] p-2.5 border border-white/10">
            <div className="w-12 h-12 rounded-[8px] bg-white p-1 flex items-center justify-center shrink-0">
              <QrCode className="w-10 h-10 text-black stroke-[2.2]" />
            </div>

            <div className="flex-1 space-y-1 min-w-0">
              <div className="bg-white/10 rounded px-2 py-0.5 text-[9.5px] text-white flex items-center justify-between">
                <span>Book Appointment</span>
                <span className="text-[#88EA15]">→</span>
              </div>
              <div className="bg-white/10 rounded px-2 py-0.5 text-[9.5px] text-white flex items-center justify-between">
                <span>Direct WhatsApp Chat</span>
                <span className="text-[#88EA15]">→</span>
              </div>
              <div className="bg-white/10 rounded px-2 py-0.5 text-[9.5px] text-white flex items-center justify-between">
                <span>5.0★ Google Reviews</span>
                <span className="text-[#88EA15]">★</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
            <span>TOUCHPOINTS UNIFIED</span>
            <span className="text-[#88EA15]">INSTANT ACTION</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function WhatWeDo({ onContact }) {
  // Default to first capability expanded (Web & Product / Branding)
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
        
        {/* Section Header - Left Aligned & Editorial */}
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

        {/* Expandable Accordion Rows System */}
        <div className="space-y-3 sm:space-y-3.5">
          {capabilities.map((item) => {
            const isExpanded = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full rounded-[22px] sm:rounded-[26px] transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-[#101010] text-white border-black/80 shadow-[0_16px_40px_rgba(0,0,0,0.18)]'
                    : 'bg-white/[0.88] hover:bg-white text-[#0A0A0A] border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
                }`}
              >
                {/* Header Row Bar */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left px-5 sm:px-7 md:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
                    <span
                      className={`text-[15px] sm:text-[17px] font-mono font-semibold tracking-tight shrink-0 transition-colors ${
                        isExpanded ? 'text-white' : 'text-[#777777]'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Dot indicator */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        isExpanded ? 'bg-[#88EA15]' : 'bg-black/30'
                      }`}
                    />

                    <h3
                      className={`text-[18px] sm:text-[22px] md:text-[25px] font-medium tracking-[-0.025em] font-sans truncate transition-colors ${
                        isExpanded ? 'text-white' : 'text-[#0A0A0A]'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Round Toggle Button */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#88EA15] text-black rotate-0 scale-100'
                        : 'bg-black text-white hover:scale-105'
                    }`}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
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
                      <div className="px-5 sm:px-7 md:px-8 pb-7 sm:pb-8 pt-1 border-t border-white/10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                          {/* Left Column: Description + Chips + Action Link */}
                          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                            <div>
                              <p className="text-[14.5px] sm:text-[16px] text-white/80 font-normal leading-[1.6] font-sans max-w-[540px]">
                                {item.description}
                              </p>

                              {/* Tags / Deliverables */}
                              <div className="flex flex-wrap gap-2 mt-5">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="inline-flex items-center text-[12px] font-medium text-white/90 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full px-3.5 py-1.5 transition-colors"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Direct Project Inquiry Button */}
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={handleScrollToContact}
                                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#88EA15] hover:text-white transition-colors group cursor-pointer"
                              >
                                <span>Discuss {item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>

                          {/* Right Column: Clean Supporting Visual Mockup */}
                          <div className="lg:col-span-6">
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
          className="mt-8 sm:mt-10 rounded-[22px] sm:rounded-[26px] bg-white/[0.9] backdrop-blur-2xl border border-white p-5 sm:p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
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

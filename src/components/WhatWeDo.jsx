import { motion } from 'framer-motion';
import {
  Palette,
  Globe,
  Layers,
  Zap,
  Film,
  QrCode,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Check,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

// 6 Cards with Problem-Led Copy and Distinct Visual Components
const serviceCards = [
  {
    num: '01',
    problemTitle: 'Need a stronger brand?',
    description:
      'We build the identity, positioning and launch assets that make your business look clear, credible and ready to grow.',
    chips: ['Brand Strategy', 'Logo & Identity', 'Packaging', 'Launch Assets'],
    icon: Palette,
    renderVisual: () => (
      <div className="relative w-full h-[175px] sm:h-[185px] rounded-[16px] overflow-hidden bg-[#101012] p-3.5 flex flex-col justify-between border border-black/[0.08] group-hover:border-black/20 transition-all">
        {/* Ambient background glow & image hint */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90 z-10" />
        <img
          src="/assets/what-we-do/card-01-brand.jpg"
          alt="Brand Identity & Packaging"
          className="absolute inset-0 w-full h-full object-cover opacity-40 filter saturate-125 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Brand System Board UI */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#88EA15]" />
            <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">
              Brand System v2.6
            </span>
          </div>
          <span className="text-[9.5px] font-mono text-white/50 tracking-widest uppercase">
            EST. 2026
          </span>
        </div>

        {/* Central Brand Artifacts Mockup */}
        <div className="relative z-20 grid grid-cols-3 gap-2 my-auto">
          {/* Tile 1: Monogram / Identity */}
          <div className="bg-white/[0.08] backdrop-blur-md rounded-[10px] p-2.5 border border-white/10 flex flex-col justify-between h-[68px]">
            <span className="text-[8.5px] font-mono text-white/50">IDENTITY</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-[5px] bg-[#88EA15] flex items-center justify-center text-black font-black text-[11px] leading-none">
                K
              </div>
              <span className="text-[11px] font-semibold text-white tracking-tight">KRIYON</span>
            </div>
          </div>

          {/* Tile 2: Color Palette */}
          <div className="bg-white/[0.08] backdrop-blur-md rounded-[10px] p-2.5 border border-white/10 flex flex-col justify-between h-[68px]">
            <span className="text-[8.5px] font-mono text-white/50">PALETTE</span>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#0A0A0A] border border-white/20" />
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#EBEBED]" />
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#88EA15]" />
            </div>
          </div>

          {/* Tile 3: Packaging SKU Spec */}
          <div className="bg-white/[0.08] backdrop-blur-md rounded-[10px] p-2.5 border border-white/10 flex flex-col justify-between h-[68px]">
            <span className="text-[8.5px] font-mono text-white/50">PACKAGING</span>
            <span className="text-[10px] font-medium text-white/90 leading-tight">
              14 SKUs Ready
            </span>
          </div>
        </div>

        {/* Bottom Status Tag */}
        <div className="relative z-20 flex items-center justify-between text-[10px] text-white/70">
          <span className="font-sans font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-[#88EA15]" /> Credible & Market Ready
          </span>
          <span className="font-mono text-[9px] text-[#88EA15]">ASSETS 100%</span>
        </div>
      </div>
    ),
  },

  {
    num: '02',
    problemTitle: 'Need a better website or online store?',
    description:
      'We create websites, landing pages and e-commerce experiences that present your business clearly and convert better.',
    chips: ['Business Websites', 'Landing Pages', 'Online Stores', 'Redesigns'],
    icon: Globe,
    renderVisual: () => (
      <div className="relative w-full h-[175px] sm:h-[185px] rounded-[16px] overflow-hidden bg-[#0C0E12] p-3 flex flex-col justify-between border border-black/[0.08] group-hover:border-black/20 transition-all">
        {/* Browser Mockup Header */}
        <div className="flex items-center justify-between bg-white/[0.06] rounded-[8px] px-2.5 py-1.5 border border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-1 bg-black/40 rounded-full px-2.5 py-0.5 text-[9px] font-mono text-white/70">
            <span className="text-[#88EA15]">https://</span>yourbrand.com
          </div>
          <span className="text-[9px] font-mono text-[#88EA15] font-semibold">99+ CWV</span>
        </div>

        {/* High-Converting Store / Hero Layout Preview */}
        <div className="bg-white/[0.04] rounded-[10px] p-2.5 border border-white/[0.05] flex items-center gap-3 my-1">
          {/* Product Thumbnail */}
          <div className="w-14 h-14 rounded-[8px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
            <ShoppingBag className="w-6 h-6 text-white/80" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#88EA15]" />
          </div>

          {/* Headline & Metrics */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] font-semibold text-white tracking-tight truncate">
                Direct E-commerce Store
              </span>
              <span className="text-[9.5px] font-mono text-[#88EA15] bg-[#88EA15]/10 px-1.5 py-0.5 rounded">
                +42% CVR
              </span>
            </div>
            <p className="text-[10px] text-white/60 font-sans mt-0.5 line-clamp-1">
              Sub-second page load · Clear checkout
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                <span className="h-full bg-[#88EA15] block w-[84%]" />
              </span>
              <span className="text-[8.5px] font-mono text-white/50">840ms</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <div className="bg-white/[0.03] py-1 rounded-[6px] border border-white/[0.04]">
            <span className="text-[9px] font-mono text-white/80 block">Mobile 1st</span>
          </div>
          <div className="bg-white/[0.03] py-1 rounded-[6px] border border-white/[0.04]">
            <span className="text-[9px] font-mono text-white/80 block">Stripe / UPI</span>
          </div>
          <div className="bg-white/[0.03] py-1 rounded-[6px] border border-white/[0.04]">
            <span className="text-[9px] font-mono text-[#88EA15] block">SEO Ranked</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    num: '03',
    problemTitle: 'Need an app, SaaS or custom platform?',
    description:
      'We design and build digital products such as dashboards, portals, web apps and business platforms.',
    chips: ['Web Apps', 'Mobile Apps', 'SaaS Products', 'Admin Panels'],
    icon: Layers,
    renderVisual: () => (
      <div className="relative w-full h-[175px] sm:h-[185px] rounded-[16px] overflow-hidden bg-[#0A0D14] p-3 flex flex-col justify-between border border-black/[0.08] group-hover:border-black/20 transition-all">
        {/* Dashboard Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[3px] bg-[#88EA15]" />
            <span className="text-[10px] font-semibold text-white tracking-tight">
              Enterprise Dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[8.5px] font-mono text-white/50">LIVE PRODUCTION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#88EA15] animate-pulse" />
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="bg-white/[0.05] rounded-[9px] p-2 border border-white/[0.06]">
            <span className="text-[9px] font-mono text-white/50 block">MONTHLY USERS</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[14px] font-semibold text-white font-mono">18,420</span>
              <span className="text-[9px] text-[#88EA15] font-mono">↑ 28%</span>
            </div>
          </div>
          <div className="bg-white/[0.05] rounded-[9px] p-2 border border-white/[0.06]">
            <span className="text-[9px] font-mono text-white/50 block">SYSTEM LATENCY</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[14px] font-semibold text-white font-mono">12ms</span>
              <span className="text-[9px] text-white/60 font-mono">Global Edge</span>
            </div>
          </div>
        </div>

        {/* Interactive App Screen Mini Representation */}
        <div className="bg-white/[0.03] rounded-[9px] p-2 border border-white/[0.05] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-[6px] bg-[#88EA15]/15 flex items-center justify-center text-[#88EA15] text-[10px] font-mono font-bold">
              API
            </div>
            <div>
              <span className="text-[10.5px] font-medium text-white block leading-tight">
                Role-Based Admin Portal
              </span>
              <span className="text-[9px] text-white/50 font-mono">Postgres · Next.js · Auth</span>
            </div>
          </div>
          <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
            v3.2
          </span>
        </div>
      </div>
    ),
  },

  {
    num: '04',
    problemTitle: 'Too much manual work?',
    description:
      'We set up automations, workflows and customer systems that save time and make enquiries, bookings and follow-ups smoother.',
    chips: ['AI Automation', 'Lead Funnels', 'Booking Flows', 'Integrations'],
    icon: Zap,
    renderVisual: () => (
      <div className="relative w-full h-[175px] sm:h-[185px] rounded-[16px] overflow-hidden bg-[#0E0F12] p-3 flex flex-col justify-between border border-black/[0.08] group-hover:border-black/20 transition-all">
        {/* Workflow Title Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#88EA15]" />
            <span className="text-[10px] font-mono text-white/80 tracking-wide uppercase">
              Automation Flow
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#88EA15] bg-[#88EA15]/10 px-2 py-0.5 rounded">
            Active · 0s Manual
          </span>
        </div>

        {/* Connected Workflow Pipeline Nodes */}
        <div className="space-y-1.5 my-1">
          {/* Node 1 */}
          <div className="flex items-center gap-2 bg-white/[0.05] rounded-[8px] p-1.5 border border-white/[0.06]">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-mono text-white">
              1
            </span>
            <span className="text-[10px] font-medium text-white flex-1">
              Customer Enquiry / Form
            </span>
            <span className="text-[9px] font-mono text-[#88EA15]">TRIGGER</span>
          </div>

          {/* Node 2 - AI Routing */}
          <div className="flex items-center gap-2 bg-[#88EA15]/[0.08] rounded-[8px] p-1.5 border border-[#88EA15]/20">
            <span className="w-4 h-4 rounded-full bg-[#88EA15] text-black flex items-center justify-center text-[9px] font-mono font-bold">
              AI
            </span>
            <span className="text-[10px] font-medium text-white flex-1">
              AI Qualification &amp; CRM Sync
            </span>
            <span className="text-[9px] font-mono text-[#88EA15]">0.2s</span>
          </div>

          {/* Node 3 - Instant Action */}
          <div className="flex items-center gap-2 bg-white/[0.05] rounded-[8px] p-1.5 border border-white/[0.06]">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-mono text-white">
              3
            </span>
            <span className="text-[10px] font-medium text-white flex-1">
              WhatsApp Calendar / Invoice Sent
            </span>
            <Check className="w-3 h-3 text-[#88EA15]" />
          </div>
        </div>

        {/* Bottom Efficiency Stat */}
        <div className="flex items-center justify-between text-[9.5px] font-mono text-white/60">
          <span>TIME SAVED: ~24 HRS / WK</span>
          <span className="text-[#88EA15]">ZERO LEADS LOST</span>
        </div>
      </div>
    ),
  },

  {
    num: '05',
    problemTitle: 'Need content, campaigns or social media?',
    description:
      'We create campaigns, product shoots, reels, films and visual content that help your business look active and communicate better.',
    chips: ['Social Media', 'Product Shoots', 'Reels & Films', 'CGI & Visuals'],
    icon: Film,
    renderVisual: () => (
      <div className="relative w-full h-[175px] sm:h-[185px] rounded-[16px] overflow-hidden bg-[#0A0A0A] p-3 flex flex-col justify-between border border-black/[0.08] group-hover:border-black/20 transition-all">
        {/* Ambient image background */}
        <img
          src="/assets/what-we-do/card-05-content.jpg"
          alt="Campaign and Film Production"
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter contrast-110 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/75 z-10" />

        {/* Camera / Production UI Overlay */}
        <div className="relative z-20 flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[9px] font-mono text-white uppercase tracking-wider">
              REC · 4K 60FPS
            </span>
          </div>
          <span className="text-[9px] font-mono bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-white font-medium">
            9:16 &amp; 16:9
          </span>
        </div>

        {/* Center Editorial Film Frame Indicator */}
        <div className="relative z-20 my-auto py-1">
          <div className="border border-white/20 rounded-[8px] p-2 bg-black/40 backdrop-blur-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-white block tracking-tight">
                Commercial Campaign Film
              </span>
              <span className="text-[9px] font-mono text-white/60">
                Editorial Direction · Color Grading
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-white">
              <Film className="w-3.5 h-3.5 text-[#88EA15]" />
            </div>
          </div>
        </div>

        {/* Content Deliverables Matrix */}
        <div className="relative z-20 grid grid-cols-3 gap-1.5 text-center">
          <div className="bg-black/70 backdrop-blur-md py-1 rounded-[6px] border border-white/10">
            <span className="text-[8.5px] font-mono text-white/80 block">REELS / TIKTOK</span>
          </div>
          <div className="bg-black/70 backdrop-blur-md py-1 rounded-[6px] border border-white/10">
            <span className="text-[8.5px] font-mono text-white/80 block">PRODUCT STILLS</span>
          </div>
          <div className="bg-black/70 backdrop-blur-md py-1 rounded-[6px] border border-white/10">
            <span className="text-[8.5px] font-mono text-[#88EA15] block">3D &amp; CGI</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    num: '06',
    problemTitle: 'Want customers to take action faster?',
    description:
      'We improve digital presence so people can discover, trust, contact, review, book and buy from your business more easily.',
    chips: ['OneLink Cards', 'QR Systems', 'Reviews', 'Customer Journeys'],
    icon: QrCode,
    renderVisual: () => (
      <div className="relative w-full h-[175px] sm:h-[185px] rounded-[16px] overflow-hidden bg-[#0A0E17] p-3 flex flex-col justify-between border border-black/[0.08] group-hover:border-black/20 transition-all">
        {/* Phone / Smart Digital Action Card Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#88EA15]" />
            <span className="text-[10px] font-semibold text-white tracking-tight">
              OneLink Digital Hub
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#88EA15] bg-[#88EA15]/10 px-1.5 py-0.5 rounded">
            NFC + QR Enabled
          </span>
        </div>

        {/* Phone Screen Mockup Row */}
        <div className="bg-white/[0.05] rounded-[10px] p-2 border border-white/[0.08] my-1 flex items-center justify-between gap-2">
          {/* QR Code Graphic */}
          <div className="w-12 h-12 rounded-[8px] bg-white p-1 flex items-center justify-center shrink-0">
            <QrCode className="w-10 h-10 text-black stroke-[2.2]" />
          </div>

          {/* Action Hub Buttons */}
          <div className="flex-1 space-y-1 min-w-0">
            <div className="bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded text-[9px] text-white font-medium flex items-center justify-between">
              <span>Book Appointment</span>
              <ChevronRight className="w-2.5 h-2.5 text-white/60" />
            </div>
            <div className="bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded text-[9px] text-white font-medium flex items-center justify-between">
              <span>Direct WhatsApp Chat</span>
              <ChevronRight className="w-2.5 h-2.5 text-[#88EA15]" />
            </div>
            <div className="bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded text-[9px] text-white font-medium flex items-center justify-between">
              <span>5.0★ Google Reviews</span>
              <ChevronRight className="w-2.5 h-2.5 text-white/60" />
            </div>
          </div>
        </div>

        {/* Bottom Fast Conversion Stats */}
        <div className="flex items-center justify-between text-[9.5px] font-mono text-white/60">
          <span>TOUCHPOINTS UNIFIED</span>
          <span className="text-[#88EA15]">TAP → ACTION IN 2 SEC</span>
        </div>
      </div>
    ),
  },
];

const engagementModels = [
  'One-time Projects',
  'Launch Packages',
  'Monthly Retainers',
  'Custom Solutions',
];

export default function WhatWeDo({ onContact }) {
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
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-22 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Top Header Section - Left Aligned and Simple */}
        <div className="mb-10 sm:mb-14">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              <PixelText text="02 // WHAT WE DO" delay={0.06} />
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans">
            <PixelText text="What do you need to improve?" delay={0.12} stagger={0.06} />
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-[880px]">
            <PixelText
              text="Whether you are starting, scaling or fixing what is not working — Kriyon helps with brand, technology, content and digital customer experience in one place."
              delay={0.24}
              stagger={0.03}
            />
          </p>
        </div>

        {/* 6 Problem-Led Service Cards Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 items-stretch">
          {serviceCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.article
                key={card.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative rounded-[22px] sm:rounded-[24px] bg-white/[0.88] backdrop-blur-xl border border-white/90 p-5 sm:p-5.5 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.025),inset_0_1px_0_rgba(255,255,255,0.95)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.065)] hover:-translate-y-1 transition-all duration-300 group min-w-0"
              >
                <div>
                  {/* 1. Visual / Image Area at the Top */}
                  <div className="mb-4.5">
                    {card.renderVisual()}
                  </div>

                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-8 h-8 rounded-[10px] bg-[#111111] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="w-3.5 h-3.5 stroke-[2]" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-[#777777]">
                        PROBLEM / SOLUTION
                      </span>
                    </div>
                    <span className="text-[12px] font-mono font-semibold tracking-wider text-[#888888]">
                      {card.num}
                    </span>
                  </div>

                  {/* 2. Problem-Led Title */}
                  <h3 className="text-[18px] sm:text-[19px] xl:text-[20px] font-medium text-[#0A0A0A] tracking-[-0.02em] leading-snug font-sans group-hover:text-black transition-colors">
                    {card.problemTitle}
                  </h3>

                  {/* 3. Short Supporting Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#555555] font-normal leading-[1.55] font-sans mt-2">
                    {card.description}
                  </p>
                </div>

                {/* 4. Exactly 4 Deliverable Chips at Bottom */}
                <div className="pt-3.5 mt-4.5 border-t border-black/[0.05] flex flex-wrap gap-1.5">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center text-[11px] font-medium text-[#444444] bg-black/[0.035] group-hover:bg-black/[0.05] rounded-[8px] px-2.5 py-1 tracking-tight transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner: Ways to Work With Us + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-9 rounded-[22px] sm:rounded-[24px] bg-white/[0.9] backdrop-blur-2xl border border-white p-5 sm:p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          {/* Left: Ways to work with us */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#111111] uppercase tracking-[0.08em] whitespace-nowrap">
              Ways to work with us:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {engagementModels.map((model) => (
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

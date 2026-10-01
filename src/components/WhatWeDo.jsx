import { useState } from 'react';
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
} from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const services = [
  {
    num: '01',
    title: 'Branding & Launch',
    category: 'IDENTITY × STRATEGY',
    description:
      'Build or refresh your business identity with strategy, design and launch-ready assets.',
    icon: Palette,
    deliverables: ['Brand Strategy', 'Logo & Identity', 'Packaging', 'Launch Assets'],
    accent: 'bg-[#111111]',
    badgeBg: 'bg-black/[0.04] text-[#111111]',
  },
  {
    num: '02',
    title: 'Websites & E-commerce',
    category: 'DIGITAL × COMMERCE',
    description:
      'Websites, landing pages and online stores built to present your business clearly and convert better.',
    icon: Globe,
    deliverables: ['Business Websites', 'Landing Pages', 'Online Stores', 'Redesigns'],
    accent: 'bg-[#111111]',
    badgeBg: 'bg-black/[0.04] text-[#111111]',
  },
  {
    num: '03',
    title: 'Apps & SaaS',
    category: 'SOFTWARE × PLATFORMS',
    description:
      'Custom digital products for businesses that need portals, dashboards, apps or scalable platforms.',
    icon: Layers,
    deliverables: ['Web Apps', 'Mobile Apps', 'SaaS Products', 'Admin Panels'],
    accent: 'bg-[#111111]',
    badgeBg: 'bg-black/[0.04] text-[#111111]',
  },
  {
    num: '04',
    title: 'Automation & Systems',
    category: 'AI × OPERATIONS',
    description:
      'Smart workflows that reduce manual work and improve enquiries, bookings, payments and follow-ups.',
    icon: Zap,
    deliverables: ['AI Automation', 'Lead Funnels', 'Booking Flows', 'Integrations'],
    accent: 'bg-[#111111]',
    badgeBg: 'bg-black/[0.04] text-[#111111]',
  },
  {
    num: '05',
    title: 'Content & Campaigns',
    category: 'CREATIVE × PRODUCTION',
    description:
      'Creative content and campaigns that help your brand look better, communicate better and grow faster.',
    icon: Film,
    deliverables: ['Social Media', 'Product Shoots', 'Reels & Films', 'CGI & Visuals'],
    accent: 'bg-[#111111]',
    badgeBg: 'bg-black/[0.04] text-[#111111]',
  },
  {
    num: '06',
    title: 'Digital Presence & Experience',
    category: 'PRESENCE × CUSTOMER',
    description:
      'Everything customers need to discover, contact, trust and take action with your business online.',
    icon: QrCode,
    deliverables: ['OneLink Cards', 'QR Systems', 'Reviews', 'Customer Journeys'],
    accent: 'bg-[#111111]',
    badgeBg: 'bg-black/[0.04] text-[#111111]',
  },
];

const engagementModels = [
  'One-time Projects',
  'Launch Packages',
  'Monthly Retainers',
  'Custom Solutions',
];

export default function WhatWeDo({ onContact }) {
  const [hoveredCard, setHoveredCard] = useState(null);

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
        
        {/* Top Header Section — Matching WhyKriyon & ExpertiseVentures */}
        <motion.div {...reveal(0)} className="mb-10 sm:mb-14">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              <PixelText text="03 // WHAT WE DO" delay={0.06} mode="birth" />
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans max-w-none">
            <PixelText text="What can we help you build?" delay={0.12} stagger={0.06} mode="birth" />
          </h2>

          {/* Subtitle — Single clean line on desktop */}
          <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
            <PixelText
              text="From branding and websites to apps, automation, content and customer experience — Kriyon brings everything together in one place."
              delay={0.3}
              stagger={0.035}
              mode="birth"
            />
          </p>
        </motion.div>

        {/* 6 Clean Apple Glass Boxes Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === item.num;

            return (
              <motion.article
                key={item.num}
                {...reveal(0.04 + idx * 0.05)}
                onMouseEnter={() => setHoveredCard(item.num)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative isolate overflow-hidden rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 flex flex-col justify-between min-h-[340px] sm:min-h-[360px] transition-all duration-500 ease-out cursor-default
                  bg-white/[0.80] hover:bg-white/[0.95]
                  backdrop-blur-2xl
                  border border-white/90 hover:border-white
                  shadow-[0_8px_32px_rgba(0,0,0,0.035),inset_0_1px_1px_rgba(255,255,255,1)]
                  hover:shadow-[0_20px_48px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)]
                  hover:-translate-y-1`}
              >
                {/* Subtle Apple-style frosted soft gradient highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-black/[0.04] to-transparent blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Top Section: Icon, Category Badge & Number */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Icon Tile with micro-bounce on hover */}
                    <div className="w-10 h-10 rounded-[13px] bg-[#111111] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-4 h-4 text-white stroke-[2.2]" />
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] sm:text-[10.5px] font-sans font-medium tracking-[0.14em] text-[#888888] uppercase bg-black/[0.035] px-2.5 py-1 rounded-[8px]">
                        {item.category}
                      </span>
                      <span className="text-[12px] font-mono font-semibold tracking-wider text-[#999999]">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[19px] sm:text-[20px] xl:text-[21px] font-semibold text-[#0A0A0A] tracking-[-0.025em] leading-[1.25] font-sans group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  {/* Client-Friendly Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#555555] font-normal leading-[1.55] font-sans mt-2.5">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Section: Deliverable Tags Chips */}
                <div className="relative z-10 pt-5 mt-5 border-t border-black/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[11px] font-medium text-[#444444] bg-black/[0.035] hover:bg-black/[0.06] rounded-[8px] px-2.5 py-1 tracking-tight transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Apple Glass Banner: Engagement Models + CTA */}
        <motion.div
          {...reveal(0.35)}
          className="mt-6 sm:mt-8 rounded-[24px] sm:rounded-[28px] bg-white/[0.88] hover:bg-white/[0.95] backdrop-blur-2xl border border-white/95 p-5 sm:p-6 md:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300"
        >
          {/* Left: Ways to work with us */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#111111] uppercase tracking-[0.1em] whitespace-nowrap">
              Ways to work with us:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {engagementModels.map((model) => (
                <span
                  key={model}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#222222] bg-[#F5F5F7] rounded-[10px] px-3 py-1.5 border border-black/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
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
              <span className="text-[10.5px] uppercase tracking-[0.14em] text-white/60 font-medium">
                Not sure where to start?
              </span>
              <span className="text-[13.5px] sm:text-[14px] font-medium text-white tracking-tight">
                Tell us what you need
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

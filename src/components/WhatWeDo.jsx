import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Globe,
  Layers,
  Cpu,
  Video,
  QrCode,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

// Clean SVGs for exact brand icons matching reference aesthetic
function BrandPenIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function SocialFilmIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="4" />
      <line x1="8" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="16" y2="21" />
      <line x1="2" y1="9" x2="8" y2="9" />
      <line x1="2" y1="15" x2="8" y2="15" />
      <line x1="16" y1="9" x2="22" y2="9" />
      <line x1="16" y1="15" x2="22" y2="15" />
    </svg>
  );
}

const services = [
  {
    num: '01',
    title: 'Branding & Launch',
    description:
      'Build or refresh your business identity with strategy, design and launch-ready assets.',
    icon: BrandPenIcon,
    deliverables: ['Brand Strategy', 'Logo & Identity', 'Packaging', 'Launch Assets'],
  },
  {
    num: '02',
    title: 'Websites & E-commerce',
    description:
      'Websites, landing pages and online stores built to present your business clearly and convert better.',
    icon: Globe,
    deliverables: ['Business Websites', 'Landing Pages', 'Online Stores', 'Redesigns'],
  },
  {
    num: '03',
    title: 'Apps & SaaS',
    description:
      'Custom digital products for businesses that need portals, dashboards, apps or scalable platforms.',
    icon: Layers,
    deliverables: ['Web Apps', 'Mobile Apps', 'SaaS Products', 'Admin Panels'],
  },
  {
    num: '04',
    title: 'Automation & Systems',
    description:
      'Smart workflows that reduce manual work and improve enquiries, bookings, payments and follow-ups.',
    icon: Cpu,
    deliverables: ['AI Automation', 'Lead Funnels', 'Booking Flows', 'Integrations'],
  },
  {
    num: '05',
    title: 'Content & Campaigns',
    description:
      'Creative content and campaigns that help your brand look better, communicate better and grow faster.',
    icon: SocialFilmIcon,
    deliverables: ['Social Media', 'Product Shoots', 'Reels & Films', 'CGI & Visuals'],
  },
  {
    num: '06',
    title: 'Digital Presence & Experience',
    description:
      'Everything customers need to discover, contact, trust and take action with your business online.',
    icon: QrCode,
    deliverables: ['OneLink Cards', 'QR Systems', 'Reviews', 'Customer Journeys'],
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
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Top Header Section */}
        <motion.div {...reveal(0)} className="mb-7 sm:mb-9">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 mb-2.5 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[18px] sm:w-[20px] h-[9.5px] sm:h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[11.5px] sm:text-[12.5px] font-sans font-medium tracking-[0.16em] text-[#111111] uppercase">
              <PixelText text="03 // WHAT WE DO" delay={0.06} />
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.14] font-sans max-w-none">
            <PixelText text="What can we help you build?" delay={0.12} stagger={0.05} />
          </h2>

          {/* Subtitle — Single clean line on desktop */}
          <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.5] mt-2 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
            <PixelText
              text="From branding and websites to apps, automation, content and customer experience — Kriyon brings everything together in one place."
              delay={0.22}
              stagger={0.03}
            />
          </p>
        </motion.div>

        {/* 6 Clean Apple Glass Boxes Grid — Proportioned sizing, tight & balanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {services.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.article
                key={item.num}
                {...reveal(0.03 + idx * 0.04)}
                onMouseEnter={() => setHoveredCard(item.num)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative isolate overflow-hidden rounded-[20px] sm:rounded-[22px] p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 ease-out cursor-default
                  bg-white/[0.84] hover:bg-white/[0.97]
                  backdrop-blur-2xl
                  border border-white/95 hover:border-white
                  shadow-[0_4px_18px_rgba(0,0,0,0.025),inset_0_1px_1px_rgba(255,255,255,1)]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.055),inset_0_1px_1px_rgba(255,255,255,1)]
                  hover:-translate-y-0.5"
              >
                {/* Top Section: Icon, Number, Title & Compact Description */}
                <div>
                  {/* Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-3.5">
                    {/* Modern Clean Rounded Dark Icon Tile */}
                    <div className="w-9 h-9 rounded-[11px] bg-[#111111] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-[18px] h-[18px] text-white stroke-[1.8]" />
                    </div>
                    <span className="text-[12px] font-mono font-medium tracking-wider text-[#888888]">
                      {item.num}
                    </span>
                  </div>

                  {/* Service Title — Clean font-medium with elegant spacing */}
                  <h3 className="text-[17px] sm:text-[18px] font-medium text-[#0A0A0A] tracking-[-0.02em] leading-snug font-sans group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  {/* Description — Close to title, no awkward gap */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#555555] font-normal leading-[1.48] font-sans mt-1.5">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Section: Deliverable Tags Chips */}
                <div className="pt-3.5 mt-3.5 flex flex-wrap gap-1.5 border-t border-black/[0.04]">
                  {item.deliverables.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[10.5px] sm:text-[11px] font-normal text-[#555555] bg-black/[0.03] hover:bg-black/[0.055] rounded-[7px] px-2 py-0.5 tracking-tight transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Apple Glass Banner: Engagement Models + CTA */}
        <motion.div
          {...reveal(0.25)}
          className="mt-5 sm:mt-6 rounded-[20px] sm:rounded-[22px] bg-white/[0.86] hover:bg-white/[0.96] backdrop-blur-2xl border border-white/95 p-4 sm:p-5 shadow-[0_8px_26px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 transition-all duration-300"
        >
          {/* Left: Ways to work with us */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
            <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#111111] uppercase tracking-[0.08em] whitespace-nowrap">
              Ways to work with us:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {engagementModels.map((model) => (
                <span
                  key={model}
                  className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-normal text-[#222222] bg-[#F5F5F7] rounded-[9px] px-2.5 py-1 border border-black/[0.04]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] stroke-[2]" />
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA Button */}
          <button
            type="button"
            onClick={handleScrollToContact}
            className="group inline-flex items-center justify-between gap-3.5 bg-[#111111] hover:bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-[14px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer text-left shrink-0"
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/60 font-medium">
                Not sure where to start?
              </span>
              <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-tight">
                Tell us what you need
              </span>
            </div>
            <div className="w-7 h-7 rounded-[9px] bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2]" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

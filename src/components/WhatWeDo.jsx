import { motion } from 'framer-motion';
import {
  Globe,
  Layers,
  Cpu,
  QrCode,
  ArrowRight,
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

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-22 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Top Header Section */}
        <motion.div {...reveal(0)} className="mb-7 sm:mb-8 lg:mb-9">
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
          <h2 className="text-[27px] sm:text-[31px] md:text-[34px] lg:text-[36px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans max-w-none">
            <PixelText text="What can we help you build?" delay={0.12} stagger={0.05} />
          </h2>

          {/* Subtitle */}
          <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#555555] font-normal leading-[1.5] mt-2 font-sans w-full max-w-none whitespace-normal xl:whitespace-nowrap">
            <PixelText
              text="From branding and websites to apps, automation, content and customer experience — Kriyon brings everything together in one place."
              delay={0.22}
              stagger={0.03}
            />
          </p>
        </motion.div>

        {/* One continuous capability surface: quieter and more premium than six detached cards. */}
        <div className="relative isolate overflow-hidden rounded-[22px] sm:rounded-[24px] border border-black/[0.06] bg-white/[0.26] shadow-[0_14px_42px_rgba(0,0,0,0.025)]">

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.article
                key={item.num}
                {...reveal(0.03 + idx * 0.04)}
                className={`group relative min-h-[210px] sm:min-h-[220px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-colors duration-500 ease-out cursor-default hover:bg-white/[0.34]
                  ${idx < services.length - 1 ? 'border-b border-black/[0.065]' : ''}
                  md:border-b-0 md:border-r-0
                  ${idx < 4 ? 'md:border-b md:border-black/[0.065]' : ''}
                  ${idx % 2 === 0 ? 'md:border-r md:border-black/[0.065]' : ''}
                  lg:border-b-0 lg:border-r-0
                  ${idx < 3 ? 'lg:border-b lg:border-black/[0.065]' : ''}
                  ${idx % 3 !== 2 ? 'lg:border-r lg:border-black/[0.065]' : ''}`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-7 sm:mb-8">
                    <div className="w-10 h-10 rounded-[13px] border border-black/[0.08] bg-white/60 group-hover:bg-[#111111] flex items-center justify-center text-[#111111] group-hover:text-white shadow-[0_3px_10px_rgba(0,0,0,0.025)] transition-all duration-500">
                      <IconComponent className="w-[18px] h-[18px] stroke-[1.7]" />
                    </div>
                    <span className="text-[12px] font-mono font-medium tracking-[0.12em] text-black/35 uppercase transition-colors duration-500 group-hover:text-black/60">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-[18px] sm:text-[19px] font-medium text-[#0A0A0A] tracking-[-0.025em] leading-snug font-sans group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="max-w-[360px] text-[13px] sm:text-[13.5px] text-[#5B5B5B] font-normal leading-[1.5] font-sans mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-5 flex items-end justify-between gap-4">
                  <p className="text-[10px] sm:text-[10.5px] font-medium uppercase tracking-[0.09em] text-black/40 leading-[1.5]">
                    {item.deliverables.join('  /  ')}
                  </p>
                  <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-black/25 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-black/70 group-hover:opacity-100" />
                </div>
              </motion.article>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}

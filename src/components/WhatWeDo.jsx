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

const services = [
  {
    num: '01',
    title: 'Start or Rebuild a Brand',
    description:
      'Brand strategy, identity, logo system, packaging, launch assets and complete brand setup.',
    icon: Palette,
    deliverables: ['Brand Strategy', 'Logo & Identity', 'Packaging', 'Launch Assets'],
  },
  {
    num: '02',
    title: 'Website & E-commerce',
    description:
      'Business websites, landing pages, online stores, booking websites, payment flows and redesigns.',
    icon: Globe,
    deliverables: ['Business Sites', 'Online Stores', 'Landing Pages', 'Redesigns'],
  },
  {
    num: '03',
    title: 'Apps, SaaS & Digital Products',
    description:
      'Web apps, mobile apps, SaaS products, dashboards, portals and custom business platforms.',
    icon: Layers,
    deliverables: ['Web Apps', 'Mobile Apps', 'SaaS Platforms', 'Admin Portals'],
  },
  {
    num: '04',
    title: 'Automation & Customer Systems',
    description:
      'AI automation, workflows, lead funnels, enquiry systems, bookings, payments and integrations.',
    icon: Zap,
    deliverables: ['AI Automations', 'Lead Funnels', 'Payment Flows', 'Integrations'],
  },
  {
    num: '05',
    title: 'Content, Social & Campaigns',
    description:
      'Social media management, campaigns, product photography, reels, films, CGI and creative content.',
    icon: Film,
    deliverables: ['Campaigns', 'Product Shoots', 'Reels & Films', '3D & CGI'],
  },
  {
    num: '06',
    title: 'Digital Presence & Customer Experience',
    description:
      'OneLink, QR systems, reviews, contact journeys, catalogues, customer actions and unified digital presence.',
    icon: QrCode,
    deliverables: ['OneLink Cards', 'QR Systems', 'Review Flows', 'Digital Journeys'],
  },
];

const engagementModels = [
  'One-time Projects',
  'Launch Packages',
  'Monthly Retainers',
  'Custom Packages',
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
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-none w-full">
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
              <PixelText text="What do you need help with?" delay={0.12} stagger={0.06} />
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-[820px]">
              <PixelText
                text="Starting something new or improving an existing business? We can handle the brand, technology, content and digital experience in one place."
                delay={0.24}
                stagger={0.035}
              />
            </p>
          </div>
        </div>

        {/* 6 Clean Service Cards Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 items-stretch">
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative rounded-[22px] sm:rounded-[24px] bg-white/[0.84] backdrop-blur-xl border border-white/90 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.025),inset_0_1px_0_rgba(255,255,255,0.95)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-white transition-all duration-300 group min-w-0"
              >
                <div>
                  {/* Card Header: Icon + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-[#111111] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[12px] font-mono font-semibold tracking-wider text-[#888888]">
                      {item.num}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[18px] sm:text-[19px] xl:text-[20px] font-medium text-[#0A0A0A] tracking-[-0.02em] leading-snug font-sans group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  {/* Simple Client-Friendly Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#555555] font-normal leading-[1.55] font-sans mt-2.5">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Tags */}
                <div className="pt-4 mt-5 border-t border-black/[0.05] flex flex-wrap gap-1.5">
                  {item.deliverables.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[11px] font-medium text-[#555555] bg-black/[0.035] rounded-[8px] px-2.5 py-1 tracking-tight"
                    >
                      {tag}
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
          className="mt-6 sm:mt-8 rounded-[22px] sm:rounded-[24px] bg-white/[0.88] backdrop-blur-2xl border border-white p-5 sm:p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
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
            className="group inline-flex items-center justify-between gap-3 bg-[#111111] hover:bg-black text-white px-5 sm:px-6 py-3.5 rounded-[16px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer text-left shrink-0"
          >
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.14em] text-white/60 font-medium">
                Not sure what you need?
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

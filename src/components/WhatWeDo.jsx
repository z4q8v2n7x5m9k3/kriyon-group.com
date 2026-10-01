import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';
import './WhatWeDo.css';

const services = [
  {
    id: '01',
    title: 'Web & Product Design',
    desc: 'We design premium digital experiences that make your brand look credible, guide users clearly and turn visitors into customers.',
    tags: ['Landing Pages', 'Product Interfaces', 'E-commerce Platforms'],
    images: [
      '/assets/what-we-do/mockup-28.webp',
      '/assets/what-we-do/iphone-16-pro.webp',
    ],
  },
  {
    id: '02',
    title: 'Website & App Development',
    desc: 'We engineer ultra-fast websites, modern web applications, and custom digital infrastructure built for performance, security, and scalability.',
    tags: ['Web Development', 'Mobile Apps', 'Custom Portals'],
    images: [
      '/assets/what-we-do/free-iphone-air.webp',
      '/assets/what-we-do/iphone-16-pro.webp',
    ],
  },
  {
    id: '03',
    title: 'Branding & Identity',
    desc: 'Distinctive visual identities and practical brand systems that help businesses communicate clearly, stand confidently and stay consistent everywhere.',
    tags: ['Brand Strategy', 'Logo Systems', 'Packaging Design'],
    images: [
      '/assets/what-we-do/brand-identities-1.webp',
      '/assets/what-we-do/hero-image.webp',
    ],
  },
  {
    id: '04',
    title: 'Automation & Business Systems',
    desc: 'Smart workflows and connected systems that eliminate repetitive manual tasks and accelerate leads, bookings, payments and operations.',
    tags: ['AI Automation', 'Lead Funnels', 'Booking Systems'],
    images: [
      '/assets/what-we-do/mockup-28.webp',
      '/assets/what-we-do/free-iphone-air.webp',
    ],
  },
  {
    id: '05',
    title: 'Content, Campaigns & Production',
    desc: 'Creative commercial campaigns, product photography, editorial reels and CGI that give your business a distinctive, premium visual presence.',
    tags: ['Brand Shoots', 'Campaign Films', 'Motion Graphics'],
    images: [
      '/assets/what-we-do/hero-image.webp',
      '/assets/what-we-do/mockup-28.webp',
    ],
  },
  {
    id: '06',
    title: 'Digital Presence & Customer Experience',
    desc: 'Everything that helps customers discover, trust, contact and take action with your business online — from smart QR touchpoints to booking flows.',
    tags: ['OneLink Cards', 'QR Systems', 'Reviews'],
    images: [
      '/assets/what-we-do/free-iphone-air.webp',
      '/assets/what-we-do/iphone-16-pro.webp',
    ],
  },
];

export default function WhatWeDo({ onContact }) {
  const [openServices, setOpenServices] = useState(() => new Set(['01']));

  const toggleService = (serviceId) => {
    setOpenServices((current) => {
      const next = new Set();
      if (!current.has(serviceId)) {
        next.add(serviceId);
      }
      return next;
    });
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
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 border-b border-black/[0.04]"
    >
      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Top Header Section - Exact Placement & Sizing matching Section 03 & Section 04 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="max-w-none w-full">
            {/* Clean Section Indicator: Pixel arrow + uppercase tag */}
            <div className="inline-flex items-center gap-2.5 mb-4 select-none">
              <div className="flex items-center shrink-0">
                <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
              </div>
              <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
                <PixelText text="02 // CAPABILITIES" delay={0.06} />
              </span>
            </div>

            {/* Main Headline matching Section 03/04 font and size */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans">
              <PixelText text="Everything your brand needs to be remembered." delay={0.12} stagger={0.06} />
            </h2>

            {/* Subtitle matching Section 03/04 font and size */}
            <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
              <PixelText
                text="From identity and campaigns to content, production and digital products, every capability is engineered under one group."
                delay={0.3}
                stagger={0.04}
              />
            </p>
          </div>
        </div>

        {/* Services Accordion List - Slimmer, Compact Boxes aligned with Kriyon brand */}
        <div className="kriyon-services-accordion">
          {services.map((service, index) => {
            const isOpen = openServices.has(service.id);
            return (
              <motion.article
                key={service.id}
                className={`kriyon-service-item ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-45px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Trigger Button */}
                <button
                  className="kriyon-service-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.id}`}
                  onClick={() => toggleService(service.id)}
                >
                  <span className="kriyon-service-index">{service.id}</span>
                  <span className="kriyon-service-spark" aria-hidden="true" />
                  <span className="kriyon-service-title">{service.title}</span>
                  <span className="kriyon-service-toggle" aria-hidden="true">
                    <span className="kriyon-toggle-line kriyon-toggle-line-horizontal" />
                    <span className="kriyon-toggle-line kriyon-toggle-line-vertical" />
                  </span>
                </button>

                {/* Panel Drawer */}
                <div
                  className={`kriyon-service-shell ${isOpen ? 'is-visible' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="kriyon-service-clip">
                    <div id={`service-panel-${service.id}`} className="kriyon-service-panel">
                      {/* Left: Copy, Tags & Discuss Action */}
                      <div className="kriyon-service-copy">
                        <p>{service.desc}</p>
                        <div className="kriyon-service-tags">
                          {service.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                          <span className="kriyon-tag-count">+2</span>
                        </div>
                        <div className="kriyon-service-action">
                          <button
                            type="button"
                            onClick={handleScrollToContact}
                            className="kriyon-service-discuss-link"
                          >
                            <span>Discuss {service.title}</span>
                            <ArrowUpRight size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Right: Compact 2-Image Angled Collage Mockup */}
                      <motion.div
                        className="kriyon-service-visual"
                        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.98 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {service.images.map((image, imageIndex) => (
                          <img
                            className={`kriyon-collage-image kriyon-collage-image-${imageIndex + 1}`}
                            src={image}
                            alt=""
                            key={image}
                            loading="lazy"
                          />
                        ))}
                      </motion.div>
                      <h3 className="kriyon-service-mobile-title">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

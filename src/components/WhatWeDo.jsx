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
      // Single expand accordion: if already open, toggle off, else open selected
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
    <section className="bragit-services-section" id="what-we-do">
      <div className="bragit-services-container">
        {/* Top Header Section - Exact same-to-same as Section 03 */}
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
            <PixelText text="Everything your brand needs to be remembered." delay={0.12} stagger={0.05} />
          </h2>

          <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
            <PixelText
              text="From identity and campaigns to content, production and digital products, every capability is engineered under one group."
              delay={0.28}
              stagger={0.03}
            />
          </p>
        </div>

        {/* Services Accordion List */}
        <div className="bragit-services-accordion">
          {services.map((service, index) => {
            const isOpen = openServices.has(service.id);
            return (
              <motion.article
                key={service.id}
                className={`bragit-service-item ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-45px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Trigger Button */}
                <button
                  className="bragit-service-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.id}`}
                  onClick={() => toggleService(service.id)}
                >
                  <span className="bragit-service-index">{service.id}</span>
                  <span className="bragit-service-spark" aria-hidden="true" />
                  <span className="bragit-service-title">{service.title}</span>
                  <span className="bragit-service-toggle" aria-hidden="true">
                    <span className="bragit-toggle-line bragit-toggle-line-horizontal" />
                    <span className="bragit-toggle-line bragit-toggle-line-vertical" />
                  </span>
                </button>

                {/* Panel Drawer */}
                <div
                  className={`bragit-service-shell ${isOpen ? 'is-visible' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="bragit-service-clip">
                    <div id={`service-panel-${service.id}`} className="bragit-service-panel">
                      {/* Left: Copy, Tags & Discuss Action */}
                      <div className="bragit-service-copy">
                        <p>{service.desc}</p>
                        <div className="bragit-service-tags">
                          {service.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                          <span className="bragit-tag-count">+2</span>
                        </div>
                        <div className="bragit-service-action">
                          <button
                            type="button"
                            onClick={handleScrollToContact}
                            className="bragit-service-discuss-link"
                          >
                            <span>Discuss {service.title}</span>
                            <ArrowUpRight size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Right: Exact 2-Image Angled Collage Mockup */}
                      <motion.div
                        className="bragit-service-visual"
                        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.97 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {service.images.map((image, imageIndex) => (
                          <img
                            className={`bragit-collage-image bragit-collage-image-${imageIndex + 1}`}
                            src={image}
                            alt=""
                            key={image}
                            loading="lazy"
                          />
                        ))}
                      </motion.div>
                      <h3 className="bragit-service-mobile-title">{service.title}</h3>
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

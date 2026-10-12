import { useState } from 'react';
import { motion } from 'framer-motion';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

export default function ExpertiseVentures({ onContact }) {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const cards = [
    {
      id: 'repixelx',
      ventureNum: '01',
      badge: 'AI × BRAND LAB',
      statusText: 'STUDIO // ACTIVE',
      accentColor: '#88EA15',
      accentGlow: 'rgba(136, 234, 21, 0.18)',
      accentBorder: 'rgba(136, 234, 21, 0.35)',
      accentBg: 'rgba(136, 234, 21, 0.08)',
      title: 'RepixelX AI Studio',
      titleRender: 'RepixelX AI Studio',
      image: '/assets/venture-repixelx.png',
      imageAlt: 'RepixelX AI Studio Brand & Technology',
      imageBg: 'bg-black',
      body: 'Brand systems and digital products built to make businesses clearer, faster and ready to scale.',
      tags: [
        'Branding',
        'Websites',
        'Web Apps',
        'Mobile Apps',
        'E-commerce',
        'AI Automations',
        'UI/UX',
      ],
      actionWord: 'BUILD',
      category: 'Brand + Technology',
      supportLine: 'Identity through digital execution.',
      ctaText: 'Visit RepixelX',
      ctaLink: 'https://repixelx.com',
      domain: 'repixelx.com',
    },
    {
      id: 'kriyon-media',
      ventureNum: '02',
      badge: 'CINEMATIC // 4K RAW',
      statusText: 'PRODUCTION // LIVE',
      accentColor: '#F59E0B',
      accentGlow: 'rgba(245, 158, 11, 0.18)',
      accentBorder: 'rgba(245, 158, 11, 0.35)',
      accentBg: 'rgba(245, 158, 11, 0.08)',
      title: 'Kriyon Media',
      titleRender: 'Kriyon Media',
      image: '/assets/venture-media-new.jpg',
      imageAlt: 'Kriyon Media Creative Production',
      imageBg: 'bg-black',
      body: 'Campaigns, photography, film and CGI that give brands a distinctive, consistent visual voice.',
      tags: [
        'Campaigns',
        'Photography',
        'Reels & Films',
        'CGI & 3D',
        'Product Visuals',
        'AI Production',
      ],
      actionWord: 'CREATE',
      category: 'Creative Production',
      supportLine: 'Concept through final production.',
      ctaText: 'Visit Kriyon Media',
      ctaLink: 'https://www.kriyonmedia.com',
      domain: 'kriyonmedia.com',
    },
    {
      id: 'onelink',
      ventureNum: '03',
      badge: 'NFC 3.0 // DYNAMIC TOUCH',
      statusText: 'INSTANT SYNC // READY',
      accentColor: '#3B82F6',
      accentGlow: 'rgba(59, 130, 246, 0.18)',
      accentBorder: 'rgba(59, 130, 246, 0.35)',
      accentBg: 'rgba(59, 130, 246, 0.08)',
      title: 'OneLink Cards',
      titleRender: 'OneLink Cards',
      image: '/assets/onelink-mockup-new.jpg',
      imageAlt: 'OneLink Cards Smart Digital Presence',
      imageBg: 'bg-[#050B14]',
      body: 'Smart digital cards that turn every customer touchpoint into a clear, useful next action.',
      tags: [
        'Smart Cards',
        'QR Access',
        'Bookings',
        'Payments',
        'Reviews',
        'Contact Actions',
      ],
      actionWord: 'CONNECT',
      category: 'Digital Presence',
      supportLine: 'Every key action in one smart link.',
      ctaText: 'Explore OneLink',
      ctaLink: 'https://www.onelink.cards',
      domain: 'onelink.cards',
    },
  ];

  const handleStartProject = () => {
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
      id="expertise"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-22 px-4 sm:px-8 lg:px-12"
    >
      {/* Anchor for Ventures smooth scrolling */}
      <div id="ventures" className="absolute -top-12 left-0 pointer-events-none" />

      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-7 sm:mb-8">
          <div className="max-w-none w-full">
            {/* Clean Section Indicator: Pixel arrow + clean slash text */}
            <div className="inline-flex items-center gap-2.5 mb-3.5 select-none">
              <div className="flex items-center shrink-0">
                <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
              </div>
              <span className="text-[11.5px] sm:text-[12px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
                <PixelText text="02 // SPECIALIST VENTURES" delay={0.06} />
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.14] font-sans">
              <PixelText text="Specialist capability, connected around you." delay={0.12} stagger={0.06} />
            </h2>

            {/* Subtitle */}
            <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#555555] font-normal leading-[1.5] mt-2.5 font-sans w-full max-w-none xl:whitespace-nowrap">
              <PixelText
                text="Three focused ventures. One clear route from strategy and identity to production, technology and customer action."
                delay={0.25}
                stagger={0.03}
              />
            </p>
          </div>

          {/* Right Header Button: Start a Project */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <button
              onClick={handleStartProject}
              onMouseEnter={() => setHoveredBtn('header-cta')}
              onMouseLeave={() => setHoveredBtn(null)}
              className="h-[50px] sm:h-[52px] inline-flex items-center justify-between p-1.5 rounded-[18px] bg-white/80 hover:bg-white backdrop-blur-xl text-[#0A0A0A] border border-white/90 shadow-sm transition-all duration-200 group active:scale-95 cursor-pointer focus:outline-none relative z-10"
            >
              <div className="bg-[#111111] rounded-[12px] h-[38px] w-[42px] flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden flex-shrink-0 shadow-sm pointer-events-none">
                <PixelatedIcon
                  className="w-[21px] sm:w-[23px] h-[10.5px] sm:h-[11.5px]"
                  color="#FFFFFF"
                  isHovered={hoveredBtn === 'header-cta'}
                />
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-medium text-[#0A0A0A] px-3.5 tracking-tight font-sans whitespace-nowrap pointer-events-none">
                Start a Project
              </span>
              <div className="w-1 pointer-events-none" />
            </button>
          </div>
        </div>

        {/* 3 Bespoke Premium Venture Cards: RepixelX × Kriyon Media × OneLink */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {cards.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative isolate w-full rounded-[24px] sm:rounded-[26px] overflow-hidden flex flex-col p-4 sm:p-[18px] transition-all duration-500 ease-out hover:-translate-y-0.5
                bg-gradient-to-b from-white/[0.52] via-white/[0.40] to-white/[0.34]
                hover:from-white/[0.64] hover:via-white/[0.50] hover:to-white/[0.43]
                backdrop-blur-2xl
                border border-white/75 hover:border-white/95
                shadow-[0_10px_30px_rgba(0,0,0,0.035),inset_0_1px_0_rgba(255,255,255,0.85)]
                hover:shadow-[0_18px_42px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.98)]"
            >
              {/* Apple 3D Glass Ambient Depth Spheres */}
              <div className="pointer-events-none absolute -right-12 -top-12 z-0 h-44 w-44 rounded-full bg-white/75 blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-700" aria-hidden="true" />

              {/* Apple Diagonal Glass Reflection Sheen */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/35 via-transparent to-black/[0.015]" aria-hidden="true" />

              {/* 1. Clean Cinematic Image Window */}
              <div className="relative z-10 w-full rounded-[16px] sm:rounded-[18px] overflow-hidden shadow-[0_5px_18px_rgba(0,0,0,0.055)] group/img">
                <a
                  href={card.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${card.title}`}
                  className={`relative w-full h-[202px] sm:h-[212px] xl:h-[220px] overflow-hidden block ${card.imageBg} cursor-pointer`}
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                    loading="lazy"
                  />

                  {/* Subtle Vignette for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </a>
              </div>

              {/* Lower Content Body */}
              <div className="relative z-10 flex flex-col flex-1 px-2 pt-4 sm:pt-[18px] pb-1">
                
                {/* 2. Venture Title + Clean Monospace Number */}
                <div className="flex items-baseline justify-between gap-3">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] sm:text-[21px] xl:text-[22px] font-medium text-[#0A0A0A] hover:text-[#222222] tracking-[-0.025em] leading-tight font-sans transition-colors cursor-pointer"
                  >
                    <PixelText text={card.titleRender || card.title} delay={0.06 * (idx + 1)} />
                  </a>
                  <span className="text-[12px] sm:text-[12.5px] font-mono text-[#888888] font-medium tracking-wider select-none shrink-0">
                    {card.ventureNum}
                  </span>
                </div>

                {/* 3. Short Description */}
                <div className="mt-2 min-h-[46px] sm:min-h-[48px] flex items-start">
                  <p className="text-[13.5px] sm:text-[14px] text-[#585858] font-normal leading-[1.5] font-sans">
                    {card.body}
                  </p>
                </div>

                {/* 4. Capability Badges: Refined Apple Glass Pills */}
                <div className="mt-4 min-h-[66px] flex flex-wrap content-start items-center gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-[9px] bg-white/48 hover:bg-white/78 backdrop-blur-md text-[11.5px] sm:text-[12px] font-normal text-[#292929] border border-white/75 font-sans leading-none transition-all duration-300 whitespace-nowrap cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider Line */}
                <div className="mt-4 pt-3.5 border-t border-black/[0.06] w-full flex items-center justify-between gap-4">
                  {/* Clean Action Word */}
                  <div className="flex items-center">
                    <span className="text-[19px] sm:text-[20px] font-bold text-[#0A0A0A] tracking-tight font-sans">
                      <PixelText text={card.actionWord} delay={0.1 * (idx + 1)} />
                    </span>
                  </div>

                  <div className="ml-auto flex min-w-0 flex-col items-end text-right">
                    <span className="text-[12.5px] sm:text-[13px] font-bold text-[#111111] leading-tight font-sans">
                      {card.category}
                    </span>
                    <span className="mt-0.5 text-[11px] sm:text-[11.5px] text-[#666666] font-sans leading-tight">
                      {card.supportLine}
                    </span>
                  </div>
                </div>

                {/* 5. Venture CTA Button */}
                <div className="pt-3.5">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredBtn(card.id)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    className="h-[50px] sm:h-[52px] w-full inline-flex items-center justify-between p-1.5 rounded-[16px] sm:rounded-[18px] bg-[#111111] hover:bg-black text-white border border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 group/btn active:scale-[0.98] cursor-pointer focus:outline-none relative z-10"
                  >
                    {/* Left Squircle Badge with Animated Pixel Chevron */}
                    <div
                      className="rounded-[11px] sm:rounded-[12px] h-[36px] sm:h-[38px] w-[40px] sm:w-[44px] bg-white flex items-center justify-center transition-transform group-hover/btn:scale-105 overflow-hidden flex-shrink-0 shadow-sm pointer-events-none"
                    >
                      <PixelatedIcon
                        className="w-[21px] sm:w-[23px] h-[10.5px] sm:h-[11.5px]"
                        color="#111111"
                        isHovered={hoveredBtn === card.id}
                      />
                    </div>

                    {/* Centered Button Label */}
                    <span className="text-[13.5px] sm:text-[14px] font-medium text-white px-2.5 sm:px-3 tracking-tight font-sans whitespace-nowrap pointer-events-none">
                      {card.ctaText}
                    </span>

                    {/* Right Arrow */}
                    <div className="w-6 flex items-center justify-center pointer-events-none pr-2">
                      <span className="text-[14px] text-white/70 group-hover/btn:text-white transition-all duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </div>
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

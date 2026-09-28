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
      title: 'RepixelX AI Studio',
      titleRender: 'RepixelX AI Studio',
      image: '/assets/venture-repixelx.png',
      imageAlt: 'RepixelXAI Studio Brand & Technology',
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
    },
    {
      id: 'kriyon-media',
      ventureNum: '02',
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
    },
    {
      id: 'onelink',
      ventureNum: '03',
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
    },
  ];

  const handleStartProject = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onContact) {
      onContact();
    }
  };

  return (
    <section
      id="expertise"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12"
    >
      {/* Anchor for Ventures smooth scrolling */}
      <div id="ventures" className="absolute -top-12 left-0 pointer-events-none" />

      <div className="relative w-full max-w-[1460px] mx-auto min-w-0">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="max-w-none w-full">
            {/* Clean Section Indicator: Pixel arrow + clean slash text (PP Neue Montreal font-sans) */}
            <div className="inline-flex items-center gap-2.5 mb-4 select-none">
              <div className="flex items-center shrink-0">
                <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
              </div>
              <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
                <PixelText text="02 // CAPABILITIES & VENTURES" delay={0.06} />
              </span>
            </div>

            {/* Main Headline with slow, visible, cinematic pixel formation */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans">
              <PixelText text="Specialist capability, connected around you." delay={0.12} speed={36} />
            </h2>

            {/* Subtitle — Full one horizontal line with Frosted Glass Reveal */}
            <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#555555] font-normal leading-[1.55] mt-3 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
              <PixelText
                text="Three focused ventures. One clear route from strategy and identity to production, technology and customer action."
                delay={0.22}
                stagger={0.02}
              />
            </p>
          </div>

          {/* Right Header Button: Start a Project */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <button
              onClick={handleStartProject}
              onMouseEnter={() => setHoveredBtn('header-cta')}
              onMouseLeave={() => setHoveredBtn(null)}
              className="h-[50px] sm:h-[52px] inline-flex items-center justify-between p-1.5 rounded-[18px] bg-white hover:bg-[#F5F5F7] text-[#0A0A0A] border border-black/[0.06] shadow-sm transition-all duration-200 group active:scale-95 cursor-pointer focus:outline-none relative z-10"
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

        {/* 3 Venture Cards: BUILD -> CREATE -> CONNECT (Identical Visual Rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 items-stretch">
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
              className="relative w-full rounded-[24px] sm:rounded-[26px] overflow-hidden bg-white/[0.76] backdrop-blur-2xl border border-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.035),inset_0_1px_0_rgba(255,255,255,0.95)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.065)] hover:border-white group transition-all duration-300 flex flex-col justify-between p-3 sm:p-3.5 z-10"
            >
              {/* 1. Image Box with Film Grain Texture (Clickable link to venture) */}
              <a
                href={card.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${card.title}`}
                className={`relative w-full h-[214px] sm:h-[222px] xl:h-[228px] rounded-[18px] sm:rounded-[19px] overflow-hidden block ${card.imageBg} cursor-pointer group/img`}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                  loading="lazy"
                />

                {/* Cinematic Film Grain Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.20] mix-blend-overlay z-[2]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                  }}
                />
              </a>

              {/* Lower Content Body: Exactly Aligned Visual Rhythm Across All 3 Cards */}
              <div className="flex flex-col flex-1 px-2.5 sm:px-3 pt-4 sm:pt-4.5 pb-1">
                {/* 2. Venture title + small 01/02/03 (Venture Name: bold/strong, clean sans-serif) */}
                <div className="flex items-baseline justify-between gap-3">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[21px] sm:text-[23px] xl:text-[24px] font-medium text-[#0A0A0A] hover:text-[#333333] tracking-[-0.025em] leading-tight font-sans transition-colors cursor-pointer"
                  >
                    <PixelText text={card.titleRender || card.title} delay={0.06 * (idx + 1)} />
                  </a>
                  <span className="text-[12px] sm:text-[13px] font-sans text-[#888888] font-medium tracking-wider select-none shrink-0">
                    <PixelText text={card.ventureNum} delay={0.04 * (idx + 1)} />
                  </span>
                </div>

                {/* Title -> description: 14-16px */}
                {/* 3. One short description (Regular, highly readable, identical min-height) */}
                <div className="mt-2.5 min-h-[54px] sm:min-h-[56px] flex items-start">
                  <p className="text-[13.5px] sm:text-[14px] text-[#555555] font-normal leading-[1.55] font-sans">
                    {card.body}
                  </p>
                </div>

                {/* Description -> badges: 18-20px */}
                {/* 4. Capability badges: medium weight, compact and clean, balanced height */}
                <div className="mt-3.5 min-h-[72px] flex flex-wrap content-start items-center gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-3.5 py-1.5 sm:py-[7px] rounded-[10px] bg-white/[0.84] backdrop-blur-md hover:bg-white text-[12px] sm:text-[12.5px] font-medium text-[#252525] border border-white shadow-[0_2px_8px_rgba(0,0,0,0.035),inset_0_0_0_1px_rgba(0,0,0,0.035)] font-sans transition-colors whitespace-nowrap cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Badges -> divider: 22-26px */}
                <div className="mt-4 border-t border-black/[0.06] w-full" />

                {/* Divider -> BUILD / CREATE / CONNECT block: 20-24px */}
                {/* 6 & 7. Large action word + Short category + one support line */}
                <div className="pt-4 flex items-center gap-3 min-h-[44px]">
                  <span className="text-[24px] sm:text-[26px] font-bold text-[#0A0A0A] tracking-tight font-sans shrink-0 w-[110px] sm:w-[120px]">
                    <PixelText text={card.actionWord} delay={0.1 * (idx + 1)} />
                  </span>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[13px] sm:text-[13.5px] font-bold text-[#111111] leading-tight font-sans truncate">
                      {card.category}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] text-[#666666] mt-0.5 font-sans leading-tight truncate">
                      {card.supportLine}
                    </span>
                  </div>
                </div>

                {/* Highlight block -> CTA: 24-28px (All CTA buttons sit on exactly the same baseline via mt-auto) */}
                {/* 8. CTA button */}
                <div className="mt-auto pt-4">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredBtn(card.id)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    className="h-[50px] sm:h-[52px] w-full inline-flex items-center justify-between p-1.5 rounded-[16px] sm:rounded-[18px] bg-[#111111] hover:bg-black text-white border border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 group/btn active:scale-[0.98] cursor-pointer focus:outline-none relative z-10"
                  >
                    {/* Left Squircle Badge with Animated Pixel Chevron */}
                    <div className="rounded-[11px] sm:rounded-[12px] h-[36px] sm:h-[38px] w-[40px] sm:w-[44px] bg-white flex items-center justify-center transition-transform group-hover/btn:scale-105 overflow-hidden flex-shrink-0 shadow-sm pointer-events-none">
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

                    {/* Right spacer for balanced optical centering */}
                    <div className="w-3 pointer-events-none" />
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

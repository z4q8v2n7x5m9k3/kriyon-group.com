import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';

export default function Hero({ onContact, isLoaded = true }) {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const ventures = [
    {
      id: 'repixelx',
      name: 'RepixelX AI Studio',
      descriptor: '// Brand × Technology',
      tag: 'VENTURE 01 / 03',
      image: '/assets/venture-repixelx.png',
    },
    {
      id: 'kriyon-media',
      name: 'Kriyon Media',
      descriptor: '// Creative × Production',
      tag: 'VENTURE 02 / 03',
      image: '/assets/venture-media-new.jpg',
    },
    {
      id: 'onelink',
      name: 'OneLink Cards',
      descriptor: '// Presence × Action',
      tag: 'VENTURE 03 / 03',
      image: '/assets/onelink-mockup-new.jpg',
    },
  ];

  // Auto-shift venture slides every 5.0 seconds with smooth crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ventures.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ventures.length]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % ventures.length);
  };

  const clientLogos = [
    {
      src: '/assets/client-logos/02-nimbark-organic.png',
      alt: 'Nimbark Organic',
      className: 'h-[26px] sm:h-[30px] md:h-[32px]',
    },
    {
      src: '/assets/client-logos/01-mera-halwai.png',
      alt: 'Mera Halwai',
      className: 'h-[24px] sm:h-[28px] md:h-[30px]',
    },
    {
      src: '/assets/client-logos/04-novelle.png',
      alt: 'Novelle',
      className: 'h-[24px] sm:h-[28px] md:h-[30px]',
    },
    {
      src: '/assets/client-logos/18-burger-bazaar.png',
      alt: 'Burger Bazaar',
      className: 'h-[28px] sm:h-[32px] md:h-[35px]',
    },
    {
      src: '/assets/client-logos/05-nd-chair-parts.png',
      alt: 'ND Chair Parts',
      className: 'h-[34px] sm:h-[40px] md:h-[44px]',
    },
    {
      src: '/assets/client-logos/13-shaheen-express.png',
      alt: 'Shaheen Express',
      className: 'h-[24px] sm:h-[28px] md:h-[30px]',
    },
    {
      src: '/assets/client-logos/06-ara-the-beauty-club.png',
      alt: 'Ara The Beauty Club',
      className: 'h-[28px] sm:h-[32px] md:h-[35px]',
    },
    { src: '/assets/client-logos/11-house-of-nirva.png', alt: 'House of Nirva' },
    { src: '/assets/client-logos/12-imeanddesign.png', alt: 'IME & Design' },
    { src: '/assets/client-logos/14-swizzle.png', alt: 'Swizzle' },
    { src: '/assets/client-logos/15-the-bark-yard.png', alt: 'The Bark Yard' },
    { src: '/assets/client-logos/16-gulabchand-kirni-wala.png', alt: 'Gulabchand Kirni Wala' },
    { src: '/assets/client-logos/17-harvest-table-co.png', alt: 'Harvest Table Co.' },
    { src: '/assets/client-logos/07-doua.png', alt: 'Doua' },
    { src: '/assets/client-logos/09-one-d.png', alt: 'One-D' },
    { src: '/assets/client-logos/10-mango.png', alt: 'Mango' },
  ];

  const currentVenture = ventures[activeSlide];

  const handleScrollToCapabilities = () => {
    const el = document.getElementById('expertise') || document.getElementById('ventures');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full max-w-full overflow-hidden p-2 sm:p-3 bg-[#EDEFEF] min-h-screen flex flex-col">
      {/* Outer Rounded Container with clean #EDEFEF and no gradient */}
      <div className="relative w-full max-w-full flex-1 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#EDEFEF] flex flex-col justify-between pt-[11vh] sm:pt-[13vh] lg:pt-[15vh] pb-6 sm:pb-8 px-4 sm:px-10 lg:px-[5vw] min-h-[calc(100vh-20px)] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/[0.04]">
        
        {/* Background Layer: Real Image Colours with 100% FULL OPACITY */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0 overflow-hidden flex items-end justify-center w-full h-[460px] sm:h-auto" aria-hidden="true">
          <motion.img
            src="/assets/kriyon-hill-render.png"
            alt=""
            initial={{ opacity: 0, y: 45, scale: 1.05 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 45, scale: 1.05 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full sm:h-auto object-cover md:object-contain object-bottom pointer-events-none block scale-135 sm:scale-100 origin-bottom"
          />
        </div>

        {/* Hero Content Grid (Left Text & Right Rotating Venture Card) */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-14 min-w-0">
          
          {/* Left Column: Parent Brand Headline, Copy & Action Group */}
          <div className="flex flex-col items-start text-left max-w-[640px] sm:max-w-[760px] xl:max-w-[820px] w-full min-w-0">
            
            {/* Main Headline: Dominant Parent Brand Presence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-full min-w-0"
            >
              <h1 className="font-sans text-left tracking-tight min-w-0">
                <span className="text-[30px] min-[390px]:text-[34px] sm:text-[42px] md:text-[47px] lg:text-[52px] font-medium text-[#111111] tracking-[-0.03em] leading-[1.12] block">
                  Kriyon Group Pvt. Ltd.
                </span>
                <span className="text-[27px] min-[390px]:text-[31px] sm:text-[38px] md:text-[43px] lg:text-[47px] font-normal text-[#666666] tracking-[-0.025em] leading-[1.15] block mt-1 sm:mt-1.5">
                  Built for what comes next.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14.5px] min-[390px]:text-[15px] sm:text-[16px] xl:text-[17px] text-[#444444] font-normal tracking-[-0.015em] leading-[1.6] max-w-[500px] sm:max-w-[560px] xl:max-w-[620px] mt-4 sm:mt-5 text-left font-sans"
            >
              Bringing brand, technology, creative production and digital experience into one connected force for businesses ready to build bigger, move faster and grow further.
            </motion.p>

            {/* CTA Buttons: Explore Capabilities & Start a Project */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 w-full sm:w-auto min-w-0"
            >
              {/* Primary Button: Explore Capabilities */}
              <button
                onClick={handleScrollToCapabilities}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                className="h-[50px] sm:h-[52px] flex-1 sm:flex-initial sm:w-[220px] inline-flex items-center justify-between bg-[#111111] hover:bg-black p-1.5 rounded-[18px] sm:rounded-[20px] transition-all duration-200 shadow-sm cursor-pointer group active:scale-95 focus:outline-none"
              >
                {/* Left Pixelated Icon Badge */}
                <div className="bg-white rounded-[12px] sm:rounded-[14px] h-[36px] sm:h-[40px] w-[40px] sm:w-[44px] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm overflow-hidden flex-shrink-0">
                  <PixelatedIcon className="w-[21px] sm:w-[24px] h-[10.5px] sm:h-[12px]" color="#111111" isHovered={isBtnHovered} />
                </div>
                {/* Centered Label */}
                <span className="text-[13.5px] sm:text-[14px] font-medium text-white px-2 tracking-tight whitespace-nowrap">
                  Explore Capabilities
                </span>
                <div className="w-1" />
              </button>

              {/* Secondary Button: Start a Project */}
              <button
                onClick={onContact}
                className="h-[50px] sm:h-[52px] flex-1 sm:flex-initial sm:w-[190px] px-5 sm:px-6 inline-flex items-center justify-between bg-white hover:bg-[#F9FAF9] rounded-[18px] sm:rounded-[20px] border border-black/[0.09] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-black/20 hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-95 focus:outline-none"
              >
                <span className="text-[13px] sm:text-[13.5px] font-medium text-[#111111] tracking-tight whitespace-nowrap">
                  Start a Project
                </span>
                <ArrowRight className="w-4 h-4 stroke-[1.6] text-[#222222] group-hover:text-black group-hover:translate-x-0.5 transition-transform duration-200 flex-shrink-0" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Controlled Floating Venture Card */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end pt-3 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={nextSlide}
              className="relative bg-white/[0.86] backdrop-blur-2xl rounded-[18px] sm:rounded-[20px] p-1.5 shadow-[0_12px_34px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.95)] border border-white w-full max-w-[350px] mx-auto lg:mx-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.1)] group cursor-pointer overflow-hidden"
            >
              {/* Inner Image Container */}
              <div className="relative rounded-[13px] sm:rounded-[15px] overflow-hidden aspect-[1.3] bg-white border border-black/[0.03]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentVenture.id}
                    src={currentVenture.image}
                    alt={currentVenture.name}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                  />
                </AnimatePresence>
              </div>

              {/* Bottom Information: Venture Name + Descriptor + Sleek Minimal Arrow */}
              <div className="flex items-center justify-between px-2.5 pt-3 pb-1.5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVenture.id}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="text-left"
                  >
                    <h3 className="text-[15px] sm:text-[16px] font-medium text-[#111111] leading-tight tracking-[-0.015em]">
                      {currentVenture.name}
                    </h3>
                    <span className="text-[12px] font-normal text-[#71717A] tracking-tight mt-0.5 block font-sans">
                      {currentVenture.descriptor}
                    </span>
                  </motion.div>
                </AnimatePresence>

                <div className="w-7 h-7 flex items-center justify-center text-[#888888] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-all duration-200">
                  <ArrowRight className="w-4 h-4 stroke-[1.75]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Area: Real Company Proof & Client Logo Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[1540px] mx-auto pt-10 sm:pt-12 mt-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 pb-2 min-w-0"
        >
          {/* Bottom-Left Trust Proof Block with clean drop-shadow */}
          <div className="flex flex-col text-left w-fit max-w-[440px] lg:max-w-[460px] shrink-0 min-w-0 rounded-[16px] border border-white/10 bg-black/[0.64] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.16)] sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
            <h4 className="text-[14.5px] sm:text-[16px] md:text-[17px] font-medium text-white tracking-tight leading-[1.3]">
              45+ client relationships across the group
            </h4>
            <p className="text-[13px] sm:text-[14px] md:text-[14.5px] font-normal leading-[1.45] text-white/75 mt-1 sm:mt-1.5 font-sans">
              Across brand, technology, creative production and digital presence.
            </p>
          </div>

          {/* Bottom Client Logo Bar on clean horizontal baseline with wider area, reduced gap & bright white logos */}
          <div className="w-full min-w-0 flex-1 max-w-full lg:max-w-[920px] xl:max-w-[1020px] overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_93%,transparent_100%)] py-3 px-4 sm:px-7">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
              className="flex items-center space-x-11 sm:space-x-14 md:space-x-16 whitespace-nowrap py-1.5"
            >
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${
                    logo.className || 'h-[24px] sm:h-[28px] md:h-[30px]'
                  } w-auto max-w-[130px] object-contain opacity-95 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] flex-shrink-0`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

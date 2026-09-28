import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';

const navItems = [
  { label: 'Expertise', href: '#expertise', number: '01' },
  { label: 'Ventures', href: '#ventures', number: '02' },
  { label: 'Why Kriyon', href: '#why-kriyon', number: '03' },
  { label: 'Contact', href: '/contact', number: '04' },
];

export default function Navbar({ onContact, onNavigateContact, onNavigateHome }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  const goHome = () => {
    setMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    else window.location.href = '/';
  };

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href === '/contact') {
      if (onNavigateContact) onNavigateContact();
      else window.location.href = '/contact';
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      if (window.__lenis) window.__lenis.scrollTo(element, { duration: 1.1 });
      else element.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigateHome) {
      onNavigateHome(href);
    }
  };

  const glassClass = isScrolled || menuOpen
    ? 'bg-white/[0.82] backdrop-blur-2xl border-white/80 shadow-[0_10px_35px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.95)]'
    : 'bg-white/[0.94] backdrop-blur-xl border-black/[0.055] shadow-[0_3px_18px_rgba(0,0,0,0.045)]';

  return (
    <header className="fixed inset-x-0 top-[12px] z-40 px-3.5 sm:top-[26px] sm:px-[32px] pointer-events-none">
      <div className="mx-auto w-full max-w-[1540px]">
        <div className="relative sm:hidden">
          <div className={`pointer-events-auto flex h-[52px] w-full items-center gap-1.5 rounded-[18px] border px-2 transition-all duration-300 ${glassClass}`}>
            <button onClick={goHome} className="mr-auto flex h-[39px] w-[39px] items-center justify-center rounded-[12px] bg-white/80" aria-label="Go to Kriyon homepage">
              <img src="/assets/kriyon-icon-logo.png" alt="Kriyon Group" className="h-[27px] w-[27px] object-contain" />
            </button>

            <a href="tel:+919622121100" aria-label="Call Kriyon" className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] border border-black/[0.055] bg-white/70 text-black/75">
              <Phone className="h-3.5 w-3.5 stroke-[1.9]" />
            </a>
            <a href="https://wa.me/919622121100" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Kriyon" className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] border border-black/[0.055] bg-white/80 text-black/75">
              <img src="/assets/whatsapp-icon.svg" alt="" className="h-[19px] w-[19px] object-contain" />
            </a>
            <button onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] border border-black/[0.06] bg-white/90 text-black active:scale-95">
              {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -8, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.985 }} transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }} className="pointer-events-auto absolute inset-x-0 top-[60px] overflow-hidden rounded-[22px] border border-white/80 bg-white/[0.9] p-2 shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <button key={item.href} onClick={() => handleNavClick(item.href)} className="group flex w-full items-center justify-between rounded-[16px] px-4 py-3.5 text-left transition-colors hover:bg-black/[0.045] active:bg-black/[0.07]">
                      <span className="flex items-center gap-3">
                        <span className="text-[9px] font-medium tracking-[0.16em] text-black/30">{item.number}</span>
                        <span className="text-[16px] font-medium tracking-[-0.02em] text-[#111111]">{item.label}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-black/25 transition-transform group-hover:translate-x-0.5 group-hover:text-black" />
                    </button>
                  ))}
                </nav>
                <button onClick={() => { setMenuOpen(false); onContact?.(); }} className="group mt-2 flex h-[50px] w-full items-center justify-between rounded-[16px] bg-[#111111] p-1.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.14)] active:scale-[0.99]">
                  <span className="flex h-[38px] w-[42px] items-center justify-center overflow-hidden rounded-[12px] bg-white"><PixelatedIcon className="h-[10px] w-[20px]" color="#111111" /></span>
                  <span className="text-[13px] font-medium">Start a Project</span>
                  <span className="w-8" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden items-center justify-between sm:flex">
          <div className={`pointer-events-auto flex h-[46px] items-center gap-[28px] rounded-full border pl-3.5 pr-7 transition-all duration-300 ${glassClass}`}>
            <button onClick={goHome} className="group flex items-center pr-0.5" aria-label="Go to Kriyon homepage">
              <img src="/assets/kriyon-icon-logo.png" alt="Kriyon Group Logo" className="h-[28px] w-[28px] object-contain transition-transform group-hover:scale-105" />
            </button>
            <nav className="flex items-center gap-[26px]">
              {navItems.map((item) => (
                <button key={item.label} onClick={() => handleNavClick(item.href)} className="text-[14.5px] font-normal tracking-[-0.01em] text-[#1A1A1A]/80 transition-colors hover:text-[#1A1A1A]">{item.label}</button>
              ))}
            </nav>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            <a href="tel:+919622121100" aria-label="Call Kriyon" className={`inline-flex h-[46px] w-[46px] items-center justify-center rounded-[13px] border text-[#111111] transition-all hover:bg-white active:scale-95 ${glassClass}`}><Phone className="h-4 w-4 stroke-[1.8]" /></a>
            <a href="https://wa.me/919622121100" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={`inline-flex h-[46px] w-[46px] items-center justify-center rounded-[13px] border transition-all hover:bg-white active:scale-95 ${glassClass}`}><img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="h-[22px] w-[22px] object-contain" /></a>
            <button onClick={onContact} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`group flex h-[46px] items-center gap-2.5 rounded-[16px] border py-1.5 pl-1.5 pr-5 transition-all hover:bg-white active:scale-95 ${glassClass}`}>
              <span className="flex h-[34px] w-[38px] items-center justify-center overflow-hidden rounded-[12px] bg-[#141414] shadow-sm"><PixelatedIcon className="h-[11px] w-[22px]" color="#FFFFFF" isHovered={isHovered} /></span>
              <span className="text-[14.5px] font-medium tracking-tight text-[#111111]">Start a Project</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

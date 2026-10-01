import { useState } from 'react';
import { motion } from 'framer-motion';
import PixelatedIcon from './PixelatedIcon';
import './Footer.css';

const SocialIcons = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const tickerRow1 = [
  'Brand Strategy & Identity', 'Digital Products & Platforms', 'Creative Production',
  'CGI, Film & Motion', 'Digital Presence & Experience', 'Business Strategy & Growth',
  'Brand Strategy & Identity', 'Digital Products & Platforms', 'Creative Production',
  'CGI, Film & Motion', 'Digital Presence & Experience', 'Business Strategy & Growth',
];

const tickerRow2 = [
  'Web & App Development', 'Campaign Direction', 'AI & Automation',
  'E-commerce & Digital Systems', 'Customer Experience', 'Technology & Product Strategy',
  'Web & App Development', 'Campaign Direction', 'AI & Automation',
  'E-commerce & Digital Systems', 'Customer Experience', 'Technology & Product Strategy',
];

export default function Footer({ onStartConversation, onOpenLegal }) {
  const [isHoveredStart, setIsHoveredStart] = useState(false);

  const handleStartProject = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    else onStartConversation?.();
  };

  return (
    <footer id="footer" className="kriyon-footer-section">
      <div className="kriyon-footer-ticker-container" aria-hidden="true">
        <div className="kriyon-footer-ticker-row">
          <div className="kriyon-ticker-track-left">
            {tickerRow1.map((item, index) => <span key={`${item}-${index}`} className={`kriyon-ticker-item ${index % 2 === 0 ? 'solid' : 'outline'}`}>{item}</span>)}
          </div>
        </div>
        <div className="kriyon-footer-ticker-row" style={{ marginTop: '16px' }}>
          <div className="kriyon-ticker-track-right">
            {tickerRow2.map((item, index) => <span key={`${item}-${index}`} className={`kriyon-ticker-item ${index % 2 === 0 ? 'outline' : 'solid'}`}>{item}</span>)}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="kriyon-footer-container"
      >
        <div className="kriyon-footer-bg-wrap" aria-hidden="true">
          <img src="/assets/kriyon-hill-render.png" alt="" className="kriyon-footer-bg-img" />
          <div className="kriyon-footer-bg-overlay" />
          {/* Subtle Ambient Sheen across footer landscape (100% GPU accelerated) */}
          <motion.div
            animate={{
              x: ['-120%', '160%'],
              opacity: [0, 0.2, 0.35, 0.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-y-0 w-[50%] pointer-events-none -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
        </div>

        <div className="kriyon-footer-top">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="kriyon-footer-col col-brand"
          >
            <p className="kriyon-footer-text font-semibold">©Kriyon 2026</p>
            <p className="kriyon-footer-company">KRIYON GROUP PRIVATE LIMITED</p>
            <p className="text-xs font-sans tracking-wide text-white/60">One group. Specialist capabilities.</p>
            <button type="button" onClick={handleStartProject} onMouseEnter={() => setIsHoveredStart(true)} onMouseLeave={() => setIsHoveredStart(false)} className="group mt-2 inline-flex h-[52px] w-fit items-center justify-between rounded-[18px] border border-white/20 bg-white p-1.5 text-[#0A0A0A] shadow-lg transition-all duration-200 hover:bg-[#F5F5F7] active:scale-95">
              <span className="flex h-[38px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-[#111] shadow-sm transition-transform group-hover:scale-105">
                <PixelatedIcon className="h-[11px] w-[22px]" color="#FFFFFF" isHovered={isHoveredStart} />
              </span>
              <span className="whitespace-nowrap px-3.5 font-sans text-[14px] font-bold tracking-tight">Start a Project</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="kriyon-footer-col col-contact"
          >
            <p className="kriyon-footer-nav-title">Registered Office &amp; Contact</p>
            <a href="tel:+919622121100" className="kriyon-footer-text transition-colors hover:text-[#88EA15]">+91 96221 21100</a>
            <a href="mailto:kriyon@repixelx.tech" className="kriyon-footer-text break-all transition-colors hover:text-[#88EA15]">kriyon@repixelx.tech</a>
            <p className="kriyon-footer-address hidden sm:block">Room No. 2, First Floor, Tawi Enclave, Vill Nandini, Gol Gujral, Jammu 180002, J&amp;K</p>
            <p className="kriyon-footer-address sm:hidden">Jammu 180002, J&amp;K, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="kriyon-footer-col col-explore"
          >
            <nav className="kriyon-footer-nav" aria-label="Footer navigation">
              <strong className="kriyon-footer-nav-title">Explore</strong>
              <a href="/">Home</a>
              <a href="/#what-we-do">What We Do</a>
              <a href="/#ventures">Ventures</a>
              <a href="/#why-kriyon">Why Kriyon</a>
              <a href="/contact">Contact</a>
              <a href="https://repixelx.com/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">Explore RepixelX ↗</a>
              <a href="https://www.kriyonmedia.com/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">Visit Kriyon Media ↗</a>
              <a href="https://onelink.cards/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">Explore OneLink ↗</a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="kriyon-footer-col col-legal"
          >
            <div className="kriyon-footer-nav">
              <strong className="kriyon-footer-nav-title">Legal</strong>
              <button type="button" onClick={() => onOpenLegal?.('terms')}>Legal Centre Overview</button>
              <button type="button" onClick={() => onOpenLegal?.('terms')} className="sm:hidden">Terms &amp; Privacy Policy</button>
              <button type="button" onClick={() => onOpenLegal?.('refund')} className="sm:hidden">Refund &amp; Policies</button>
              
              <button type="button" onClick={() => onOpenLegal?.('terms')} className="hidden sm:block">01 · Terms &amp; Conditions</button>
              <button type="button" onClick={() => onOpenLegal?.('privacy')} className="hidden sm:block">02 · Privacy Policy</button>
              <button type="button" onClick={() => onOpenLegal?.('refund')} className="hidden sm:block">03 · Refund Policy</button>
              <button type="button" onClick={() => onOpenLegal?.('cookies')} className="hidden sm:block">04 · Cookie Policy</button>
              <button type="button" onClick={() => onOpenLegal?.('disclaimer')} className="hidden sm:block">05 · Disclaimer</button>
              <button type="button" onClick={() => onOpenLegal?.('grievance')} className="hidden sm:block">06 · Grievance Officer</button>
            </div>
          </motion.div>
        </div>

        <div className="kriyon-footer-divider" />

        <div className="kriyon-footer-bottom">
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="kriyon-footer-bottom-left"
          >
            <img src="/assets/kriyon-wordmark-white.png" alt="KRIYON" className="kriyon-footer-massive-logo" />
            <a href="https://repixelx.com" target="_blank" rel="noopener noreferrer" className="kriyon-footer-powered">
              <span>Designed &amp; developed in creative partnership with</span>
              <img src="/repixelx-studio-logo.webp" alt="RepixelX Studio" className="kriyon-footer-repixelx-logo" />
              <span className="kriyon-footer-powered-arrow">↗</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="kriyon-footer-bottom-right"
          >
            <div className="kriyon-footer-hours">
              <span className="kriyon-hours-label">Mo—Fr</span>
              <span className="kriyon-hours-time">9am—6pm</span>
            </div>
            <div className="kriyon-footer-socials">
              <a href="https://www.linkedin.com/company/kriyon-group" target="_blank" rel="noopener noreferrer" className="kriyon-social-icon" aria-label="LinkedIn">{SocialIcons.linkedin}</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

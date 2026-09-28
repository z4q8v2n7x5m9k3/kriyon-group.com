import { ArrowRight } from 'lucide-react';

export default function FooterCTA({ onStartConversation }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#060709] text-white overflow-hidden pt-16 pb-10 border-t border-white/10"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#88EA15]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-10">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/kriyon-neon-logo.png"
              alt="KRIYON"
              className="h-6 sm:h-7 w-auto object-contain brightness-110"
            />
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#88EA15] border border-[#88EA15]/30 px-2.5 py-0.5 rounded-full">
              Holding Group
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all"
            aria-label="Back to top"
          >
            <span className="text-xs">↑</span>
          </button>
        </div>

        {/* First Divider Rule */}
        <div className="border-t border-white/10 pt-12 sm:pt-16 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: GET IN TOUCH */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] font-mono text-[#88EA15] font-bold">
              04 · Get In Touch
            </p>
            <div className="pt-2">
              <a
                href="mailto:kriyon@repixelx.tech"
                className="group inline-flex items-center space-x-4 text-white hover:text-[#88EA15] transition-colors"
              >
                {/* Curved return arrow icon inside box */}
                <div className="w-12 h-10 rounded-lg border border-white/30 flex items-center justify-center shrink-0 group-hover:border-[#88EA15] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="stroke-white group-hover:stroke-[#88EA15] stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors">
                    <path d="M1 1L1 10C1 11.6569 2.34315 13 4 13H17.2M15 9.6L17.9757 12.5757C18.21 12.8101 18.21 13.1899 17.9757 13.4243L15 16.4" />
                  </svg>
                </div>
                <span className="font-sans uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none">
                  kriyon@repixelx.tech
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: HAVE SOMETHING TO BUILD? */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] font-mono text-white/50 font-bold">
              Advisory & Ventures
            </p>
            <h3 className="font-sans font-extrabold uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
              Have Something<br />
              <span className="text-[#88EA15]">To Build?*</span>
            </h3>

            {/* Signature Pill Button with Lime Circle Arrow */}
            <div className="pt-2">
              <button
                onClick={onStartConversation}
                className="group inline-flex items-center space-x-3 bg-white text-black pl-1.5 pr-6 py-2 rounded-full hover:bg-[#88EA15] hover:text-black transition-all duration-300 shadow-xl active:scale-95"
              >
                <div className="w-9 h-9 rounded-full bg-[#88EA15] group-hover:bg-white text-black flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
                <span className="text-sm font-bold tracking-tight">
                  Get in touch
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Second Divider Rule: Directory Navigation */}
        <div className="border-t border-white/10 pt-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-sm font-sans">
          {/* Ventures Column */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 font-bold mb-4">
              Ventures
            </p>
            <ul className="space-y-2.5 font-medium text-white/80">
              <li>
                <a href="https://repixelx.com" target="_blank" rel="noreferrer" className="hover:text-[#88EA15] transition-colors">
                  RepixelX — Brand & Technology ↗
                </a>
              </li>
              <li>
                <a href="https://kriyonmedia.com" target="_blank" rel="noreferrer" className="hover:text-[#88EA15] transition-colors">
                  Kriyon Media — Creative Production ↗
                </a>
              </li>
              <li>
                <a href="https://onelink.cards" target="_blank" rel="noreferrer" className="hover:text-[#88EA15] transition-colors">
                  OneLink — Presence & Action ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 font-bold mb-4">
              Social
            </p>
            <ul className="space-y-2.5 font-medium text-white/80">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#88EA15] transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#88EA15] transition-colors">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Newsletter Input */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 font-bold mb-4">
              Inquiry Dispatch
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onStartConversation();
              }}
              className="flex items-center border-b border-white/20 pb-2 focus-within:border-[#88EA15] transition-colors"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent text-white placeholder-white/40 w-full focus:outline-none text-base font-normal pr-4"
              />
              <button
                type="submit"
                aria-label="Submit"
                className="text-[#88EA15] hover:text-white transition-colors shrink-0"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Third Divider Rule: Bottom Legal Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4 text-center md:text-left">
          <div>
            <span>Copyright © Kriyon Group Private Limited 2026 / All Rights Reserved</span>
            <span className="mx-2">·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="mx-1">/</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>

          <div>
            <span className="text-[#88EA15]">India-based · Working Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

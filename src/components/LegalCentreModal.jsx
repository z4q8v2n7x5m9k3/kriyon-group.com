import { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, Building2, ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import {
  COMPANY_NAME,
  COMPANY_CIN,
  COMPANY_GSTIN,
  COMPANY_PAN,
  COMPANY_TAN,
  GRIEVANCE_OFFICER,
  GRIEVANCE_DIN,
  JURISDICTION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  REGISTERED_OFFICE,
  LAST_UPDATED,
} from '../legal/legal-meta';

import { TermsDocument } from '../legal/content/terms/terms-document';
import { PrivacyDocument } from '../legal/content/privacy-document';
import { RefundDocument } from '../legal/content/refund-document';
import { CookieDocument } from '../legal/content/cookie-document';
import { DisclaimerDocument } from '../legal/content/disclaimer-document';
import { GrievanceDocument } from '../legal/content/grievance-document';

const TABS = [
  {
    id: 'terms',
    num: '01',
    label: 'Terms & Conditions',
    docNum: 'DOCUMENT 01 // STATUTORY PUBLICATION',
    title: 'Terms & Conditions',
    description: 'General terms of use, client engagement, deliverables, intellectual property, payments, and governing law.',
  },
  {
    id: 'privacy',
    num: '02',
    label: 'Privacy Policy',
    docNum: 'DOCUMENT 02 // DATA PROTECTION & PRIVACY',
    title: 'Privacy Policy',
    description: 'How personal and enterprise data is collected, stored, processed, and protected under Indian DPDPA 2023 & IT Act.',
  },
  {
    id: 'refund',
    num: '03',
    label: 'Refund Policy',
    docNum: 'DOCUMENT 03 // COMMERCIAL COMPLIANCE',
    title: 'Refund & Cancellation Policy',
    description: 'Strict non-refundable terms, kickoff milestones, project cancellation protocols, and chargeback dispute policies.',
  },
  {
    id: 'cookies',
    num: '04',
    label: 'Cookie Policy',
    docNum: 'DOCUMENT 04 // WEB DISCLOSURE',
    title: 'Cookie & Tracking Policy',
    description: 'Technologies, session trackers, and analytics utilized across Kriyon Group domains and client touchpoints.',
  },
  {
    id: 'disclaimer',
    num: '05',
    label: 'Disclaimer',
    docNum: 'DOCUMENT 05 // STATUTORY LIMITATION',
    title: 'Statutory Disclaimer',
    description: 'Informational statements, professional advice boundaries, warranties disclaimers, and limitation of liabilities.',
  },
  {
    id: 'grievance',
    num: '06',
    label: 'Grievance Officer',
    docNum: 'DOCUMENT 06 // STATUTORY DESIGNATION',
    title: 'Grievance Redressal Mechanism',
    description: 'Designated officer contacts, statutory dispute resolution timeline (30 days), and escalation procedure.',
  },
];

export default function LegalCentreModal({ isOpen, initialTab = 'terms', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background body scroll and stop Lenis when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
      return () => {
        document.body.style.overflow = originalOverflow;
        if (window.__lenis) {
          window.__lenis.start();
        }
      };
    }
  }, [isOpen]);

  // Scroll to top of document whenever tab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeTab]);

  if (!isOpen) return null;

  const currentTabData = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      data-lenis-prevent="true"
      onClick={onClose}
    >
      {/* Modal Shell Container */}
      <div
        className="relative w-full max-w-[1400px] h-[94vh] sm:h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP BAR / HEADER */}
        <header className="shrink-0 h-16 sm:h-18 px-4 sm:px-8 border-b border-neutral-200/90 bg-white flex items-center justify-between z-20 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-neutral-300">
              <img
                src="/assets/kriyon-icon.png"
                alt="Kriyon"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <span className="block text-sm sm:text-base font-bold text-neutral-900 leading-tight tracking-tight">
                {COMPANY_NAME}
              </span>
              <span className="block text-xs text-neutral-500 font-mono">
                Official Legal Centre · CIN: {COMPANY_CIN}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-semibold transition-all shadow-sm"
              type="button"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to website</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-neutral-300 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
              aria-label="Close modal"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* MAIN BODY: SIDEBAR + SCROLLABLE DOCUMENT VIEW */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[290px_1fr] min-h-0 bg-white">
          {/* LEFT SIDEBAR (STICKY ON DESKTOP, COMPACT LIST ON MOBILE) */}
          <aside
            className="hidden lg:flex flex-col border-r border-neutral-200 bg-neutral-50/70 overflow-y-auto select-none"
            data-lenis-prevent="true"
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-neutral-200 bg-white">
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                Legal Centre
              </h3>
              <p className="text-xs text-neutral-600 mt-1 font-medium">
                {COMPANY_NAME}
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                  Last Updated
                </span>
                <span className="text-xs font-semibold text-neutral-700 mt-0.5 block">
                  {LAST_UPDATED}
                </span>
              </div>
            </div>

            {/* Document Navigation Tabs */}
            <div className="p-4 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold px-3 mb-2.5">
                Statutory Documents
              </p>
              <nav className="flex flex-col gap-1.5" aria-label="Policies">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-white text-neutral-950 font-bold shadow-sm border-l-4 border-[#88EA15]'
                          : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80 border-l-4 border-transparent'
                      }`}
                      type="button"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className={`text-xs font-mono ${isActive ? 'text-black font-bold' : 'text-neutral-400'}`}>
                          {tab.num}
                        </span>
                        <span className="truncate">{tab.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'text-black translate-x-0.5' : 'text-neutral-400 opacity-40'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Bottom: Corporate Details Box */}
            <div className="p-5 border-t border-neutral-200 bg-white text-xs space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                Registered Office
              </p>
              <p className="text-neutral-700 leading-relaxed font-sans">
                Room No. 2, First Floor, Tawi Enclave, Vill Nandini, Gol Gujral, Jammu, J&amp;K – 180002
              </p>
              <div className="pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500 space-y-0.5">
                <div>CIN: <span className="text-neutral-800 font-bold">{COMPANY_CIN}</span></div>
                <div>GSTIN: <span className="text-neutral-800">{COMPANY_GSTIN}</span></div>
                <div>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a></div>
                <div>Phone: <span className="text-neutral-800">{CONTACT_PHONE}</span></div>
              </div>
            </div>
          </aside>

          {/* MOBILE TABS SELECTOR (VISIBLE ONLY ON SMALL SCREENS) */}
          <div className="lg:hidden shrink-0 border-b border-neutral-200 bg-neutral-100/90 p-2 overflow-x-auto flex gap-1.5 scrollbar-none" data-lenis-prevent="true">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
                  }`}
                  type="button"
                >
                  {tab.num} · {tab.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT SCROLLABLE DOCUMENT CONTAINER (100% UNLOCKED SCROLL) */}
          <main
            id="legal-scroll-container"
            ref={scrollContainerRef}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain bg-white px-5 sm:px-10 lg:px-14 py-8 select-text"
            data-lenis-prevent="true"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* HERO BANNER WITH 3D BACKGROUND */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200/80 mb-8 bg-neutral-950 text-white min-h-[160px] sm:min-h-[190px] flex flex-col justify-end p-6 sm:p-8 shadow-sm">
              <img
                src="/assets/legal-heroimage.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-[center_60%] opacity-40 mix-blend-luminosity pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#88EA15] font-bold">
                  {currentTabData.docNum}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {currentTabData.title}
                </h1>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  {currentTabData.description}
                </p>

                {/* Statutory Meta Strip */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono text-neutral-400">
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider">Effective:</span>{' '}
                    <span className="text-white font-medium">{LAST_UPDATED}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider">Jurisdiction:</span>{' '}
                    <span className="text-white font-medium">{JURISDICTION}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider">Entity CIN:</span>{' '}
                    <span className="text-white font-medium">{COMPANY_CIN}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider">GSTIN:</span>{' '}
                    <span className="text-white font-medium">{COMPANY_GSTIN}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB CONTENT RENDERING */}
            <div className="legal-doc-body max-w-4xl text-neutral-800 pb-16">
              {activeTab === 'terms' && <TermsDocument />}
              {activeTab === 'privacy' && <PrivacyDocument />}
              {activeTab === 'refund' && <RefundDocument />}
              {activeTab === 'cookies' && <CookieDocument />}
              {activeTab === 'disclaimer' && <DisclaimerDocument />}
              {activeTab === 'grievance' && <GrievanceDocument />}
            </div>

            {/* BOTTOM LEGAL SHELL FOOTER */}
            <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-xs text-neutral-500 space-y-3 pb-8">
              <p className="font-medium text-neutral-700">
                © 2026 {COMPANY_NAME} · CIN: {COMPANY_CIN} · Registered under Companies Act, 2013
              </p>
              <div className="flex flex-wrap justify-center gap-3 font-semibold text-neutral-600">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className="hover:text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors"
                    type="button"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] font-mono text-neutral-400">
                All statutory disputes are subject to the exclusive jurisdiction of the competent courts in Jammu, J&amp;K, India.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

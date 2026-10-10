import { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientShowcase from './components/ClientShowcase';
import WhatWeDo from './components/WhatWeDo';
import ExpertiseVentures from './components/ExpertiseVentures';
import WhyKriyon from './components/WhyKriyon';
import FounderVision from './components/FounderVision';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import StartProjectModal from './components/StartProjectModal';
import LegalCentreModal from './components/LegalCentreModal';

const PAGE_META = {
  home: {
    title: 'Kriyon Group | Brand, Technology & Creative Production',
    description: 'Kriyon Group brings together RepixelX, Kriyon Media and OneLink across brand, technology, creative production and digital presence.',
    url: 'https://www.kriyongroup.com/',
  },
  contact: {
    title: 'Contact Kriyon Group | Start a Project',
    description: 'Start a project with Kriyon Group. Discuss branding, websites, apps, campaigns, creative production or digital presence with the right specialist team.',
    url: 'https://www.kriyongroup.com/contact',
  },
  legal: {
    title: 'Legal Centre | Kriyon Group Private Limited',
    description: 'Read Kriyon Group Private Limited terms, privacy policy, refund policy and statutory company information.',
    url: 'https://www.kriyongroup.com/legal',
  },
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/contact' || window.location.hash === '#contact-page') {
        return '/contact';
      }
    }
    return '/';
  });

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.search.includes('skip_loader')) return true;
      return !!sessionStorage.getItem('kriyon_visited');
    }
    return false;
  });
  const [legalModalState, setLegalModalState] = useState(() => ({
    isOpen: typeof window !== 'undefined' && (
      window.location.pathname === '/legal'
      || window.location.hash === '#legal'
      || window.location.search.includes('view=legal')
    ),
    tab: 'terms',
  }));

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/legal') {
        setCurrentRoute('/');
        setLegalModalState({ isOpen: true, tab: 'terms' });
      } else if (window.location.pathname === '/contact' || window.location.hash === '#contact-page') {
        setCurrentRoute('/contact');
        setLegalModalState({ isOpen: false, tab: 'terms' });
      } else {
        setCurrentRoute('/');
        setLegalModalState({ isOpen: false, tab: 'terms' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = legalModalState.isOpen
      ? PAGE_META.legal
      : currentRoute === '/contact'
        ? PAGE_META.contact
        : PAGE_META.home;

    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', meta.url);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', meta.url);
  }, [currentRoute, legalModalState.isOpen]);

  useEffect(() => {
    if (currentRoute === '/') {
      if (window.location.search.includes('view=expertise') || window.location.hash === '#expertise') {
        setTimeout(() => {
          const el = document.getElementById('expertise');
          if (el) {
            el.scrollIntoView({ behavior: 'instant', block: 'start' });
          }
        }, 50);
      }

      if (window.location.search.includes('view=clients') || window.location.hash === '#clients') {
        setTimeout(() => {
          const el = document.getElementById('clients');
          if (el) {
            el.scrollIntoView({ behavior: 'instant', block: 'start' });
          }
        }, 50);
      }

      // Support opening legal directly via hash or search
      if (window.location.hash === '#legal' || window.location.search.includes('view=legal')) {
        setLegalModalState({ isOpen: true, tab: 'terms' });
      }

      // Support opening contact directly via hash
      if (window.location.hash === '#contact' || window.location.hash === '#start-a-project') {
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [currentRoute]);

  const navigateTo = (path) => {
    try {
      window.history.pushState({}, '', path);
    } catch {
      // In case pushState throws on restricted environments
    }
    setLegalModalState({ isOpen: false, tab: 'terms' });
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleScrollToContact = () => {
    if (currentRoute === '/contact') {
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById('contact');
    if (window.__lenis && el) {
      window.__lenis.scrollTo(el, { duration: 1.2 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigateTo('/contact');
    }
  };

  const handleOpenLegal = (tab = 'terms') => {
    try {
      window.history.pushState({}, '', '/legal');
    } catch {
      // Keep the modal available if history updates are restricted.
    }
    setLegalModalState({ isOpen: true, tab });
  };

  const handleCloseLegal = () => {
    const returnPath = currentRoute === '/contact' ? '/contact' : '/';
    try {
      window.history.pushState({}, '', returnPath);
    } catch {
      // The page state still restores correctly without a history update.
    }
    setLegalModalState({ isOpen: false, tab: 'terms' });
  };

  const isExpertiseOnly = typeof window !== 'undefined' && window.location.search.includes('view=expertise');
  const isClientsOnly = typeof window !== 'undefined' && window.location.search.includes('view=clients');

  return (
    <SmoothScroll isLocked={isProjectModalOpen || legalModalState.isOpen}>
      <div className="relative min-h-screen bg-[#EBEBED] text-[#0A0A0A] font-sans antialiased overflow-x-hidden selection:bg-[#0A0A0A] selection:text-white">
        {/* Fast Minimal Monogram Page Loader */}
        <PageLoader onComplete={() => setIsPageLoaded(true)} />

        {/* Floating Capsule Header */}
        {!isExpertiseOnly && (
          <Navbar
            onContact={currentRoute === '/contact' ? () => window.scrollTo({ top: 400, behavior: 'smooth' }) : handleScrollToContact}
            onNavigateContact={() => navigateTo('/contact')}
            onNavigateHome={(hash) => {
              navigateTo('/');
              if (hash) {
                setTimeout(() => {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            onOpenLegal={() => handleOpenLegal('terms')}
          />
        )}

        {/* Route switcher */}
        {currentRoute === '/contact' ? (
          <main>
            <ContactPage
              onBackHome={() => navigateTo('/')}
              onOpenLegal={handleOpenLegal}
            />
          </main>
        ) : (
          /* Homepage: Hero, Section 02 (Ventures), Section 03 (Why Kriyon) & Section 04 (Contact) */
          <main>
            {isClientsOnly ? (
              <div className="pt-24 sm:pt-28">
                <ClientShowcase />
              </div>
            ) : isExpertiseOnly ? (
              <>
                <ExpertiseVentures onContact={handleScrollToContact} />
                <WhatWeDo onContact={handleScrollToContact} />
                <WhyKriyon />
              </>
            ) : (
              <>
                <Hero onContact={handleScrollToContact} isLoaded={isPageLoaded} />
                <ClientShowcase />
                <ExpertiseVentures onContact={handleScrollToContact} />
                <WhatWeDo onContact={handleScrollToContact} />
                <WhyKriyon />
                <FounderVision />
                <ContactSection onNavigateToFullContact={() => navigateTo('/contact')} />
              </>
            )}
          </main>
        )}

        {/* Animated Editorial Footer */}
        <Footer
          onStartConversation={handleScrollToContact}
          onOpenLegal={handleOpenLegal}
        />

        {/* Booking / Contact Modal */}
        <StartProjectModal
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
        />

        {/* Official Statutory Legal Centre Modal */}
        <LegalCentreModal
          isOpen={legalModalState.isOpen}
          initialTab={legalModalState.tab}
          onClose={handleCloseLegal}
        />
      </div>
    </SmoothScroll>
  );
}

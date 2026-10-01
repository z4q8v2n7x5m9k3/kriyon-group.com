import { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import ExpertiseVentures from './components/ExpertiseVentures';
import WhyKriyon from './components/WhyKriyon';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import StartProjectModal from './components/StartProjectModal';
import LegalCentreModal from './components/LegalCentreModal';

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
      return !!sessionStorage.getItem('kriyon_visited');
    }
    return false;
  });
  const [legalModalState, setLegalModalState] = useState({
    isOpen: false,
    tab: 'terms',
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/contact' || window.location.hash === '#contact-page') {
        setCurrentRoute('/contact');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
    setLegalModalState({ isOpen: true, tab });
  };

  const handleCloseLegal = () => {
    setLegalModalState({ isOpen: false, tab: 'terms' });
  };

  const isExpertiseOnly = typeof window !== 'undefined' && window.location.search.includes('view=expertise');

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
            {isExpertiseOnly ? (
              <>
                <ExpertiseVentures onContact={handleScrollToContact} />
                <WhatWeDo onContact={handleScrollToContact} />
                <WhyKriyon />
              </>
            ) : (
              <>
                <Hero onContact={handleScrollToContact} isLoaded={isPageLoaded} />
                <ExpertiseVentures onContact={handleScrollToContact} />
                <WhatWeDo onContact={handleScrollToContact} />
                <WhyKriyon />
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

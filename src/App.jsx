import { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
  const [legalModalState, setLegalModalState] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/legal' || window.location.hash === '#legal' || window.location.search.includes('view=legal')) {
        return { isOpen: true, tab: 'terms' };
      }
    }
    return { isOpen: false, tab: 'terms' };
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/contact' || window.location.hash === '#contact-page') {
        setCurrentRoute('/contact');
      } else {
        setCurrentRoute('/');
      }

      if (window.location.pathname === '/legal' || window.location.hash === '#legal' || window.location.search.includes('view=legal')) {
        setLegalModalState({ isOpen: true, tab: 'terms' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (legalModalState.isOpen) {
      document.title = 'Legal Centre | Kriyon Group Private Limited';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Statutory legal documentation, Terms & Conditions, Privacy Policy, Refund Policy and compliance for Kriyon Group Private Limited.');
      }
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://www.kriyongroup.com/legal');
      }
    }
  }, [legalModalState.isOpen]);

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

      // Support opening legal directly via hash or search or pathname
      if (window.location.pathname === '/legal' || window.location.hash === '#legal' || window.location.search.includes('view=legal')) {
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
    try {
      window.history.pushState({}, '', '/legal');
    } catch {}
    setLegalModalState({ isOpen: true, tab });
  };

  const handleCloseLegal = () => {
    try {
      window.history.pushState({}, '', currentRoute === '/contact' ? '/contact' : '/');
    } catch {}
    document.title = currentRoute === '/contact' ? 'Contact Kriyon Group | Start a Project' : 'Kriyon Group Private Limited | Creative Technology Group';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentRoute === '/contact' ? 'https://www.kriyongroup.com/contact' : 'https://www.kriyongroup.com/');
    }
    setLegalModalState({ isOpen: false, tab: 'terms' });
  };

  const isExpertiseOnly = typeof window !== 'undefined' && window.location.search.includes('view=expertise');

  return (
    <SmoothScroll isLocked={isProjectModalOpen || legalModalState.isOpen}>
      <div className="relative min-h-screen bg-[#EBEBED] text-[#0A0A0A] font-sans antialiased overflow-x-hidden selection:bg-[#0A0A0A] selection:text-white">
        {/* Fast Minimal Monogram Page Loader */}
        <PageLoader />

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
                <WhyKriyon />
              </>
            ) : (
              <>
                <Hero onContact={handleScrollToContact} />
                <ExpertiseVentures onContact={handleScrollToContact} />
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


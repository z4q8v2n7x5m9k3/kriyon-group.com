import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children, isLocked = false }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Buttery-smooth, critically-damped lerp configuration (no trackpad jitter)
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.0,
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Provide global lenis access for anchor scrolling
    window.__lenis = lenis;

    // Handle initial hash in URL
    if (window.location.hash) {
      setTimeout(() => {
        lenis.scrollTo(window.location.hash, { immediate: true });
      }, 100);
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (isLocked) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isLocked]);

  return <>{children}</>;
}

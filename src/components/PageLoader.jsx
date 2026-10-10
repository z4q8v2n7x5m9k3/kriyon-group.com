import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);
  const [isMounted, setIsMounted] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.search.includes('skip_loader')) return false;
      return !sessionStorage.getItem('kriyon_visited');
    }
    return true;
  });

  useEffect(() => {
    if (!isMounted) {
      if (onComplete) onComplete();
      return;
    }

    // Calm, brief brand pause before the page settles in.
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
      try {
        sessionStorage.setItem('kriyon_visited', 'true');
      } catch {}
    }, 900);

    return () => clearTimeout(timer);
  }, [isMounted, onComplete]);

  if (!isMounted) return null;

  return (
    <AnimatePresence onExitComplete={() => setIsMounted(false)}>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] pointer-events-auto select-none bg-[#09090B]"
        >
          {/* Centered brand lockup with a simple, static triangle mark. */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -3,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            <div className="flex items-center gap-3.5 sm:gap-[18px]">
              <span
                className="block h-0 w-0 border-y-[7px] sm:border-y-[8px] border-y-transparent border-l-[12px] sm:border-l-[14px] border-l-white/90"
                aria-hidden="true"
              />
              <h1 className="text-[27px] sm:text-[36px] md:text-[42px] font-semibold text-white tracking-[-0.03em] font-sans">
                KRIYON GROUP
              </h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

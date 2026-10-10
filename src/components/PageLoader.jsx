import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PixelatedIcon from './PixelatedIcon';

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

    // Sync the hero entrance with the original centre-split shutter reveal.
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
      try {
        sessionStorage.setItem('kriyon_visited', 'true');
      } catch {}
    }, 720);

    return () => clearTimeout(timer);
  }, [isMounted, onComplete]);

  if (!isMounted) return null;

  return (
    <AnimatePresence onExitComplete={() => setIsMounted(false)}>
      {!isDone && (
        <div className="fixed inset-0 z-[99999] flex flex-col select-none pointer-events-none">
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
            }}
            className="h-1/2 w-full bg-[#09090B] pointer-events-auto"
          />

          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
            }}
            className="h-1/2 w-full bg-[#09090B] pointer-events-auto"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.25, ease: 'easeOut' },
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <motion.div
                animate={{ opacity: [1, 0.45, 1, 0.7, 1], x: [0, 2, 0, 4, 0] }}
                transition={{ duration: 0.72, repeat: Infinity, ease: 'steps(5)' }}
                className="flex h-11 w-12 items-center justify-center overflow-hidden rounded-[13px] border border-white/15 bg-white/[0.06]"
              >
                <PixelatedIcon className="h-[11px] w-[23px]" color="#FFFFFF" isHovered />
              </motion.div>
              <div className="font-sans text-[30px] font-bold tracking-[-0.035em] text-white sm:text-[44px] md:text-[52px]">
                KRIYON GROUP
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

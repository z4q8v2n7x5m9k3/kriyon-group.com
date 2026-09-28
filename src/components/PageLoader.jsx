import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PixelatedIcon from './PixelatedIcon';

export default function PageLoader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);
  const [isMounted, setIsMounted] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('kriyon_visited');
    }
    return true;
  });

  useEffect(() => {
    if (!isMounted) {
      if (onComplete) onComplete();
      return;
    }

    // Fast, crisp display: ~750ms total, triggers hero entrance in sync with shutter opening
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
        <div className="fixed inset-0 z-[99999] pointer-events-none select-none flex flex-col">
          {/* Top Shutter Half */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
            }}
            className="w-full h-1/2 bg-[#09090B] pointer-events-auto"
          />

          {/* Bottom Shutter Half */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
            }}
            className="w-full h-1/2 bg-[#09090B] pointer-events-auto"
          />

          {/* Centered brand lockup with the same pixel-arrow motion language */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.25, ease: 'easeOut' },
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <motion.div
                animate={{ opacity: [1, 0.45, 1, 0.7, 1], x: [0, 2, 0, 4, 0] }}
                transition={{ duration: 0.72, repeat: Infinity, ease: 'steps(5)' }}
                className="flex h-11 w-12 items-center justify-center overflow-hidden rounded-[13px] border border-white/15 bg-white/[0.06]"
              >
                <PixelatedIcon className="h-[11px] w-[23px]" color="#FFFFFF" isHovered />
              </motion.div>
              <h1 className="text-[30px] sm:text-[44px] md:text-[52px] font-bold text-white tracking-[-0.035em] font-sans">
                KRIYON GROUP
              </h1>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

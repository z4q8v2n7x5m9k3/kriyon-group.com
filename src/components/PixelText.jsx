import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Calm, slow, luxury text entrance: pure real words, zero blocks, zero flickering
export default function PixelText({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.05,
  mode = 'clean', // 'clean' | 'birth' (soft optical focus reveal)
  children,
  ...props
}) {
  const content = text || (typeof children === 'string' ? children : '');

  const words = useMemo(() => {
    return content.split(' ').filter(Boolean);
  }, [content]);

  return (
    <span
      className={`inline font-inherit leading-inherit ${className}`}
      aria-label={content}
      {...props}
    >
      {words.map((word, wordIndex) => {
        const isBirth = mode === 'birth';
        return (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0 font-inherit leading-inherit"
          >
            <motion.span
              initial={{
                opacity: 0,
                y: 10,
                filter: isBirth ? 'blur(5px)' : 'none',
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: isBirth ? 0.85 : 0.72,
                delay: delay + wordIndex * stagger,
                ease: [0.16, 1, 0.3, 1], // Apple-grade slow luxury cubic bezier
              }}
              className="inline-block font-inherit leading-inherit will-change-[transform,opacity,filter]"
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

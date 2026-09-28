import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Pure, clean, luxury word entrance animation: ZERO blocks, ONLY clean words, silky smooth
export default function PixelText({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.035,
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
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0 font-inherit leading-inherit"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: delay + wordIndex * stagger,
              ease: [0.16, 1, 0.3, 1], // Apple-grade smooth cubic bezier
            }}
            className="inline-block font-inherit leading-inherit will-change-[transform,opacity]"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

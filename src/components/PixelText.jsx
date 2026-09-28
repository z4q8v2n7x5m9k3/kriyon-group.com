import { useMemo } from 'react';
import { motion } from 'framer-motion';

// High-performance, butter-smooth word reveal with zero GPU lag and zero layout thrashing
export default function PixelText({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.04,
  mode = 'clean', // 'clean' | 'birth'
  children,
  ...props
}) {
  const content = text || (typeof children === 'string' ? children : '');

  const words = useMemo(() => {
    return content.split(' ').filter(Boolean);
  }, [content]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1], // Apple-grade smooth cubic bezier
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
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
            variants={wordVariants}
            className="inline-block font-inherit leading-inherit"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

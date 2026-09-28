import { useState, useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const UPPER_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_POOL = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT_POOL = '0123456789';

function getRandomMatchingChar(char) {
  if (/[A-Z]/.test(char)) {
    return UPPER_POOL[Math.floor(Math.random() * UPPER_POOL.length)];
  }
  if (/[a-z]/.test(char)) {
    return LOWER_POOL[Math.floor(Math.random() * LOWER_POOL.length)];
  }
  if (/[0-9]/.test(char)) {
    return DIGIT_POOL[Math.floor(Math.random() * DIGIT_POOL.length)];
  }
  return char;
}

export default function PixelText({
  text = '',
  className = '',
  as: Component = 'span',
  delay = 0.08,
  speed = 28, // Smooth, elegant pacing
  triggerOnce = true,
  children,
  ...props
}) {
  const content = text || (typeof children === 'string' ? children : '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: '-50px' });
  const [step, setStep] = useState(0);
  const [isFormed, setIsFormed] = useState(false);
  const length = content.length;

  useEffect(() => {
    if (!isInView || !content) return;

    let timeoutId;
    let intervalId;
    let currentStep = 0;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        // Resolve ~1.5 to 2 characters per tick for a smooth, visible alphabetical wave
        currentStep += 1;
        setStep(currentStep);

        if (currentStep >= length + 2) {
          clearInterval(intervalId);
          setIsFormed(true);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, content, delay, speed, length]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
      className={`relative inline-block ${className}`}
      {...props}
    >
      {/* Invisible anchor text guaranteeing zero layout shift across all responsive breakpoints */}
      <span className="invisible select-none pointer-events-none block" aria-hidden="true">
        {content}
      </span>

      {/* Live visible rendering: Clean matching alphabets shuffling into proper words (No weird blocks, no green) */}
      <span
        className="absolute inset-0 flex items-baseline flex-wrap font-inherit leading-inherit"
        aria-label={content}
      >
        {isFormed ? (
          content
        ) : (
          content.split('').map((char, index) => {
            if (char === ' ') return <span key={index}>&nbsp;</span>;
            if (char === '/' || char === '—' || char === '·' || char === '&' || char === '.') {
              return <span key={index}>{char}</span>;
            }

            if (index < step - 1) {
              // Fully formed character
              return (
                <span key={index} className="transition-opacity duration-150">
                  {char}
                </span>
              );
            }

            if (index <= step + 3) {
              // Active shuffling zone: real matching alphabets in sleek monochrome website tone
              return (
                <span
                  key={index}
                  className="opacity-45 select-none font-inherit transition-all duration-100"
                >
                  {getRandomMatchingChar(char)}
                </span>
              );
            }

            // Pending characters waiting in line (clean faint hint of real text)
            return (
              <span key={index} className="opacity-15 select-none font-inherit">
                {getRandomMatchingChar(char)}
              </span>
            );
          })
        )}
      </span>
    </motion.span>
  );
}

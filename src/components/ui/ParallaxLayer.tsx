import { motion, useScroll, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function SectionReveal({ children, className = '', direction = 'up' }: SectionRevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      clipPath: direction === 'left' ? 'inset(0 100% 0 0)' :
               direction === 'right' ? 'inset(0 0 0 100%)' :
               direction === 'up' ? 'inset(100% 0 0 0)' :
               'inset(0 0 100% 0)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

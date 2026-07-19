import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'scale';
  className?: string;
}

export default function SectionTransition({ children, direction = 'up', className = '' }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.3'],
  });

  const transforms = {
    left: {
      x: useTransform(scrollYProgress, [0, 1], [-80, 0]),
      y: useTransform(scrollYProgress, [0, 1], [0, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.95, 1]),
      rotateZ: useTransform(scrollYProgress, [0, 1], [-2, 0]),
    },
    right: {
      x: useTransform(scrollYProgress, [0, 1], [80, 0]),
      y: useTransform(scrollYProgress, [0, 1], [0, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.95, 1]),
      rotateZ: useTransform(scrollYProgress, [0, 1], [2, 0]),
    },
    up: {
      x: useTransform(scrollYProgress, [0, 1], [0, 0]),
      y: useTransform(scrollYProgress, [0, 1], [60, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.92, 1]),
      rotateZ: useTransform(scrollYProgress, [0, 1], [0, 0]),
    },
    scale: {
      x: useTransform(scrollYProgress, [0, 1], [0, 0]),
      y: useTransform(scrollYProgress, [0, 1], [0, 0]),
      scale: useTransform(scrollYProgress, [0, 1], [0.8, 1]),
      rotateZ: useTransform(scrollYProgress, [0, 1], [-1, 0]),
    },
  };

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left'
      ? ['inset(5% 80% 5% 0%)', 'inset(0% 0% 0% 0%)']
      : direction === 'right'
      ? ['inset(5% 0% 5% 80%)', 'inset(0% 0% 0% 0%)']
      : direction === 'scale'
      ? ['inset(10% 10% 10% 10%)', 'inset(0% 0% 0% 0%)']
      : ['inset(30% 5% 0% 5%)', 'inset(0% 0% 0% 0%)']
  );

  const t = transforms[direction];

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x: t.x,
        y: t.y,
        scale: t.scale,
        rotateZ: t.rotateZ,
        clipPath,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollHalftone() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const density = useTransform(scrollYProgress, [0, 0.5, 1], [12, 6, 12]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.08, 0.03]);

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,0,60,0.5) 1px, transparent 1px)',
          backgroundSize: useTransform(density, v => `${v}px ${v}px`),
        }}
      />
    </motion.div>
  );
}

import { motion, useScroll, useMotionValue, useVelocity } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ChromaticScroll() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollVelocity.on('change', (velocity) => {
      if (Math.abs(velocity) > 500 && !glitching) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 300);
      }
    });
    return unsubscribe;
  }, [scrollVelocity, glitching]);

  if (!glitching) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[9998]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 mix-blend-screen" style={{
        background: 'linear-gradient(transparent 50%, rgba(255,0,60,0.03) 50%)',
        backgroundSize: '100% 4px',
      }} />
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, -3, 3, -1, 0],
          opacity: [0, 0.5, 0.3, 0.5, 0],
        }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: 'inset -3px 0 rgba(255,0,60,0.3), inset 3px 0 rgba(77,158,255,0.3)',
        }}
      />
    </motion.div>
  );
}

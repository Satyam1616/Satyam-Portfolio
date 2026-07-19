import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function KonamiEasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    setSequence(prev => {
      const next = [...prev, e.key].slice(-KONAMI.length);
      if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
        setTriggered(true);
        setTimeout(() => setTriggered(false), 3000);
        return [];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-spider-red/20 animate-pulse" />
          <div className="absolute inset-0 mix-blend-screen" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,60,0.1) 2px, rgba(255,0,60,0.1) 4px)',
          }} />

          {/* Glitching text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              x: [0, -5, 5, -3, 3, 0],
              y: [0, 3, -3, 2, -2, 0],
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            <h1 className="font-bangers text-8xl sm:text-9xl chromatic-text-lg text-white select-none">
              GLITCH!
            </h1>
          </motion.div>

          {/* Random colored bars */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-spider-red/60"
              style={{
                top: `${12 + i * 12}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                scaleX: [0, 1, 0],
                x: ['-100%', '0%', '100%'],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

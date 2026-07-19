import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader() {
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-spider-dark flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Web line from top-left to top-right */}
          <svg
            className="absolute top-0 left-0 w-full h-24 pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0" y1="0" x2="1000" y2="0"
              stroke="white"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </svg>

          {/* Spider swinging */}
          <motion.div
            className="absolute"
            style={{ top: '15%' }}
            initial={{ x: '-100vw', rotate: -40 }}
            animate={{ x: '100vw', rotate: 40 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
            onAnimationComplete={() => setDone(true)}
          >
            {/* Web thread from top */}
            <div className="absolute left-1/2 bottom-full w-px h-32 bg-white/60 -translate-x-1/2" />

            {/* Spider body */}
            <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-lg">
              {/* Body */}
              <ellipse cx="30" cy="32" rx="10" ry="14" fill="#1a1a2e" stroke="#ff003c" strokeWidth="1.5" />
              {/* Head */}
              <circle cx="30" cy="16" r="8" fill="#1a1a2e" stroke="#ff003c" strokeWidth="1.5" />
              {/* Eyes */}
              <ellipse cx="27" cy="15" rx="3" ry="4" fill="white" />
              <ellipse cx="33" cy="15" rx="3" ry="4" fill="white" />
              {/* Legs - left */}
              <path d="M20 24 L8 18" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              <path d="M20 28 L6 26" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              <path d="M20 34 L6 36" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              <path d="M20 38 L8 44" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              {/* Legs - right */}
              <path d="M40 24 L52 18" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              <path d="M40 28 L54 26" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              <path d="M40 34 L54 36" stroke="#ff003c" strokeWidth="1.2" fill="none" />
              <path d="M40 38 L52 44" stroke="#ff003c" strokeWidth="1.2" fill="none" />
            </svg>
          </motion.div>

          {/* THWIP! text that appears mid-swing */}
          <motion.span
            className="absolute font-bangers text-4xl text-spider-red"
            style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 0.8] }}
            transition={{ duration: 1.2, delay: 0.8, times: [0, 0.3, 0.7, 1] }}
          >
            THWIP!
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

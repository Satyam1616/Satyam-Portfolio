import { motion, useScroll, useTransform } from 'framer-motion';

export default function CrawlingSpider() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '85vh']);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 15, -10, 12, 0]);

  return (
    <div className="fixed right-4 top-0 bottom-0 z-40 pointer-events-none hidden lg:block">
      {/* Web thread */}
      <motion.div
        className="absolute right-3 top-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent"
        style={{ height: y }}
      />
      {/* Spider */}
      <motion.div style={{ y, rotate }} className="absolute right-0">
        <svg width="28" height="28" viewBox="0 0 40 40" className="text-white/60">
          {/* Body */}
          <ellipse cx="20" cy="22" rx="6" ry="8" fill="currentColor" />
          <circle cx="20" cy="14" r="5" fill="currentColor" />
          {/* Eyes */}
          <circle cx="18" cy="13" r="1.5" fill="#ff003c" />
          <circle cx="22" cy="13" r="1.5" fill="#ff003c" />
          {/* Legs - left */}
          <path d="M14,18 Q8,14 4,10" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M14,20 Q7,20 2,18" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M14,23 Q8,26 4,30" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M14,25 Q9,30 5,36" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Legs - right */}
          <path d="M26,18 Q32,14 36,10" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M26,20 Q33,20 38,18" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M26,23 Q32,26 36,30" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M26,25 Q31,30 35,36" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
}

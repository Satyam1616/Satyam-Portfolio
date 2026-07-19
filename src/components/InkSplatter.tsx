import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface InkSplatterProps {
  flip?: boolean;
  color?: string;
  variant?: 'default' | 'drip' | 'splash';
}

export default function InkSplatter({ flip = false, color = '#ff003c', variant = 'default' }: InkSplatterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleX = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 0.6]);

  return (
    <div ref={ref} className={`relative w-full h-16 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.svg
        viewBox="0 0 1200 80"
        className="absolute inset-0 w-full h-full"
        style={{ opacity, scaleX, transformOrigin: 'center' }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C50,20 100,60 150,35 C200,10 250,55 300,40 C350,25 400,60 450,30 C500,0 550,50 600,40 C650,30 700,65 750,35 C800,5 850,55 900,40 C950,25 1000,60 1050,35 C1100,10 1150,50 1200,40 L1200,80 L0,80 Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M0,50 C80,30 160,70 240,45 C320,20 400,60 480,50 C560,40 640,70 720,45 C800,20 880,55 960,50 C1040,45 1120,65 1200,50 L1200,80 L0,80 Z"
          fill={color}
          opacity="0.08"
        />
        {/* Splatter dots */}
        <circle cx="120" cy="25" r="4" fill={color} opacity="0.3" />
        <circle cx="350" cy="15" r="3" fill={color} opacity="0.25" />
        <circle cx="580" cy="20" r="5" fill={color} opacity="0.2" />
        <circle cx="750" cy="12" r="3" fill={color} opacity="0.35" />
        <circle cx="920" cy="22" r="4" fill={color} opacity="0.25" />
        <circle cx="1080" cy="18" r="3" fill={color} opacity="0.3" />
        {/* Ink drips */}
        <ellipse cx="200" cy="55" rx="8" ry="12" fill={color} opacity="0.12" />
        <ellipse cx="500" cy="50" rx="6" ry="10" fill={color} opacity="0.1" />
        <ellipse cx="800" cy="52" rx="7" ry="11" fill={color} opacity="0.12" />
        <ellipse cx="1050" cy="48" rx="5" ry="9" fill={color} opacity="0.1" />
      </motion.svg>
    </div>
  );
}

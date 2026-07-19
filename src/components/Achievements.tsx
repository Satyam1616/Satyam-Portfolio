import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio';
import ComicBurst from './ui/ComicBurst';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(motionVal, value, { duration: 2, ease: 'easeOut' });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [motionVal, value]);

  return (
    <div ref={ref} className="font-bangers text-4xl sm:text-5xl text-white">
      {display}{suffix}
    </div>
  );
}

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-center text-white mb-12"
        >
          ACHIEV<span className="text-spider-red">EMENTS</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <ComicBurst className="absolute inset-0 w-full h-full text-spider-red/10" />
              <div className="relative z-10 py-8">
                <Counter value={item.value} suffix={item.suffix} />
                <p className="font-bebas text-lg text-white/60 mt-2 tracking-wide">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

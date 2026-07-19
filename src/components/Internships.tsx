import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';

function TimelineCard({ item, index }: { item: typeof portfolioData.internships[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot with animated ring */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 transform -translate-x-1/2 top-8 z-10">
        <div className="w-4 h-4 bg-spider-red rounded-full border-2 border-spider-dark" />
        <svg className="absolute -inset-2 w-8 h-8" viewBox="0 0 32 32">
          <motion.circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="#ff003c"
            strokeWidth="2"
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-1/2" />

      {/* Card with draw-in animation */}
      <motion.div
        className="md:w-1/2 pl-12 md:pl-0"
        style={{ opacity, scale }}
      >
        <motion.div
          className="relative bg-spider-dark border-[3px] border-ink-black rounded-sm p-6 overflow-hidden"
          style={{ boxShadow: '6px 6px 0px 0px #000000' }}
          whileHover={{ y: -4, rotate: isLeft ? -0.5 : 0.5 }}
        >
          {/* Animated border draw effect */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              fill="none"
              stroke="#ff003c"
              strokeWidth="2"
              style={{ pathLength }}
              className="opacity-50"
            />
          </svg>

          <div className="flex items-start gap-3 mb-3">
            <Briefcase size={20} className="text-spider-blue mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-lg">{item.role}</h3>
              <p className="font-bebas text-spider-red text-lg tracking-wide">{item.company}</p>
              <p className="text-white/40 text-sm">{item.duration}</p>
            </div>
          </div>

          <ul className="space-y-1 mb-4">
            {item.contributions.map((c, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + j * 0.05 }}
                className="text-white/70 text-sm pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-spider-red"
              >
                {c}
              </motion.li>
            ))}
          </ul>

          {item.impact && (
            <p className="text-comic-yellow text-sm font-bold mb-3">{item.impact}</p>
          )}

          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-bold bg-spider-blue/20 text-spider-blue border border-spider-blue/30 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Internships() {
  const { internships } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-24 px-6" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-center text-white mb-16"
        >
          EXPER<span className="text-spider-red">IENCE</span>
        </motion.h2>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-spider-red/10 transform md:-translate-x-px">
            <motion.div
              className="w-full bg-spider-red/60 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {internships.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

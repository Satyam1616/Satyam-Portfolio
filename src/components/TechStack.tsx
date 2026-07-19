import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function TechStack() {
  const { techStackLogos } = portfolioData;
  const doubled = [...techStackLogos, ...techStackLogos];

  return (
    <section className="py-16 overflow-hidden border-y-2 border-spider-red/20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-bangers text-3xl text-center text-white/60 mb-8"
      >
        TECH STACK
      </motion.h2>

      <div className="relative">
        <div className="flex animate-marquee">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-bebas text-lg text-white/70 hover:text-spider-red hover:border-spider-red/40 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ComicPanel from './ui/ComicPanel';
import HalftoneBg from './ui/HalftoneBg';

export default function About() {
  const { about, education } = portfolioData;

  return (
    <section id="about" className="relative py-24 px-6">
      <HalftoneBg className="absolute inset-0 opacity-20" color="#ff003c" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-center text-white mb-12"
        >
          ABOUT <span className="text-spider-red">ME</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ComicPanel delay={0.1}>
            <h3 className="font-bebas text-2xl text-spider-blue mb-4 tracking-wide">WHO I AM</h3>
            <p className="text-white/80 leading-relaxed text-lg">{about}</p>
          </ComicPanel>

          <ComicPanel delay={0.2} rotation={-1}>
            <h3 className="font-bebas text-2xl text-comic-yellow mb-4 tracking-wide flex items-center gap-2">
              <GraduationCap size={24} />
              EDUCATION
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="space-y-1">
                <p className="font-bold text-white text-lg">{edu.degree}</p>
                <p className="text-spider-red font-bebas text-lg">{edu.institution}</p>
                <p className="text-white/50 text-sm">{edu.duration}</p>
                <p className="text-white/70 mt-2">{edu.details}</p>
              </div>
            ))}
          </ComicPanel>
        </div>
      </div>
    </section>
  );
}

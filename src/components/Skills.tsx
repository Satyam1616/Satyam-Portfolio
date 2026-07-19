import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import ComicPanel from './ui/ComicPanel';

const stickerColors = [
  { bg: 'bg-spider-red', text: 'text-white' },
  { bg: 'bg-spider-blue', text: 'text-white' },
  { bg: 'bg-comic-yellow', text: 'text-spider-dark' },
];

function stickerRotation(index: number): number {
  const angles = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 2.5, -1];
  return angles[index % angles.length];
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-center text-white mb-12"
        >
          SKI<span className="text-comic-yellow">LLS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ComicPanel delay={0.1}>
            <h3 className="font-bebas text-2xl text-spider-red mb-6 tracking-wide">TECHNICAL</h3>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, i) => {
                const color = stickerColors[i % stickerColors.length];
                const rotate = stickerRotation(i);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7, rotate: rotate - 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 200 }}
                    whileHover={{ rotate: 0, y: -4, scale: 1.08 }}
                    className={`${color.bg} ${color.text} px-4 py-2 border-2 border-ink-black font-bold text-sm uppercase tracking-wide shadow-comic cursor-default`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </ComicPanel>

          <ComicPanel delay={0.2} rotation={-1}>
            <h3 className="font-bebas text-2xl text-spider-blue mb-6 tracking-wide">SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-4 py-2 font-bold text-sm bg-comic-yellow/10 text-comic-yellow border-2 border-comic-yellow/40 rounded-lg hover:bg-comic-yellow/20 hover:scale-105 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 p-4 bg-spider-red/10 border border-spider-red/30 rounded-lg">
              <p className="font-bebas text-lg text-spider-red tracking-wide mb-1">COMIC HERO STATS</p>
              <p className="text-white/60 text-sm">
                Full-stack web development, blockchain, and cloud — with a problem-solving mindset that won't quit.
              </p>
            </div>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
}

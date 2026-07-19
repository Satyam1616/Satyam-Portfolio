import { motion } from 'framer-motion';
import ComicPanel from './ui/ComicPanel';

const testimonials = [
  {
    name: 'Tech Lead',
    role: 'Senior Engineer, Startup',
    text: 'Satyam showed exceptional problem-solving skills. His code is clean and his communication is top-notch.',
    avatar: 'TL',
  },
  {
    name: 'Project Manager',
    role: 'Manager, EdTech Company',
    text: 'Always delivers on time, goes above and beyond with creative solutions. A true team player.',
    avatar: 'PM',
  },
  {
    name: 'Mentor',
    role: 'Professor, University',
    text: 'One of the most driven students I\'ve mentored. His passion for building impactful software is inspiring.',
    avatar: 'MN',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-center text-white mb-12"
        >
          WHAT THEY <span className="text-comic-yellow">SAY</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ComicPanel key={i} delay={i * 0.15} rotation={i % 2 === 0 ? 1 : -1}>
              <div className="relative">
                {/* Speech bubble tail */}
                <div className="absolute -top-3 left-8 w-6 h-6 bg-spider-dark border-l-[3px] border-t-[3px] border-ink-black rotate-45 translate-y-1" />

                {/* Quote */}
                <div className="relative">
                  <span className="text-spider-red/40 text-6xl font-bangers leading-none absolute -top-4 -left-2">&ldquo;</span>
                  <p className="text-white/80 text-sm leading-relaxed pt-4 pl-4 italic">
                    {t.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-spider-red/20 border-2 border-spider-red flex items-center justify-center font-bebas text-spider-red text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </ComicPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

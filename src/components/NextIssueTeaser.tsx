import { motion } from 'framer-motion';
import SpiderWeb from './ui/SpiderWeb';

export default function NextIssueTeaser() {
  return (
    <section className="relative py-20 px-6 overflow-hidden border-t-2 border-spider-red/20">
      <SpiderWeb className="absolute top-0 left-0 w-40 h-40 text-white/5" corner="top-left" />
      <SpiderWeb className="absolute top-0 right-0 w-40 h-40 text-white/5" corner="top-right" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Comic-style burst background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg viewBox="0 0 400 200" className="w-full max-w-md">
              <polygon
                points="200,0 230,70 310,70 245,115 270,190 200,145 130,190 155,115 90,70 170,70"
                fill="#ffd700"
              />
            </svg>
          </div>

          <motion.p
            className="font-bebas text-spider-red text-lg tracking-[0.3em] mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            COMING SOON
          </motion.p>

          <h2 className="font-bangers text-4xl sm:text-5xl text-white mb-4">
            NEXT <span className="text-comic-yellow">ISSUE</span>
          </h2>

          <p className="text-white/60 text-lg mb-6 max-w-md mx-auto">
            Blog posts, deep dives, and behind-the-scenes of my projects.
            Stay tuned for the next chapter.
          </p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="comic-btn bg-comic-yellow/10 text-comic-yellow border-2 border-comic-yellow/40 cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              ISSUE #2 — IN PROGRESS
            </div>
          </motion.div>

          {/* Halftone dots decoration */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1 opacity-30">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-spider-red"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

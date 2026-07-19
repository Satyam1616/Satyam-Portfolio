import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ChromaticText from './ui/ChromaticText';
import SpiderWeb from './ui/SpiderWeb';
import { ParallaxLayer } from './ui/ParallaxLayer';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const { name, role, intro, github, linkedin, resume } = portfolioData;
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax background effects */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,60,0.08)_0%,transparent_70%)]"
        style={{ y: bgY }}
      />
      <motion.div className="halftone absolute inset-0 opacity-30" style={{ y: bgY }} />

      {/* Spider web decorations with parallax */}
      <ParallaxLayer speed={-0.3} className="absolute top-0 left-0 z-0">
        <SpiderWeb className="w-48 h-48 text-white/10" corner="top-left" />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.2} className="absolute top-0 right-0 z-0">
        <SpiderWeb className="w-48 h-48 text-white/10" corner="top-right" />
      </ParallaxLayer>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12"
        style={{ y: textY, opacity }}
      >
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bebas text-spider-blue text-xl tracking-widest mb-4"
          >
            HEY THERE, I'M
          </motion.p>

          <ChromaticText
            as="h1"
            className="font-bangers text-6xl sm:text-7xl lg:text-8xl leading-none mb-4"
          >
            {name}
          </ChromaticText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-bebas text-xl sm:text-2xl text-comic-yellow tracking-wide mb-4"
          >
            {role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/70 dark:text-white/70 text-lg max-w-lg mx-auto lg:mx-0 mb-8"
          >
            {intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <MagneticButton>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn bg-spider-red text-white"
              >
                <Github size={18} />
                GitHub
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn bg-spider-blue text-white"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn bg-comic-yellow text-spider-dark"
              >
                <FileText size={18} />
                Resume
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Avatar with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="comic-panel p-2 rotate-2 hover:rotate-0 transition-transform duration-300 relative group">
            <img
              src="/avatar.jpg"
              alt={name}
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover object-top grayscale-[30%] contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500"
            />
            {/* Halftone overlay for comic effect */}
            <div className="absolute inset-2 bg-[radial-gradient(circle,_rgba(255,0,60,0.15)_1px,_transparent_1px)] bg-[length:6px_6px] pointer-events-none opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            {/* Comic border accent */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-spider-red rotate-12 flex items-center justify-center">
              <span className="text-white text-[8px] font-bangers">★</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm font-bebas tracking-widest"
        style={{ opacity }}
      >
        SCROLL DOWN
      </motion.div>
    </section>
  );
}

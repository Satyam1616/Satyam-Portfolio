import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float pointer-events-none delay-2000" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-primary text-lg font-mono mb-4 tracking-widest uppercase"
          >
            Welcome to my technical universe
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter"
          >
            I am <span className="neon-text-primary">{portfolioData.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/60 font-medium mb-4 max-w-2xl mx-auto"
          >
            {portfolioData.role}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-white/40 mb-10 max-w-xl mx-auto"
          >
            {portfolioData.intro}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 229, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" className="btn-primary flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(112, 0, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              href={portfolioData.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex items-center justify-center gap-8"
          >
            {[
              { icon: Github, href: `https://github.com/${portfolioData.github}`, label: "GitHub" },
              { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "var(--primary)" }}
                whileTap={{ scale: 0.9 }}
                className="text-white/40 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs uppercase tracking-[0.2em]">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
};

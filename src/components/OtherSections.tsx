import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>{displayValue}{suffix}</span>
  );
};

export const TechStack = () => {
  return (
    <div className="py-20 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-white/60">TECH STACK <span className="text-primary">&</span> TOOLS</h2>
        <div className="h-[1px] flex-grow mx-8 bg-white/10" />
      </div>

      <div className="flex relative overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {portfolioData.techStackLogos.concat(portfolioData.techStackLogos).map((logo, index) => (
            <span key={index} className="text-4xl md:text-5xl font-black text-white/10 hover:text-primary/50 transition-colors duration-500 cursor-default select-none tracking-tighter">
              {logo.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Achievements = () => {
  return (
    <Section id="achievements">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Key <span className="neon-text-secondary">Achievements</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="glass-card p-10 text-center group"
          >
            <div className="text-5xl font-black text-secondary mb-4 drop-shadow-[0_0_15px_rgba(112,0,255,0.4)] group-hover:scale-110 transition-transform duration-500">
              <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
            </div>
            <h3 className="text-lg font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">
              {achievement.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <h2 className="text-5xl md:text-6xl font-black">
            Let's <span className="neon-text-primary">Collaborate</span>
          </h2>
          <p className="text-xl text-white/40 leading-relaxed max-w-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)]"
              >
                <Mail className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Email me at</p>
                <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">{portfolioData.email}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, href: `https://github.com/${portfolioData.github}` },
              { icon: Linkedin, href: portfolioData.linkedin }
            ].map((social, index) => (
              <motion.a 
                key={index} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="p-4 glass-card hover:text-primary transition-all shadow-lg hover:shadow-primary/20"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 lg:p-16 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <form className="space-y-8 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Message</label>
              <textarea 
                rows={5}
                placeholder="What's on your mind?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/20 resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg">
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

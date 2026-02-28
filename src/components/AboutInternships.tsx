import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="neon-text-primary">Me</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
            {portfolioData.about}
          </p>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-l-primary relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-primary text-sm font-medium mb-3">{edu.institution} | {edu.duration}</p>
                    <p className="text-white/40">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="glass-card p-2 rounded-2xl relative z-10 group overflow-hidden">
            <div className="w-full max-w-sm aspect-square bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
               {/* Use the provided image or animated avatar */}
               <img 
                 src="/src/assets/profile.png" 
                 alt={portfolioData.name}
                 className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                   if (placeholder) (placeholder as HTMLElement).style.display = 'block';
                 }}
               />
               <div className="placeholder-text hidden text-primary font-mono text-9xl opacity-10 select-none group-hover:scale-110 transition-transform duration-700">{"</>"}</div>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Internships = () => {
  return (
    <Section id="internships" className="bg-white/[0.02]">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Internship <span className="neon-text-secondary">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.internships.map((intern, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{intern.role}</h3>
                  <p className="text-secondary font-medium">{intern.company}</p>
                </div>
                <span className="text-white/40 text-sm font-mono">{intern.duration}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {intern.contributions.map((point, i) => (
                  <li key={i} className="flex gap-3 text-white/60">
                    <span className="text-secondary mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {intern.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 border border-white/10 group-hover:border-secondary/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <p className="text-sm font-medium text-secondary">
                  <span className="font-bold">Impact:</span> {intern.impact}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

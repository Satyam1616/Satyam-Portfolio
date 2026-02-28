import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { cn } from '../utils/cn';
import { Cpu, Lightbulb, Users, MessageSquare, Zap, Target, RefreshCw, Code2, Database, Globe, ShieldCheck, Cloud, GitBranch, Layers, Terminal } from 'lucide-react';

const SkillIcon = ({ name }: { name: string }) => {
  const icons: Record<string, any> = {
    'Data Structures & Algorithms': Cpu,
    'Full Stack Development (React, Node.js)': Globe,
    'Blockchain & Web3': ShieldCheck,
    'Solidity & Smart Contracts': Code2,
    'AWS & Cloud Deployment': Cloud,
    'Database Systems (MongoDB, MySQL)': Database,
    'Git & CI/CD': GitBranch,
    'REST APIs': Terminal,
    'System Design Basics': Layers,
    'Leadership': Users,
    'Communication': MessageSquare,
    'Problem Solving': Zap,
    'Team Collaboration': Users,
    'Adaptability': RefreshCw,
    'Critical Thinking': Target,
  };
  const Icon = icons[name] || Lightbulb;
  return <Icon className="w-6 h-6" />;
};

export const Skills = () => {
  return (
    <Section id="skills" className="relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
              Technical <span className="neon-text-accent">Expertise</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Forging robust digital solutions through a specialized stack of modern technologies and architectural patterns.
            </p>
          </motion.div>
        </div>

        {/* Bento-style Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {portfolioData.skills.technical.map((skill, index) => {
            // Determine card size for bento effect
            const isLarge = index === 0 || index === 4 || index === 7;
            const isWide = index === 1 || index === 6;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cn(
                  "glass-card p-8 group relative flex flex-col justify-between transition-all duration-500",
                  isLarge && "md:row-span-2",
                  isWide && "md:col-span-2"
                )}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-grid scale-150" />
                </div>

                {/* Glow Effect based on level */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                  style={{ opacity: (skill.level || 0) / 100 * 0.2 }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,163,0.1)] group-hover:shadow-[0_0_30px_rgba(0,255,163,0.3)]">
                      <div className="text-accent group-hover:scale-110 transition-transform duration-500">
                        <SkillIcon name={skill.name} />
                      </div>
                    </div>
                    
                  </div>

                  <h3 className="text-2xl font-black mb-3 group-hover:text-accent transition-colors tracking-tight">
                    {skill.name}
                  </h3>
                  
                  <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors leading-relaxed line-clamp-3">
                    Advanced proficiency in {skill.name.toLowerCase()} ensuring high-performance and scalable application development.
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,255,163,0.8)]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-accent/60">Ready for Deployment</span>
                  </div>
                </div>

                {/* Animated Border on hover */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tight">
              Professional <span className="text-accent/60">&</span> Soft Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-8 py-5 glass-card border-accent/10 hover:border-accent/40 flex items-center gap-4 group cursor-default shadow-xl"
                >
                  <div className="text-accent/40 group-hover:text-accent group-hover:rotate-12 transition-all duration-500">
                    <SkillIcon name={skill} />
                  </div>
                  <span className="font-black text-white/60 group-hover:text-white transition-colors uppercase tracking-[0.2em] text-xs">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};



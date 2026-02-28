import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { Github, ExternalLink, Code } from 'lucide-react';

export const Projects = () => {
  return (
    <Section id="projects" className="bg-white/[0.01]">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter">
        Projects & <span className="neon-text-primary">Proof of Work</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
              className="glass-card group flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-video bg-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110 transition-transform duration-700">
                  <Code className="w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
                </div>
                <div className="absolute top-4 left-4 p-2 bg-background/80 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Featured Project</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/40 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40 border border-white/10 uppercase tracking-wider group-hover:border-primary/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    </Section>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

function FlipCard({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const hasDistinctLive = project.live !== project.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative h-72 perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-spider-dark border-[3px] border-ink-black p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden', boxShadow: '6px 6px 0px 0px #000000' }}
        >
          <h3 className="font-bangers text-2xl text-white mb-2">{project.title}</h3>
          <p className="text-white/60 text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-bold bg-spider-red/15 text-spider-red border border-spider-red/30 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-bold text-white/40">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
          <p className="text-white/30 text-xs mt-4 font-bebas tracking-wider">HOVER TO FLIP</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-spider-dark border-[3px] border-spider-red p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: '6px 6px 0px 0px #ff003c',
          }}
        >
          <div>
            <h3 className="font-bangers text-2xl text-spider-red mb-3">{project.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-bold bg-spider-blue/15 text-spider-blue border border-spider-blue/30 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                {project.githubLabel ?? 'Code'}
              </a>
              {hasDistinctLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-spider-blue hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  {project.liveLabel ?? 'Live'}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-center text-white mb-12"
        >
          PRO<span className="text-spider-blue">JECTS</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FlipCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

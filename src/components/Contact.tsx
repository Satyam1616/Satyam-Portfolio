import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code2, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SpiderWeb from './ui/SpiderWeb';

export default function Contact() {
  const { email, github, linkedin, leetcode, resume } = portfolioData;

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <SpiderWeb className="absolute bottom-0 left-0 w-64 h-64 text-white/5" corner="bottom-left" />
      <SpiderWeb className="absolute bottom-0 right-0 w-64 h-64 text-white/5" corner="bottom-right" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl sm:text-6xl text-white mb-4"
        >
          LET'S <span className="text-comic-yellow">CONNECT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg mb-10 max-w-md mx-auto"
        >
          Got a project in mind or just want to chat? Swing by and say hello.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`mailto:${email}`}
            className="comic-btn bg-spider-red text-white"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn bg-white/10 text-white border-2 border-white/20 hover:border-spider-red"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn bg-spider-blue text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn bg-white/10 text-white border-2 border-white/20 hover:border-spider-red"
          >
            <Code2 size={18} />
            LeetCode
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn bg-comic-yellow text-spider-dark"
          >
            <FileText size={18} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

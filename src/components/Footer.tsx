import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';

export default function Footer() {
  const { name, github, linkedin, leetcode, email } = portfolioData;

  return (
    <footer className="py-8 px-6 border-t-2 border-spider-red/20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white/60 font-medium">{name}</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-spider-red transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-spider-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-comic-yellow transition-colors"
            aria-label="LeetCode"
          >
            <Code2 size={18} />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-white/40 hover:text-comic-yellow transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

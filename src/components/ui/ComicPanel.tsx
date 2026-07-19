import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  halftone?: boolean;
  hover?: boolean;
  delay?: number;
}

export default function ComicPanel({
  children,
  className,
  rotation = 0,
  halftone = false,
  hover = true,
  delay = 0,
}: ComicPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -6, rotate: rotation + 1, scale: 1.02 } : undefined}
      className={cn(
        'comic-panel relative bg-spider-dark/80 backdrop-blur-sm p-6',
        halftone && 'halftone',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

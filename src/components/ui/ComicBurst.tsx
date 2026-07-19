import { cn } from '../../utils/cn';

interface ComicBurstProps {
  text?: string;
  className?: string;
  color?: 'red' | 'yellow' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export default function ComicBurst({ text, className, color = 'yellow', size = 'md', children }: ComicBurstProps) {
  const colors = {
    red: 'text-spider-red',
    yellow: 'text-comic-yellow',
    blue: 'text-spider-blue',
  };

  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div
      className={cn(
        'comic-burst inline-flex items-center justify-center relative',
        sizes[size],
        className
      )}
    >
      <svg viewBox="0 0 100 100" className={cn('absolute inset-0 w-full h-full', colors[color])} aria-hidden="true">
        <polygon
          points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
          fill="currentColor"
          opacity="0.15"
        />
      </svg>
      {(text || children) && (
        <span className="relative z-10 font-bangers tracking-wider">
          {text || children}
        </span>
      )}
    </div>
  );
}

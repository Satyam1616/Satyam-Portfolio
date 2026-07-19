import { cn } from '../../utils/cn';

interface SpiderWebProps {
  className?: string;
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}

export default function SpiderWeb({ className, corner = 'top-left', size = 200 }: SpiderWebProps) {
  const rotation = {
    'top-left': 'rotate(0)',
    'top-right': 'rotate(90)',
    'bottom-right': 'rotate(180)',
    'bottom-left': 'rotate(270)',
  }[corner];

  const position = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }[corner];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={cn('absolute pointer-events-none opacity-30', position, className)}
      style={{ transform: rotation }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="0.5" fill="none">
        {[0, 30, 60, 90].map((angle) => (
          <line
            key={angle}
            x1="0"
            y1="0"
            x2={200 * Math.cos((angle * Math.PI) / 180)}
            y2={200 * Math.sin((angle * Math.PI) / 180)}
          />
        ))}
        {[40, 80, 120, 160].map((radius) => (
          <path
            key={radius}
            d={`M ${radius * Math.cos(0)} ${radius * Math.sin(0)}
                Q ${radius * Math.cos(Math.PI / 12)} ${radius * Math.sin(Math.PI / 12)}
                  ${radius * Math.cos(Math.PI / 6)} ${radius * Math.sin(Math.PI / 6)}
                Q ${radius * Math.cos(Math.PI / 4)} ${radius * Math.sin(Math.PI / 4)}
                  ${radius * Math.cos(Math.PI / 3)} ${radius * Math.sin(Math.PI / 3)}
                Q ${radius * Math.cos((5 * Math.PI) / 12)} ${radius * Math.sin((5 * Math.PI) / 12)}
                  ${radius * Math.cos(Math.PI / 2)} ${radius * Math.sin(Math.PI / 2)}`}
          />
        ))}
      </g>
    </svg>
  );
}

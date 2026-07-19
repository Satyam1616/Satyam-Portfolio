import { cn } from '../../utils/cn';

interface HalftoneBgProps {
  className?: string;
  color?: string;
  density?: 'sparse' | 'normal' | 'dense';
}

export default function HalftoneBg({ className, color = '#ff003c', density = 'normal' }: HalftoneBgProps) {
  const gap = density === 'sparse' ? 20 : density === 'dense' ? 8 : 14;
  const r = density === 'sparse' ? 1.5 : density === 'dense' ? 2.5 : 2;

  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none opacity-20', className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`halftone-${density}-${color.replace('#', '')}`} x="0" y="0" width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap / 2} cy={gap / 2} r={r} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#halftone-${density}-${color.replace('#', '')})`} />
    </svg>
  );
}

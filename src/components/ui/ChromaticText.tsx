import { cn } from '../../utils/cn';

interface ChromaticTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
  animate?: boolean;
}

export default function ChromaticText({ children, as: Tag = 'h2', className, animate = false }: ChromaticTextProps) {
  return (
    <Tag
      className={cn(
        'chromatic-text relative',
        animate && 'chromatic-glitch',
        className
      )}
      data-text={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Tag>
  );
}

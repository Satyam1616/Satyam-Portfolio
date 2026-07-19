import { useRef } from 'react';
import { useInView } from 'framer-motion';
import type { ReactNode } from 'react';
import ComicSkeleton from './ComicSkeleton';

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
}

export default function LazySection({ children, className = '' }: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '200px 0px' });

  return (
    <div ref={ref} className={className}>
      {isInView ? children : <ComicSkeleton />}
    </div>
  );
}

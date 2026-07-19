import { motion } from 'framer-motion';

interface ComicSkeletonProps {
  variant?: 'card' | 'timeline' | 'grid';
  rows?: number;
  columns?: number;
}

export default function ComicSkeleton({ variant, rows, columns }: ComicSkeletonProps) {
  const inferredVariant = variant ?? (columns && columns >= 3 ? 'grid' : rows && rows >= 3 ? 'timeline' : 'card');
  const shimmer = {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
    },
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear' as const,
    },
  };

  if (inferredVariant === 'grid') {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="border-[3px] border-ink-black/30 rounded-sm p-5 h-48"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,0,60,0.05) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            {...shimmer}
          >
            <div className="h-4 w-3/4 bg-white/10 rounded mb-3" />
            <div className="h-3 w-full bg-white/5 rounded mb-2" />
            <div className="h-3 w-5/6 bg-white/5 rounded mb-4" />
            <div className="flex gap-2 mt-auto">
              <div className="h-5 w-14 bg-spider-red/10 rounded" />
              <div className="h-5 w-14 bg-spider-red/10 rounded" />
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (inferredVariant === 'timeline') {
    return (
      <div className="space-y-8 p-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-8">
            <div className="hidden md:block w-1/2" />
            <motion.div
              className="flex-1 border-[3px] border-ink-black/30 rounded-sm p-5"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(77,158,255,0.05) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
              }}
              {...shimmer}
            >
              <div className="h-4 w-1/2 bg-white/10 rounded mb-2" />
              <div className="h-3 w-1/3 bg-spider-red/10 rounded mb-4" />
              <div className="h-3 w-full bg-white/5 rounded mb-2" />
              <div className="h-3 w-4/5 bg-white/5 rounded" />
            </motion.div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="border-[3px] border-ink-black/30 rounded-sm p-6"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,0,60,0.05) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
      }}
      {...shimmer}
    >
      <div className="h-5 w-2/3 bg-white/10 rounded mb-4" />
      <div className="h-3 w-full bg-white/5 rounded mb-2" />
      <div className="h-3 w-5/6 bg-white/5 rounded mb-2" />
      <div className="h-3 w-3/4 bg-white/5 rounded" />
    </motion.div>
  );
}

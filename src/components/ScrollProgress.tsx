import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block" aria-hidden="true">
      <svg width="8" height="200" viewBox="0 0 8 200">
        {/* Web thread background */}
        <line x1="4" y1="0" x2="4" y2="200" stroke="currentColor" strokeWidth="1" className="text-white/10" />
        {/* Small web nodes */}
        {[0, 25, 50, 75, 100, 125, 150, 175, 200].map(y => (
          <circle key={y} cx="4" cy={y} r="2" className="fill-white/10" />
        ))}
        {/* Progress fill */}
        <line
          x1="4" y1="0" x2="4" y2={200 * progress}
          stroke="#ff003c"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Spider indicator */}
        <circle
          cx="4"
          cy={200 * progress}
          r="4"
          fill="#ff003c"
          stroke="#0d0d14"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

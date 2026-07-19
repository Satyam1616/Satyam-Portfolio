import { useEffect, useRef, useCallback } from 'react';

interface Burst {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const burstsRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const moveCursor = useCallback((e: MouseEvent) => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    }
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    if (!burstsRef.current) return;
    const id = ++idCounter.current;
    const burst = document.createElement('div');
    burst.className = 'thwip-burst';
    burst.textContent = 'THWIP!';
    burst.style.left = `${e.clientX}px`;
    burst.style.top = `${e.clientY}px`;
    burstsRef.current.appendChild(burst);

    setTimeout(() => burst.remove(), 700);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    document.documentElement.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleClick);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleClick);
    };
  }, [isTouch, moveCursor, handleClick]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-3 h-3 rounded-full bg-spider-red mix-blend-difference"
        style={{ transition: 'transform 0.05s linear' }}
      />
      <div ref={burstsRef} className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden" />
    </>
  );
}

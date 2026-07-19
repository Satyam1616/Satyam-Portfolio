import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let lastX = 0;
    let lastY = 0;
    let frame = 0;

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 8) {
        trailRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
        if (trailRef.current.length > 40) trailRef.current.shift();
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const trail = trailRef.current;

      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age += 0.02;
        if (trail[i].age >= 1) {
          trail.splice(i, 1);
        }
      }

      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);

        for (let i = 1; i < trail.length; i++) {
          const p = trail[i];
          const prev = trail[i - 1];
          const midX = (prev.x + p.x) / 2;
          const midY = (prev.y + p.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
        }

        const lastPoint = trail[trail.length - 1];
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);

        const gradient = ctx.createLinearGradient(
          trail[0].x, trail[0].y,
          lastPoint.x, lastPoint.y
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.15)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Subtle cross-threads for web effect
        if (frame % 3 === 0 && trail.length > 4) {
          for (let i = 2; i < trail.length - 2; i += 3) {
            const p = trail[i];
            const alpha = (1 - p.age) * 0.06;
            ctx.beginPath();
            ctx.moveTo(p.x - 6, p.y - 6);
            ctx.lineTo(p.x + 6, p.y + 6);
            ctx.strokeStyle = `rgba(255, 0, 60, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9990] hidden md:block"
      aria-hidden="true"
    />
  );
}

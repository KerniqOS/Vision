import { useEffect, useRef } from 'react';

interface Drop {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  alpha: number;
  trail: number;
}

export function RainOnGlass() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dropCount = Math.min(72, Math.max(28, Math.floor(width / 24)));
    const drops: Drop[] = Array.from({ length: dropCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.9 + Math.random() * 2.2,
      vy: 0.35 + Math.random() * 1.1,
      vx: (Math.random() - 0.5) * 0.14,
      alpha: 0.12 + Math.random() * 0.28,
      trail: 18 + Math.random() * 52,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (const drop of drops) {
        if (!prefersReducedMotion) {
          drop.y += drop.vy;
          drop.x += drop.vx;
          if (drop.y - drop.trail > height) {
            drop.y = -drop.r * 4;
            drop.x = Math.random() * width;
          }
          if (drop.x < 0) drop.x = width;
          if (drop.x > width) drop.x = 0;
        }

        const grad = ctx.createLinearGradient(drop.x, drop.y - drop.trail, drop.x, drop.y);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        grad.addColorStop(0.75, `rgba(46, 123, 255, ${drop.alpha * 0.45})`);
        grad.addColorStop(1, `rgba(125, 211, 252, ${drop.alpha})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = drop.r * 0.75;
        ctx.lineCap = 'round';
        ctx.moveTo(drop.x, drop.y - drop.trail);
        ctx.lineTo(drop.x, drop.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(186, 230, 253, ${drop.alpha * 1.15})`;
        ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-electric-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-[-10%] h-[420px] w-[520px] rounded-full bg-electric-400/10 blur-[130px]" />
      <canvas ref={canvasRef} className="h-full w-full opacity-75" />
    </div>
  );
}

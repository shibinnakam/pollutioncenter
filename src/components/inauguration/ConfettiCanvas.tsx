import React, { useEffect, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';

export interface ConfettiCanvasRef {
  burstCannon: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  tilt: number;
  tiltSpeed: number;
  opacity: number;
  decay: number;
  type: 'confetti' | 'sparkle' | 'dust';
}

const CONFETTI_COLORS = [
  '#ffd700', // Imperial Gold
  '#f3ba2f', // Warm Gold
  '#ffffff', // Pearl Silver
  '#ff4081', // Rose
  '#d81b60', // Velvet Crimson
  '#673ab7', // Deep Royal Violet
  '#00e676', // Emerald
  '#00bcd4', // Azure
  '#ffea88', // Light Gold
];

export const ConfettiCanvas = forwardRef<ConfettiCanvasRef>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  const burstCannon = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const count = 140;
    // Left cannon
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI / 180) * (35 + Math.random() * 50); // Shoot up-right
      const speed = 12 + Math.random() * 20;
      particlesRef.current.push({
        x: canvas.width * 0.1,
        y: canvas.height * 0.9,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed,
        width: 8 + Math.random() * 8,
        height: 12 + Math.random() * 10,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        tilt: Math.random() * 360,
        tiltSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        decay: 0.003 + Math.random() * 0.005,
        type: Math.random() > 0.3 ? 'confetti' : 'sparkle',
      });
    }

    // Right cannon
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI / 180) * (95 + Math.random() * 50); // Shoot up-left
      const speed = 12 + Math.random() * 20;
      particlesRef.current.push({
        x: canvas.width * 0.9,
        y: canvas.height * 0.9,
        vx: -Math.sin(angle - Math.PI / 2) * speed,
        vy: -Math.cos(angle - Math.PI / 2) * speed,
        width: 8 + Math.random() * 8,
        height: 12 + Math.random() * 10,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        tilt: Math.random() * 360,
        tiltSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        decay: 0.003 + Math.random() * 0.005,
        type: Math.random() > 0.3 ? 'confetti' : 'sparkle',
      });
    }
  }, []);

  useImperativeHandle(ref, () => ({
    burstCannon,
  }));

  useEffect(() => {
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

    // Add gentle background dust
    for (let i = 0; i < 40; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.2 - Math.random() * 0.5,
        width: 2 + Math.random() * 3,
        height: 2 + Math.random() * 3,
        color: '#ffdf80',
        rotation: 0,
        rotSpeed: 0,
        tilt: 0,
        tiltSpeed: 0,
        opacity: 0.2 + Math.random() * 0.6,
        decay: 0,
        type: 'dust',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.type === 'dust') {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < 0) p.y = canvas.height;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.width, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity * (0.6 + Math.sin(Date.now() * 0.003 + i) * 0.4);
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#ffd700';
          ctx.fill();
          ctx.restore();
          continue;
        }

        // Active confetti physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.38; // gravity
        p.vx *= 0.985; // air drag
        p.rotation += p.rotSpeed;
        p.tilt += p.tiltSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0 || p.y > canvas.height + 50) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.scale(Math.sin((p.tilt * Math.PI) / 180), 1);
        ctx.globalAlpha = Math.max(0, p.opacity);

        if (p.type === 'sparkle') {
          // 4-point golden star
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          const s = p.width * 1.2;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        } else {
          // Shiny confetti rectangle
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        }

        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-30 w-full h-full"
    />
  );
});

ConfettiCanvas.displayName = 'ConfettiCanvas';

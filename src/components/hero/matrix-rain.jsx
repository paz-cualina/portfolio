import React from 'react';

export const MatrixRain = ({ className }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, cols, drops;
    const charset =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}<>/=*+-#$&';
    const fontSize = 14;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      cols = Math.floor(w / (fontSize * window.devicePixelRatio));
      drops = Array(cols)
        .fill(0)
        .map(() => Math.random() * -100);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf;
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize * window.devicePixelRatio}px JetBrains Mono, monospace`;
      ctx.textBaseline = 'top';

      const accent =
        getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00ff88';

      for (let i = 0; i < cols; i++) {
        const x = i * fontSize * window.devicePixelRatio;
        const y = drops[i] * fontSize * window.devicePixelRatio;
        const ch = charset[Math.floor(Math.random() * charset.length)];

        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = accent;
        ctx.shadowBlur = 8;
        ctx.fillText(ch, x, y);

        ctx.shadowBlur = 0;
        ctx.fillStyle = accent;
        if (drops[i] > 1) {
          ctx.globalAlpha = 0.3;
          ctx.fillText(
            charset[Math.floor(Math.random() * charset.length)],
            x,
            y - fontSize * window.devicePixelRatio
          );
          ctx.globalAlpha = 1;
        }

        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5;
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

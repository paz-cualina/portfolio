import React from 'react';
import AVATAR_SRC from '../../assets/avatar-profile.png';

const Avatar = () => (
  <img
    src={AVATAR_SRC}
    alt="avatar"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block',
    }}
  />
);

export const AvatarGlitch = () => {
  const [glitch, setGlitch] = React.useState(false);
  const [slices, setSlices] = React.useState([]);

  React.useEffect(() => {
    let timers = [];
    const cycle = () => {
      setGlitch(true);
      timers.push(setTimeout(() => setGlitch(false), 380 + Math.random() * 220));
      timers.push(setTimeout(cycle, 2800 + Math.random() * 2200));
    };
    timers.push(setTimeout(cycle, 1600));
    return () => timers.forEach(clearTimeout);
  }, []);

  React.useEffect(() => {
    let t;
    const tick = () => {
      const count = glitch ? 6 + Math.floor(Math.random() * 5) : Math.random() < 0.35 ? 2 : 0;
      const next = [];
      for (let i = 0; i < count; i++) {
        const top = Math.random() * 100;
        const h = 1.5 + Math.random() * 6;
        const dx = (Math.random() - 0.5) * (glitch ? 40 : 14);
        next.push({ top, h, dx });
      }
      setSlices(next);
      t = setTimeout(tick, glitch ? 60 : 180 + Math.random() * 220);
    };
    tick();
    return () => clearTimeout(t);
  }, [glitch]);

  const baseLayer = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 280ms steps(3, end), filter 280ms steps(3, end)',
  };

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#060606' }}>
      <div style={{ ...baseLayer, filter: glitch ? 'contrast(1.2) saturate(1.1)' : 'none' }}>
        <Avatar />
        <Avatar
          style={{
            mixBlendMode: 'screen',
            opacity: glitch ? 0.45 : 0.14,
            transform: glitch ? 'translate(5px, 0)' : 'translate(1.5px, 0)',
            filter: 'hue-rotate(38deg) saturate(2.5)',
          }}
        />
        <Avatar
          style={{
            mixBlendMode: 'screen',
            opacity: glitch ? 0.4 : 0.12,
            transform: glitch ? 'translate(-5px, 0)' : 'translate(-1.5px, 0)',
            filter: 'hue-rotate(-38deg) saturate(2.5)',
          }}
        />
      </div>

      {slices.map((s, i) => {
        const bottom = 100 - s.top - s.h;
        const clip = `inset(${s.top}% 0% ${bottom < 0 ? 0 : bottom}% 0%)`;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              clipPath: clip,
              WebkitClipPath: clip,
              transform: `translateX(${s.dx}px)`,
              opacity: 0.9,
            }}
          >
            <Avatar />
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,0.18) 2px 3px)',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.18)',
          mixBlendMode: 'multiply',
          opacity: glitch ? 1 : 0,
          transition: 'opacity 120ms',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          width: 14,
          height: 14,
          borderTop: '1px solid var(--accent)',
          borderLeft: '1px solid var(--accent)',
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 14,
          height: 14,
          borderTop: '1px solid var(--accent)',
          borderRight: '1px solid var(--accent)',
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          width: 14,
          height: 14,
          borderBottom: '1px solid var(--accent)',
          borderLeft: '1px solid var(--accent)',
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 14,
          height: 14,
          borderBottom: '1px solid var(--accent)',
          borderRight: '1px solid var(--accent)',
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--mono)',
          fontSize: 9,
          letterSpacing: '0.32em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        SUBJECT // TAMARA-S
      </div>
    </div>
  );
};

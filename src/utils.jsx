import React from 'react';

// Shared utilities and primitives
const useReveal = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};

// Magnetic hover: pulls element toward cursor within radius
const useMagnetic = (strength = 0.35, radius = 120) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        el.style.transform = 'translate(0, 0)';
      }
    };
    const handleLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };
    window.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength, radius]);
  return ref;
};

const Reveal = ({ children, delay = 0, as: As = 'div', style, ...rest }) => {
  const ref = useReveal();
  return (
    <As
      ref={ref}
      className={`reveal ${rest.className || ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </As>
  );
};

// Magnetic anchor/button
const Magnetic = ({ children, as: As = 'a', strength = 0.3, ...rest }) => {
  const ref = useMagnetic(strength);
  return (
    <As ref={ref} {...rest}>
      {children}
    </As>
  );
};

// Section header (label + title)
const SectionLabel = ({ index, label }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--mono)',
      fontSize: 12,
      color: 'var(--accent)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: 28,
    }}
  >
    <span style={{ color: 'var(--text-faint)' }}>{index}</span>
    <span style={{ width: 32, height: 1, background: 'var(--accent)', opacity: 0.6 }} />
    <span>{label}</span>
  </div>
);

// Striped placeholder
const Placeholder = ({ label, height = 480, accent = false }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height,
      background: accent ? 'var(--accent-soft)' : '#0a0a0a',
      border: `1px solid ${accent ? 'var(--accent)' : 'var(--line-strong)'}`,
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent 12px,
        ${accent ? 'rgba(0, 255, 136, 0.06)' : 'rgba(255, 255, 255, 0.03)'} 12px,
        ${accent ? 'rgba(0, 255, 136, 0.06)' : 'rgba(255, 255, 255, 0.03)'} 13px
      )`,
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 16,
        left: 16,
        fontFamily: 'var(--mono)',
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
      }}
    >
      [ screenshot ]
    </div>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 13,
          color: 'var(--text-dim)',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 8,
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--text-faint)',
          letterSpacing: '0.2em',
        }}
      >
        TO BE PROVIDED
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 8,
        height: 8,
        background: 'var(--accent)',
        boxShadow: '0 0 12px var(--accent-glow)',
      }}
    />
  </div>
);

Object.assign(window, { useReveal, useMagnetic, Reveal, Magnetic, SectionLabel, Placeholder });

export { useReveal, useMagnetic, Reveal, Magnetic, SectionLabel, Placeholder };

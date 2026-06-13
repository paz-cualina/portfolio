import React from 'react';
import styles from './nav.module.css';

const Nav = () => {
  const [active, setActive] = React.useState('hero');
  const sections = [
    { id: 'hero', label: 'Top' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  React.useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <nav className={styles.nav}>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={styles.link}
          style={{ color: active === s.id ? 'var(--accent)' : 'var(--text-faint)' }}
        >
          <span className={styles.line} style={{ width: active === s.id ? 24 : 12 }} />
          <span style={{ opacity: active === s.id ? 1 : 0.5 }}>{s.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Nav;

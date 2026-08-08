import React from 'react';
import { NAV_ITEMS } from '../../../data/content.js';
import styles from './nav.module.css';

// Dot rail. Scrolls programmatically instead of using `href="#id"` — the app
// runs under HashRouter, where an anchor hash would be read as a route.
const Nav = () => {
  const [active, setActive] = React.useState(NAV_ITEMS[0].id);

  React.useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
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

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.nav} aria-label="Sections">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => goTo(item.id)}
          className={`${styles.dot} ${active === item.id ? styles.dotActive : ''}`}
          title={item.label}
          aria-label={item.label}
          aria-current={active === item.id ? 'true' : undefined}
        />
      ))}
    </nav>
  );
};

export default Nav;

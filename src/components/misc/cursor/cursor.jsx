import React from 'react';
import styles from './cursor.module.css';

const prefersCursor = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Circular ring that trails the pointer. Skipped on touch/coarse pointers and
// when the visitor asked for reduced motion.
const Cursor = () => {
  const ref = React.useRef(null);
  const [enabled] = React.useState(prefersCursor);

  React.useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 11}px, ${e.clientY - 11}px)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className={styles.cursor} aria-hidden="true" />;
};

export default Cursor;

import { useReveal } from './hooks.js';
import styles from './styles/primitives.module.css';

export const Reveal = ({ children, delay = 0, as: As = 'div', className = '', style, ...rest }) => {
  const ref = useReveal();
  return (
    <As
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </As>
  );
};

// Stand-in for a screenshot that has not been captured yet. `file` names the
// asset to drop into src/assets to replace it.
export const Placeholder = ({ label, file }) => (
  <div className={styles.placeholder}>
    <span className={styles.placeholderTag}>[ screenshot ]</span>
    <span className={styles.placeholderLabel}>{label}</span>
    {file && <span className={styles.placeholderFile}>{file}</span>}
  </div>
);

// Renders an image once available, a placeholder until then. `bg` fills the
// letterbox left by `object-fit: contain` — pass the captured UI's own
// background so dark screenshots don't sit in a light frame.
export const Shot = ({ src, alt, label, file, bg, className = '' }) =>
  src ? (
    <img
      src={src}
      alt={alt || label}
      className={`${styles.shot} ${className}`}
      style={bg ? { background: bg } : undefined}
      loading="lazy"
    />
  ) : (
    <Placeholder label={label} file={file} />
  );

// Section number + heading, shared by every portfolio section.
export const SectionHead = ({ index, title, kicker, children }) => (
  <div className={styles.head}>
    <Reveal className={styles.headIndex}>{index}</Reveal>
    <div>
      <Reveal delay={50} as="h2" className={styles.headTitle}>
        {title}
      </Reveal>
      {kicker && <p className={styles.headKicker}>{kicker}</p>}
      {children}
    </div>
  </div>
);

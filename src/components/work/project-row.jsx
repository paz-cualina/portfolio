import React from 'react';
import { Reveal, Placeholder, useMagnetic } from '../../utils.jsx';
import styles from './work.module.css';

export const ProjectRow = ({ project, reverse, highlight }) => {
  const ctaRef = useMagnetic(0.3);
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });

  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setParallax({ x, y });
  };

  return (
    <Reveal>
      <div className={`${styles.row} ${reverse ? styles.rowReverse : styles.rowNormal}`}>
        <div
          ref={ref}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            setParallax({ x: 0, y: 0 });
          }}
          onMouseMove={onMove}
          className={styles.imageWrap}
          style={{
            order: reverse ? 2 : 1,
            transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
            transform: hover ? 'scale(1.02)' : 'scale(1)',
          }}
        >
          <div
            style={{
              transform: `translate(${parallax.x}px, ${parallax.y}px)`,
              transition: hover ? 'transform 0.15s linear' : 'transform 0.4s ease-out',
            }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className={styles.projectImg} />
            ) : (
              <Placeholder label={project.label} height={520} accent={highlight} />
            )}
          </div>
          <div className={styles.imageTag}>
            {project.n} / {project.tag}
          </div>
        </div>

        <div className={styles.textSide}>
          <div className={styles.projectRole}>{'// '}{project.role}</div>
          <h3 className={`${styles.projectTitle} ${project.url ? styles.projectTitleWithUrl : ''}`}>
            {project.title}
          </h3>
          {project.url && (
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectUrl}
            >
              <span className={styles.urlArrow}>↗</span> {project.url}
            </a>
          )}
          <p className={styles.projectDesc}>{project.desc}</p>
          <div className={styles.stack}>
            {project.stack.map((s) => (
              <span key={s} className={styles.stackItem}>
                {s}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              ref={ctaRef}
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {project.link.label}
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
};

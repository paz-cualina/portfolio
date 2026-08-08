import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Reveal, Shot } from '../utils.jsx';
import { PROJECTS } from '../data/content.js';
import styles from './case-study.module.css';

// Router state that lands the visitor on the Work section instead of the top.
const BACK_TO_WORK = { scrollTo: 'work' };

const CaseStudy = () => {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" state={BACK_TO_WORK} className={styles.back}>
          ← Back to portfolio
        </Link>
        <span className={styles.counter}>
          {project.n} / {String(PROJECTS.length).padStart(2, '0')} — React applications
        </span>
      </header>

      <section className={styles.hero}>
        <div className={styles.meta}>{project.meta}</div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.intro}>{project.intro}</p>
        <div className={styles.tags}>
          {project.stack.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Reveal className={styles.coverWrap}>
        <Shot
          src={project.cover}
          alt={project.coverAlt}
          label={`${project.title} — overview`}
          bg={project.shotBg}
        />
      </Reveal>

      <section className={styles.split}>
        <Reveal>
          <h2 className={styles.blockTitle}>The problem</h2>
          <p className={styles.blockBody}>{project.problem}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={styles.blockTitle}>My role</h2>
          <p className={styles.blockBody}>{project.myRole}</p>
        </Reveal>
      </section>

      <Reveal className={styles.solution}>
        <h2 className={styles.blockTitle}>The solution</h2>
        {project.solution.map((paragraph) => (
          <p key={paragraph} className={styles.blockBody}>
            {paragraph}
          </p>
        ))}
      </Reveal>

      <section className={styles.shots}>
        {project.shots.map((shot) => (
          <Reveal key={shot.label} className={styles.shotWrap}>
            <Shot src={shot.src} label={shot.label} file={shot.file} bg={project.shotBg} />
          </Reveal>
        ))}
      </section>

      <footer className={styles.footer}>
        {prev ? (
          <Link to={`/work/${prev.slug}`} className={styles.footerPrev}>
            ← {prev.title}
          </Link>
        ) : (
          <Link to="/" state={BACK_TO_WORK} className={styles.footerPrev}>
            ← All work
          </Link>
        )}
        {next ? (
          <Link to={`/work/${next.slug}`} className={styles.footerNext}>
            Next: {next.title} →
          </Link>
        ) : (
          <Link to="/" state={BACK_TO_WORK} className={styles.footerNext}>
            Back to all work →
          </Link>
        )}
      </footer>
    </div>
  );
};

export default CaseStudy;

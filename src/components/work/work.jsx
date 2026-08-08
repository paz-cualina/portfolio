import { Link } from 'react-router-dom';
import { Reveal, SectionHead, Shot } from '../../utils.jsx';
import { PROJECTS } from '../../data/content.js';
import styles from './work.module.css';

const Work = () => (
  <section id="work" className={styles.section}>
    <div className={styles.inner}>
      <SectionHead
        index="04"
        title="Things I've shipped."
        kicker="Web applications — end-to-end design and development"
      />

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <Reveal key={project.slug}>
            <Link to={`/work/${project.slug}`} className={styles.card}>
              <div className={styles.cardImage}>
                <Shot
                  src={project.cover}
                  alt={project.coverAlt}
                  label={project.title}
                  bg={project.shotBg}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  {project.n} / {project.meta}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSummary}>{project.summary}</p>
                <span className={styles.cardCta}>View case study →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Work;

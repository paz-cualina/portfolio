import { Reveal, SectionHead } from '../../utils.jsx';
import { EXPERIENCE } from '../../data/content.js';
import styles from './experience.module.css';

const Experience = () => (
  <section id="experience" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.head}>
        <SectionHead
          index="03"
          title={
            <>
              Five years across product,
              <br />
              agency &amp; QA.
            </>
          }
        />
      </div>

      {EXPERIENCE.map((job) => (
        <Reveal key={job.company} className={styles.row}>
          <div className={styles.dates}>{job.dates}</div>
          <div>
            <div className={styles.titleRow}>
              <h3 className={styles.company}>{job.company}</h3>
              <span className={styles.role}>{job.role}</span>
            </div>
            <p className={styles.description}>{job.description}</p>
            <div className={styles.tags}>
              {job.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Experience;

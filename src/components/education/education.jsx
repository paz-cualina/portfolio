import { Reveal, SectionHead } from '../../utils.jsx';
import { EDUCATION } from '../../data/content.js';
import styles from './education.module.css';

const Education = () => (
  <section id="education" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.head}>
        <SectionHead
          index="06"
          title={
            <>
              Always learning
              <br />
              something new.
            </>
          }
        />
      </div>

      {EDUCATION.map((edu) => (
        <Reveal key={`${edu.title}-${edu.date}`} className={styles.row}>
          <div className={styles.date}>{edu.date}</div>
          <div>
            <span className={styles.title}>{edu.title}</span>
            <span className={styles.org}>{edu.org}</span>
          </div>
          <div className={styles.tags}>{edu.tags}</div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;

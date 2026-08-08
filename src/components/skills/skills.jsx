import { Reveal, SectionHead } from '../../utils.jsx';
import { MARQUEE_ITEMS, STACK_CATEGORIES } from '../../data/content.js';
import styles from './skills.module.css';

// The marquee loops by rendering the strip twice and translating -50%.
const marqueeText = `${MARQUEE_ITEMS.join(' · ')} · `.repeat(2);

const Skills = () => (
  <section id="stack" className={styles.section}>
    <div className={styles.inner}>
      <SectionHead index="02" title="Tools, frameworks & tech I build with." />
    </div>

    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        <span className={styles.marqueeText}>{marqueeText}</span>
        <span className={styles.marqueeText}>{marqueeText}</span>
      </div>
    </div>

    <div className={`${styles.inner} ${styles.categories}`}>
      {STACK_CATEGORIES.map((cat) => (
        <Reveal key={cat.num}>
          <div className={styles.catName}>
            {cat.num} {cat.name}
          </div>
          <div className={styles.pills}>
            {cat.items.map((tool) => (
              <span key={tool} className={styles.pill}>
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;

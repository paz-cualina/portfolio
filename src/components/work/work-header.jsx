import { Reveal, SectionLabel } from '../../utils.jsx';
import styles from './work.module.css';

export const WorkHeader = () => (
  <div className={styles.header}>
    <Reveal>
      <SectionLabel index="04" label="Selected Work" />
    </Reveal>
    <Reveal delay={100}>
      <h2 className={styles.heading}>
        Things I&apos;ve shipped<span className={styles.accent}>.</span>
      </h2>
    </Reveal>
    <Reveal delay={200}>
      <p className={styles.subheading}>
        {"// a curated cut of the work I'm proud of — split into React applications where I owned design and code, and websites where I implemented the frontend."}
      </p>
    </Reveal>
  </div>
);

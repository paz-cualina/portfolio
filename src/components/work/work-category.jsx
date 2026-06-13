import React from 'react';
import { Reveal, SectionLabel } from '../../utils.jsx';
import { ProjectRow } from './project-row.jsx';
import styles from './work.module.css';

export const WorkCategory = ({ index, label, kicker, projects, showHero }) => (
  <div className={styles.category}>
    <Reveal>
      <SectionLabel index={index} label={label} />
    </Reveal>
    <Reveal delay={100}>
      <p className={styles.kicker}>{kicker}</p>
    </Reveal>
    <div className={styles.projectList}>
      {projects.map((p, i) => (
        <ProjectRow key={p.n} project={p} reverse={i % 2 === 1} highlight={showHero} />
      ))}
    </div>
  </div>
);

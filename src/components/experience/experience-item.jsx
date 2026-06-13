import React from 'react';
import { Reveal } from '../../utils.jsx';
import styles from './experience.module.css';

export const ExperienceItem = ({ job, delay }) => (
  <Reveal delay={delay}>
    <div className={styles.job}>
      <div className={styles.period}>{job.period}</div>
      <div>
        <div className={styles.company}>{job.company}</div>
        <div className={styles.role}>
          {job.role} <span className={styles.industry}>· {job.industry}</span>
        </div>
        <p className={styles.desc}>{job.desc}</p>
        <div className={styles.stack}>
          {job.stack.map((s) => (
            <span key={s} className={styles.stackItem}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

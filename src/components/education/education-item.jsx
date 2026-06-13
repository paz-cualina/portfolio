import React from 'react';
import { Reveal } from '../../utils.jsx';
import styles from './education.module.css';

export const EducationItem = ({ item, delay }) => (
  <Reveal delay={delay}>
    <div className={styles.item}>
      <div className={styles.year}>{item.year}</div>
      <div className={styles.title}>
        {item.title}
        <div className={styles.org}>{item.org}</div>
      </div>
      <div className={styles.tags}>
        {item.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

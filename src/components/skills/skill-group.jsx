import React from 'react';
import { Reveal } from '../../utils.jsx';
import styles from './skills.module.css';

export const SkillGroup = ({ group, index, delay }) => (
  <Reveal delay={delay}>
    <div className={styles.cell}>
      <div className={styles.cellLabel}>
        <span className={styles.cellIndex}>0{index + 1}</span>
        <span>{group.label}</span>
      </div>
      <div className={styles.skillList}>
        {group.items.map((item) => (
          <span key={item} className={styles.chip}>
            {item}
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

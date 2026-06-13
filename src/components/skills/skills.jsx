import React from 'react';
import { Reveal, SectionLabel } from '../../utils.jsx';
import { SkillGroup } from './skill-group.jsx';
import styles from './skills.module.css';

const GROUPS = [
  {
    label: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Vite',
      'Ky',
      'Zustand',
      'TanStack Query',
      'TanStack Form',
      'Mantine UI',
    ],
  },
  {
    label: 'CMS / No-code',
    items: ['WordPress', 'Custom Themes', 'ACF', 'Webflow', 'Visual Composer', 'Divi'],
  },
  {
    label: 'Design',
    items: [
      'Figma',
      'Design Systems',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Claude Design',
      'Photoshop',
      'Illustrator',
    ],
  },
  {
    label: 'Other',
    items: ['PHP', 'SQL', 'Git / GitHub', 'Jira', 'Yoast SEO'],
  },
];

const Skills = () => (
  <section id="skills" className={styles.section}>
    <Reveal>
      <SectionLabel index="02" label="Stack" />
    </Reveal>
    <Reveal delay={100}>
      <h2 className={styles.heading}>
        Tools, frameworks &<br />
        <span className={styles.accent}>tech I build with.</span>
      </h2>
    </Reveal>
    <div className={styles.grid}>
      {GROUPS.map((group, i) => (
        <SkillGroup key={group.label} group={group} index={i} delay={i * 100} />
      ))}
    </div>
  </section>
);

export default Skills;

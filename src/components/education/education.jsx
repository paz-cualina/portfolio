import React from 'react';
import { Reveal, SectionLabel } from '../../utils.jsx';
import { EducationItem } from './education-item.jsx';
import styles from './education.module.css';

const ITEMS = [
  {
    year: '03.2023',
    title: 'React Frontend Development Career',
    org: 'Coderhouse',
    tags: ['JavaScript', 'React.js'],
  },
  {
    year: '04.2022',
    title: 'WordPress',
    org: 'Coderhouse',
    tags: ['Custom themes', 'PHP'],
  },
  {
    year: '12.2021',
    title: 'UX/UI Development Career',
    org: 'Coderhouse',
    tags: ['Web Development', 'Advanced UX/UI', 'Photoshop & Illustrator'],
  },
  {
    year: '04.2021',
    title: 'Software Testing Fundamentals — Certified',
    org: 'AICS',
    tags: ['QA Foundations'],
  },
  {
    year: '01.2021 — 06.2021',
    title: 'Functional Testing',
    org: 'IBEC',
    tags: ['QA'],
  },
  {
    year: '2015 — 2018',
    title: "Bachelor's Degree in Fashion Design",
    org: 'UDE — Universidad de la Empresa, Uruguay',
    tags: ['Composition', 'Color theory', 'Visual hierarchy'],
  },
];

const Education = () => (
  <section id="education" className={styles.section}>
    <Reveal>
      <SectionLabel index="07" label="Education & Certifications" />
    </Reveal>
    <Reveal delay={100}>
      <h2 className={styles.heading}>
        Always learning
        <br />
        <span className={styles.accent}>something new.</span>
      </h2>
    </Reveal>
    <div className={styles.list}>
      {ITEMS.map((item, i) => (
        <EducationItem key={i} item={item} delay={i * 60} />
      ))}
    </div>
  </section>
);

export default Education;

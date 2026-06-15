import React from 'react';
import { Reveal, SectionLabel } from '../../utils.jsx';
import { ExperienceItem } from './experience-item.jsx';
import styles from './experience.module.css';

const JOBS = [
  {
    period: '11.2025 — Present',
    company: 'Paramek',
    role: 'Frontend Developer & Product Designer',
    industry: 'Business Travel',
    desc: "Lead end-to-end product design and frontend development across the company's applications. Partner with stakeholders to understand operational challenges, define requirements, and design intuitive solutions. Own the company-wide design system in Figma and implement scalable React applications, bridging the gap between design and engineering.",
    stack: ['React', 'TypeScript', 'Figma', 'Design Systems'],
  },
  {
    period: '05.2022 — 10.2025',
    company: 'Qubika',
    role: 'Frontend Developer',
    industry: 'Software Consultancy',
    desc: 'Front-end web developer specialized in building dynamic, responsive applications using React.js, TypeScript, Axios, Redux Toolkit, and Next.js. Custom WordPress theme development with seamless ACF integration. Webflow development. Focus on fully responsive, pixel-perfect web experiences.',
    stack: ['React', 'Next.js', 'Redux Toolkit', 'WordPress', 'ACF', 'Webflow'],
  },
  {
    period: '06.2021 — 04.2022',
    company: 'Phone IQ',
    role: 'QA Analyst',
    industry: 'Telecommunications',
    desc: 'Design and execution of test cases for quality assurance. Incident reporting and tracking using Jira. Foundation for thinking about products from the user perspective — what can break, what should work, what feels off.',
    stack: ['Jira', 'Test Cases', 'Functional Testing'],
  },
];

const Experience = () => (
  <section id="experience" className={styles.section}>
    <Reveal>
      <SectionLabel index="03" label="Experience" />
    </Reveal>
    <Reveal delay={100}>
      <h2 className={styles.heading}>
        Five years across
        <br />
        <span className={styles.accent}>product, agency &</span> QA.
      </h2>
    </Reveal>
    <div className={styles.timeline}>
      {JOBS.map((job, i) => (
        <ExperienceItem key={i} job={job} delay={i * 80} />
      ))}
      <div className={styles.divider} />
    </div>
  </section>
);

export default Experience;

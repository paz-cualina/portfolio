import { Reveal } from '../../utils.jsx';
import { ABOUT_STATS } from '../../data/content.js';
import styles from './about.module.css';

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.inner}>
      <Reveal className={styles.index}>01</Reveal>
      <div className={styles.grid}>
        <Reveal delay={50}>
          <h2 className={styles.title}>About.</h2>
          <p className={styles.body}>
            I&apos;m a Product Designer and Front-End Developer based in Uruguay, working at the
            intersection of product strategy, design, and engineering. I collaborate with
            stakeholders to identify operational challenges, define requirements, and design
            end-to-end solutions — from user flows and interfaces to production-ready React
            implementations.
          </p>
          <p className={styles.body}>
            Currently, I lead product design and frontend development at Paramek, owning the
            company-wide design system and translating it into scalable React experiences. I
            specialize in turning complex workflows into intuitive products.
          </p>
        </Reveal>
        <Reveal delay={100} className={styles.stats}>
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statSub}>{stat.sub}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;

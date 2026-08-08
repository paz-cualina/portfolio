import { Reveal } from '../../utils.jsx';
import styles from './hero.module.css';

const Hero = () => (
  <section id="hero" className={styles.section}>
    <div className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
    <div className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />

    <Reveal className={styles.content}>
      <h1 className={styles.title}>
        Tamara
        <br />
        Sancristóbal.
      </h1>
      <p className={styles.tagline}>Product Designer &amp; Frontend Developer.</p>
      <p className={styles.intro}>
        Bridging product design and engineering — collaborating with stakeholders to transform
        complex problems into intuitive, scalable digital experiences.
      </p>
    </Reveal>

    <div className={styles.bottom}>
      <div className={styles.scroll}>
        <span className={styles.caret} aria-hidden="true" />
        Scroll
      </div>
      <div className={styles.years}>
        <div className={styles.yearsValue}>5 yrs</div>
        UX/UI Design · Figma · React · Webflow · WP
      </div>
    </div>
  </section>
);

export default Hero;

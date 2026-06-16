import React from 'react';
import { MatrixRain } from './matrix-rain.jsx';
import styles from './hero.module.css';

const Hero = () => {
  // Live time
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, '0');
      const mm = String(d.getUTCMinutes()).padStart(2, '0');
      const ss = String(d.getUTCSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.section}>
      <MatrixRain className={styles.canvas} />
      <div className={styles.vignette} />

      <div className={styles.content}>
        {/* Top bar */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <div className={styles.glyph}>TS</div>
            <div>
              <div className={styles.topBarName}>Tamara Sancristóbal</div>
              <div className={styles.topBarVersion}>Portfolio · v2026.04</div>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <div>Montevideo / UY</div>
            <div className={styles.topBarTime}>{time}</div>
          </div>
        </div>

        {/* Center hero text */}
        <div className={styles.center}>
          <h1 className={styles.title}>
            Product
            <br />
            Designer
            <br />
            <span className={styles.titleAccent}>&</span> Frontend
            <br />
            Developer<span className={styles.titleAccent}>.</span>
          </h1>
          <p className={styles.role}>
            {
              '// Bridging product design and engineering — collaborating with stakeholders to transform complex problems'
            }
            <br />
            into intuitive, scalable digital experiences.
            <br />
          </p>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.scroll}>
            <span>Scroll</span>
            <div className={styles.scrollLine}>
              <div className={styles.slide} />
            </div>
          </div>
          <div className={styles.techStack}>
            <div>5 yrs experience</div>
            <div className={styles.techStackSub}>React · TS · Figma · Webflow · WP</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

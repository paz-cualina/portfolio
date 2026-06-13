import styles from './about.module.css';
import { Reveal, SectionLabel } from '../../utils.jsx';
import { AvatarGlitch } from './avatar-glitch.jsx';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <Reveal>
        <SectionLabel index="01" label="About" />
      </Reveal>

      <div className={styles.grid}>
        {/* Avatar — animated glyph */}
        <Reveal>
          <div className={styles.leftCol}>
            <div className={styles.avatar}>
              <AvatarGlitch />
            </div>
            <div className={styles.idRow}>
              <span>ID / TAMARA-S</span>
              <span className={styles.online}>● ONLINE</span>
            </div>
          </div>
        </Reveal>

        <div className={styles.column}>
          <Reveal delay={100}>
            <p className={styles.paragraph}>
              I&apos;m a Front-End Developer and UX/UI Designer based in Uruguay. I work at the
              intersection of <span className={styles.accent}>design</span> and{' '}
              <span className={styles.accent}>engineering</span> — taking interfaces from Figma to
              production-ready React, with a strong eye for craft, motion, and detail.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.paragraph} style={{ marginTop: 32, color: 'var(--text-dim)' }}>
              Currently leading end-to-end design + frontend implementation at{' '}
              <span style={{ color: '#fff' }}>Paramek</span>, where I own the company-wide design
              system and translate it into React. Previously building Webflow and WordPress products
              at Qubika. Background in Fashion Design — which still shapes how I think about
              composition, rhythm, and hierarchy.
            </p>
          </Reveal>

          <div className={styles.metaRow}>
            <Reveal delay={300}>
              <div>
                <div className={styles.metaLabel}>Based in</div>
                <div className={styles.metaValue}>Montevideo</div>
                <div className={styles.metaSub}>UY · UTC-3</div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div>
                <div className={styles.metaLabel}>Years</div>
                <div className={styles.metaValue}>5+</div>
                <div className={styles.metaSub}>building products</div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div>
                <div className={styles.metaLabel}>Languages</div>
                <div className={styles.metaValue}>EN · ES</div>
                <div className={styles.metaSub}>intermediate · native</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

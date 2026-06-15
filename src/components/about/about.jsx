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
              I&apos;m a <span className={styles.accent}>Product Designer</span> and{' '}
              <span className={styles.accent}>Front-End Developer</span> based in Uruguay, working
              at the intersection of product strategy, design, and engineering. I collaborate with
              stakeholders to identify operational challenges, define requirements, and design
              end-to-end solutions — from user flows and interfaces to production-ready React
              implementations.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.paragraph} style={{ marginTop: 32, color: 'var(--text-dim)' }}>
              Currently, I lead product design and frontend development at{' '}
              <span style={{ color: '#fff' }}>Paramek</span>, owning the company-wide design system
              and translating it into scalable React experiences. I specialize in turning complex
              workflows into intuitive products.
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

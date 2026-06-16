import { Reveal, SectionLabel } from '../../utils.jsx';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <Reveal>
        <SectionLabel index="08" label="Contact" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className={styles.heading}>
          Let&apos;s build
          <br />
          something
          <br />
          <span className={styles.accent}>great.</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className={styles.subheading}>
          {'// currently open to new opportunities — full-time, contract or collaborations.'}
        </p>
      </Reveal>

      <div className={styles.grid}>
        {[
          {
            label: 'Email',
            value: 'tamarasancristobal@gmail.com',
            href: 'mailto:tamarasancristobal@gmail.com',
          },
          {
            label: 'LinkedIn',
            value: '/in/tamarasancristobal',
            href: 'https://linkedin.com/in/tamarasancristobal',
          },
          { label: 'Location', value: 'Montevideo, Uruguay', href: null },
        ].map((c, i) => (
          <Reveal key={c.label} delay={i * 80}>
            <a
              href={c.href || '#'}
              onClick={(e) => !c.href && e.preventDefault()}
              className={`${styles.contactItem}${!c.href ? ` ${styles.noLink}` : ''}`}
            >
              <div>
                <div className={styles.contactLabel}>{c.label}</div>
                <div className={styles.contactValue}>{c.value}</div>
              </div>
              {c.href && <span className={styles.arrow}>→</span>}
            </a>
          </Reveal>
        ))}
        <div className={styles.divider} />
      </div>

      {/* Footer */}
      <Reveal>
        <footer className={styles.footer}>
          <div>
            <div className={styles.footerCopyright}>© 2026 Tamara Sancristóbal</div>
            <div className={styles.footerCredit}>
              Designed & built by me<span className={styles.accent}>.</span>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerMade}>Made with React</div>
            <div className={styles.footerLocation}>Montevideo / UY</div>
          </div>
        </footer>
      </Reveal>
    </section>
  );
};

export default Contact;

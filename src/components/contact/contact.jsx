import { Reveal } from '../../utils.jsx';
import { CONTACT } from '../../data/content.js';
import styles from './contact.module.css';

const Contact = () => (
  <section id="contact" className={styles.section}>
    <div className={styles.blob} aria-hidden="true" />

    <Reveal className={styles.inner}>
      <div className={styles.label}>07 — Currently open to new opportunities</div>
      <h2 className={styles.title}>
        Let&apos;s build
        <br />
        something great.
      </h2>
      <div className={styles.links}>
        <a href={`mailto:${CONTACT.email}`} className={styles.email}>
          {CONTACT.email}
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn ↗
        </a>
        <span className={styles.location}>{CONTACT.location}</span>
      </div>
    </Reveal>

    <div className={styles.footer}>
      <span>© {new Date().getFullYear()} Tamara Sancristóbal</span>
      <span>Designed &amp; built by Tamara</span>
    </div>
  </section>
);

export default Contact;

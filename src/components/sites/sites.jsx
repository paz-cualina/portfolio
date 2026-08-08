import { SectionHead } from '../../utils.jsx';
import { SITES } from '../../data/content.js';
import styles from './sites.module.css';

const Sites = () => (
  <section id="sites" className={styles.section}>
    <div className={styles.inner}>
      <SectionHead
        index="05"
        title="Webflow & WordPress sites."
        kicker="Frontend implementation — designs from external designers"
      />

      <div className={styles.grid}>
        {SITES.map((site) => (
          <a
            key={site.title}
            href={site.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cell}
          >
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{site.title}</h3>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </div>
            <div className={styles.meta}>
              {site.n} / {site.meta}
            </div>
            <p className={styles.summary}>{site.summary}</p>
            <div className={styles.tags}>
              {site.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Sites;

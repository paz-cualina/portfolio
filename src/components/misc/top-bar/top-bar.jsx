import { useLiveTime } from '../../../hooks.js';
import styles from './top-bar.module.css';

const TopBar = () => {
  const time = useLiveTime();
  return (
    <header className={styles.bar}>
      <span>Portfolio · {__BUILD_VERSION__}</span>
      <span>Montevideo / UY — {time} UYT</span>
    </header>
  );
};

export default TopBar;

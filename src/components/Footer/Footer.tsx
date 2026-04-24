import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.credit}>Designed Dec 2025, Aimee Marcos</p>
      <a
        href="https://ca.linkedin.com/in/aimeemarcos"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
        aria-label="Aimee Marcos on LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
    </footer>
  );
}

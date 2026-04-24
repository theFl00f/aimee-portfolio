'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
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
    </motion.footer>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AmLogo from '@/components/AmLogo';
import styles from './Nav.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      <a href="/" className={styles.logo} aria-label="Aimee Marcos home">
        <AmLogo className={styles.logoImg} />
      </a>
      <button
        className={styles.toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.toggleSpan} />
        <span className={styles.toggleSpan} />
        <span className={styles.toggleSpan} />
      </button>
      <nav id="primary-nav" className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="/#work" className={styles.navLink} onClick={() => setOpen(false)}>Work</a>
        <a href="/#capabilities" className={styles.navLink} onClick={() => setOpen(false)}>About</a>
        <a href="/#contact" className={styles.navLink} onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </motion.header>
  );
}

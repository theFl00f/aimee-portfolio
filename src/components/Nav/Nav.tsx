'use client';

import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo} aria-label="Aimee Marcos home">
        <img src="/logo/am-logo.png" alt="AM logo" className={styles.logoImg} />
      </a>
      <button
        className={styles.toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.toggleSpan} />
        <span className={styles.toggleSpan} />
        <span className={styles.toggleSpan} />
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="#work" className={styles.navLink}>Work</a>
        <a href="#toolbox" className={styles.navLink}>About</a>
        <a href="#capabilities" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

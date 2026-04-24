'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.h1}>
        <motion.span className={styles.name} {...fadeUp(0)}>
          Aimee Marcos
        </motion.span>
        <motion.span className={styles.title} {...fadeUp(0.12)}>
          Graphic Designer
        </motion.span>
      </h1>
      <motion.p className={styles.tagline} {...fadeUp(0.28)}>
        Ex-SAP, now channelling my enterprise experience into expressive,
        human-centered creative direction 🌪️🖤🪄
      </motion.p>
    </section>
  );
}

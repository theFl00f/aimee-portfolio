'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const FULL_NAME = 'Aimee Marcos';
const ease = [0.22, 1, 0.36, 1] as const;
const BLINK_CYCLE = 900;  // ms — must match animation-duration in CSS
const BLINK_DWELL = 3000; // ms total caret blinks after typing ends (~3 blinks)

type Phase = 'typing' | 'blinking' | 'done';

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return prefers;
}

function useTypewriter(skip: boolean): { phase: Phase; text: string; restVisible: boolean } {
  const [charCount, setCharCount] = useState(() => (skip ? FULL_NAME.length : 0));
  const [phase, setPhase] = useState<Phase>(() => (skip ? 'done' : 'typing'));
  const [restVisible, setRestVisible] = useState(() => skip);

  useEffect(() => {
    if (skip) {
      setCharCount(FULL_NAME.length);
      setPhase('done');
      setRestVisible(true);
      return;
    }

    if (phase === 'typing') {
      if (charCount < FULL_NAME.length) {
        const delay = 80 + Math.random() * 40;
        const t = setTimeout(() => setCharCount(c => c + 1), delay);
        return () => clearTimeout(t);
      }
      setPhase('blinking');
      return;
    }

    if (phase === 'blinking') {
      // Rest elements appear on first blink-off (half a blink cycle in)
      const t1 = setTimeout(() => setRestVisible(true), BLINK_CYCLE / 2);
      // Caret fades out after full dwell
      const t2 = setTimeout(() => setPhase('done'), BLINK_DWELL);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [phase, charCount, skip]);

  return { phase, text: FULL_NAME.slice(0, charCount), restVisible };
}

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const { phase, text, restVisible } = useTypewriter(reduced);

  // Reduced-motion: render everything statically, no animation at all
  if (reduced) {
    return (
      <section id="hero" className={styles.hero}>
        <h1 className={styles.h1}>
          <span className={styles.name}>{FULL_NAME}</span>
          <span className={styles.title}>Graphic Designer</span>
        </h1>
        <p className={styles.tagline}>
          Ex-SAP, now channelling my enterprise experience into expressive,
          human-centered creative direction 🌪️🖤🪄
        </p>
      </section>
    );
  }

  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.h1}>
        <span className={styles.name}>
          {text}
          <AnimatePresence>
            {phase !== 'done' && (
              <motion.span
                key="caret"
                className={styles.caretWrap}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className={styles.caret} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        <motion.span
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={restVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease }}
        >
          Graphic Designer
        </motion.span>
      </h1>

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={restVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.12, ease }}
      >
        Ex-SAP, now channelling my enterprise experience into expressive,
        human-centered creative direction 🌪️🖤🪄
      </motion.p>
    </section>
  );
}

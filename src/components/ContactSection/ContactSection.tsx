'use client';
import { motion } from 'framer-motion';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Picture from '@/components/Picture';
import styles from './ContactSection.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const portraitVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease } },
};

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <motion.p
        className={styles.sectionMark}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >04 / contact</motion.p>

      <motion.div
        className={styles.layout}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className={styles.body}>
          <motion.h2 id="contact-heading" className={styles.heading} variants={itemVariants}>
            say hello
          </motion.h2>
          <motion.p className={styles.invite} variants={itemVariants}>
            Currently open to editorial, packaging, and brand work, whether
            that&apos;s a contract role, a single project, or an ongoing
            collaboration.
          </motion.p>
          <motion.a
            href="https://ca.linkedin.com/in/aimeemarcos"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            variants={itemVariants}
            aria-label="Aimee Marcos on LinkedIn (opens in a new tab)"
          >
            <LinkedInIcon size={16} className={styles.ctaIcon} />
            <span className={styles.ctaLabel}>LinkedIn</span>
            <span className={styles.ctaArrow} aria-hidden>↗</span>
          </motion.a>
        </div>

        <motion.figure className={styles.portrait} variants={portraitVariants}>
          <div className={styles.portraitFrame}>
            <Picture
              src="/about/aimee.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1023px) 200px, 240px"
            />
          </div>
          <figcaption className={styles.portraitCaption}>
            Aimee Marcos · Kitchener-Waterloo
          </figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}

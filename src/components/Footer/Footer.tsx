"use client";
import { motion, useReducedMotion } from "framer-motion";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 16 }}
      {...(shouldReduceMotion
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" } })}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <p className={styles.credit}>
        ©️ Aimee Marcos, {new Date().getFullYear()}
      </p>
      <a
        href="https://ca.linkedin.com/in/aimeemarcos"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
        aria-label="Aimee Marcos on LinkedIn"
      >
        <LinkedInIcon size={20} className={styles.icon} />
      </a>
    </motion.footer>
  );
}

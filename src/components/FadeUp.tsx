'use client';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Reduced-motion path uses `animate` instead of `whileInView` so framer-motion
 * resolves the target on mount (snapping to opacity:1 with duration 0) rather
 * than waiting for scroll intersection. Both branches render the same `initial`
 * markup so SSR/client hydration matches; the divergence happens after mount.
 */
export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      {...(shouldReduceMotion
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } })}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const }
      }
    >
      {children}
    </motion.div>
  );
}

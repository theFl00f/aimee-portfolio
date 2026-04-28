'use client';
import { useReducedMotion, motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';
import styles from './WorkGrid.module.css';
import WorkCard from '../WorkCard/WorkCard';
import { WORK_ITEMS, WorkItem, CardVariant } from '@/data/work';

const [marginalia, mycelium, sapGpo] = WORK_ITEMS;

const ease = [0.22, 1, 0.36, 1] as const;

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const developVariants = {
  hidden: {
    opacity: 0,
    filter: 'grayscale(1) blur(6px)',
  },
  visible: {
    opacity: 1,
    filter: 'grayscale(0) blur(0px)',
    transition: { duration: 0.95, ease },
  },
};

const captionVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.7, ease, delay: 0.55 },
  },
};

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

interface CellProps {
  variant: CardVariant;
  item?: WorkItem;
  reduced: boolean;
}

function Cell({ variant, item, reduced }: CellProps) {
  const caption = item?.title ?? null;

  return (
    <motion.div className={styles.cell} variants={reduced ? reducedVariants : developVariants}>
      <p className={styles.marginalia} aria-hidden={!caption}>
        <motion.span
          className={styles.marginaliaInner}
          variants={reduced ? reducedVariants : captionVariants}
        >
          {caption ?? ' '}
        </motion.span>
      </p>
      <WorkCard variant={variant} item={item} />
    </motion.div>
  );
}

export default function WorkGrid() {
  const reduced = useReducedMotion() ?? false;

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const driftRaw = useTransform(velocity, [-2400, 0, 2400], [8, 0, -8], { clamp: true });
  const drift = useSpring(driftRaw, { stiffness: 180, damping: 28, mass: 0.6 });

  const wrapperStyle = reduced ? undefined : { y: drift };

  return (
    <section id="work" aria-label="Selected work" className={styles.work}>
      <motion.p
        className={styles.sectionMark}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >01 / work</motion.p>

      <motion.div className={styles.grid} style={wrapperStyle}>
        <motion.div
          className={styles.rowTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rowVariants}
        >
          <Cell variant="wide-landscape" item={marginalia} reduced={reduced} />
          <Cell variant="square" item={mycelium} reduced={reduced} />
          <Cell variant="square" item={sapGpo} reduced={reduced} />
        </motion.div>
        <motion.div
          className={styles.rowBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rowVariants}
        >
          <Cell variant="portrait" reduced={reduced} />
          <Cell variant="portrait" reduced={reduced} />
          <Cell variant="wide-landscape-tall" reduced={reduced} />
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './WorkGrid.module.css';
import WorkCard from '../WorkCard/WorkCard';
import { WORK_ITEMS } from '@/data/work';

const [marginalia, mycelium, sapGpo] = WORK_ITEMS;

const ease = [0.22, 1, 0.36, 1] as const;

type Breakpoint = 'desktop' | 'tablet' | 'mobile';

const DIRECTIONS: Record<Breakpoint, ReadonlyArray<readonly [number, number]>> = {
  desktop: [[-40, 0], [0, -40], [40, 0], [-40, 0], [0, 40], [40, 0]],
  tablet:  [[0, -40], [-40, 0], [40, 0], [-40, 0], [0, 40], [40, 0]],
  mobile:  [[-40, 0], [40, 0], [-40, 0], [40, 0], [-40, 0], [40, 0]],
};

function resolveBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia('(max-width: 768px)').matches) return 'mobile';
  if (window.matchMedia('(max-width: 1200px)').matches) return 'tablet';
  return 'desktop';
}

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(resolveBreakpoint);

  useEffect(() => {
    const mobileMQ = window.matchMedia('(max-width: 768px)');
    const tabletMQ = window.matchMedia('(max-width: 1200px)');

    const update = () => setBp(resolveBreakpoint());

    update();
    mobileMQ.addEventListener('change', update);
    tabletMQ.addEventListener('change', update);
    return () => {
      mobileMQ.removeEventListener('change', update);
      tabletMQ.removeEventListener('change', update);
    };
  }, []);

  return bp;
}

const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = (x: number, y: number) => ({
  hidden: { opacity: 0, x, y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease },
  },
});

export default function WorkGrid() {
  const bp = useBreakpoint();
  const dirs = DIRECTIONS[bp];

  return (
    <section id="work" className={styles.work}>
      <div className={styles.grid}>
        <motion.div
          className={styles.rowTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rowVariants}
        >
          <motion.div variants={cardVariants(dirs[0][0], dirs[0][1])}>
            <WorkCard variant="wide-landscape" item={marginalia} />
          </motion.div>
          <motion.div variants={cardVariants(dirs[1][0], dirs[1][1])}>
            <WorkCard variant="square" item={mycelium} />
          </motion.div>
          <motion.div variants={cardVariants(dirs[2][0], dirs[2][1])}>
            <WorkCard variant="square" item={sapGpo} />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.rowBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rowVariants}
        >
          <motion.div variants={cardVariants(dirs[3][0], dirs[3][1])}>
            <WorkCard variant="portrait" />
          </motion.div>
          <motion.div variants={cardVariants(dirs[4][0], dirs[4][1])}>
            <WorkCard variant="portrait" />
          </motion.div>
          <motion.div variants={cardVariants(dirs[5][0], dirs[5][1])}>
            <WorkCard variant="wide-landscape-tall" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

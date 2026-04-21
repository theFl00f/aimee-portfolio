import styles from './WorkGrid.module.css';
import WorkCard from '../WorkCard/WorkCard';
import { WORK_ITEMS } from '@/data/work';

const [marginalia, mycelium, sapGpo] = WORK_ITEMS;

export default function WorkGrid() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.grid}>
        <div className={styles.rowTop}>
          <WorkCard variant="wide-landscape" item={marginalia} />
          <div className={styles.stack}>
            <WorkCard variant="square" item={mycelium} />
            <WorkCard variant="square" item={sapGpo} />
          </div>
        </div>
        <div className={styles.rowBottom}>
          <WorkCard variant="portrait" />
          <WorkCard variant="portrait" />
          <WorkCard variant="wide-landscape-tall" />
        </div>
      </div>
    </section>
  );
}

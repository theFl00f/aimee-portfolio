import styles from './WorkGrid.module.css';
import WorkCard from '../WorkCard/WorkCard';

export default function WorkGrid() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.grid}>
        <div className={styles.rowTop}>
          <WorkCard variant="wide-landscape" />
          <div className={styles.stack}>
            <WorkCard variant="square" />
            <WorkCard variant="square" />
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

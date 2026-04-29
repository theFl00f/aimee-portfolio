import type { PaletteChip } from '@/data/work';
import styles from './PaletteSection.module.css';

export default function PaletteSection({ palette }: { palette: PaletteChip[] }) {
  return (
    <section className={styles.paletteSection} aria-labelledby="brand-palette-kicker">
      <h2 id="brand-palette-kicker" className={styles.kicker}>brand palette</h2>
      <div className={styles.grid}>
        {palette.map(({ hex, name, textLight }) => (
          <div
            key={hex}
            className={`${styles.chip} ${textLight ? styles.textLight : styles.textDark}`}
            style={{ background: hex }}
          >
            {name && <span className={styles.name}>{name}</span>}
            <span className={styles.hex}>{hex}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { PaletteChip } from '@/data/work';
import styles from './PaletteSection.module.css';

export default function PaletteSection({ palette }: { palette: PaletteChip[] }) {
  return (
    <section className={styles.paletteSection} aria-label="Brand Palette">
      <div className={styles.grid}>
        {palette.map(({ hex, textLight }) => (
          <div
            key={hex}
            className={`${styles.chip} ${textLight ? styles.textLight : styles.textDark}`}
            style={{ background: hex }}
          >
            <span className={styles.label}>{hex}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

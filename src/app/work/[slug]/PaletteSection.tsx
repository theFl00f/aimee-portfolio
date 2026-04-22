import styles from './PaletteSection.module.css';

const PALETTE = ['#2B6C4D', '#29333E', '#E8E3D1', '#DA2127', '#DBB767'];

export default function PaletteSection() {
  return (
    <div className={styles.paletteSection}>
      <div className={styles.grid}>
        {PALETTE.map((hex) => (
          <div key={hex} className={styles.item}>
            <div className={styles.swatch} style={{ background: hex }} />
            <span className={styles.label}>{hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

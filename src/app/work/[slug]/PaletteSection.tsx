import styles from './PaletteSection.module.css';

const PALETTE = [
  { hex: '#2B6C4D', textLight: true },
  { hex: '#29333E', textLight: true },
  { hex: '#E8E3D1', textLight: false },
  { hex: '#DA2127', textLight: true },
  { hex: '#DBB767', textLight: false },
];

export default function PaletteSection() {
  return (
    <section className={styles.paletteSection} aria-label="Brand Palette">
      <div className={styles.grid}>
        {PALETTE.map(({ hex, textLight }) => (
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

'use client';

import { useRef, useState } from 'react';
import type { PaletteChip } from '@/data/work';
import styles from './PaletteSection.module.css';

export default function PaletteSection({ palette }: { palette: PaletteChip[] }) {
  const [copied, setCopied] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = async (hex: string, name?: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setAnnouncement(`Copied ${name ? name + ' ' : ''}${hex}`);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(null), 1400);
    } catch {
      setAnnouncement(`Could not copy ${hex}`);
    }
  };

  return (
    <section className={styles.paletteSection} aria-labelledby="palette-heading">
      <h2 id="palette-heading" className="visually-hidden">Palette</h2>
      <div className={styles.grid}>
        {palette.map(({ hex, name, textLight }) => {
          const isCopied = copied === hex;
          return (
            <button
              key={hex}
              type="button"
              onClick={() => handleCopy(hex, name)}
              className={`${styles.chip} ${textLight ? styles.textLight : styles.textDark} ${isCopied ? styles.copied : ''}`}
              style={{ background: hex }}
              aria-label={`Copy ${name ? name + ' ' : ''}${hex} to clipboard`}
            >
              {name && <span className={styles.name}>{name}</span>}
              <span className={styles.hex} aria-hidden="true">
                <span className={styles.hexValue}>{hex}</span>
                <span className={styles.hexCopied}>
                  <svg
                    className={styles.check}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12.5l5 5 11-11" />
                  </svg>
                  <span className={styles.copiedLabel}>Copied</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <p role="status" aria-live="polite" className="visually-hidden">
        {announcement}
      </p>
    </section>
  );
}

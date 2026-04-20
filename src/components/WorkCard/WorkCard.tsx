import styles from './WorkCard.module.css';

type CardVariant = 'wide-landscape' | 'square' | 'portrait' | 'wide-landscape-tall';

const variantClass: Record<CardVariant, string> = {
  'wide-landscape': styles.wideLandscape,
  'square': styles.square,
  'portrait': styles.portrait,
  'wide-landscape-tall': styles.wideLandscapeTall,
};

interface WorkCardProps {
  variant: CardVariant;
}

export default function WorkCard({ variant }: WorkCardProps) {
  return (
    <div
      className={`${styles.card} ${variantClass[variant]}`}
      aria-label="Portfolio piece"
    />
  );
}

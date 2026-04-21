// src/components/WorkCard/WorkCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { WorkItem, CardVariant } from '@/data/work';
import styles from './WorkCard.module.css';

const variantClass: Record<CardVariant, string> = {
  'wide-landscape': styles.wideLandscape,
  'square': styles.square,
  'portrait': styles.portrait,
  'wide-landscape-tall': styles.wideLandscapeTall,
};

interface WorkCardProps {
  variant: CardVariant;
  item?: WorkItem;
}

export default function WorkCard({ variant, item }: WorkCardProps) {
  const cardClass = `${styles.card} ${variantClass[variant]}`;

  if (!item) {
    return <div className={cardClass} aria-label="Portfolio piece" />;
  }

  return (
    <Link href={`/work/${item.slug}`} className={cardClass}>
      <Image
        src={item.coverImage}
        alt={item.title}
        fill
        className={styles.cover}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className={styles.label}>
        <p className={styles.cardCategory}>{item.categories}</p>
        <h3 className={styles.cardTitle}>{item.title}</h3>
      </div>
    </Link>
  );
}

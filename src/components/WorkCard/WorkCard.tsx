import Link from 'next/link';
import Picture from '@/components/Picture';
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
    return <div className={cardClass} aria-hidden="true" />;
  }

  return (
    <Link href={`/work/${item.slug}`} className={cardClass} aria-label={item.title}>
      <Picture
        src={item.coverImage}
        alt=""
        fill
        placeholder="blur"
        className={styles.cover}
        sizes="(max-width: 768px) 100vw, 50vw"
        objectPosition={item.coverPosition}
      />
    </Link>
  );
}

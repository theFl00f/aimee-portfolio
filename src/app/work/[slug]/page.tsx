// src/app/work/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { WORK_ITEMS } from '@/data/work';
import styles from './page.module.css';

export function generateStaticParams() {
  return WORK_ITEMS.map((item) => ({ slug: item.slug }));
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const item = WORK_ITEMS.find((w) => w.slug === params.slug);
  if (!item) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <Image
          src={item.heroImage}
          alt={item.title}
          fill
          className={styles.heroImage}
          priority
        />
      </div>

      <div className={styles.intro}>
        <div className={styles.meta}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.categories}>{item.categories}</p>
        </div>
        <div className={styles.overviewBlock}>
          <h2 className={styles.sectionLabel}>Project Overview</h2>
          <p className={styles.body}>{item.overview}</p>
        </div>
      </div>

      <div className={styles.gallery}>
        {item.galleryImages.map((src) => (
          <div key={src} className={styles.galleryItem}>
            <Image src={src} alt="" fill className={styles.galleryImage} />
          </div>
        ))}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Outcome</h2>
        <p className={styles.body}>{item.outcome}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Reflections</h2>
        <p className={styles.body}>{item.reflections}</p>
      </section>
    </main>
  );
}

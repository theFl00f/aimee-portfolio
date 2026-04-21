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

      {/* Hero — full content-width, short */}
      <div className={styles.hero}>
        <Image
          src={item.heroImage}
          alt={item.title}
          fill
          className={styles.heroImg}
          priority
        />
      </div>

      {/* Intro — black background, 2-col, white text */}
      <div className={styles.intro}>
        <div className={styles.introMeta}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.categories}>{item.categories}</p>
        </div>
        <div className={styles.introOverview}>
          <h2 className={styles.introLabel}>Project Overview</h2>
          <p className={styles.introBody}>{item.overview}</p>
        </div>
      </div>

      {/* Gallery 2-col (Marginalia logo panels only) */}
      {item.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {item.galleryImages.map((src) => (
            <div key={src} className={styles.galleryItem}>
              <Image src={src} alt="" fill className={styles.galleryImg} />
            </div>
          ))}
        </div>
      )}

      {/* Gallery wide — full content-width, natural aspect ratio */}
      {item.wideImages && item.wideImages.length > 0 && (
        <div className={styles.galleryWide}>
          {item.wideImages.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={1200}
              height={630}
              className={styles.wideImg}
            />
          ))}
        </div>
      )}

      {/* Outcome — warm beige, image left + text right */}
      <section className={styles.outcomeSection}>
        <div className={styles.sectionImageWrap}>
          <Image
            src={item.outcomeImage}
            alt=""
            fill
            className={styles.sectionImg}
          />
        </div>
        <div className={styles.sectionText}>
          <h2 className={styles.sectionLabel}>Outcome</h2>
          <p className={styles.sectionBody}>{item.outcome}</p>
        </div>
      </section>

      {/* Reflections — lighter beige, image left + text right */}
      <section className={styles.reflectionsSection}>
        <div className={styles.sectionImageWrap}>
          <Image
            src={item.reflectionsImage}
            alt=""
            fill
            className={styles.sectionImg}
          />
        </div>
        <div className={styles.sectionText}>
          <h2 className={styles.sectionLabel}>Reflections</h2>
          <p className={styles.sectionBody}>{item.reflections}</p>
        </div>
      </section>

    </main>
  );
}

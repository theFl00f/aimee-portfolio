// src/app/work/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { WORK_ITEMS } from '@/data/work';
import styles from './page.module.css';
import PaletteSection from './PaletteSection';

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
          sizes="100vw"
          className={styles.heroImg}
          priority
        />
      </div>

      {/* Intro — black background, 2-col, white text */}
      <div className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introMeta}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.categories}>{item.categories}</p>
          </div>
          <div className={styles.introOverview}>
            <h2 className={styles.introLabel}>Project Overview</h2>
            <p className={styles.introBody}>{item.overview}</p>
          </div>
        </div>
      </div>

      {/* Gallery 2-col (Marginalia logo panels only) */}
      {item.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {item.galleryImages.map((src) => (
            <div key={src} className={styles.galleryItem}>
              <Image src={src} alt={`${item.title} gallery`} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImg} />
            </div>
          ))}
        </div>
      )}

      {/* Palette — Marginalia only */}
      {params.slug === 'marginalia' && <PaletteSection />}

      {/* Gallery wide — full content-width, natural aspect ratio */}
      {item.wideImages && item.wideImages.length > 0 && (
        <div className={styles.galleryWide}>
          {item.wideImages.map((src) => (
            <Image
              key={src}
              src={src}
              alt={`${item.title} — project image`}
              width={1200}
              height={630}
              className={styles.wideImg}
            />
          ))}
        </div>
      )}

      {/* Outcome — warm beige, image left + text right */}
      <section className={styles.outcomeSection}>
        <div className={styles.outcomeSectionInner}>
          <div className={styles.sectionImageWrap}>
            <Image
              src={item.outcomeImage}
              alt={`${item.title} — outcome`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImg}
            />
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionLabel}>Outcome</h2>
            <p className={styles.sectionBody}>{item.outcome}</p>
          </div>
        </div>
      </section>

      {/* Reflections — lighter beige, image left + text right */}
      <section className={styles.reflectionsSection}>
        <div className={styles.reflectionsSectionInner}>
          <div className={styles.sectionImageWrap}>
            <Image
              src={item.reflectionsImage}
              alt={`${item.title} — reflections`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImg}
            />
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionLabel}>Reflections</h2>
            <p className={styles.sectionBody}>{item.reflections}</p>
          </div>
        </div>
      </section>

    </main>
  );
}

// src/app/work/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Picture from '@/components/Picture';
import FadeUp from '@/components/FadeUp';
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

      {/* Hero — no animation, priority-loaded above the fold */}
      <div className={styles.hero}>
        <Picture
          src={item.heroImage}
          alt={item.title}
          fill
          sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), calc(100vw - 240px)"
          className={styles.heroImg}
          placeholder="blur"
          priority
        />
      </div>

      {/* Intro — black background, 2-col, white text */}
      <FadeUp className={styles.intro}>
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
      </FadeUp>

      {/* Gallery 2-col (Marginalia logo panels only) */}
      {item.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {item.galleryImages.map((src, i) => (
            <FadeUp key={src} className={styles.galleryItem} delay={i * 0.09}>
              <Picture src={src} alt={`${item.title} gallery`} fill placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImg} />
            </FadeUp>
          ))}
        </div>
      )}

      {/* Palette — Marginalia only */}
      {params.slug === 'marginalia' && (
        <FadeUp>
          <PaletteSection />
        </FadeUp>
      )}

      {/* Gallery wide — full content-width, natural aspect ratio */}
      {item.wideImages && item.wideImages.length > 0 && (
        <div className={styles.galleryWide}>
          {item.wideImages.map((src, i) => (
            <FadeUp key={src} delay={i * 0.08}>
              <Picture
                src={src}
                alt={`${item.title} — project image`}
                width={1200}
                height={630}
                placeholder="blur"
                className={styles.wideImg}
              />
            </FadeUp>
          ))}
        </div>
      )}

      {/* Outcome */}
      <FadeUp>
        <section className={styles.outcomeSection}>
          <div className={styles.outcomeSectionInner}>
            <div className={styles.sectionImageWrap}>
              <Picture
                src={item.outcomeImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.sectionImgBlur}
                objectFit="cover"
              />
              <Picture
                src={item.outcomeImage}
                alt={`${item.title} — outcome`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.sectionImg}
                placeholder="blur"
                objectFit="contain"
              />
            </div>
            <div className={styles.sectionText}>
              <h2 className={styles.sectionLabel}>Outcome</h2>
              <p className={styles.sectionBody}>{item.outcome}</p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* Reflections */}
      <FadeUp delay={0.05}>
        <section className={styles.reflectionsSection}>
          <div className={styles.reflectionsSectionInner}>
            <div className={styles.sectionImageWrap}>
              <Picture
                src={item.reflectionsImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.sectionImgBlur}
                objectFit="cover"
              />
              <Picture
                src={item.reflectionsImage}
                alt={`${item.title} — reflections`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.sectionImg}
                placeholder="blur"
                objectFit="contain"
              />
            </div>
            <div className={styles.sectionText}>
              <h2 className={styles.sectionLabel}>Reflections</h2>
              <p className={styles.sectionBody}>{item.reflections}</p>
            </div>
          </div>
        </section>
      </FadeUp>

    </main>
  );
}

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
    <div className={styles.page}>

      <div className={styles.hero}>
        <Picture
          src={item.heroImage}
          alt=""
          fill
          sizes="(max-width: 768px) 1920px, (max-width: 1023px) calc(100vw - 48px), calc(100vw - 240px)"
          className={styles.heroImg}
          placeholder="blur"
          priority
        />
      </div>

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

      {item.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {item.galleryImages.map((src, i) => (
            <FadeUp key={src} className={styles.galleryItem} delay={i * 0.09}>
              <Picture src={src} alt="" fill placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImg} />
            </FadeUp>
          ))}
        </div>
      )}

      {params.slug === 'marginalia' && (
        <FadeUp>
          <PaletteSection />
        </FadeUp>
      )}

      {item.wideImages && item.wideImages.length > 0 && (
        <div className={styles.galleryWide}>
          {item.wideImages.map((src, i) => (
            <FadeUp key={src} delay={i * 0.08}>
              <Picture
                src={src}
                alt=""
                width={1200}
                height={630}
                placeholder="blur"
                className={styles.wideImg}
              />
            </FadeUp>
          ))}
        </div>
      )}

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
              />
              <Picture
                src={item.outcomeImage}
                alt=""
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
              />
              <Picture
                src={item.reflectionsImage}
                alt=""
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

    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Picture from '@/components/Picture';
import FadeUp from '@/components/FadeUp';
import { WORK_ITEMS } from '@/data/work';
import { imageManifest } from '@/generated/imageManifest';
import styles from './page.module.css';
import PaletteSection from './PaletteSection';

export function generateStaticParams() {
  return WORK_ITEMS.map((item) => ({ slug: item.slug }));
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const currentIndex = WORK_ITEMS.findIndex((w) => w.slug === params.slug);
  if (currentIndex === -1) notFound();
  const item = WORK_ITEMS[currentIndex];
  const total = WORK_ITEMS.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const prevItem = WORK_ITEMS[prevIndex];
  const nextItem = WORK_ITEMS[nextIndex];
  const isWrapBack = currentIndex === 0;
  const isWrapForward = currentIndex === total - 1;

  const toBlurSrc = (src: string) => {
    const entry = imageManifest[src];
    if (!entry) return '';
    const noExt = src.replace(/\.(png|jpe?g)$/i, '');
    return `/_img${noExt}-${entry.widths[0]}.webp`;
  };
  const outcomeBlur = toBlurSrc(item.outcomeImage);
  const reflectionsBlur = toBlurSrc(item.reflectionsImage);

  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <Picture
          src={item.heroImage}
          alt={item.heroImageAlt}
          fill
          sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), calc(100vw - 240px)"
          className={styles.heroImg}
          placeholder="blur"
          priority
        />
      </div>

      <FadeUp className={styles.intro}>
        <section className={styles.introInner} aria-labelledby="overview-heading">
          <div className={styles.introMeta}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.categories}>{item.categories}</p>
          </div>
          <div className={styles.introOverview}>
            <h2 id="overview-heading" className="visually-hidden">Overview</h2>
            <p aria-hidden="true" className={styles.introLabel}>01 / overview</p>
            <p className={styles.introBody}>{item.overview}</p>
          </div>
        </section>
      </FadeUp>

      {item.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {item.galleryImages.map((src, i) => (
            <FadeUp key={src} className={styles.galleryItem} delay={i * 0.09}>
              <Picture src={src} alt={item.galleryImagesAlt[i] ?? ''} fill placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImg} />
            </FadeUp>
          ))}
        </div>
      )}

      {item.brandPalette && (
        <FadeUp>
          <PaletteSection palette={item.brandPalette} />
        </FadeUp>
      )}

      {item.wideImages && item.wideImages.length > 0 && (
        <div className={styles.galleryWide}>
          {item.wideImages.map((src, i) => (
            <FadeUp key={src} delay={i * 0.08}>
              <Picture
                src={src}
                alt={item.wideImagesAlt?.[i] ?? ''}
                width={1200}
                height={630}
                placeholder="blur"
                sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), calc(100vw - 240px)"
                className={styles.wideImg}
              />
            </FadeUp>
          ))}
        </div>
      )}

      <FadeUp>
        <section className={styles.outcomeSection} aria-labelledby="outcome-heading">
          <div className={styles.outcomeSectionInner}>
            <div
              className={styles.sectionImageWrap}
              style={{ '--blur-src': `url(${outcomeBlur})` } as React.CSSProperties}
            >
              <Picture
                src={item.outcomeImage}
                alt={item.outcomeImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.sectionImg}
                objectFit="contain"
              />
            </div>
            <div className={styles.sectionText}>
              <h2 id="outcome-heading" className="visually-hidden">Outcome</h2>
              <p aria-hidden="true" className={styles.sectionLabel}>02 / outcome</p>
              <p className={styles.sectionBody}>{item.outcome}</p>
            </div>
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={0.05}>
        <section className={styles.reflectionsSection} aria-labelledby="reflections-heading">
          <div className={styles.reflectionsSectionInner}>
            <div
              className={styles.sectionImageWrap}
              style={{ '--blur-src': `url(${reflectionsBlur})` } as React.CSSProperties}
            >
              <Picture
                src={item.reflectionsImage}
                alt={item.reflectionsImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.sectionImg}
                objectFit="contain"
              />
            </div>
            <div className={styles.sectionText}>
              <h2 id="reflections-heading" className="visually-hidden">Reflections</h2>
              <p aria-hidden="true" className={styles.sectionLabel}>03 / reflections</p>
              <p className={styles.sectionBody}>{item.reflections}</p>
            </div>
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={0.05}>
        <section className={styles.closing} aria-label="Continue browsing">
          <p aria-hidden="true" className={styles.closingMark}>more work</p>
          <div className={styles.closingGrid}>
            <Link
              href={`/work/${prevItem.slug}`}
              className={`${styles.cell} ${styles.cellPrev}`}
              aria-label={`${isWrapBack ? 'Skip to the end: ' : 'Previous project: '}${prevItem.title}`}
            >
              <span className={styles.cellKicker}>
                <span className={styles.role}>
                  {isWrapBack ? (
                    <>
                      <span aria-hidden className={styles.wrapGlyph}>↺</span> from the end
                    </>
                  ) : (
                    <>
                      <span aria-hidden className={styles.dirArrow}>←</span> previous
                    </>
                  )}
                </span>
                <span className={styles.cellName}>{prevItem.title}</span>
              </span>
              <div className={styles.cellImage}>
                <Picture
                  src={prevItem.coverImage}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 320px"
                  className={styles.cellImg}
                  objectPosition={prevItem.coverPosition}
                />
              </div>
            </Link>

            <Link
              href={`/work/${nextItem.slug}`}
              className={`${styles.cell} ${styles.cellNext}`}
              aria-label={`${isWrapForward ? 'Back to the start: ' : 'Next project: '}${nextItem.title}`}
            >
              <span className={styles.cellKicker}>
                <span className={styles.role}>
                  {isWrapForward ? (
                    <>
                      <span aria-hidden className={styles.wrapGlyph}>↻</span> again, from the top
                    </>
                  ) : (
                    <>
                      next <span aria-hidden className={styles.dirArrow}>→</span>
                    </>
                  )}
                </span>
                <span className={styles.cellName}>{nextItem.title}</span>
              </span>
              <div className={styles.cellImage}>
                <Picture
                  src={nextItem.coverImage}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 320px"
                  className={styles.cellImg}
                  objectPosition={nextItem.coverPosition}
                />
              </div>
            </Link>
          </div>
        </section>
      </FadeUp>

    </div>
  );
}

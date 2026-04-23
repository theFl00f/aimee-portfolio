'use client';

import { CSSProperties, useState } from 'react';
import { imageManifest } from '@/generated/imageManifest';

type PictureProps = {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  className?: string;
};

const OUT_PREFIX = '/_img';

function buildSrcSet(src: string, widths: number[], ext: 'avif' | 'webp'): string {
  const noExt = src.replace(/\.(png|jpe?g)$/i, '');
  return widths.map((w) => `${OUT_PREFIX}${noExt}-${w}.${ext} ${w}w`).join(', ');
}

export default function Picture({
  src,
  alt,
  fill,
  sizes,
  width,
  height,
  priority,
  placeholder,
  className,
}: PictureProps) {
  const entry = imageManifest[src];
  if (!entry) {
    throw new Error(
      `Picture: no manifest entry for "${src}". Run \`npm run build-images\` and make sure the file exists under public/.`,
    );
  }

  const [loaded, setLoaded] = useState(false);

  const imgStyle: CSSProperties = {};
  if (fill) {
    imgStyle.position = 'absolute';
    imgStyle.inset = 0;
    imgStyle.width = '100%';
    imgStyle.height = '100%';
    imgStyle.objectFit = 'cover';
  }
  if (placeholder === 'blur' && !loaded) {
    imgStyle.backgroundImage = `url(${entry.blurDataURL})`;
    imgStyle.backgroundSize = 'cover';
    imgStyle.backgroundPosition = 'center';
  }

  const avifSrcSet = buildSrcSet(src, entry.widths, 'avif');
  const webpSrcSet = buildSrcSet(src, entry.widths, 'webp');
  const resolvedSizes = sizes ?? (fill ? '100vw' : undefined);

  const imgWidth = fill ? undefined : (width ?? entry.width);
  const imgHeight = fill ? undefined : (height ?? entry.height);

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={resolvedSizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={resolvedSizes} />
      <img
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority && { fetchPriority: 'high' as const })}
        className={className}
        style={Object.keys(imgStyle).length ? imgStyle : undefined}
        onLoad={() => setLoaded(true)}
      />
    </picture>
  );
}

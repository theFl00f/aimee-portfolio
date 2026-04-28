import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import MotionProvider from '@/components/MotionProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aimee Marcos, Graphic Designer',
  icons: { icon: '/logo/am-logo.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
          <filter id="duotone-ink" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0      0      0      1 0"
            />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.0118 0.569 0.9725" />
              <feFuncG type="table" tableValues="0.0039 0.559 0.9608" />
              <feFuncB type="table" tableValues="0.0039 0.545 0.9373" />
            </feComponentTransfer>
          </filter>
        </svg>
        <MotionProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

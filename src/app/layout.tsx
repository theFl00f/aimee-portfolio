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
  icons: { icon: '/logo/favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
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

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav/Nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Aimee Marcos — Graphic Designer',
  icons: { icon: '/logo/favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

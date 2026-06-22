import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'POS X — Know Your Business | La Comuna',
  description:
    'Stop guessing how your business is doing. Track sales, inventory and profits from your phone. Free to start.',
  keywords:
    'point of sale, POS, ERP, sales system, inventory management, cash register, small business, retail, restaurant, cafe, free POS, punto de venta, sistema de ventas, inventario',
  openGraph: {
    title: 'POS X — Point of Sale & ERP | La Comuna',
    description:
      'The POS that gets cheaper as the community grows. Free to start. Available worldwide.',
    type: 'website',
    url: 'https://getposx.app',
  },
  alternates: {
    canonical: 'https://getposx.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

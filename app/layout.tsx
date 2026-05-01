// @ts-nocheck
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import './globals.css';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const heading = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-heading' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getKorivaConfig();
  return {
    title: cfg?.seo?.title ?? 'Cage MMA — Las Vegas, NV',
    description: cfg?.seo?.description ?? "Las Vegas's premier MMA training center. Professional and amateur fighters welcome.",
    openGraph: { title: cfg?.seo?.title ?? 'Cage MMA' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} bg-cm-bg text-cm-text antialiased`} style={{ fontFamily: 'Oswald, sans-serif' }}>
        {children}
        <KorivaLivePreview />
      </body>
    </html>
  );
}

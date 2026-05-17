// @ts-nocheck
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { getGarrison365Config, buildCssVars } from '@/lib/garrison365-config';
import './globals.css';

import { Garrison365LivePreview } from '@/components/Garrison365LivePreview';
const heading = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-heading' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getGarrison365Config();
  return {
    title: cfg?.seo?.title ?? 'Cage MMA — Las Vegas, NV',
    description: cfg?.seo?.description ?? "Las Vegas's premier MMA training center. Professional and amateur fighters welcome.",
    openGraph: { title: cfg?.seo?.title ?? 'Cage MMA' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getGarrison365Config();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} bg-cm-bg text-cm-text antialiased`} style={{ fontFamily: 'Oswald, sans-serif' }}>
        {children}
        <Garrison365LivePreview />
      </body>
    </html>
  );
}

// lib/koriva-config.ts
export interface BrandConfig { color_primary?: string; color_bg?: string; color_text?: string; }
export interface KorivaConfig { gym: any; template: string; brand: BrandConfig; seo: any; }
const KORIVA_API = process.env.NEXT_PUBLIC_CODEGYM_URL || 'https://app.codegyms.com';
const GYM_SLUG   = process.env.NEXT_PUBLIC_GYM_SLUG;
export async function getKorivaConfig(): Promise<KorivaConfig | null> {
  if (!GYM_SLUG) return null;
  try {
    const res = await fetch(`${KORIVA_API}/api/site-config?slug=${GYM_SLUG}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json() as Promise<KorivaConfig>;
  } catch { return null; }
}
export function buildCssVars(brand: BrandConfig | undefined): Record<string, string> {
  if (!brand) return {};
  const vars: Record<string, string> = {};
  if (brand.color_primary) vars['--cg-primary'] = `#${brand.color_primary}`;
  if (brand.color_bg)      vars['--cg-bg']      = `#${brand.color_bg}`;
  if (brand.color_text)    vars['--cg-text']     = `#${brand.color_text}`;
  return vars;
}

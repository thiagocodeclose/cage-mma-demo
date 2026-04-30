import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cm-orange': 'var(--orange)',
        'cm-dark':   'var(--dark)',
        'cm-bg':     'var(--bg)',
        'cm-surface':'var(--surface)',
        'cm-text':   'var(--text)',
        'cm-muted':  'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

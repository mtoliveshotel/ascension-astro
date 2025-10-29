import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mtoliveshotel.github.io',
  base: '/ascension-astro/',           // ← IMPORTANT for GitHub Pages
  integrations: [sitemap()],
});

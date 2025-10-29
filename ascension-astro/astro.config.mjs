import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://preview.ascension.tours',
  integrations: [sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Drives canonical URLs, og:url, and the sitemap.
  site: 'https://getstick.website',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

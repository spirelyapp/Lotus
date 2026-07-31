// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Drives canonical URLs, og:url, and the sitemap. Must match the host that
  // actually serves: Vercel 308s the apex to www, so www is canonical. If you
  // ever flip that in Vercel, flip this too or every canonical points at a
  // redirect.
  site: 'https://www.getstick.website',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

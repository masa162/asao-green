// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://asao-green.netlify.app', // ✅ 本番運用ならこちらに
  integrations: [mdx(), sitemap(), tailwind()],
});

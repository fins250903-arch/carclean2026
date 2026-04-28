import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://carinteriorcleaning.jp',
  integrations: [react(), tailwind(), sitemap()],
  output: 'static',
  adapter: vercel(),
});

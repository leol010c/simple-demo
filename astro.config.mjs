import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://your-website.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
    assets: 'assets'
  }
});

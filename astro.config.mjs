// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), purgecss()],
  build: {
    inlineStylesheets: 'never'
  }
});

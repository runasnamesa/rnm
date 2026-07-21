// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://runasnamesa.com.br',
  trailingSlash: 'ignore',
  adapter: node({ mode: 'standalone' }),
});

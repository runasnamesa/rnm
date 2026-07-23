// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://runasnamesa.com.br',
  trailingSlash: 'ignore',
  output: 'server',
  adapter: vercel(),
  vite: {
    // Evita locks do OneDrive no cache padrão dentro de node_modules.
    cacheDir: '.astro-vite-cache',
  },
});

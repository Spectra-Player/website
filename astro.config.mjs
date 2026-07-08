// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Org-pages site (spectra-player.github.io) — serves at the root. When a custom
// domain lands: set SITE_URL (and add public/CNAME); base stays '/'.
const site = process.env.SITE_URL ?? 'https://spectra-player.github.io';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

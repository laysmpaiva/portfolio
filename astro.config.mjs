// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub user site → served at the root domain.
// NOTE: all asset/link URLs are root-absolute, so this must live at the
// domain root (repo named laysmpaiva.github.io), not under /portfolio.
// https://astro.build/config
export default defineConfig({
  site: 'https://laysmpaiva.github.io',
});

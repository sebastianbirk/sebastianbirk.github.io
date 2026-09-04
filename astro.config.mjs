// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical origin of the site. Used for sitemap, RSS and social meta tags.
//
// Launching on the free GitHub subdomain. When you move to a custom domain:
//   1. change this to e.g. 'https://sebastianbirk.org'
//   2. create public/CNAME containing just that bare hostname
//   3. set the DNS records described in README.md
// Nothing else in the codebase hardcodes the domain.
const SITE = 'https://sebastianbirk.github.io';

export default defineConfig({
  site: SITE,
  // No `base` is needed: this deploys as a GitHub *user* site
  // (repo `sebastianbirk.github.io`), which is served from the domain root.
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});

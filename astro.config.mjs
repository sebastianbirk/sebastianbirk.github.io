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
  build: {
    /**
     * Inline the stylesheet into every page instead of emitting a separate
     * content-hashed file.
     *
     * GitHub Pages serves HTML with `cache-control: max-age=600` and no way to
     * change it. Each deploy renames the hashed CSS, so for up to ten minutes a
     * returning visitor can hold cached HTML pointing at a filename the new
     * deploy has already deleted — the stylesheet 404s and the page renders
     * completely unstyled. Inlining removes the dangling reference entirely: a
     * stale page is still a correct page, and first paint loses a
     * render-blocking round trip. The cost is ~10 kB (about 2.5 kB compressed)
     * repeated per page instead of shared, which is a fine trade at this size.
     */
    inlineStylesheets: 'always',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});

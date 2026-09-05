import type { APIRoute } from 'astro';

/**
 * Generated rather than kept as a static file in public/, so the sitemap URL
 * always matches `site` in astro.config.mjs. A hardcoded origin here silently
 * points crawlers at the wrong host after a domain change.
 */
export const GET: APIRoute = ({ site }) => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

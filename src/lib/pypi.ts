/**
 * PyPI download counts, fetched at build time.
 *
 * Two cautions encoded here:
 *
 * 1. Package names are NOT interchangeable with repository names. `terra` and
 *    `squint` on PyPI belong to unrelated authors (marqh and Shawn Brown), so
 *    counts must be keyed off an explicitly declared package name, never
 *    inferred from a project or repo name.
 * 2. pypistats.org rate-limits aggressively — consecutive requests return 429.
 *    Requests are therefore sequential with a pause, and any failure omits that
 *    package rather than failing the build.
 */

export interface DownloadStats {
  lastMonth: number;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchOne(pkg: string): Promise<[string, DownloadStats] | null> {
  try {
    const res = await fetch(`https://pypistats.org/api/packages/${pkg}/recent`, {
      headers: { 'User-Agent': 'sebastianbirk.com build' },
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) {
      console.warn(`[pypi] ${pkg}: HTTP ${res.status} — omitting downloads`);
      return null;
    }
    const json = (await res.json()) as { data?: { last_month?: number } };
    const n = json.data?.last_month;
    if (typeof n !== 'number') return null;
    return [pkg, { lastMonth: n }];
  } catch (err) {
    console.warn(`[pypi] ${pkg}: ${(err as Error).message} — omitting downloads`);
    return null;
  }
}

export async function fetchDownloadStats(pkgs: string[]): Promise<Map<string, DownloadStats>> {
  const map = new Map<string, DownloadStats>();
  for (const [i, pkg] of [...new Set(pkgs.filter(Boolean))].entries()) {
    if (i > 0) await sleep(3000); // pypistats 429s on back-to-back requests
    const r = await fetchOne(pkg);
    if (r) map.set(r[0], r[1]);
  }
  console.log(`[pypi] resolved downloads for ${map.size} package(s)`);
  return map;
}

/**
 * Below this a monthly figure reads as weak rather than as adoption. MintFlow
 * (~29/month) falls under it; NicheCompass (~428) clears it. The package is
 * still installable and linked either way.
 */
export const DOWNLOAD_DISPLAY_THRESHOLD = 100;

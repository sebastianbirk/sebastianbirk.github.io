/**
 * Repository statistics, fetched at build time.
 *
 * Star counts are real traction signals, but hardcoding them means they are
 * wrong within a week. These are read from the GitHub API during the build, so
 * every deploy refreshes them and nothing in the repo ever states a stale
 * number.
 *
 * The build must not depend on the network being cooperative: if a request
 * fails, is rate-limited, or returns something unexpected, that repo simply has
 * no stats and the UI omits the figure. A missing number is fine; a wrong one
 * is not, and a broken deploy is worse than either.
 */

export interface RepoStats {
  stars: number;
  forks: number;
}

/** "https://github.com/owner/name" -> "owner/name" */
export function repoSlug(url: string | undefined): string | null {
  if (!url) return null;
  const m = url.match(/github\.com\/([^/]+\/[^/#?]+)/);
  return m ? m[1].replace(/\.git$/, '') : null;
}

async function fetchOne(slug: string): Promise<[string, RepoStats] | null> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'sebastianbirk.com-build',
  };
  // Actions provides GITHUB_TOKEN, which lifts the 60/hour anonymous limit.
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${slug}`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.warn(`[github] ${slug}: HTTP ${res.status} — omitting stats`);
      return null;
    }
    const data = (await res.json()) as { stargazers_count?: number; forks_count?: number };
    if (typeof data.stargazers_count !== 'number') return null;
    return [slug, { stars: data.stargazers_count, forks: data.forks_count ?? 0 }];
  } catch (err) {
    console.warn(`[github] ${slug}: ${(err as Error).message} — omitting stats`);
    return null;
  }
}

/** Fetches all slugs concurrently; failures drop out rather than throwing. */
export async function fetchRepoStats(slugs: string[]): Promise<Map<string, RepoStats>> {
  const unique = [...new Set(slugs.filter(Boolean))];
  const results = await Promise.all(unique.map(fetchOne));
  const map = new Map<string, RepoStats>();
  for (const r of results) if (r) map.set(r[0], r[1]);
  console.log(`[github] resolved stats for ${map.size}/${unique.length} repositories`);
  return map;
}

/**
 * Below this, a star count reads as weak rather than as evidence, so the figure
 * is omitted. The repository is linked either way — nothing is concealed, the
 * number just is not used as a selling point.
 */
export const STAR_DISPLAY_THRESHOLD = 10;

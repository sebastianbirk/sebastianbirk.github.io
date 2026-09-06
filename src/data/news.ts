/**
 * News feed.
 *
 * Dates are the ACTUAL posting or publication dates, taken from Crossref and
 * arXiv, not the bioRxiv slug. The two differ: TERRA's slug reads 2026.07.29
 * but it posted on 4 August, and G2T's reads 2026.08.25 against a 28 August
 * posting. Since the feed now renders a day, the slug would show the wrong one.
 *
 * The two workshop papers (SQUINT at ICLR 2026, ST-JEPA at ICML 2026) are not
 * listed: OpenReview's API returns 403, so no exact date could be sourced, and
 * a guessed day would be worse than an omission. Both remain on /publications/.
 */

export interface NewsItem {
  /** ISO date. Sorting and the displayed date both come from this. */
  date: string;
  /** Keep to one sentence. */
  text: string;
  href?: string;
}

export const news: NewsItem[] = [
  {
    date: '2026-08-28',
    text: 'G2T preprint: reconstructing tissue from gene expression with embedding-distance flow matching.',
    href: 'https://doi.org/10.64898/2026.08.25.746917',
  },
  {
    date: '2026-08-13',
    text: 'Preprint on learning discrete cell and niche codes with dual residual vector quantization.',
    href: 'https://doi.org/10.64898/2026.08.07.743490',
  },
  {
    date: '2026-08-04',
    text: 'TERRA preprint: a foundation model for human tissues from spatial transcriptomics.',
    href: 'https://doi.org/10.64898/2026.07.29.741565',
  },
  {
    date: '2026-03-23',
    text: 'Preprint on hidden immune memory niches in inflammatory skin diseases.',
    href: 'https://doi.org/10.64898/2026.03.20.713219',
  },
  {
    date: '2025-11-19',
    text: 'SIGMMA on arXiv: multi-scale alignment of histopathology images and spatial transcriptomes.',
    href: 'https://arxiv.org/abs/2511.15464',
  },
  {
    date: '2025-06-26',
    text: 'MintFlow preprint: mapping and reprogramming human tissue microenvironments.',
    href: 'https://doi.org/10.1101/2025.06.24.661094',
  },
  {
    date: '2025-03-18',
    text: 'NicheCompass published in Nature Genetics.',
    href: 'https://doi.org/10.1038/s41588-025-02120-6',
  },
  {
    date: '2024-02-23',
    text: 'NicheCompass preprint: quantitative characterization of cell niches in spatial atlases.',
    href: 'https://doi.org/10.1101/2024.02.21.581428',
  },
];

export const newsByDate = [...news].sort((a, b) => b.date.localeCompare(a.date));

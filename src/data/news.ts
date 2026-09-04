/**
 * News feed. Newest entries surface on the homepage.
 * Add a line whenever a paper lands, a talk happens, or something changes.
 */

export interface NewsItem {
  /** ISO date. Sorting and the displayed month/year both come from this. */
  date: string;
  /** Keep to one sentence. Inline links are supported via `href`. */
  text: string;
  href?: string;
}

export const news: NewsItem[] = [
  {
    date: '2026-08-25',
    text: 'New preprint: G2T reconstructs tissue from gene expression with embedding-distance flow matching.',
    href: 'https://www.biorxiv.org/content/10.1101/2026.08.25.746917',
  },
  {
    date: '2026-08-07',
    text: 'New preprint on learning discrete cell and niche codes with dual residual vector quantization.',
    href: 'https://www.biorxiv.org/content/10.1101/2026.08.07.743490',
  },
  {
    date: '2026-07-29',
    text: 'TERRA is out — a multi-scale foundation model for human tissues from spatial transcriptomics.',
    href: 'https://www.biorxiv.org/content/10.1101/2026.07.29.741565',
  },
  {
    date: '2026-07-01',
    text: 'Graph Tokenization Meets JEPA accepted at the ICML 2026 Workshop on Graph Foundation Models.',
  },
  {
    date: '2026-04-01',
    text: 'SQUINT accepted at the ICLR 2026 Workshop on Machine Learning for Genomics Explorations.',
  },
  {
    date: '2025-06-24',
    text: 'MintFlow preprint released: mapping and reprogramming human tissue microenvironments.',
    href: 'https://www.biorxiv.org/content/10.1101/2025.06.24.661094',
  },
  {
    date: '2025-03-18',
    text: 'NicheCompass published in Nature Genetics.',
    href: 'https://doi.org/10.1038/s41588-025-02120-6',
  },
];

export const newsByDate = [...news].sort((a, b) => b.date.localeCompare(a.date));

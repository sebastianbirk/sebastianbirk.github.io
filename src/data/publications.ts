/**
 * Publication list.
 *
 * Ordering is handled automatically by `date` (newest first), so just add new
 * entries anywhere in the array. Set `selected: true` to surface an entry in
 * the "Selected publications" block on the homepage.
 *
 * Author strings use "initials + surname" style throughout. Your own name is
 * detected and bolded automatically by the `SELF` pattern below, so keep
 * writing it as "S. Birk".
 */

/** Author-string fragment that gets emphasised in rendered author lists. */
export const SELF = 'S. Birk';

export type PubType = 'journal' | 'proceedings' | 'preprint' | 'workshop' | 'abstract';

export interface Publication {
  title: string;
  /** Comma-separated, initials-first. Use "et al." if the list is truncated. */
  authors: string;
  /** Journal, conference or preprint server, as you want it displayed. */
  venue: string;
  /** ISO date, used for sorting and for the displayed year. */
  date: string;
  type: PubType;
  /** Optional one-line plain-language summary shown under the entry. */
  summary?: string;
  /** Shown on the homepage when true. */
  selected?: boolean;
  links?: {
    doi?: string;
    arxiv?: string;
    biorxiv?: string;
    pdf?: string;
    code?: string;
    docs?: string;
  };
}

export const publications: Publication[] = [
  {
    title:
      'G2T: Tissue Reconstruction from Gene Expression via Embedding-Distance Flow Matching',
    authors: 'S. Birk, F. J. Theis, M. Lotfollahi',
    venue: 'Machine Learning in Computational Biology (MLCB)',
    date: '2026-08-28',
    type: 'proceedings',
    summary:
      'Reconstructs the spatial arrangement of cells in a tissue from gene expression alone, by predicting the distance between every pair of cells and recovering coordinates from that matrix.',
    links: {
      biorxiv: 'https://doi.org/10.64898/2026.08.25.746917',
      code: 'https://github.com/Lotfollahi-lab/g2t',
    },
  },
  {
    title:
      'Learning Discrete Cell and Niche Codes from Spatial Transcriptomics Using Dual Residual Vector Quantization',
    authors: 'S. Birk, A. Merchant, A. Vahidi, F. J. Theis, M. Lotfollahi',
    venue: 'Machine Learning in Computational Biology (MLCB)',
    date: '2026-08-13',
    type: 'proceedings',
    summary:
      'Each cell receives a short tuple of integers for its own identity and for its niche, giving a vocabulary that holds across sections and lets a query sample be matched to a reference by comparing code distributions.',
    links: {
      biorxiv: 'https://doi.org/10.64898/2026.08.07.743490',
      code: 'https://github.com/Lotfollahi-lab/squint',
    },
  },
  {
    title:
      'Multi-scale modeling of human tissues from spatial transcriptomics with TERRA',
    authors:
      'S. Birk, M. V. Sanian, A. Vahidi, S. Ogden, D. J. Jafree, A. Miraki Feriz, et al.',
    venue: 'bioRxiv',
    date: '2026-08-04',
    type: 'preprint',
    selected: true,
    summary:
      'A foundation model pretrained on 112 million human cells that represents genes, cells and their spatial neighbourhoods from a single set of weights.',
    links: {
      biorxiv: 'https://doi.org/10.64898/2026.07.29.741565',
      code: 'https://github.com/Lotfollahi-lab/terra',
    },
  },
  {
    title:
      'Graph Tokenization Meets JEPA: Self-Supervised Learning on Spatial Cell Graphs',
    authors: 'S. Birk, A. Vahidi, M. V. Sanian, A. Merchant, M. Lotfollahi',
    venue: 'ICML 2026 Workshop on Graph Foundation Models',
    date: '2026-07-01',
    type: 'workshop',
    links: {
      pdf: 'https://openreview.net/forum?id=8Suk14rmmm',
    },
    summary:
      'ST-JEPA turns a cell and its spatial neighbours into a token sequence and learns by predicting the masked parts in latent space, giving representations at gene, cell and neighbourhood resolution without hand-designed augmentations.',
  },
  {
    title: 'Hidden immune memory niches in inflammatory skin diseases',
    // Initials corrected against the preprint's Crossref record.
    authors:
      'L. Steele, A. R. Foster, K. Roberts, C. Admane, S. Birk, P. V. Mazin, A. Akbarnejad, C. Tudor, et al.',
    venue: 'bioRxiv',
    date: '2026-03-23',
    type: 'preprint',
    summary:
      'A spatial atlas of around five million human skin cells uncovers immune niches inside sebaceous and sweat glands that standard histopathology does not reveal, which expand in atopic dermatitis and psoriasis and are still present twelve weeks after treatment.',
    links: {
      biorxiv: 'https://doi.org/10.64898/2026.03.20.713219',
    },
  },
  {
    title: 'SQUINT: Spatial Quantization for Understanding and IN-painting Tissues',
    authors:
      'A. Merchant, S. Birk, A. Vahidi, D. Jafree, L. Steele, A. R. Foster, V. Baskar, et al.',
    venue: 'ICLR 2026 Workshop on Machine Learning for Genomics Explorations',
    date: '2026-04-01',
    type: 'workshop',
    summary:
      'Vector quantisation of cell embeddings from a graph neural network turns a tissue into a sequence of tokens, which SQUINT then uses to fill in gene expression at spatial locations it has not seen.',
    links: {
      code: 'https://github.com/Lotfollahi-lab/squint',
    },
  },
  {
    title:
      'SIGMMA: Hierarchical Graph-Based Multi-Scale Multi-modal Contrastive Alignment of Histopathology Image and Spatial Transcriptome',
    authors:
      'D. Jeong, A. Vahidi, C. Ramírez-Suástegui, M. Moullet, K. Ly, M. V. Sanian, S. Birk, Y. Chang, A. Boxall, D. Jafree, L. Steele, V. Baskar, M. Haniffa, M. Lotfollahi',
    venue: 'arXiv',
    date: '2025-11-19',
    type: 'preprint',
    summary:
      'Aligns haematoxylin and eosin tissue images with spatial transcriptomic profiles at several scales at once, so the shared representation reflects individual cells and their arrangement rather than only the whole image tile.',
    links: {
      arxiv: 'https://arxiv.org/abs/2511.15464',
    },
  },
  {
    title: 'Mapping and reprogramming human tissue microenvironments with MintFlow',
    authors:
      'A. Akbarnejad, L. Steele, D. J. Jafree, S. Birk, M. R. Sallese, K. Rademaker, A. Boxall, B. Rumney, C. Tudor, M. Patel, M. Prete, S. Makarchuk, C. Y. C. Lee, J. Maaskola, T. Li, H. Stanley, A. R. Foster, K. Roberts, A. L. Trinh, C. E. Villa, G. Testa, S. Mahil, A. Mehrjou, C. Smith, S. Vakili, M. R. Clatworthy, T. Mitchell, O. A. Bayraktar, M. Haniffa, M. Lotfollahi',
    venue: 'bioRxiv',
    date: '2025-06-26',
    type: 'preprint',
    selected: true,
    summary:
      'Separates the gene expression a cell owes to its microenvironment from the expression intrinsic to it, so that a microenvironment can be perturbed in silico rather than only described.',
    links: {
      biorxiv: 'https://doi.org/10.1101/2025.06.24.661094',
      code: 'https://github.com/Lotfollahi-lab/mintflow',
    },
  },
  {
    title: 'Quantitative characterization of cell niches in spatially resolved omics data',
    authors:
      'S. Birk, I. Bonafonte-Pardàs, A. Miraki Feriz, A. Boxall, E. Agirre, F. Memi, A. Maguza, A. Yadav, E. Armingol, R. Fan, G. Castelo-Branco, F. J. Theis, O. A. Bayraktar, C. Talavera-López, M. Lotfollahi',
    venue: 'Nature Genetics 57(4), 897–909',
    date: '2025-03-18',
    type: 'journal',
    selected: true,
    summary:
      'A graph deep-learning method that identifies cell niches in spatial omics data and quantifies the communication pathways that define them.',
    links: {
      doi: 'https://doi.org/10.1038/s41588-025-02120-6',
      // Nature Genetics is paywalled; the preprint is the open-access route to
      // the same work. Linked here rather than listed separately, which would
      // double-count one paper.
      biorxiv: 'https://doi.org/10.1101/2024.02.21.581428',
      code: 'https://github.com/Lotfollahi-lab/nichecompass',
      docs: 'https://nichecompass.readthedocs.io/',
    },
  },
];

/** Newest first. */
export const publicationsByDate = [...publications].sort((a, b) =>
  b.date.localeCompare(a.date),
);

/** Grouped into `[year, entries]` pairs, newest year first. */
export function publicationsByYear(): [string, Publication[]][] {
  const groups = new Map<string, Publication[]>();
  for (const pub of publicationsByDate) {
    const year = pub.date.slice(0, 4);
    const bucket = groups.get(year);
    if (bucket) bucket.push(pub);
    else groups.set(year, [pub]);
  }
  return [...groups.entries()];
}

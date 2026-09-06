/**
 * Research software. Ordered as listed; put the flagship work first.
 */

export interface Project {
  name: string;
  /** One or two sentences on what it does and why it exists. */
  description: string;
  /** e.g. "First author", "Core contributor". */
  role?: string;
  /** Surface on the homepage's Software block. */
  selected?: boolean;
  /**
   * PyPI package name, where the project publishes one under this lab's
   * authorship. Recorded because the names are NOT interchangeable with the
   * repository names: `terra` on PyPI is marqh/terra and `squint` is Shawn
   * Brown's, so anything keying off these must use this field, never the
   * project or repo name.
   */
  pypi?: string;
  tags: string[];
  links: {
    code?: string;
    docs?: string;
    paper?: string;
  };
}

export const projects: Project[] = [
  {
    name: 'NicheCompass',
    selected: true,
    pypi: 'nichecompass',
    description:
      'Tissues are organised into niches: local communities of cells that coordinate a shared function. NicheCompass finds those niches in spatial omics data and quantifies what holds each one together, scoring every cell for the signalling pathways it sends into and receives from its neighbourhood. It works across samples, donors and sequencing platforms, and has been run on a whole mouse brain atlas of 8.4 million cells.',
    role: 'First author and lead developer',
    tags: ['Python', 'Graph neural networks', 'Spatial omics', 'VAE'],
    links: {
      code: 'https://github.com/Lotfollahi-lab/nichecompass',
      docs: 'https://nichecompass.readthedocs.io/',
      paper: 'https://doi.org/10.1038/s41588-025-02120-6',
    },
  },
  {
    name: 'TERRA',
    selected: true,
    description:
      'Tissue works through recurring neighbourhoods of cells, and TERRA learns to represent them. Pretrained on 112 million human cells, it describes a cell, the genes it expresses and the niche around it from a single set of weights, applied zero-shot to tissue it has never seen, and predicts how that niche shifts when a gene is knocked out.',
    role: 'First author and lead developer',
    tags: ['Python', 'Foundation model', 'Graph transformer'],
    links: {
      code: 'https://github.com/Lotfollahi-lab/terra',
      paper: 'https://doi.org/10.64898/2026.07.29.741565',
    },
  },
  {
    name: 'SQUINT',
    description:
      'Rewrites a tissue section as a short list of integers per cell: what the cell is, and what surrounds it. The codes are the same vocabulary from one section to the next, so a cell type or a niche keeps the same identifier in a new sample.',
    role: 'First author on the dual residual vector quantization paper; co-author on SQUINT',
    tags: ['Python', 'Vector quantisation', 'Representation learning'],
    links: {
      code: 'https://github.com/Lotfollahi-lab/squint',
      paper: 'https://doi.org/10.64898/2026.08.07.743490',
    },
  },
  {
    name: 'MintFlow',
    selected: true,
    pypi: 'mintflow',
    description:
      'A cell’s gene expression reflects both what the cell is and where it sits. MintFlow separates the two in spatial transcriptomics data, then predicts how expression would change if the surrounding cells were deleted or replaced.',
    role: 'Co-first author',
    tags: ['Python', 'Generative modelling', 'Spatial omics'],
    links: {
      code: 'https://github.com/Lotfollahi-lab/mintflow',
      paper: 'https://doi.org/10.1101/2025.06.24.661094',
    },
  },
  {
    name: 'G2T',
    description:
      'Single-cell RNA sequencing measures what every cell is expressing, but dissociating the tissue destroys the record of where each cell sat. G2T puts the cells back from expression alone: it predicts the distance between every pair of cells, then recovers a 2-D layout from that distance matrix, so dissociated data can be handed to tools that expect spatial coordinates.',
    role: 'First author',
    tags: ['Python', 'Flow matching', 'Graph generation'],
    links: {
      code: 'https://github.com/Lotfollahi-lab/g2t',
      paper: 'https://doi.org/10.64898/2026.08.25.746917',
    },
  },
];

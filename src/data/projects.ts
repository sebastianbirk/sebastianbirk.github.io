/**
 * Research software. Ordered as listed — put the flagship work first.
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
      'End-to-end analysis of spatial multi-omics data. A graph deep-learning method that models cellular communication to learn cell-niche representations which stay interpretable, because each latent dimension corresponds to a spatial gene programme representing a known biological process — cell–cell communication, cellular metabolism or transcriptional regulation.',
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
      'A self-supervised foundation model for spatial transcriptomics, built on a graph transformer with a Joint-Embedding Predictive Architecture. Pretrained on 112 million cells across 20 human tissues, it learns reusable representations at gene, cell and neighbourhood scale.',
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
      'Discrete tokenisation for spatial transcriptomics tissue sections, learning compact cell and niche codes that support in-painting of missing tissue regions.',
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
      'Separates microenvironment-induced from cell-intrinsic gene expression, so that tissue microenvironments can be both mapped and reprogrammed.',
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
      'Tissue reconstruction from gene expression via embedding-distance flow matching — generating spatial structure rather than only reading it.',
    role: 'First author',
    tags: ['Python', 'Flow matching', 'Graph generation'],
    links: {
      code: 'https://github.com/Lotfollahi-lab/g2t',
      paper: 'https://doi.org/10.64898/2026.08.25.746917',
    },
  },
];

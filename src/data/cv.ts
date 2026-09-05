/**
 * CV data.
 *
 * Only `cvSections` is rendered. Anything not yet confirmed lives in
 * `pendingEntries` below, which is deliberately NOT rendered — placeholder
 * text must never reach the public page.
 */

export interface CvEntry {
  /** e.g. "2021 – 2026" or "2026 – present". Omit if genuinely unknown. */
  period?: string;
  /** Job title or degree. */
  title: string;
  /** Employer or institution. */
  organization: string;
  location?: string;
  /** Optional supporting lines: supervisors, thesis title, focus areas. */
  details?: string[];
}

export interface CvSection {
  heading: string;
  entries: CvEntry[];
}

/** Path to the PDF in `public/`. Set to null to hide the download button. */
export const cvPdf: string | null = null; // e.g. '/sebastian-birk-cv.pdf'

export const cvSections: CvSection[] = [
  {
    heading: 'Experience',
    entries: [
      {
        period: 'present',
        title: 'Principal Research Scientist',
        organization: 'Wellcome Sanger Institute',
        location: 'Cambridge, UK',
        details: [
          'Lotfollahi Lab — generative models and graph learning for spatial genomics.',
        ],
      },
    ],
  },
  {
    heading: 'Education',
    entries: [
      {
        period: '2021 – 2026',
        title: 'PhD, Computational Biology / Machine Learning',
        organization: 'Technical University of Munich',
        location: 'Munich, Germany',
        details: [
          'Thesis: “Unveiling cellular niches from spatial omics data with generative deep learning”.',
          'Theis Lab (TUM / Helmholtz Munich) and Lotfollahi Lab (Wellcome Sanger Institute), co-supervised with Carlos Talavera-López.',
        ],
      },
      {
        period: '2012 – 2016',
        title: 'BSc, International Business Administration',
        organization: 'University of Tübingen',
        location: 'Tübingen, Germany',
        details: ['Best Graduate of the Year Prize.'],
      },
    ],
  },
];

/**
 * NOT RENDERED — staging area for entries awaiting confirmation.
 *
 * Move an entry into `cvSections` above once its details are filled in.
 * Still needed:
 *   • Avanade — start and end years, and the exact final job title.
 *   • 2017–2018 Barcelona — institution name and exact degree.
 *   • The start year of the Principal Research Scientist role, so the entry
 *     above can read "2026 – present" rather than just "present".
 */
export const pendingEntries: CvEntry[] = [
  {
    title: 'Data & AI Manager / Machine Learning Scientist & Engineer',
    organization: 'Avanade',
    location: 'Munich, Germany',
    details: ['Azure data and AI consulting; MLOps and applied ML delivery.'],
  },
  {
    period: '2017 – 2018',
    title: 'MSc',
    organization: '',
    location: 'Barcelona, Spain',
    details: ['Master thesis on topic modelling of microblogging data in tourism.'],
  },
];

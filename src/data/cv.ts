/**
 * CV data.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  HEADS UP: entries marked `verify: true` render with a small "unverified"
 *  marker in dev mode only, and are drawn from public sources (Google
 *  Scholar, GitHub, the public part of your LinkedIn profile). I could not
 *  confirm exact titles and dates, so please correct them and then delete
 *  the `verify` flag. Nothing here was invented — gaps are left as TODO
 *  rather than filled in with guesses.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface CvEntry {
  /** e.g. "2021 – 2026" or "2025 – present". */
  period: string;
  /** Job title or degree. */
  title: string;
  /** Employer or institution. */
  organization: string;
  location?: string;
  /** Optional supporting lines: supervisors, thesis title, focus areas. */
  details?: string[];
  /** Set while the entry still needs your confirmation. */
  verify?: boolean;
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
        period: '2021 – present',
        title: 'PhD Candidate',
        organization: 'Wellcome Sanger Institute — Lotfollahi Lab',
        location: 'Cambridge, UK',
        details: [
          'Generative and graph-based models for spatial genomics.',
          'Co-supervised with Carlos Talavera-López.',
        ],
        verify: true,
      },
      {
        period: 'TODO',
        title: 'Data & AI Manager / Machine Learning Scientist & Engineer',
        organization: 'Avanade',
        location: 'Munich, Germany',
        details: ['Azure data and AI consulting; MLOps and applied ML delivery.'],
        verify: true,
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
          'Theis Lab (TUM / Helmholtz Munich) and Lotfollahi Lab (Wellcome Sanger Institute).',
        ],
      },
      {
        period: '2017 – 2018',
        title: 'MSc',
        organization: 'TODO — confirm degree and institution',
        location: 'Barcelona, Spain',
        details: [
          'Master thesis on topic modelling of microblogging data in tourism.',
        ],
        verify: true,
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

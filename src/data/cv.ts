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
        period: '2026 – present',
        title: 'Principal Research Scientist',
        organization: 'Wellcome Sanger Institute',
        location: 'Cambridge, UK',
        details: [
          'Lotfollahi Lab — generative models and graph learning for spatial genomics.',
        ],
      },
      {
        period: 'Jul 2026 – present',
        title: 'Freelance Data Science Consultant',
        organization: 'GSK',
        details: ['Translational data science consulting.'],
      },
      {
        period: 'Oct 2018 – Jun 2026',
        title: 'Advanced Analytics & Data Science Manager',
        organization: 'Avanade',
        location: 'Munich, Germany',
        details: [
          'Data Science Consultant (Oct 2018), Senior Consultant (Mar 2021), Manager (Dec 2021 – Jun 2026); part-time from Dec 2021.',
          'Azure and Databricks ML platforms for pharma; MLOps, distributed data processing and ML team leadership.',
        ],
      },
    ],
  },
  {
    heading: 'Education',
    entries: [
      {
        period: 'Oct 2021 – 2026',
        title: 'PhD in Computational Biology / Machine Learning (thesis submitted)',
        organization: 'Technical University of Munich',
        location: 'Munich, Germany',
        details: [
          'Thesis: “Unveiling cellular niches from spatial omics data with generative deep learning”, submitted 2026.',
          'Theis Lab (TUM / Helmholtz Munich) and Lotfollahi Lab (Wellcome Sanger Institute), co-supervised with Carlos Talavera-López.',
        ],
      },
      {
        period: '2017 – 2018',
        title: 'MSc, Business Analytics',
        organization: 'ESADE Business School',
        location: 'Barcelona, Spain',
        details: ['Best graduate of the year; ESADE Scholarship for Excellence.'],
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

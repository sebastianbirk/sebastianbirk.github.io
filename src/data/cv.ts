/**
 * CV data. Sourced from Sebastian's own CV, with the 2026 role changes he
 * confirmed afterwards.
 *
 * Two kinds of section: dated `entries`, and flat `items` for things that do
 * not need a timeline (certifications, awards, languages).
 */

export interface CvEntry {
  /** e.g. "Oct 2018 – Jun 2026". Omit if genuinely unknown. */
  period?: string;
  /** Job title or degree. */
  title: string;
  /** Employer or institution. */
  organization: string;
  location?: string;
  /** Keep each line to one idea — they read better than packed sentences. */
  details?: string[];
}

export interface CvSection {
  heading: string;
  /** Dated, detailed entries. */
  entries?: CvEntry[];
  /** Flat list, rendered as pills. */
  items?: string[];
}

/** Path to the PDF in `public/`. Set to null to hide the download button. */
export const cvPdf: string | null = null; // e.g. '/sebastian-birk-cv.pdf'

export const cvSections: CvSection[] = [
  {
    heading: 'Experience',
    entries: [
      {
        period: 'Oct 2026 – present',
        title: 'Principal Research Scientist',
        organization: 'Wellcome Sanger Institute',
        location: 'Cambridge, UK',
        details: [
          'Lotfollahi Lab — generative models and graph learning for spatial genomics.',
        ],
      },
      {
        period: 'Jul 2026 – present',
        title: 'Freelance Machine Learning Consultant, Target Discovery',
        organization: 'GSK',
      },
      {
        period: 'Dec 2021 – Jun 2026',
        title: 'Advanced Analytics & Data Science Manager',
        organization: 'Avanade',
        location: 'Munich, Germany',
        details: [
          'Part-time, alongside the doctorate.',
          'Architected an Azure Databricks platform for a global pharmaceutical company, supporting production ML, MLOps and DevOps workflows.',
          'Data science subject-matter expert across projects, advising on ML architecture and mentoring junior data scientists.',
        ],
      },
      {
        period: 'Mar 2021 – Dec 2021',
        title: 'Advanced Analytics & Data Science Senior Consultant',
        organization: 'Avanade',
        location: 'Munich, Germany',
        details: [
          'Led a team of ML engineers building a scalable Azure machine learning platform for pharma.',
          'Initiated and led an MLOps offering across Avanade Germany, Austria and Switzerland.',
        ],
      },
      {
        period: 'Oct 2018 – Feb 2021',
        title: 'Senior Analyst / Data Science Consultant',
        organization: 'Avanade',
        location: 'Munich, Germany',
        details: [
          'Applied machine learning across NLP, computer vision, optimisation and interpretable modelling.',
          'Built a PySpark simulation engine on Azure Databricks to optimise a global supply-chain network.',
          'Project lead on the thyssenkrupp ALFRED AI engagement.',
        ],
      },
    ],
  },
  {
    heading: 'Education',
    entries: [
      {
        period: 'Oct 2021 – 2026',
        title: 'PhD in Computational Biology / Machine Learning',
        organization: 'Technical University of Munich',
        location: 'Munich, Germany',
        details: [
          'Thesis submitted 2026: “Unveiling cellular niches from spatial omics data with generative deep learning”.',
          'Theis Lab (TUM / Helmholtz Munich) and Lotfollahi Lab (Wellcome Sanger Institute).',
          'Co-supervised with Carlos Talavera-López.',
        ],
      },
      {
        period: '2017 – 2018',
        title: 'MSc in Business Analytics',
        organization: 'ESADE Business School',
        location: 'Barcelona, Spain',
        details: ['Best graduate of the year; ESADE Scholarship for Excellence.'],
      },
      {
        period: '2012 – 2016',
        title: 'BSc in International Business Administration',
        organization: 'University of Tübingen',
        location: 'Tübingen, Germany',
        details: [
          'Focus on statistics and econometrics; best graduate of the year.',
          'Exchange year at Fox School of Business, Temple University, Philadelphia.',
        ],
      },
    ],
  },
  {
    heading: 'Earlier experience',
    entries: [
      {
        period: '2018',
        title: 'Functional & Industry Analytics Intern',
        organization: 'Accenture',
        location: 'Barcelona, Spain',
      },
      {
        period: '2018',
        title: 'Corporate Analytics Project',
        organization: 'Telefónica',
        location: 'Barcelona, Spain',
      },
      {
        period: '2017',
        title: 'Supply Chain Business Analyst Intern',
        organization: 'Amazon',
        location: 'Munich, Germany',
      },
      {
        period: '2016 – 2017',
        title: 'Financial Analyst Intern',
        organization: 'Microsoft',
        location: 'Munich, Germany',
      },
      {
        period: '2016',
        title: 'Finance & Controlling Intern',
        organization: 'Daimler Financial Services',
        location: 'Madrid, Spain',
      },
    ],
  },
  {
    heading: 'Certifications',
    items: [
      'Microsoft Certified: Azure Data Scientist',
      'Microsoft Certified: Azure Data Engineer',
      'Apache Spark 3.0 Certified Developer',
      'Databricks Partner Solution Architect / Developer',
    ],
  },
  {
    heading: 'Recognition',
    items: [
      'ESADE Scholarship for Excellence',
      'Best Graduate of the Year — ESADE',
      'Best Graduate of the Year — University of Tübingen',
      'Baden-Württemberg Scholarship',
      'MLP Award for Outstanding Performance',
    ],
  },
  {
    heading: 'Languages',
    items: ['German (native)', 'English (fluent)', 'Spanish (fluent)'],
  },
];

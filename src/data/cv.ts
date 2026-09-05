/**
 * CV data, transcribed from Sebastian's own CV.
 *
 * Deliberately omitted: date of birth, home address, phone number and personal
 * email. They belong on a CV sent to a named recipient, not on a public page.
 * Test scores (GMAT/TOEFL) are left out too — they read oddly on a research
 * homepage.
 *
 * Two kinds of section: dated `entries`, and flat `items` for things that need
 * no timeline.
 */

export interface CvEntry {
  /** e.g. "Oct 2018 – Oct 2019". Omit if genuinely unknown. */
  period?: string;
  title: string;
  organization: string;
  location?: string;
  /** One idea per line — they read better than packed sentences. */
  details?: string[];
  /**
   * Basename of a file in `public/logos/`, without extension. When absent, a
   * monogram tile is drawn from the organisation name instead, so an entry
   * never renders with a broken image.
   */
  logo?: string;
}

export interface CvSection {
  heading: string;
  entries?: CvEntry[];
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
        logo: 'sanger',
        details: [
          'Lotfollahi Lab — generative models and graph learning for spatial genomics.',
        ],
      },
      {
        period: 'Jul 2026 – present',
        title: 'Freelance Machine Learning Consultant, Target Discovery',
        organization: 'GSK',
        logo: 'gsk',
      },
      {
        period: 'Dec 2021 – Jun 2026',
        title: 'Advanced Analytics & Data Science Manager',
        organization: 'Avanade',
        location: 'Munich, Germany',
        logo: 'avanade',
        details: [
          'Part-time, alongside the doctorate.',
          'Designed the architecture for an Azure Databricks data science platform, working with data scientists to support mature MLOps and DevOps processes at one of the largest pharmaceutical companies.',
          'Data science subject-matter expert across projects, guiding junior data scientists.',
        ],
      },
      {
        period: 'Mar 2021 – Dec 2021',
        title: 'Advanced Analytics & Data Science Senior Consultant',
        organization: 'Avanade',
        location: 'Munich, Germany',
        logo: 'avanade',
        details: [
          'Led a team of ML engineers building a scalable, robust machine learning platform in Azure for one of the largest pharmaceutical companies.',
          'Worked with data scientists across business groups to develop and deploy production-ready deep learning models and the MLOps workflows around them.',
          'Initiated and led the creation of an MLOps offering within Avanade ASG (Austria, Switzerland, Germany).',
        ],
      },
      {
        period: 'Nov 2019 – Feb 2021',
        title: 'Advanced Analytics & Data Science Consultant',
        organization: 'Avanade',
        location: 'Munich, Germany',
        logo: 'avanade',
        details: [
          'Project lead on an AI project at thyssenkrupp, published by Microsoft as a customer success story.',
          'Built a PySpark simulation engine on Azure Databricks to optimise the supply-chain network of one of the world’s largest material traders, cutting transportation and inventory costs.',
          'Built an IoT system using computer vision to detect anomalies in car-body assembly for a Munich car manufacturer, with the model output surfaced in a Python web app.',
          'Built a classification model predicting the correct cost account for expense bookings, using word embeddings and topic modelling.',
          'Built an interpretable model predicting companies’ return on equity from financial data for a Swedish accounting firm.',
          'Led a five-person proof of concept that grew into a longer-running engagement.',
        ],
      },
      {
        period: 'Oct 2018 – Oct 2019',
        title: 'Advanced Analytics & Data Science Senior Analyst',
        organization: 'Avanade',
        location: 'Munich, Germany',
        logo: 'avanade',
        details: [
          'Helped build a holistic data and analytics platform in Azure for one of the world’s largest material traders.',
          'Supported an automotive company developing an IoT solution to control autonomous robots in manufacturing plants.',
          'Ran a proof of concept for Power BI as a company-wide visualisation tool.',
        ],
      },
    ],
  },
  {
    heading: 'Education',
    entries: [
      {
        period: 'Oct 2021 – Jun 2026',
        title: 'PhD in AI for Health / Data Science',
        organization: 'Helmholtz Munich & Munich School for Data Science',
        location: 'Munich, Germany',
        logo: 'helmholtz',
        details: [
          'Thesis: “Unveiling cellular niches from spatial omics data with generative deep learning”.',
          'Institute of AI for Health, supervised by Mohammad Lotfollahi, Carlos Talavera-López and Bastian Rieck.',
          'Co-affiliated with the Technical University of Munich and the Wellcome Sanger Institute.',
        ],
      },
      {
        period: 'Sep 2017 – Oct 2018',
        title: 'MSc in Business Analytics',
        organization: 'ESADE Business School',
        location: 'Barcelona, Spain',
        logo: 'esade',
        details: [
          'Best graduate of the year — GPA 9.59/10, of 40 students; ESADE Scholarship for Excellence.',
          'Master thesis: “Topic modeling of Twitter data in tourism”.',
        ],
      },
      {
        period: 'Oct 2012 – Nov 2016',
        title: 'BSc in International Business Administration',
        organization: 'University of Tübingen',
        location: 'Tübingen, Germany',
        logo: 'tuebingen',
        details: [
          'Best graduate of the year — GPA 1.11, of 300 students; focus on statistics, econometrics and finance.',
          'Exchange semester at Fox School of Business, Temple University, Philadelphia (2014–2015).',
        ],
      },
    ],
  },
  {
    heading: 'Earlier experience',
    entries: [
      {
        period: 'Apr 2018 – Aug 2018',
        title: 'Functional & Industry Analytics Intern',
        organization: 'Accenture',
        location: 'Barcelona, Spain',
        logo: 'accenture',
        details: [
          'Developed a showcase IoT demo application for industrial machines.',
          'Supported the analytics team across data science use cases.',
        ],
      },
      {
        period: 'Apr 2018 – Jul 2018',
        title: 'Corporate Analytics Project',
        organization: 'Telefónica',
        location: 'Barcelona, Spain',
        logo: 'telefonica',
        details: ['Developed a customer-service chatbot using topic modelling.'],
      },
      {
        period: 'Mar 2017 – Aug 2017',
        title: 'Supply Chain Business Analyst Intern',
        organization: 'Amazon',
        location: 'Munich, Germany',
        logo: 'amazon',
      },
      {
        period: 'Aug 2016 – Feb 2017',
        title: 'Financial Analyst Intern',
        organization: 'Microsoft',
        location: 'Munich, Germany',
        logo: 'microsoft',
      },
      {
        period: 'Apr 2016 – Jul 2016',
        title: 'Finance & Controlling Intern',
        // Daimler Financial Services is now Mercedes-Benz Mobility; the star is
        // the recognisable mark for it.
        organization: 'Daimler Financial Services',
        location: 'Madrid, Spain',
        logo: 'daimler',
      },
    ],
  },
  {
    heading: 'Certifications',
    items: [
      'Microsoft Certified: Azure Fundamentals',
      'Microsoft Certified: Azure Data Engineer',
      'Microsoft Certified: Azure Data Scientist',
      'Apache Spark 3.0 Certified Developer',
      'Databricks Certified: Partner Solution Architect',
      'Databricks Certified: Partner Developer',
      'Professional Scrum Developer (PSD-I)',
    ],
  },
  {
    heading: 'Recognition',
    items: [
      'ESADE Scholarship for Excellence',
      'Best Graduate of the Year — ESADE',
      'Best Graduate of the Year — University of Tübingen',
      'Physics Award, German Physical Society',
      'MLP Award for Outstanding Performance',
      'Baden-Württemberg Scholarship',
    ],
  },
  {
    heading: 'Languages',
    items: ['German (native)', 'English (fluent)', 'Spanish (fluent)'],
  },
];

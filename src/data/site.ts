/**
 * Single source of truth for identity, navigation and profile links.
 * Editing this file is enough to update the header, footer and every
 * social link across the site.
 */

export const site = {
  name: 'Sebastian Birk',
  /** Job title. Appears in the <title> tag, hero, CV header and JSON-LD. */
  role: 'Principal Research Scientist',
  /**
   * Set while a role is announced but not yet started. Appended to the hero and
   * CV subtitle so they do not contradict the CV's own "From Oct 2026" row.
   * Delete once the role begins.
   */
  roleFrom: 'from October 2026',
  affiliation: 'Wellcome Sanger Institute',
  /**
   * Used for the <title> on the homepage instead of the job title. Search
   * results and shared links lead with a capability rather than a rank.
   */
  titleTagline: 'Machine learning for spatial biology',
  /** Short self-description, shown as the kicker above the name. */
  tagline: '\ud83e\uddec AI \u00d7 Bio | Machine Learning Scientist & Engineer',
  description:
    'Machine learning for spatial biology — generative models and graph learning for spatial and single-cell genomics. Principal Research Scientist at the Wellcome Sanger Institute from October 2026.',
  email: 'sb75@sanger.ac.uk',
  location: 'Cambridge, United Kingdom',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  // Software leads: the tools are the most direct evidence of what gets built,
  // and the papers below them do the credentialing.
  { href: '/software/', label: 'Software' },
  { href: '/publications/', label: 'Publications' },
  { href: '/cv/', label: 'CV' },
  { href: '/blog/', label: 'Blog' },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  /** Inline SVG path data, viewBox 0 0 24 24. */
  icon: string;
};

export const socials: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:sb75@sanger.ac.uk',
    icon: 'M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.4.75 8.1 6.075L20.1 6H3.9ZM21 7.875l-8.55 6.412a.75.75 0 0 1-.9 0L3 7.875V18.75c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V7.875Z',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=qwyWxwwAAAAJ&hl=en',
    icon: 'M12 1.5 0 8.25l12 6.75 9.75-5.484v7.734H24V8.25L12 1.5ZM4.5 13.125v4.125C4.5 19.875 7.86 22.5 12 22.5s7.5-2.625 7.5-5.25v-4.125L12 17.25l-7.5-4.125Z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sebastianbirk',
    icon: 'M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z',
  },
  {
    label: 'X',
    href: 'https://x.com/sebastianbirk_',
    icon: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93ZM17.61 20.64h2.04L6.49 3.24H4.3Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sebastian-birk/',
    icon: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  },
];

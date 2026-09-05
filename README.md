# sebastianbirk.github.io

Source for my personal website — built with [Astro](https://astro.build) and
deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>. `npm run build` type-checks and builds into
`dist/`; `npm run preview` serves that build. Requires Node 22.12 or newer.

## Editing content

| What | Where |
|---|---|
| Name, role, nav, social links | `src/data/site.ts` |
| Publications | `src/data/publications.ts` |
| News items | `src/data/news.ts` |
| Software projects | `src/data/projects.ts` |
| CV entries | `src/data/cv.ts` |
| Blog posts | `src/content/blog/*.md` |
| Colours, type, spacing | `src/styles/global.css` |

Content is type-checked, so a malformed entry fails the build rather than
silently rendering wrong.

### Adding a publication

Append to the array in `src/data/publications.ts` — ordering is by `date`, so
position in the file does not matter:

```ts
{
  title: 'Paper title',
  authors: 'S. Birk, A. Coauthor, M. Lotfollahi',
  venue: 'Nature Genetics 57(4), 897–909',
  date: '2026-09-01',          // sorts the list, supplies the year
  type: 'journal',              // journal | preprint | workshop | abstract
  selected: true,               // optional: also show on the homepage
  summary: 'One plain-language sentence.',   // optional
  links: { doi: '…', code: '…' },            // doi, arxiv, biorxiv, pdf, code, docs
},
```

Your own name is bolded automatically wherever `S. Birk` appears, so keep author
lists in that style.

> **Linking preprints:** prefer a `https://doi.org/…` URL over a
> `biorxiv.org/content/…` one. bioRxiv answers unknown content paths with HTTP
> 200 and an empty page, so a mistyped bioRxiv URL looks alive to any checker
> that only inspects status codes. `doi.org` returns an honest 404. Note also
> that bioRxiv issues new DOIs under the `10.64898` prefix; only older
> preprints use `10.1101`.

### Adding a blog post

Create `src/content/blog/my-post.md`. The filename becomes the URL
(`/blog/my-post/`).

```markdown
---
title: 'Post title'
description: 'One sentence, used in the index and in social previews.'
pubDate: 2026-09-04
tags: ['spatial-omics']
draft: false
---

Body in Markdown. Code blocks are syntax-highlighted in both light and dark.
```

`draft: true` keeps a post visible locally but out of the built site and the RSS
feed.

## Generated automatically

- `/rss.xml` — all non-draft posts
- `/sitemap-index.xml` — via `@astrojs/sitemap`, advertised in `robots.txt`
- JSON-LD `Person` markup linking the site to my Scholar, GitHub and LinkedIn
- Light and dark themes following the OS preference, with a persistent toggle

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md).

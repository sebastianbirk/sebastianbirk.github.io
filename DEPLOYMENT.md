# Deployment

## Part 1 — Publish to GitHub Pages

You already own the repo **`sebastianbirk/sebastianbirk.github.io`**. It
currently holds a placeholder Jekyll page ("This repository has been created to
reserve the repository name for a personal website"). These steps replace it.

Because it is a *user site* (`<username>.github.io`), it serves from the domain
root, so no `base` path is needed in `astro.config.mjs`.

### 1. Point this folder at the repo

```bash
git remote add origin https://github.com/sebastianbirk/sebastianbirk.github.io.git
git fetch origin
```

### 2. Replace the placeholder

The old content is a Jekyll placeholder with nothing worth keeping, so overwrite
`main` outright:

```bash
git push --force origin main
```

If you would rather keep the old commits in history, merge instead:

```bash
git pull origin main --allow-unrelated-histories   # resolve conflicts in favour of the new files
git push origin main
```

> Force-pushing discards the placeholder repo's commit history. That is the
> intent here, but it cannot be undone — use the merge route if you are unsure.

### 3. Switch the build source to Actions

In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

This is the step people miss. If Source stays on "Deploy from a branch", GitHub
runs its own Jekyll build, ignores `.github/workflows/deploy.yml`, and you get a
404 or the old placeholder.

### 4. Watch it deploy

The **Actions** tab shows the `Deploy to GitHub Pages` run — roughly a minute.
When it goes green the site is live at <https://sebastianbirk.github.io>.

Every later push to `main` redeploys automatically. You can also trigger a
deploy by hand from Actions → Deploy to GitHub Pages → Run workflow.

### Limits worth knowing

GitHub Pages allows 1 GB per site, a soft 100 GB/month bandwidth limit, and a
10-minute build timeout. It may not be used to run a business or e-commerce.
This site is nowhere near any of these.

---

## Part 2 — Moving `sebastianbirk.org` over (when you are ready)

Nothing below is required to launch. The site works on
`sebastianbirk.github.io` indefinitely, and your WordPress site stays untouched
until you do this.

### Decide which domain is canonical first

`sebastianbirk.org` and `sebastianbirk.com` both currently point at the same
Bluehost IP. Your **GitHub profile and Google Scholar both advertise
`sebastianbirk.com`**, so that is the one people already have. Whichever you
pick, point the other at it with a redirect rather than serving both — two live
copies of the same site split your search ranking.

### The order matters

Do these in sequence. Getting it wrong means the HTTPS certificate covers only
one of apex/`www`, and the fix is to remove the domain and start over.

**1. Verify the domain first** (prevents anyone else from claiming it later):
GitHub → Settings → Pages → "Verify a domain". It gives you a `TXT` record to
add at your DNS provider.

**2. Add the DNS records** at Bluehost (or wherever DNS lives). For the apex
domain, four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

and, so IPv6-only clients can reach you, four `AAAA` records:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Then one `CNAME` for the `www` subdomain:

```
www   CNAME   sebastianbirk.github.io.
```

Note the target is your GitHub user domain — **not** the repo name, and not the
custom domain.

**3. Wait for DNS to propagate.** Check with:

```bash
dig +short sebastianbirk.org A
dig +short www.sebastianbirk.org CNAME
```

Only continue once both return GitHub's values rather than Bluehost's
`162.241.24.125`.

**4. Set the custom domain in GitHub**: Settings → Pages → Custom domain →
enter the apex domain → Save. Since this repo deploys from a workflow rather
than a branch, GitHub does *not* commit a `CNAME` file — so also create
`public/CNAME` containing exactly:

```
sebastianbirk.org
```

and set `SITE` in `astro.config.mjs` to `https://sebastianbirk.org`, so canonical
URLs, the sitemap and the RSS feed all use the real domain. Commit and push.

**5. Enable HTTPS.** Once the green checkmark appears under Custom domain, tick
**Enforce HTTPS**. It can take up to 24 hours to become available. Because both
apex and `www` were in place before the certificate was issued, the certificate
covers both.

### Then, and only then, cancel Bluehost

Once the new site serves correctly over HTTPS on the real domain:

- Keep Bluehost (or move to Cloudflare / Porkbun) as the **registrar** — you
  still need the domain itself.
- Cancel the **hosting** plan. That is the recurring cost you are removing:
  Bluehost renews at roughly $10–14/month, versus $0 for GitHub Pages.
- **Export your WordPress content before the plan lapses.** Even though this
  site starts fresh, once the hosting is gone the 2021 posts are gone with it.
  WordPress admin → Tools → Export → All content, and keep the XML file.

### What you give up by leaving WordPress

- The visual editor — replaced by Markdown in this repo.
- Server-side contact forms — use a `mailto:` link (already in the footer) or a
  static form service like Formspree.
- Comments — add [giscus](https://giscus.app) if you ever want them; it stores
  threads in GitHub Discussions.

What you gain: no plugin updates, no PHP upgrades, no attack surface, no
recurring bill, and a site whose entire history is in Git.

# Deployment

## Publishing to GitHub Pages

This is a GitHub *user site* (repo `sebastianbirk.github.io`), so it serves from
the domain root and needs no `base` path in `astro.config.mjs`.

### 1. Set the build source to Actions

In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

This step is easy to miss. If Source is left on "Deploy from a branch", GitHub
runs its own Jekyll build, ignores `.github/workflows/deploy.yml`, and serves
either a 404 or whatever the branch happens to contain.

### 2. Make sure the default branch matches the workflow trigger

The workflow fires on `push: branches: [main]`. If the repo's default branch is
something else, pushing `main` creates a parallel branch, the workflow may not
run, and the old content stays live.

### 3. Push

```bash
git push origin main
```

The **Actions** tab shows the `Deploy to GitHub Pages` run — about a minute.
When it goes green the site is live. Every later push to `main` redeploys; you
can also trigger a run by hand from Actions → Deploy to GitHub Pages → Run
workflow.

### Limits

GitHub Pages allows 1 GB per site, a soft 100 GB/month bandwidth limit, and a
10-minute build timeout, and may not be used to run a business. This site is
nowhere near any of them.

---

## Moving to a custom domain

Not required — the site runs on the `github.io` subdomain indefinitely.

### Order matters

Doing these out of sequence means the HTTPS certificate covers only the apex or
only `www`, and the fix is to remove the domain and start over.

**1. Verify the domain first**, so nobody else can claim it later:
GitHub → Settings → Pages → "Verify a domain", then add the `TXT` record it
gives you.

**2. Add the DNS records.** For the apex domain, four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

and four `AAAA` records so IPv6-only clients can reach the site:

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

The CNAME target is the GitHub user domain — not the repo name, and not the
custom domain.

**3. Wait for propagation**, and confirm before continuing:

```bash
dig +short example.org A
dig +short www.example.org CNAME
```

**4. Set the custom domain** in Settings → Pages → Custom domain. Because this
repo deploys from a workflow rather than a branch, GitHub does *not* commit a
`CNAME` file, so also create `public/CNAME` containing the bare hostname, and
set `SITE` in `astro.config.mjs` to the new origin so canonical URLs, the
sitemap, the RSS feed and `robots.txt` all agree. Commit and push.

**5. Enable HTTPS.** Once the green checkmark appears under Custom domain, tick
**Enforce HTTPS** (it can take up to 24 hours to become available). With apex and
`www` both in place beforehand, the certificate covers both.

### Retiring a previous host

Once the new site serves correctly over HTTPS:

- Keep the registrar — you still need the domain itself. Only the *hosting* plan
  is redundant.
- **Export the old site's content before the plan lapses.** Once hosting is
  gone, so are the old posts.
- Static hosting has no visual editor, no server-side forms and no comments. The
  substitutes are Markdown in this repo, a `mailto:` link or a service like
  Formspree, and [giscus](https://giscus.app) if comments are ever wanted.

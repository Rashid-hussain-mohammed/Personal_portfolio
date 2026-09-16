# Portfolio

Personal portfolio site built with Next.js and containerized with Docker.

Fonts are self-hosted via `@fontsource` packages (bundled in `node_modules`,
not fetched from Google Fonts at build or run time). This is deliberate: on
some networks `next/font/google`'s fetch to `fonts.gstatic.com` times out and
crashes the whole page. If you ever add another font, prefer an `@fontsource/*`
package over `next/font/google` for the same reason.

## 1. Before you push

Contact info and project descriptions are already filled in from your
resume. The one thing still marked as a placeholder is the exact repository
link for each project in `src/components/Projects.tsx` — replace
"add exact link" with the real repo URL if you want each case study to link
somewhere specific.

## 2. Create the GitHub repo and push

On github.com, create a new **empty** repository (no README, no .gitignore —
you already have both here). Then, from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 3. Clone onto the Linux Mint laptop and run it

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
docker compose up --build -d
```

Visit `http://localhost:3000` (or `http://<laptop-lan-ip>:3000` from another
device on the same network). Stop it with `docker compose down`.

## 4. Local development (without Docker)

```bash
npm install
npm run dev
```

## Later: deploying to the cloud

Same image, different machine:

```bash
docker build -t portfolio .
docker tag portfolio ghcr.io/<your-username>/portfolio:latest
docker push ghcr.io/<your-username>/portfolio:latest
```

Then on a cloud VM (e.g. a DigitalOcean droplet via the GitHub Student Pack):

```bash
docker pull ghcr.io/<your-username>/portfolio:latest
docker run -d -p 3000:3000 --restart unless-stopped ghcr.io/<your-username>/portfolio:latest
```

Put a reverse proxy (Caddy is the simplest) in front of it for a domain name
and free automatic HTTPS.

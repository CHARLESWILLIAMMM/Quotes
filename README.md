# The Thinker's Daily Quote

A minimalist, dark-themed Progressive Web App (PWA) that shows a new inspiring quote from great philosophers every day.

**Live site:** https://charleswilliammm.github.io/Quotes/

---

## 🚀 How to Enable the Live Site (one-time setup — 2 minutes)

The site is already built and ready. You just need to turn on GitHub Pages once:

### Step 1 — Go to Settings → Pages

Open this link:
👉 **https://github.com/CHARLESWILLIAMMM/Quotes/settings/pages**

### Step 2 — Set the Source to "GitHub Actions"

Under **"Build and deployment"**, change **Source** to **"GitHub Actions"** and click **Save**.

### Step 3 — Merge this PR

After merging this PR to `main`, the workflow runs automatically and your site is live at:
🌐 **https://charleswilliammm.github.io/Quotes/**

> **Already enabled Pages but still seeing 404?** Go to the **Actions** tab → latest
> "Deploy to GitHub Pages" run → click **Re-run all jobs**.

---

## Features

- 📖 **44 quotes** from Musashi, Kafka, Dostoevsky, Nietzsche, Camus, Maltz, Aristotle, and more
- 🗓️ One quote per day — same quote all day, new one at midnight
- 📋 **Copy** button (clipboard API with fallback)
- 📤 **Share** button (Web Share API on supported devices)
- 📱 **PWA** — install to home screen, works fully offline
- 🌙 Dark, immersive design with gold accents

## Local development

```bash
# Serve with any static server, e.g.:
python3 -m http.server 8080
# then open http://localhost:8080
```


# The Thinker's Daily Quote

A minimalist, dark-themed Progressive Web App (PWA) that shows a new inspiring quote from great philosophers every day.

**Live site:** https://charleswilliammm.github.io/Quotes/

---

## 🚀 How to Enable the Live Site (one-time setup — 2 minutes)

The deployment workflow automatically pushes to the `gh-pages` branch on every commit.
You just need to point GitHub Pages at that branch once:

### Step 1 — Go to Settings → Pages

Open this link:
👉 **https://github.com/CHARLESWILLIAMMM/Quotes/settings/pages**

### Step 2 — Set Source to the `gh-pages` branch

Under **"Build and deployment"**:
- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / `/ (root)`

Click **Save**.

### Step 3 — Wait ~60 seconds

GitHub Pages will go live at:
🌐 **https://charleswilliammm.github.io/Quotes/**

> **Already did this but still seeing 404?** Go to the **Actions** tab and check the latest
> "Deploy to GitHub Pages" workflow run — it must complete successfully first (green ✓).

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


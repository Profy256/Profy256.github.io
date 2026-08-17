# Kafeero Proferious — Portfolio

Static single-page portfolio. No build step — plain HTML/CSS/JS, so it deploys straight to GitHub Pages.

## Structure

```
index.html
css/style.css
js/script.js
assets/Kafeero-Proferious-CV.pdf
```

## Preview locally

Any static server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy to GitHub Pages (user site)

This is set up for a **user site**, served at `https://Profy256.github.io`. That requires the repo to be named *exactly* `Profy256.github.io`.

```bash
cd /home/profy/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Profy256/Profy256.github.io.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `/(root)`**. It publishes at `https://profy256.github.io` within a minute or two — no further config needed since there's no build step.

## Things to swap in later

- **Photo**: replace the "KP" monogram (`.hero__mark` in `index.html`, `.brand__mark`) with a real `<img>` once you send me a headshot.
- **Project links**: SocialPulse, Profy Glitch and Chicken City don't have public links yet — add them to their `<article class="card">` blocks in `index.html` (copy the `<a class="card__link">` pattern from the FindMyHome/Gincode/Palius cards) once they're live.
- **Referees**: intentionally left off the public site since it publishes a third party's private phone number — happy to add a "references available on request" line instead if you want it.

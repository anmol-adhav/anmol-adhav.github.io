# Anmol Adhav — Portfolio

[




Personal academic portfolio and blog for **Anmol Adhav**, Postdoctoral Researcher in Structural Biology at the [Novo Nordisk Foundation Center for Protein Research](https://www.cpr.ku.dk/), University of Copenhagen.

***

## 🔬 About

This site serves as a professional academic home covering research background, skills, publications, and selected projects. It is built as a fully static, single-page application deployed via **GitHub Pages** — no frameworks, no build tools, just HTML, CSS, and JavaScript.

Key scientific interests covered on the site:
- Macromolecular crystallography and cryo-electron microscopy
- Bacterial defense systems and two-component signaling
- Structure-based drug design
- Viral protein structural biology (SARS-CoV-2 spike)
- Enzyme characterization (trehalase, histidine kinases)

***

## 🗂️ Repository Structure

```
anmol-adhav.github.io/
├── index.html              # Main portfolio page (single-page)
├── blog.html               # Blog page
├── sitemap.html            # HTML sitemap for search engines
├── robots.txt              # Web crawler instructions
├── js_main.js              # ORCID API integration for publications
├── assets/                 # Images (profile photo, icons)
├── css/                    # External stylesheets (light/blue themes)
├── files/                  # Downloadable files (CV PDF)
└── research_Version2.md    # Research summary markdown draft
```

***

## ✨ Features

- **Light / Dark mode** — system preference detection with manual toggle (🌙 / ☀️)
- **Mobile-responsive** — sticky mobile header with hamburger menu and slide-in sidebar drawer
- **ORCID integration** — publications auto-loaded from the public ORCID API (`0000-0002-3504-8675`) on every page load, sorted by year
- **CV download** — direct PDF download link in the sidebar
- **SEO-ready** — `robots.txt`, `sitemap.html`, and meta description tags included
- **No dependencies** — zero npm packages, no build step, pure static HTML

***

## 🧭 Sections

| Section | Description |
|---|---|
| **About & Journey** | Personal and academic background from Pune → Valencia → Copenhagen |
| **Skills** | Structural biology, biochemistry, biophysics, and programming competencies |
| **Experience** | Postdoc (Copenhagen), PhD (Valencia/MSCA), Visiting Researcher (Oxford), Project Assistant (Pune) |
| **Education** | PhD (Biomedicine & Biotechnology), M.Tech & Integrated M.Sc (Biotechnology) |
| **Research** | Current themes: bacterial defense, viral proteins, enzyme mechanisms, drug design |
| **Selected Projects** | Trehalase inhibition, SARS-CoV-2 spike variants, bacterial defense modules, histidine kinase inhibitors |
| **Publications** | Auto-fetched from ORCID public API — updates automatically |
| **Blog** | Notes on structural biology, bacterial defense, and experiences across countries |
| **Contact** | Email, Google Scholar, GitHub, LinkedIn, X (Twitter) |

***

## 🚀 Deployment

The site is deployed automatically via **GitHub Pages** from the `main` branch. Any push to `main` triggers a live update at:

```
https://anmol-adhav.github.io
```

No build step or CI/CD configuration is required.

***

## 🛠️ Local Development

Clone the repo and open `index.html` directly in a browser — no server setup required:

```bash
git clone https://github.com/anmol-adhav/anmol-adhav.github.io.git
cd anmol-adhav.github.io
open index.html        # macOS
# or
xdg-open index.html    # Linux
```

> **Note:** The ORCID publications API call requires an internet connection and may be blocked by some browser security settings when opened as a local `file://` URL. Use a simple local server if needed:
> ```bash
> python3 -m http.server 8000
> # Then open http://localhost:8000
> ```

***

## 📡 ORCID Publications API

Publications are fetched client-side at page load from the ORCID public API (no API key required):

```
GET https://pub.orcid.org/v3.0/0000-0002-3504-8675/works
Accept: application/json
```

The response is parsed, sorted by publication year (newest first), and rendered as a list with DOI links. Up to 10 recent works are displayed. If the API is unreachable, a fallback message is shown.

***

## 🔗 Links

| | |
|---|---|
| 🌐 Live site | [anmol-adhav.github.io](https://anmol-adhav.github.io) |
| 📄 ORCID | [0000-0002-3504-8675](https://orcid.org/0000-0002-3504-8675) |
| 🎓 Google Scholar | [Scholar profile](https://scholar.google.com/citations?user=ubgH720AAAAJ&hl=en) |
| 💼 LinkedIn | [anmol-adhav-phd](https://www.linkedin.com/in/anmol-adhav-phd-25335582/) |
| 🐙 GitHub | [anmol-adhav](https://github.com/anmol-adhav) |
| 🐦 X / Twitter | [@anmoladhav](https://twitter.com/anmoladhav) |

***

## 📜 License

This repository contains personal academic content. The code structure is free to use as a template — please replace all personal content (bio, CV, photos, publications) with your own before redeploying.

***

*Last updated: April 2026*

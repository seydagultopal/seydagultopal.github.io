# Personal Portfolio Website

The source code for my bilingual software engineering portfolio, published with GitHub Pages.

**Live website:** https://seydagultopal.github.io/

## Overview

A responsive, single-page portfolio presenting my background, experience, selected projects, technical skills, and contact links. The interface supports English and Turkish through a lightweight client-side language switch.

## Built with

- Semantic HTML
- CSS (custom responsive layout and visual styling)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Manrope and DM Mono)
- GitHub Pages

## Project structure

```text
.
├── index.html       # Page content and bilingual text
├── style.css        # Layout, responsive styles, and visual system
├── script.js        # Language switch and mobile navigation
└── favicon.svg      # Site icon
```

## Run locally

No package manager or build step is required. Clone the repository and open index.html in a browser, or serve the directory with any static HTTP server.

For example, with Python:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

The site is served from the main branch using GitHub Pages. Changes pushed to the configured publishing branch are published by GitHub Pages.

## Notes

- The page is available in English and Turkish.
- External font and icon resources are loaded from their respective CDNs.
- Project descriptions should reflect the artifacts currently available in each linked public repository.

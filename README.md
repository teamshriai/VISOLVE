# ViSolve

Monorepo for visolve.com. Two top-level folders:

```
.
├── client/    React 19 + Vite 8 SPA — the entire public site
└── server/    backend (placeholder — no service implemented yet)
```

## client

Single Vite application serving two brands from one router:

| Area                  | Routes               | Chrome                                              |
| --------------------- | -------------------- | --------------------------------------------------- |
| ViSolve main site     | `/`, `/services/*`, `/products/*`, `/blogs/*`, … | `MainLayout` (shared navbar + footer) |
| AI & Precision Medicine portfolio | `/portfolio`, `/portfolio/contact` | its own navbar + footer, rendered outside `MainLayout` |

The portfolio is a self-contained sub-brand: its own palette, typeface
(IBM Plex Sans vs. Inter) and chrome. It lives in
[client/src/pages/portfolio/](client/src/pages/portfolio/) and its styling is
namespaced to a `.portfolio-root` wrapper, so the two design systems cannot
bleed into each other. See
[portfolio.css](client/src/pages/portfolio/portfolio.css).

### Getting started

```bash
cd client
npm install
cp .env.example .env     # optional — only for the portfolio contact form
npm run dev              # http://localhost:5173
```

### Scripts

| Command           | Does                                        |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | dev server with HMR                         |
| `npm run build`   | production build → `client/dist/`           |
| `npm run preview` | serve the production build locally          |
| `npm run lint`    | oxlint                                      |

### Environment

Only the portfolio contact form reads env vars. Copy `.env.example` to `.env`
and fill in the EmailJS credentials; if any of the three is missing the form
degrades gracefully to opening a prefilled `mailto:` draft.

Vite inlines `VITE_*` values into the client bundle at build time — they are
public. Never put a secret behind a `VITE_` prefix.

### Deploying

`npm run build` emits a static bundle in `client/dist/`. Because routing is
client-side, **the host must rewrite unknown paths to `index.html`** or a
direct hit on `/portfolio` (or any deep link) will 404:

- **nginx** — `location / { try_files $uri $uri/ /index.html; }`
- **Apache** — `FallbackResource /index.html`
- **Netlify** — `/* /index.html 200` in `_redirects`
- **Vercel / Cloudflare Pages** — SPA fallback is on by default

## server

Empty placeholder for backend services. The client currently talks to no
first-party API — the only network call is the portfolio contact form posting
to EmailJS.

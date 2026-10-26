# Gowtham G — Modular React Portfolio

A recruiter-friendly, responsive software-developer portfolio built with **React and Vite**. It retains the black/charcoal + yellow visual design from the previous version, but organizes the code into independent **frontend features** that are easy to maintain and explain in interviews.

> **Architecture note:** This is **feature-based frontend architecture**, not microservices. True microservices are separately deployed backend services communicating over APIs. Creating fake services for a static portfolio would add needless complexity. See `docs/ARCHITECTURE_AND_INTERVIEW.md`.

## Run the project

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

Deploy to Vercel: import this repository, select Vite, build command `npm run build`, output folder `dist`.

## Features

- Responsive single-page portfolio with a dark/yellow identity
- Reusable page sections: Hero, About, Skills, Projects, Experience and Contact
- Separate React components and external CSS files; no inline stylesheet
- Working All / Full stack / Frontend project filters
- **New:** live project keyword search, match count, clear-filter empty state
- **New:** scroll-progress indicator and back-to-top control
- **New:** copy-email action with clear success/fallback feedback
- Accessible navigation, escape-key closing on mobile, keyboard focus states and skip-to-content link
- GitHub, LinkedIn, project, resume download and email links
- Three project-themed design illustrations — **not screenshots** of the deployed apps
- Minimal dependencies: React, React DOM, and Vite

## Important project folders

```text
src/
├── main.jsx                     # React entry point, imports App and styles
├── app/
│   └── App.jsx                  # Composes the entire page
├── components/
│   ├── layout/                  # Header, Footer, Wordmark
│   └── ui/                      # Icon, SectionTitle, ScrollProgress, BackToTop
├── data/
│   ├── profile.js               # Contact links, name and resume
│   ├── navigation.js            # Navigation items
│   ├── skills.js                # Skill categories
│   └── projects.js              # Project content and URLs
├── features/
│   ├── hero/                    # Introduction and developer code panel
│   ├── about/                   # Short professional story
│   ├── skills/                  # Tech stack
│   ├── projects/                # Cards, artwork, filtering and searching
│   ├── experience/              # Internship, education and certificates
│   └── contact/                 # Email, copy button and LinkedIn
└── styles/
    ├── index.css                # Imports the external stylesheets
    ├── base.css                 # Colors, typography and resets
    ├── layout.css               # Header/navigation styles
    ├── hero.css                 # Hero layout
    ├── general.css              # About and shared section styles
    ├── skills.css               # Skills section styles
    ├── projects.css             # Project cards and controls
    ├── project-art.css          # Project illustration styles
    ├── experience.css           # Experience timeline
    ├── contact.css              # Contact area
    ├── responsive.css           # Screen-size and motion adaptations
    └── enhancements.css         # Search, scroll, clipboard feedback
```

## Where to make changes

| Want to change... | File |
| --- | --- |
| Name, email, LinkedIn, GitHub | `src/data/profile.js` |
| Project descriptions and links | `src/data/projects.js` |
| Skill list | `src/data/skills.js` |
| Hero text | `src/features/hero/Hero.jsx` |
| About text | `src/features/about/About.jsx` |
| Internship / education / certificates | `src/features/experience/Experience.jsx` |
| Footer text | `src/components/layout/Footer.jsx` |
| Theme colors | `src/styles/base.css` (`:root` variables) |
| Resume PDF | `public/Gowtham_G_Resume.pdf` (replace with your latest approved PDF) |
| Portfolio browser title/SEO text | `index.html` |

### Add another project

Open `src/data/projects.js` and add an item with the same fields to `PROJECTS` (featured) or `MINI_PROJECTS` (small projects). The React cards and search will update automatically; you don't need to edit JSX for every project.

### Explain to an interviewer

> “I built my portfolio as a React single-page application using a feature-based architecture. The App component assembles page sections, while shared components handle navigation and UI. I store profile, skill and project data separately so content can change without rewriting components. CSS is in dedicated files. I use React state for project filters and search, and effects for scroll behavior. The design is responsive and deployed as a static frontend.”

More details and possible interview questions: **[`docs/ARCHITECTURE_AND_INTERVIEW.md`](docs/ARCHITECTURE_AND_INTERVIEW.md)**.

## Before publishing

1. Check your CV in `public/Gowtham_G_Resume.pdf`: it is bundled from the earlier portfolio; replace it if you have a newer approved version.
2. Open all GitHub URLs and the EstateFlow live demo, because links can change.
3. Test the site at desktop and mobile sizes.
4. Your email is public by design; don't add personal data you don't want publicly visible.
5. The portfolio project artwork is illustrative UI, not evidence of the applications' actual screens.

## Validation note

The modular JSX components were parsed and server-rendered successfully in the creation environment. A full `vite build` couldn't be completed there because the pre-existing dependency bundle lacked a Linux-specific native Vite binding; run `npm install` on your own machine before building.


## Learn the CSS (beginner-friendly)

All styling has been expanded from compact one-line rules into readable selectors and declarations.
Read [`docs/CSS_LEARNING_GUIDE.md`](docs/CSS_LEARNING_GUIDE.md) for a step-by-step explanation of how `className` in JSX maps to `.class` and `#id` selectors in external CSS files.

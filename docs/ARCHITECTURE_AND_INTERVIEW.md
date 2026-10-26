# Portfolio Architecture & Interview Guide

## 1. System overview

```text
            Browser (desktop / mobile)
                      |
                index.html
                      |
                 src/main.jsx
                      |
                  app/App.jsx
                      |
       +--------------+---------------+
       |              |               |
 Shared UI        Feature views    External styles
(Header etc.)   (Hero, Projects,   (styles/*.css)
                 Contact, etc.)
                      |
                  Data modules
           (profile, skills, projects)
                      |
             External links only
           (GitHub, LinkedIn, mailto,
             project demos, resume)
```

**There is no backend/database for this portfolio.** It is a React SPA that can be hosted as static assets on Vercel. The external full-stack projects linked here have their own architectures, but are not services inside this site.

## 2. Why feature-based architecture instead of microservices?

A **microservice** is an independently deployed service exposing an API; it often has its own business logic and datastore. A React component is **not** a microservice. For a frontend-only portfolio, splitting files by feature is simpler and accurate. If, in the future, you add a separate Java/Spring Boot contact API or blog service, you could document and deploy that as a backend service—but it is **not part of this version**.

Use this precise wording in interviews: “I used modular feature-based React architecture, not backend microservices.”

## 3. Component responsibilities

- `src/main.jsx`: initializes React and imports the external stylesheet index.
- `src/app/App.jsx`: composes the page using small feature components.
- `src/components/layout`: shared, reusable site navigation, brand and footer.
- `src/components/ui`: generic visual or behavior components, reused across sections.
- `src/features/projects`: project display, category filters, keyword search, empty states and themed artwork.
- `src/features/contact`: email CTA and clipboard feedback.
- `src/data`: plain JS data arrays and objects, so editing content doesn't require changing layout components.
- `src/styles`: multiple normal CSS files organized by responsibility, imported via `src/styles/index.css`.

## 4. How project searching works

1. Projects are stored as objects in `src/data/projects.js`.
2. `Projects.jsx` stores category and search text in local React `useState`.
3. It normalizes the search text to lowercase.
4. `useMemo` derives featured and small projects whose title, summary, points or technologies contain the text, respecting the active category.
5. React renders matching cards. A match count and a no-results message reflect the same filtered arrays.
6. No network request is made; this is local client-side filtering.

Questions you may hear:

**Q: Why `useState`?** To remember which filter is selected and what the visitor typed, and to trigger a rerender when either changes.

**Q: Why `useMemo`?** To express derived filtered lists and avoid recalculating them on renders when the category and search have not changed. For a handful of projects it is not essential for performance, but keeps the dependency logic clear.

**Q: What happens if there are no matches?** The page shows an informative empty state and a button to reset both filters.

## 5. How scrolling features work

- `ScrollProgress.jsx` adds a passive scroll listener inside `useEffect`. It calculates `scrollY / (scrollHeight - innerHeight)` and updates the width representation using a CSS transform.
- It batches scroll calculations with `requestAnimationFrame`, and removes listeners on cleanup.
- `BackToTop.jsx` displays a control after scrolling down and links to the `#home` section.
- Both remove event listeners on unmount. CSS reduces animations when visitors prefer reduced motion.

**Q: Why `useEffect`?** Browser listeners access `window` and `document`, so they belong in an effect after rendering, with cleanup to prevent leftover listeners.

## 6. Contact behavior

- Email me: regular `mailto:` URL that launches the visitor's configured mail app.
- Copy email: uses `navigator.clipboard.writeText` on a button click; on failure it displays a fallback message and retains the email link.
- No email is submitted to a backend and no database stores visitor information.

**Q: Why not build a contact form?** A trustworthy form needs a backend or a third-party service plus validation, spam protection and a privacy approach. An email action keeps a small portfolio reliable and simple.

## 7. CSS structure and responsiveness

- `base.css` defines the theme tokens: `--yellow`, `--bg`, `--text`, spacing and fonts.
- Section CSS files hold their own visual rules.
- `responsive.css` adapts layout for smaller screen widths.
- `enhancements.css` covers the new interactive UI states.
- `index.css` imports these external stylesheets; React components reference CSS `className` values.

**Q: Why external CSS?** It separates presentation from React behavior and makes mobile adjustments or color changes easier to locate.

## 8. Interview-ready 45-second introduction

> “This is my personal portfolio, built using React and Vite. I organized it by features: hero, skills, projects, experience and contact, plus reusable UI and layout components. The project and skills content live in JavaScript data modules, and the styling is separated into external CSS files. I added project filtering and search with React state, a scroll indicator with useEffect, and a copy-email interaction. I focused on responsive design and readable code, and I can update projects easily without changing the components. It is a static frontend application, not a microservices system.”

## 9. Future enhancements worth discussing, not yet implemented

- Add project screenshots or walkthrough videos with image alt text
- Add a blog backed by a headless CMS
- Add automated build checks with GitHub Actions
- Add a separately deployed Spring Boot contact API if a contact form is genuinely required
- Write automated React component tests and basic end-to-end tests

Avoid telling interviewers that those ideas are completed features.

# Learn the CSS in your React portfolio

This project is a **React + Vite single-page application** with a feature-based folder structure. It is **not a microservices system**. The CSS is written in **regular external `.css` files**; there is no CSS-in-JS dependency, Bootstrap requirement, or Tailwind.

## 1. How external CSS connects to React

In `src/main.jsx` we import the stylesheet entry point:

```jsx
import './styles/index.css';
```

Then `src/styles/index.css` imports the actual style files:

```css
@import './base.css';
@import './layout.css';
@import './hero.css';
```

The order of the imports matters when two selectors target the same element; later styles may override earlier styles. In this project, responsive.css comes near the end so that it can adapt the layout for smaller screens.

## 2. The most important concept: `className` matches `.class-name`

Open `src/features/hero/Hero.jsx`:

```jsx
<section id="home" className="hero">
  <div className="shell hero-layout">
    <div className="hero-copy">
      <p className="hero-desc">Software Developer...</p>
    </div>
  </div>
</section>
```

Now open `src/styles/hero.css`:

```css
.hero {
  position: relative;
  overflow: hidden;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.02fr .98fr;
  gap: 60px;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.85;
  color: var(--muted);
}

#home {
  scroll-margin-top: 78px;
}
```

Explanation:
- `.hero` targets elements with `className="hero"`.
- `.hero-layout` targets the div with the same class name.
- `.hero-desc` changes the description text.
- `#home` targets the element with `id="home"`.
- `className="shell hero-layout"` uses **two classes** on the same element.

**Important:** In JSX we write `className`, not `class`; in plain CSS, prefix a class with `.` and an ID with `#`. You do not import individual HTML classes in JavaScript.

## 3. Find the correct stylesheet for any element

| React file | External CSS file | Example selector |
|---|---|---|
| `src/components/layout/Header.jsx` | `src/styles/layout.css` | `.site-header` |
| `src/features/hero/Hero.jsx` | `src/styles/hero.css` | `.hero` |
| `src/features/about/About.jsx` | `src/styles/general.css` | `.about-layout` |
| `src/features/skills/Skills.jsx` | `src/styles/skills.css` | `.skill-grid` |
| `src/features/projects/Projects.jsx` | `src/styles/projects.css` | `.section-projects`, `#projects` |
| `src/features/projects/ProjectArt.jsx` | `src/styles/project-art.css` | `.project-art` |
| `src/features/experience/Experience.jsx` | `src/styles/experience.css` | `.section-experience` |
| `src/features/contact/Contact.jsx` | `src/styles/contact.css` | `.section-contact` |
| `src/components/ui/BackToTop.jsx` | `src/styles/enhancements.css` | `.back-to-top` |
| `src/features/projects/Projects.jsx` | `src/styles/enhancements.css` | `#project-search` |

Look for exact names in VS Code using `Ctrl + Shift + F` and type `hero-desc`, for example.

## 4. Make your first safe CSS change

To make the big heading smaller, open `src/styles/hero.css`, find `.hero h1`, and edit `font-size`.

To change the yellow color globally, open `src/styles/base.css`, find `--yellow`, and change its value.

To change spacing between project cards, open `src/styles/projects.css` and edit the `gap` property of the relevant project layout.

To learn responsive styling, open `src/styles/responsive.css`: `@media (max-width: 620px)` rules apply when the browser is narrow.

## 5. React component flow

`main.jsx` -> `App.jsx` -> feature component (`Hero.jsx`) -> JSX HTML elements -> matching CSS selector.

The project information lives separately in `src/data/projects.js`. The `Projects.jsx` component reads it and renders `ProjectCard.jsx`. CSS only changes appearance; it does not fetch data or run the project search logic.

## 6. How to explain the styling in an interview

> I structured my React portfolio by features and placed styling in separate CSS files for maintainability. Components use descriptive `className` and `id` attributes, and the CSS targets them with class and ID selectors. A central stylesheet imports the feature styles, while CSS variables keep the colors consistent. Media queries adapt the design for mobile devices.

## 7. Commands

```bash
npm install
npm run dev
npm run build
```

Use browser DevTools -> Elements -> Styles to see which selector is applied to an element.

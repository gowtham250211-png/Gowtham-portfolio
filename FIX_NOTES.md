# Blank-screen React fix — 26 October 2026

This release fixes the runtime error `ReferenceError: React is not defined` in `src/app/App.jsx` and other JSX components.

## Changes
- Added explicit `import React from 'react';` to all 17 JSX components that were missing it (the 18th, `src/main.jsx`, already imported React).
- Added `vite.config.js` configuring `@vitejs/plugin-react` for standard automatic JSX transformation.
- Kept the feature-folder structure, external CSS, profile details, and portfolio visuals intact.

## Run
```bash
npm install
npm run dev
```
Then refresh `http://localhost:5173/`.

## Validation
All 18 JSX files were checked for React imports. A full Vite build could not be verified here because npm installation did not finish in this environment. Run `npm run build` on your system before deployment.

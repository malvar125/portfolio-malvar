# React Portfolio (Vite)

A simple, animated, responsive portfolio template built with React + Vite and Framer Motion.

## Getting started (Windows PowerShell)

1. Install dependencies:

```powershell
npm install
```

2. Run the development server:

```powershell
npm run dev
```

Open the printed URL (usually `http://localhost:3000`) in your browser.

## Features

- React + Vite scaffold
- Framer Motion animations for smooth UI
- Light / dark theme toggle (state persisted in `localStorage`)
- Responsive layout and simple components you can customize

## Content Audit (suggested)

- **Hero Statement (one sentence):** I build user-friendly web experiences with polished UI and animations.
	- Replace the sample hero text in `src/components/Hero.jsx` with your personal statement.
- **Big Three projects:** choose three projects to highlight: one that shows what you know, one that demonstrates what you learned, and one that shows what you're aspiring to build. Edit `src/components/Projects.jsx` to insert your project details and links.
- **Currently Learning:** keep a short list of skills you're actively improving (see `src/components/Growth.jsx`). This signals growth mindset to recruiters.

## Tech stack & deployment guidance

- **Recommended for Vercel:** Next.js is the pro path — it integrates seamlessly with Vercel and adds server-side rendering, image optimization, and incremental static regeneration. If you plan to deploy to Vercel and need SEO or server-rendered pages, consider migrating to Next.js.
- **If you prefer to stay with Vite/React:** Vite works fine for static portfolios and is fast for local development. You can still deploy a Vite app to Vercel with a simple static build.

### Quick deploy options

- Vercel (recommended): Connect the repository to Vercel and it will detect the framework. For this Vite app, Vercel will run `npm run build` and serve the static output.
- Netlify: also supports Vite with `npm run build`.

### How to migrate to Next.js later

1. Create a new Next.js app: `npx create-next-app@latest`.
2. Move your components into the `components/` folder in the Next app.
3. Convert routes/pages to `pages` or `app` routes and replace any client-side-only APIs.


## Next steps

- Replace sample content and project links with your own work.
- Add images and more advanced animations.
- Deploy to Vercel, Netlify, or GitHub Pages.

Enjoy! 🎉

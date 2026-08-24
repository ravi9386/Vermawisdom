# Verma Wisdom

Personal blog and portfolio site, live at [vermawisdom.com](https://vermawisdom.com).

Built as a React + TypeScript single-page app with Vite, deployed to GitHub Pages
via GitHub Actions. See [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md) for
the full architecture, feature list, and component breakdown.

## Stack

- React 18 + TypeScript, routed with `react-router` (`src/app/routes.ts`)
- Vite 6 for dev/build (`@tailwindcss/vite`, `@vitejs/plugin-react`)
- Tailwind CSS + Radix UI components

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app
and publishes `dist/` to GitHub Pages (custom domain via the `CNAME` file).

## Project structure

```
src/
  main.tsx          # entry point + GitHub Pages SPA redirect handling
  app/
    App.tsx
    routes.ts       # route table
    pages/          # Home, About, Contact, BlogPost, PersonalFinance,
                     # RetirementCalculator, Ecommerce, ProductDetail, ...
    components/      # Sidebar, TopNavigation, Footer, widgets, ui/
public/
  404.html          # required for client-side routing on GitHub Pages
  bg.jpg            # homepage hero image
```

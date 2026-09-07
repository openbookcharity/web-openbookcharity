# OpenBook Charity

This project was built with [Lovable](https://lovable.dev).

## Source layout

Each page lives in a numbered folder under `src/`. Shared UI (header, footer, layout, stories) stays in `src/shared/` — never inside a page folder. Route files in `src/routes/` stay thin wrappers for TanStack Start file-based routing.

```
src/
  1. home/           Home page and its sections, hooks, settings
  2. about/          About page
  3. platform/       Platform page
  4. why-openbook/   Why OpenBook page
  5. partner/        Partner page
  shared/            Cross-page layout, nav, StoryHighlight
  routes/            File-based route definitions
  components/ui/     shadcn primitives
```

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d6beb7d1-f0b5-4437-aaa5-2766e4b92c45).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

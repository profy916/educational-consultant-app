# Educational Consultant App (EduConsult)

A modern React + Vite + TypeScript application for an educational consulting service. Built with Tailwind CSS and a component library for polished UI.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm, npm, or bun (any works)

### Installation
```bash
# with npm
npm install

# or with pnpm
pnpm install

# or with bun
bun install
```

### Development
```bash
npm run dev
```
Then open the local URL printed by Vite.

### Production Build
```bash
npm run build
npm run preview
```

## Project Structure
```text
src/
  assets/           # static images (logo, hero)
  components/       # UI components and sections
  pages/            # route-level pages
  hooks/, lib/      # utilities
```

Key entry files:
- `index.html`: root HTML
- `src/main.tsx`: app bootstrap
- `src/App.tsx`: routes
- `src/pages/Index.tsx`: home composition

## UI and Styling
- Tailwind CSS with custom theme tokens
- Reusable UI in `src/components/ui`

## Navigation & Sections
- Sticky navigation with brand logo (`src/assets/logo.png`)
- Sections: Home, Services, About, Contact

## Scripts
- `dev`: start dev server
- `build`: production build
- `build:dev`: development-mode build
- `preview`: preview production build
- `lint`: run ESLint

## EmailJS Setup (Contact Form)
1. Install (already added): `@emailjs/browser`
2. Create a `.env.local` at the project root with:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
3. In EmailJS, define template variables to match the code:
- `from_first_name`
- `from_last_name`
- `from_email`
- `subject`
- `message`
4. Ensure your EmailJS template uses these variables in the email body.

The contact form uses these env vars at build time via `import.meta.env`.

## License
MIT

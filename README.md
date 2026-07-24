# Sabor 360

Website for Sabor 360, a premium digital-menu platform for restaurants. The site is based on the approved Figma design and includes a responsive homepage, pricing, demo-request capture, FAQs, and legal pages.

## Stack

- React 19 and Next.js-compatible App Router through vinext
- TypeScript
- Cloudflare Workers and D1
- Drizzle ORM
- Manrope variable font

## Local development

Node.js `22.13.0` or newer is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm test
```

`npm test` creates a production build and verifies the required routes, database migration, and lead-capture API.

## Routes

- `/` — main Sabor 360 experience
- `/pricing` — plans and pricing
- `/privacy` — privacy policy
- `/terms` — service terms
- `/api/demo` — demo-request submission endpoint

## Demo requests

Demo submissions are stored in the Cloudflare D1 `demo_leads` table. The D1 binding is declared as `DB` in `.openai/hosting.json`, and migrations live in `drizzle/`.

## Deployment

The project is configured for OpenAI Sites hosting on Cloudflare infrastructure. Build artifacts are created with:

```bash
npm run build
```

Do not commit `.env` files or local Wrangler state.

# Dax Gigandet — Creator Hub (Next.js Starter)

## What this repo contains
- Next.js starter pages and API routes
- JSON-LD schemas (lib/schema.js)
- Server-side redirector for external canonical links (pages/api/redirect.js)
- Mailchimp subscribe example (pages/api/subscribe.js)
- Age verification webhook stub (pages/api/age-verify.js)
- next-sitemap config and robots.txt
- CI workflow example for GitHub Actions
- Deployment notes (Vercel recommended)

## How to run locally
1. Install dependencies: `npm ci`
2. Create a `.env.local` with the variables described below.
3. Run dev server: `npm run dev`

## Required environment variables
- MAILCHIMP_KEY - Mailchimp API key (for subscribe example)
- MAILCHIMP_LIST_ID - Mailchimp audience/list id
- AGE_PROVIDER_SECRET - Secret for age verification provider webhook
- NEXT_PUBLIC_SITE_URL - https://daxgigandet.com (for canonical links)

## Deployment
Deploy to Vercel for easiest setup. Add env vars in Vercel dashboard.

## Important legal & policy note
This project is designed to be compliant. Do not circumvent bans, moderation or safety measures. Use verified age-check providers for adult links and follow data protection laws.

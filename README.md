# Curb-King spec site

Sales spec for **Curb-King / Tool Engineering & Manufacturing, Inc.** — a hosted preview Patrick can review before any outreach.

This is **not** the live curb-king.com domain. The footer says so. Do not email Curb-King from this repo.

## Public URL

Intended production host: https://curb-king-spec.vercel.app

This rebuild is on `main`. If that hostname still shows the earlier sketch template, the latest photography build is in this repo — redeploy production from the Vercel project (the agent token cannot publish production on that existing project).

## What it is

Five pages, mobile-first, SvelteKit on Vercel. Photography is licensed stock (Unsplash / Pexels), captioned as reference — not Curb-King machines or jobs.

| Path        | Page                                                     |
| ----------- | -------------------------------------------------------- |
| `/`         | Home — dusk hero, two buy paths, starter, comparison     |
| `/machines` | Packages — starter **$14,600**, side-by-side comparison  |
| `/business` | Start a curbing shop — not a franchise                   |
| `/about`    | Shop history, Brigham City                               |
| `/contact`  | Phones + inquiry ticket (no backend secret)              |

Copy lives in [`src/lib/content.ts`](src/lib/content.ts). Photos live in [`src/lib/photos.ts`](src/lib/photos.ts).

## Honest bounds

Public facts only: name, Brigham City address, 1-800-YES-CURB, financing contact Alan, published starter line items and $14,600, package range $15k–$50k, 1967 / Paul McKinnon / Lane McKinnon. No testimonials. No income claims. No cloned Curb-King photos or logo.

## Run locally

```sh
npm install
npm run dev -- --port 43173 --host 127.0.0.1
```

```sh
npm run build
npm run preview -- --port 43173
```

```sh
npm run check
```

## Spec footer

> Hosted by Narrow Road Studios — spec preview, not the live Curb-King domain

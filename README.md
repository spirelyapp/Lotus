# Stick — site

Marketing and pre-order site for Stick. Static, six pages. Live at https://www.getstick.website

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Stack

| Choice | Why |
| --- | --- |
| Astro 7, static output | The site is a long document with a form. The only client JS is the ~2.8 kB inlined analytics module. |
| Tailwind 4 (`@tailwindcss/vite`) | Tokens live in `src/styles/global.css` under `@theme`. |
| System font stack | `-apple-system` renders as SF Pro on the Macs this is sold to. No webfont request, no layout shift. |
| Buttondown | Two lists via tags. No dark patterns, exports cleanly if you outgrow it. |
| Vercel Web Analytics | Cookieless, so no consent banner — which matters on a site arguing it doesn't manipulate you. Wired in `src/layouts/Base.astro`; needs switching on per-project in the Vercel dashboard. |

## Domain

`www.getstick.website`, set as `site` in `astro.config.mjs`. That one value
drives canonical tags, `og:url`, and the sitemap — change it there, not per page.

**It must match the host that actually serves.** Vercel 308s the apex to `www`,
so `www` is canonical. If you flip that in Vercel, flip this too, or every
canonical tag points at a redirect.

Deploy to Netlify or Vercel: build `npm run build`, publish `dist`. Point the
apex at the host and let it issue the certificate; nothing in the site assumes
`www`, so redirect `www → apex` at the host to avoid splitting canonicals.

## Where things are

```
src/config.ts            Every changeable fact. Start here.
src/data/faq.ts          FAQ questions, shared by / and /faq
src/assets/stick-key.png Product shot — optimized at build into WebP
src/pages/index.astro    Home
src/pages/buy.astro      Price + pre-order terms, links out to Stripe
src/pages/refunds.astro  Refund policy
src/pages/privacy.astro  Privacy policy
src/pages/terms.astro    Terms of sale
src/pages/faq.astro      FAQ
public/og.png            Social card
```

Copy source of truth is `../copy-v1.md`.

## Before this goes live

No unresolved facts render on the page any more — the visible-marker system is
currently showing nothing, which is the intended steady state.

**`supportEmail` is monitored, or it should be.** `/limits` promises a human who
performs manual unlocks and `/refunds` promises one who processes refunds. Both
now point at a real inbox, and both state a one-business-day response. That is a
commitment the site makes on your behalf.

### Accounts to create

- **Vercel** — deploy the project, then turn on Web Analytics under its
  Analytics tab. `<Analytics />` is already on every page and collects nothing
  until that switch is flipped.
- **Buttondown** — set `buttondownUser`. Until then `EmailForm` renders
  **nothing** in production rather than shipping a form that drops addresses.
  One value turns collection on everywhere it is used.

### Facts verified against the source, not assumed

These were open questions; the answers came out of the repo and are now on the
site. Recorded here so nobody re-litigates them from memory.

| Claim | Where it was verified |
| --- | --- |
| macOS 14 Sonoma minimum, Apple Silicon only | `app/build.sh` targets `arm64-apple-macosx14.0`; `app/Info.plist` declares `LSMinimumSystemVersion 14.0`. **This was previously stated as macOS 13 Ventura, which was wrong.** |
| Two categories ship: Explicit content, Gambling | `internal/blocklist/blocklist.go` — social and fake-news were retired deliberately |
| Block survives reboot, logout, quit, kill | `internal/platform/service_darwin.go` sets `RunAtLoad` + `KeepAlive`; `internal/enforce/enforce.go` restores the hosts region on a 2s tick |
| The app makes outbound requests | `internal/blocklist/blocklist.go` fetches category lists from StevenBlack on demand and the bypass feed from HaGeZi weekly. **Nothing goes to a server we control**, but "nothing phones home" was too strong and is now worded precisely. |

### Blocklist licensing — lower risk than it looked

The lists are **downloaded at runtime by the user's machine**, not vendored into
the product. That is a materially different legal position from redistributing
them: you aren't shipping the data. StevenBlack is MIT. HaGeZi's terms are still
worth a read before launch, but the "we redistribute GPL data in a paid product"
problem does not apply as written.

### Still open, lower stakes

- **Legal entity.** `company` is set to the trading name Lotus Technologies,
  which /privacy needs in order to name a data controller. Append the legal
  suffix once Delaware formation completes, set `legalEntity`, and change
  Stripe's statement descriptor to match — a customer should see the same name
  on the site, at checkout, and on their card statement.
- **Sales tax and VAT.** Selling physical goods worldwide creates registration
  obligations — US state nexus thresholds, EU/UK import VAT. Stripe Tax covers
  most of it but is not automatic. The terms say duties are the buyer's; that
  does not cover your own registration duties.
- The pre-order promises a September 2026 ship. No sticks are ordered yet
  (2–4 week lead) and the installer has still never run on a second Mac.

## Buying

`BuyButton` handles every CTA. `target="page"` (default) goes to `/buy`;
`target="stripe"` goes straight to the Payment Link in `src/config.ts`. Only
`/buy` links out to Stripe — every other CTA routes through it, so the pre-order
terms and the link to `/limits` are always seen before checkout.

`EmailForm` now serves one purpose: the Windows waitlist on the home page.

### Stripe housekeeping

The Payment Link is live and takes money today. Three things to fix in the
Stripe dashboard, all of which reduce disputes:

- The product is named **"Stick"**, described as "Laptop hardware…". A buyer who
  sees neither "Stick" nor the price they expected at the moment of payment is a
  buyer who might file a chargeback. Rename it to match the site.
- The merchant shows as **"Noah Johnson"** — a personal name. Card statements
  will show something similar. Set a statement descriptor a buyer will recognise.
- The site says **"+ shipping"**. Confirm shipping rates are actually configured
  on the link, or the site is promising a charge Stripe never adds and you eat
  the postage.

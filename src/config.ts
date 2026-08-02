/**
 * Everything the site says that might change, in one place.
 *
 * Items marked TODO are unresolved facts from copy-v1.md. Anything still `null`
 * is rendered as a visible placeholder rather than silently omitted, so a
 * missing answer can't quietly ship as a claim.
 */

export const site = {
  name: 'Stick',
  tagline: 'Put the off switch in another room.',
  description:
    'Stick is a USB key that blocks the sites and apps you choose on your Mac. Ending a session means physically going to get it.',

  price: '$47.77',

  /**
   * General shipping is Q4; a limited first batch goes out earlier. Kept as two
   * fields so no page can imply everyone gets a September unit.
   */
  shipWindow: 'Q4 2026',
  earlyShipWindow: 'September 2026',

  /**
   * Stripe Payment Link. Verified: merchant reads Lotus Technologies, product
   * "Stick Pre-Order (Shipping included)", $47.77, collects a shipping address,
   * and offers all 232 countries, so "ships worldwide" on the site is true.
   *
   * The amount in Stripe must be kept in step with `price` below by hand.
   * Nothing in this repo can change it, and a mismatch means the page and the
   * checkout quote different numbers.
   */
  stripeUrl: 'https://buy.stripe.com/14A3co8ds6gIbxFbr1c7u01',

  /**
   * Confirmed from the build, not from memory: app/build.sh builds both slices
   * and joins them with lipo, so `lipo -archs` on the shipped binaries reports
   * `x86_64 arm64`. Info.plist declares LSMinimumSystemVersion 13.0, which is a
   * real floor — MenuBarExtra, which the whole app hangs off, requires it.
   *
   * This said 14 until a Mac on an older system turned up and the floor was
   * lowered to match. Change it here and the footer, FAQ, terms, and buy page
   * all follow; stating a requirement the build does not have is how people
   * decide not to buy.
   */
  minMacOS: 'macOS 13 Ventura or later',
  architectures: 'Apple Silicon or Intel',

  /**
   * Answers manual-unlock requests and refunds. Both are promised on the
   * site, so it has to stay monitored.
   */
  supportEmail: 'noah@lotustech.me',

  /**
   * Trading name, for prose where the full legal name would read stiffly.
   */
  company: 'Lotus Technologies',

  /**
   * The registered entity. Used wherever legal identity matters: the seller on
   * /terms, the data controller on /privacy, and the footer copyright. The
   * trading name above is for prose.
   */
  legalEntity: 'Lotus Technologies LLC' as string | null,

  /** Bump only when the policy actually changes, not on every build. */
  policyUpdated: '1 August 2026',

  /** How fast the manual unlock is answered. Deliberately not instant. */
  unlockResponseTime: 'within one business day',

  /** TODO: create the Buttondown account, then set the username. */
  buttondownUser: null as string | null,

  /**
   * Analytics is Vercel Web Analytics, wired in src/layouts/Base.astro rather
   * than configured here — it takes no key, it just needs switching on for the
   * project in the Vercel dashboard.
   */
} as const;

export const nav = [
  { label: 'Our story', href: '/story' },
  { label: 'Updates', href: '/updates' },
  { label: 'FAQ', href: '/faq' },
];

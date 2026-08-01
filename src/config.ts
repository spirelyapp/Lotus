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

  price: '$39.99',

  /**
   * General shipping is Q4; a limited first batch goes out earlier. Kept as two
   * fields so no page can imply everyone gets a September unit.
   */
  shipWindow: 'Q4 2026',
  earlyShipWindow: 'September 2026',

  /** Stripe Payment Link. Collects shipping worldwide. */
  stripeUrl: 'https://buy.stripe.com/fZu4gseRD8XF3mb1l9aAw06',

  /**
   * Confirmed from the build, not from memory: app/build.sh targets
   * `arm64-apple-macosx14.0` and Info.plist declares LSMinimumSystemVersion
   * 14.0. Apple Silicon only — there is no universal binary.
   */
  minMacOS: 'macOS 14 Sonoma or later',
  architectures: 'Apple Silicon (M1 and later)',

  /**
   * Answers manual-unlock requests and refunds. Both are promised on the
   * site, so it has to stay monitored.
   */
  supportEmail: 'noahjbusiness1@gmail.com',

  /**
   * Trading name, used where a privacy policy has to name a data controller.
   * TODO: append the legal suffix (LLC / Inc.) once Delaware formation
   * completes, and set Stripe's statement descriptor to match.
   */
  company: 'Lotus Technologies',

  /** Named once the entity is registered; Stripe's merchant of record today. */
  legalEntity: null as string | null,

  /** Bump only when the policy actually changes, not on every build. */
  policyUpdated: '31 July 2026',

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
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/faq' },
];

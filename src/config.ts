/**
 * Everything the site says that might change, in one place.
 *
 * Items marked TODO are unresolved facts from copy-v1.md. Anything still `null`
 * is rendered as a visible placeholder rather than silently omitted, so a
 * missing answer can't quietly ship as a claim.
 */

export const site = {
  name: 'stick',
  tagline: 'Put the off switch in another room.',
  description:
    'stick is a USB key that blocks the sites and apps you choose on your Mac. Ending a session means physically going to get it.',

  price: '$39.99',
  shipWindow: 'September 2026',

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
   * TODO — the one genuinely blocking gap. The manual-unlock path on /limits
   * promises a human at the end of an email; there is currently no address for
   * that email to reach.
   */
  supportEmail: null as string | null,

  /** Named once the entity is registered; Stripe's merchant of record today. */
  legalEntity: null as string | null,

  /** How fast the manual unlock is answered. Deliberately not instant. */
  unlockResponseTime: 'within one business day',

  /** TODO: create the Buttondown account, then set the username. */
  buttondownUser: null as string | null,

  /**
   * Enables the Plausible snippet. Records nothing until getstick.website is
   * added as a site in the Plausible dashboard.
   */
  plausibleDomain: 'getstick.website' as string | null,
} as const;

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: "What it can't do", href: '/limits' },
  { label: 'FAQ', href: '/faq' },
];

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
    'Stick is a USB key that blocks the sites and apps you choose, on Mac and Windows. Ending a session means physically going to get it.',

  price: '$39.99',

  /**
   * General shipping is Q4; a limited first batch goes out earlier. Kept as two
   * fields so no page can imply everyone gets a September unit.
   */
  shipWindow: 'Q4 2026',
  earlyShipWindow: 'September 2026',

  /**
   * Stripe Payment Link. Verified: merchant reads Lotus Technologies, product
   * "Stick (Pre-Order)", $39.99 plus a $7.99 shipping rate for $47.98 total,
   * collects a shipping address, and offers all 232 countries.
   *
   * The $7.99 is one flat rate shown to everyone: Payment Links cannot vary
   * shipping by destination. It over-recovers domestically and under-recovers
   * on far international.
   *
   * The amount in Stripe must be kept in step with `price` below by hand.
   * Nothing in this repo can change it, and a mismatch means the page and the
   * checkout quote different numbers.
   */
  stripeUrl: 'https://buy.stripe.com/aFa8wI8ds20s0T1fHhc7u02',

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
   * Windows. The build ships two installers, amd64 and arm64, so both Intel or
   * AMD and ARM machines are covered — see .github/workflows/windows-release.yml.
   *
   * No version floor is enforced anywhere in the Windows code, and the console
   * handling explicitly accommodates Windows 10, so 10 is the honest floor
   * rather than 11. The port was exercised on Windows 11 ARM64; if a Windows 10
   * machine ever turns up and fails, lower this claim rather than leaving it.
   */
  minWindows: 'Windows 10 or 11',
  windowsArchitectures: 'Intel, AMD or ARM',

  /** Both platforms in one line, for the places that name every requirement. */
  platforms: 'macOS 13 Ventura or later, or Windows 10 or 11',

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
  { label: 'Contact', href: '/contact' },
];

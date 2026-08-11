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
   * Shopify cart permalinks, one per colour. Each drops that variant in the
   * cart and redirects straight into checkout, so it behaves like the Stripe
   * Payment Link it replaced — one click from button to payment.
   *
   * Shopify replaced Stripe because Payment Links cannot vary shipping by
   * destination: one flat $7.99 went to all 232 countries, over-recovering in
   * the US and losing money on everything far away. Rates are now zoned, and
   * verified quoting: US $8, Canada $14.99, UK & Europe $19.99, AU/NZ/Japan
   * $24.99, and a rest-of-world catch-all at $39.99 priced at the worst case
   * rather than the average, so an expensive destination cannot cost money.
   *
   * The variant IDs are stable unless the product's options are restructured.
   * Deleting or adding a variant option mints new IDs and silently breaks
   * these links — re-read them from /products.json if the product changes.
   *
   * The price in Shopify must be kept in step with `price` below by hand.
   */
  checkout: {
    pink: 'https://shop.getstick.website/cart/52143838298252:1',
    black: 'https://shop.getstick.website/cart/52143838265484:1',
  },

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

  /**
   * The state Lotus Technologies LLC is actually formed in, and the law its
   * terms are governed by.
   *
   * This said Delaware for a week because the earlier conversation was about
   * forming there and nobody checked the claim against the filing. It is
   * Minnesota. Both facts live here so /terms cannot state one and mean the
   * other.
   */
  jurisdiction: 'Minnesota',

  /**
   * The address published as the seller's. Several jurisdictions expect a
   * distance seller to give one — Germany in particular, and Europe is a
   * shipping zone now — and it also fills Shopify's legal notice and contact
   * fields.
   *
   * This is Noah's own address, chosen knowingly as the interim answer until
   * there is an office. It is on a public page and indexed, so changing it
   * later removes it going forward but not from anything that already copied
   * it. Swap it here and /terms follows.
   */
  /**
   * Minnesota file number, from the Articles of Organization. Published
   * because a distance seller is expected to give the register and the number
   * it is registered under, not only a name.
   */
  fileNumber: '1659464000023',

  businessAddress: [
    '2508 17th Avenue Northwest',
    'Rochester, Minnesota 55901',
    'United States',
  ] as readonly string[],

  /** Bump only when the policy actually changes, not on every build. */
  policyUpdated: '1 August 2026',

  /** How fast the manual unlock is answered. Deliberately not instant. */
  unlockResponseTime: 'within one business day',

  /**
   * Buttondown newsletter, verified live at buttondown.com/noahjohnsoncopy.
   * Setting this un-hides the email forms in the footer and on /buy; they
   * render nothing at all while it is null, so an unwired form can never
   * collect an address it would then drop.
   */
  buttondownUser: 'noahjohnsoncopy' as string | null,

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

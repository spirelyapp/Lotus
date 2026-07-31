import { site } from '../config';

export interface FaqItem {
  q: string;
  a: string;
  /** Shown in the short FAQ on the home page. */
  home?: boolean;
  /** Unresolved fact — rendered with a visible TODO marker. */
  todo?: boolean;
}

export const faq: FaqItem[] = [
  {
    q: 'How is this different from Screen Time or Freedom?',
    a: `Their key lives on the machine you're trying to get away from. Ours is an object you can put in another room. Some of those apps are genuinely hard to cancel mid-session — we're not claiming otherwise. We're claiming distance beats difficulty.`,
    home: true,
  },
  {
    q: "Can't I just get around it?",
    a: `Yes, if you're determined and technical. We wrote a whole page on exactly how. Stick is designed against impulse, not against you with a terminal open.`,
    home: true,
  },
  {
    q: 'Do I need the key to start a session?',
    a: `No. Start one from the menu bar, or let a schedule do it. The key is only how you get out.`,
    home: true,
  },
  {
    q: 'What can I block?',
    a: `Any website and any app, individually. Plus two bundled category lists — Explicit content and Gambling — which are tens of thousands of domains each. There deliberately isn't a "social media" category: the site picker lets you choose the individual sites, which is finer-grained and more honest than one switch over a list you can't inspect.`,
    home: true,
  },
  {
    q: 'Does the block survive a restart?',
    a: `Yes. The blocking service runs at boot and is set to restart if it stops, the blocked-hosts region is restored within two seconds of any hand edit, and browser policy is written persistently rather than per-session. Restarting, logging out, quitting the app or killing the process all leave the block in place. What ends it is the key — or one of the five emergency unlocks.`,
    home: true,
  },
  {
    q: 'What happens if I lose the key?',
    a: `Five emergency unlocks per Mac — a lifetime allowance, they don't refill. After that, email or call us and we'll unlock it manually.`,
    home: true,
  },
  {
    q: 'Does one key work on more than one Mac?',
    a: `Yes. Setting up a second machine adopts your existing key instead of replacing it.`,
  },
  {
    q: 'Do you see what I block?',
    a: `No. Nothing in Stick sends anything to us — no telemetry, no licence check, no analytics, no account. Your modes, your blocklists and your session history stay on your Mac. It does make two kinds of outbound request, both to GitHub and neither carrying anything about you: downloading a category blocklist when you switch one on, and refreshing the bypass-domain list weekly. Run Little Snitch on it — that's exactly what you'll see.`,
    home: true,
  },
  {
    q: 'Which macOS versions?',
    a: `${site.minMacOS}, on ${site.architectures}. There is no Intel build.`,
  },
  {
    q: 'Is there a free trial?',
    a: `No. Stick doesn't do anything without the key, and the key is the product.`,
  },
  {
    q: 'Windows?',
    a: `Not yet. Stick is macOS only today, and we'd rather say that than take your money and a guess.`,
  },
  {
    q: 'Refunds?',
    a: `Cancel any time before your order ships and you get everything back. After it arrives, 30 days from delivery — send it back and we refund the price of the key. Full terms are on the refunds page.`,
  },
];

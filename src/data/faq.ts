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
    a: `Their key lives on the machine you're trying to get away from. Ours is an object you can put in another room. Some of those apps are genuinely hard to cancel mid-session, and we're not claiming otherwise. We're claiming distance beats difficulty.`,
    home: true,
  },
  {
    q: "Can't I just get around it?",
    a: `Yes, if you're determined and technical. It's your computer and you have administrator rights on it. Stick is built to beat the impulse, not you with a terminal open and an afternoon free. What it removes is the easy exit: no timer to wait out, no button that ends a session early, and no password you can talk yourself into typing. The way back in is a walk to wherever you left the key.`,
    home: true,
  },
  {
    q: 'Do I need the key to start a session?',
    a: `No. Start one from the menu bar, or let a schedule do it. The key is only how you get out.`,
    home: true,
  },
  {
    q: 'What can I block?',
    a: `Any website and any app, individually. Plus two bundled category lists, Explicit content and Gambling, which are tens of thousands of domains each. There deliberately isn't a "social media" category: the site picker lets you choose the individual sites, which is finer-grained and more honest than one switch over a list you can't inspect.`,
    home: true,
  },
  {
    q: 'Does the block survive a restart?',
    a: `Yes. The blocking service runs at boot and is set to restart if it stops, the blocked-hosts region is restored within two seconds of any hand edit, and browser policy is written persistently rather than per-session. Restarting, logging out, quitting the app or killing the process all leave the block in place. What ends it is the key, or one of the five emergency unlocks.`,
    home: true,
  },
  {
    q: 'What happens if I lose the key?',
    a: `Five emergency unlocks per Mac. It's a lifetime allowance and they don't refill. After that, email or call us and we'll unlock it manually.`,
    home: true,
  },
  {
    q: 'Does one key work on more than one Mac?',
    a: `Yes. Setting up a second machine adopts your existing key instead of replacing it.`,
  },
  {
    q: 'What does Stick install on my Mac?',
    a: `A small program that runs in the background, plus the app window you use. The background program needs the highest level of access on your Mac, because that is what keeps a block in place after a restart instead of letting it disappear the moment you quit the app. It is signed and checked by Apple, so your Mac can confirm it came from us and has not been tampered with, and the 5.5 MB installer comes on the key itself. The window you click on has no power to unlock anything by itself: it can only ask the background program, and be refused.`,
    home: true,
  },
  {
    q: 'Do you see what I block?',
    a: `No. Nothing in Stick sends anything to us: no account, no check to see whether you paid, no record of how you use it. Your modes, your blocked lists and your session history stay on your Mac. It does download two lists from GitHub, and neither carries anything about you: the sites for a category when you switch one on, and a weekly refresh of the list of sites people use to get around blockers. If you would rather check than take our word for it, any network monitor will show you exactly that.`,
    home: true,
  },
  {
    q: 'Which macOS versions?',
    a: `${site.minMacOS}, on ${site.architectures}. Both are supported by the
       same download — a universal build, so you do not have to pick.`,
  },
  {
    q: 'Is there a free trial?',
    a: `No. Stick doesn't do anything without the key, and the key is the product.`,
  },
  {
    q: 'Windows?',
    a: `Not yet, but it's actively in development. The key is the same physical object for both, so one Stick should unlock your Mac and your PC, and we're aiming to have the Windows app ready by the time orders ship in ${site.shipWindow}. That's an aim, not a promise. What you're buying today is the macOS product. If Windows is the reason you'd buy, wait until we say it's shipping.`,
  },
  {
    q: 'Refunds?',
    a: `Cancel any time before your order ships and you get everything back. After it arrives, 30 days from delivery. Send it back and we refund the price of the key. Full terms are on the refunds page.`,
  },
];

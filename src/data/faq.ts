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
    a: `Their key lives on the machine you're trying to get away from. Ours is an object you can put in another room. Some of those apps are legitimately hard to cancel mid-session, and we're not claiming otherwise. We're claiming distance beats difficulty.`,
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
    a: `Five emergency unlocks per machine. It's a lifetime allowance and they don't refill. After that, write to us and we'll unlock it manually.`,
    home: true,
  },
  {
    q: 'Does one key work on more than one machine?',
    a: `Yes, and it does not matter whether they are Macs or PCs. Setting up a second machine adopts your existing key instead of replacing it.`,
  },
  {
    q: 'What does Stick install?',
    a: `A small program that runs in the background, plus the app window you use. The background program needs the highest level of access on your machine, because that is what keeps a block in place after a restart instead of letting it disappear the moment you quit the app. It is signed either way — checked by Apple on a Mac, and code-signed on Windows — so your computer can confirm it came from us and has not been tampered with, and the installer comes on the key itself. The window you click on has no power to unlock anything by itself: it can only ask the background program, and be refused.`,
    home: true,
  },
  {
    q: 'Do you see what I block?',
    a: `No. Nothing in Stick sends anything to us: no account, no check to see whether you paid, no record of how you use it. Your modes, your blocked lists and your session history stay on your machine. It does download two lists from GitHub, and neither carries anything about you: the sites for a category when you switch one on, and a weekly refresh of the list of sites people use to get around blockers. If you would rather check than take our word for it, any network monitor will show you exactly that.`,
    home: true,
  },
  {
    q: 'Which systems does it run on?',
    a: `${site.minMacOS}, on ${site.architectures} — one universal download covers both chips, so you do not have to pick. Or ${site.minWindows}, on ${site.windowsArchitectures}, where there are two installers and the setup picks the right one. Older than either and it will not run.`,
  },
  {
    q: 'Is there a free trial?',
    a: `No. Stick doesn't do anything without the key, and the key is the product.`,
  },
  {
    q: 'Windows?',
    a: `Yes. The Windows app is built and working, and it comes with your order at no extra cost. The key is the same physical object on both, so one Stick unlocks your Mac and your PC, and setting up a second machine adopts your existing key instead of replacing it. Blocking works the same way on each: sites stopped at two levels of the system, blocked apps closed when you open them, and settings that cannot be weakened mid-session.`,
  },
  {
    q: 'Refunds?',
    a: `Cancel any time before your order ships and you get everything back. After it arrives, 30 days from delivery. Send it back and we refund the price of the key. Full terms are on the refunds page.`,
  },
];

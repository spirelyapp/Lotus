/**
 * Build log for people who have already paid.
 *
 * Add new entries to the TOP of the array. Only post things that actually
 * happened — the point of this page is that it can be trusted, and one
 * invented milestone would cost more than every real one earns.
 *
 * `date` is what gets shown; `iso` drives the <time> element, so keep them in
 * step.
 */

export interface Update {
  iso: string;
  date: string;
  title: string;
  body: string[];
}

export const updates: Update[] = [
  {
    iso: '2026-08-02',
    date: '2 August 2026',
    title: 'Pre-orders are open',
    body: [
      'getstick.website is live and taking pre-orders. You are charged when you order. Most orders ship in Q4 2026, with a limited first batch in September.',
      'If either of those dates moves, you will hear it here and by email, and you can take a full refund at that point without having to ask twice.',
    ],
  },
  {
    iso: '2026-08-01',
    date: '1 August 2026',
    title: 'Lotus Technologies LLC is registered',
    body: [
      'Stick is now sold by a registered company rather than a person. That matters to you mainly because it is who your money goes to and who owes you a refund, and the seller is named in full on the terms page.',
    ],
  },
  {
    iso: '2026-07-29',
    date: '29 July 2026',
    title: 'A working prototype',
    body: [
      'The whole loop, end to end on real hardware: start a session, unplug the key, watch the block hold through a restart, plug the key back in to end it. This was the day it stopped being an idea about a product and started being one.',
    ],
  },
  {
    iso: '2026-07-27',
    date: '27 July 2026',
    title: 'First prototype',
    body: [
      'The first build that actually blocked something. Rough, and nothing you would want to look at, but it proved the mechanic worked.',
    ],
  },
  {
    iso: '2026-07-21',
    date: '21 July 2026',
    title: 'The idea',
    body: [
      'Every blocker we had used kept its off switch on the same machine as the temptation, which is why none of them lasted. A key you had to physically walk to would not have that problem.',
    ],
  },
];

/** Honest statement of what stands between now and shipping. */
export const inProgress = [
  'Manufacturing the first batch of keys.',
  'Apple Developer ID signing and notarization, so the installer runs cleanly on a Mac that is not ours.',
  'Installing on machines other than the development one, which is the only real proof that any of this works for anybody else.',
  'The Windows app, which we are aiming to have ready by the time orders ship.',
];

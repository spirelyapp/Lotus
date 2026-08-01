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
    iso: '2026-08-01',
    date: '1 August 2026',
    title: 'Lotus Technologies LLC is registered',
    body: [
      'Stick is now sold by a registered company rather than a person. That matters to you mainly because it is who your money goes to and who owes you a refund, and the seller is named in full on the terms page.',
    ],
  },
  {
    iso: '2026-07-31',
    date: '31 July 2026',
    title: 'Pre-orders are open',
    body: [
      'getstick.website went live and the first pre-orders came in. You are charged when you order. Most orders ship in Q4 2026, with a limited first batch in September.',
      'If either of those dates moves, you will hear it here and by email, and you can take a full refund at that point without having to ask twice.',
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

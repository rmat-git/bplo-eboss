/**
 * Data constants for RenewalPage
 * Location: src/data/renewalpage.js
 */

// ─── Steps ───────────────────────────────────────────────────────────────────

export const STEPS = [
  {
    number: 1,
    title: 'Application & Encoding',
    description: 'Fill out your online renewal application and submit your previous Permit Number along with your Business ID Number.',
  },
  {
    number: 2,
    title: 'Assessment & Payment',
    description: 'Review your system-generated assessment and complete payment over-the-counter or online.',
  },
  {
    number: 3,
    title: 'Claim Renewed Permit',
    description: "Pick up your renewed Mayor's Permit in person or receive the e-copy via email once fully approved.",
  },
];

// ─── Requirements ─────────────────────────────────────────────────────────────

export const REQUIREMENTS = [
  {
    stepNumber: 1,
    title: 'Renewal Documents',
    items: [
      {
        label: "Previous Year's Mayor's Permit",
        sub: [
          { label: 'Original or Photocopy', link: null },
          { label: 'Owner: Present with Valid ID', link: null },
          { label: 'Representative: Authorization Letter / SPA with IDs', link: null },
        ],
      },
      "Business ID Number/BAN (5-Digit Business Account Number)",
      "All Required and Up-to-Date Clearances",
    ],
  },
  {
    stepNumber: 2,
    title: 'Assessment & Payment',
    items: [
      'System-generated billing summary of taxes, fees & charges',
      'Billing statements are sent via email for reference but can also be provided for walk-in requests.',
      {
        label: 'Payment Options',
        sub: [
          { label: 'Over-the-counter (physical)', link: null },
          { label: 'Online payment', action: 'Click here for online payments', link: '#online-payment' },
        ],
      },
    ],
    buttonLabel: 'Regulatory Offices',
    buttonAction: 'openOfficeModal',
  },
  {
    stepNumber: 3,
    title: 'Permit Claim',
    items: [
      "Bring the following documents when claiming your renewed Mayor's Permit:",
      {
        label: 'Walk-in (Business Owner)',
        sub: [
          { label: 'Government-issued ID', link: null },
        ],
      },
      {
        label: 'Walk-in (Authorized Representative)',
        sub: [
          { label: 'Special Power of Attorney (SPA) for Sole Prop', link: null },
          { label: "Secretary's Certificate for Corporation", link: null },
          { label: 'Company ID with Designation', link: null },
        ],
      },
      "Renewed Mayor's Permit may also be delivered via email",
    ],
  },
];
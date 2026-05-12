/**
 * Data constants for NewPage
 * Location: src/data/newpage.js
 */

// ─── Steps ───────────────────────────────────────────────────────────────────

export const STEPS = [
  {
    number: 1,
    title: 'Register',
    description: 'Fill out your business application online with your business name and location details.',
  },
  {
    number: 2,
    title: 'Assessment & Payment',
    description: 'Review your tax summary and complete payment over-the-counter or online.',
  },
  {
    number: 3,
    title: 'Claim Permit',
    description: "Pick up your Mayor's Permit in person or receive it via email once approved.",
  },
];

// ─── Requirements ─────────────────────────────────────────────────────────────

export const REQUIREMENTS = [
  {
    stepNumber: 1,
    title: 'Business Registration',
    items: [
      {
        label: 'Business Name Registration',
        sub: [
          {
            label: 'Sole Proprietorship',
            action: 'Click here for DTI registration',
            link: 'https://bnrs.dti.gov.ph/registration',
          },
          {
            label: 'Corporation/Partnership',
            action: 'Click here for SEC registration',
            link: 'https://esparc.sec.gov.ph/application/overview',
          },
          {
            label: 'Cooperative',
            action: 'Click here for CDA registration',
            link: 'https://cda.gov.ph/services/regulatory-services/registration/',
          },
        ],
      },
      {
        label: 'Proof of Business Location Ownership',
        sub: [
          { label: 'Owned — Tax Declaration', link: null },
          { label: 'Rented — Lease Contract', link: null },
          { label: 'Occupied with No Rental — Affidavit', link: null },
        ],
      },
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
      "Bring the following documents when claiming your Mayor's Permit:",
      {
        label: 'Walk-in (Business Owner)',
        sub: [
          { label: 'Government-issued ID', link: null },
        ],
      },
      {
        label: 'Walk-in (Authorized Representative)',
        sub: [
          { label: 'Special Power of Attorney (SPA)', link: null },
          { label: 'Board Resolution', link: null },
          { label: 'Letter of Authority', link: null },
        ],
      },
      "Mayor's Permit may also be delivered via email",
    ],
  },
];
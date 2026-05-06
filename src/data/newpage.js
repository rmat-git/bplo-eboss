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
          { label: 'Online payment (via link)', placeholder: 'Click "Find Payment Centers" button' },
        ],
      },
    ],
    buttonLabel: 'Offices',
    buttonAction: 'openOfficeModal',
  },
  {
    stepNumber: 3,
    title: 'Permit Claim',
    items: [
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

// ─── Offices ──────────────────────────────────────────────────────────────────
// 
// Extended data structure supports:
//   • name: Short abbreviation (e.g., 'CHO')
//   • fullName: Full office name (e.g., 'City Health Office')
//   • address: Physical address
//   • phone: Contact phone number
//   • email: Contact email
//   • hours: Operating hours
//   • description: Brief description of services
//   • services: Array of services offered
//   • link: Link to office portal/registration
//   • website: Link to office website
//

export const OFFICES = [
  {
    name: 'CHO',
    fullName: 'City Health Office',
    address: '1st Floor, Bacolod City Government Center',
    phone: '(034) 431 3673',
    email: 'cho@bacolodcity.gov.ph',
    hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
    description: 'Provides health certificates and sanitation requirements for business establishments.',
    link: 'https://linkplaceholder.com/cho',
    website: 'https://bacolodcityhealth.com/esd/',
  },
  {
    name: 'OBO',
    fullName: 'Office of the Building Official',
    address: '2nd Floor South Wing- Bacolod City Government Center',
    phone: '(034) 433- 8286',
    email: 'obo@bacolodcity.gov.ph',
    hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
    description: 'Handles building permits and structural safety compliance.',
    link: 'https://linkplaceholder.com/obo',
    website: 'link.placeholder.com/obo',
  },
  {
    name: 'BFP',
    fullName: 'Bureau of Fire Protection',
    address: 'Fire Station #3, Makati City',
    phone: '(034) 434-5022',
    email: 'bacolodcityfs@bacolodcity.gov.ph',
    hours: 'Monday - Friday, 7:00 AM - 4:00 PM',
    description: 'Issues fire safety permits and conducts fire safety inspections.',
    link: 'https://linkplaceholder.com/bfp',
    website: 'https://fsis.e-bfp.com/',
  },
  {
    name: 'BENRO',
    fullName: 'Business and Establishment Registration Office',
    address: 'Bacolod City Government Center, Circumferential Rd',
    phone: '0995-187-4725',
    email: 'benro@bacolodcity.gov.ph',
    hours: 'Monday - Friday, 8:30 AM - 4:30 PM',
    description: 'Central office for business licensing and permit coordination.',
    link: 'https://linkplaceholder.com/benro',
  },
  {
    name: 'CPDO',
    fullName: 'City Planning and Development Office',
    address: '1st Floor, Bacolod City Government Center',
    phone: '(034) 434-3184',
    email: 'cpdo@bacolodcity.gov.ph',
    hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
    description: 'Ensures business location compliance with zoning and city development plans.',
    link: 'https://linkplaceholder.com/cpdo',
  },
];
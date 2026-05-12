/**
 * offices.js
 * Location: src/data/offices.js
 *
 * Each office object supports:
 *   name        — short abbreviation used as tab label and badge
 *   fullName    — complete office name
 *   address     — physical address string
 *   phone       — contact number
 *   email       — contact email
 *   hours       — operating hours
 *   website     — external URL rendered as "Website →" link
 *   link        — secondary URL rendered as "Visit Office →" link
 *   description — short prose description
 *   services    — string[] list of services offered
 *   requirements — (string | { label: string, items: string[] })[]
 *                  Documentary requirements for the clearance this
 *                  office issues. Use object form for sub-grouped items
 *                  (e.g. "For Renewals:", "For Tenants:").
 *   applicableTo — string[] (special clearances only) — business types
 *                  that require a clearance from this office
 *   downloadables — (optional) array of downloadable files
 *                  Each object has:
 *                  - filename: actual filename in public/downloads/
 *                  - label: display name (e.g., "Application Form")
 *                  - type: 'form', 'checklist', 'guide', 'document', 'certificate'
 *                           (determines icon automatically)
 *                  Only renders if downloadables array exists and has items
 */

export const OFFICES = [

  /* ══════════════════════════════════════════════════════════
     REQUIRED CLEARANCES
     ══════════════════════════════════════════════════════════ */

  {
    name: 'Barangay',
    fullName: 'Barangay',
    address: '',         // fill in actual address
    phone: '',           // fill in actual phone
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',         // fill in if available
    link: '',
    description: 'Issues the Barangay Clearance required as the first step in business permit applications.',
    services: ['Barangay Clearance', 'Community Tax Certificate (Cedula)'],
    requirements: [
      'Valid ID (UMID, Voter\'s ID, PhilHealth ID, Driver\'s License, Passport, or National ID)',
      'School ID (accepted for students securing a clearance)',
      'Current Year\'s Community Tax Certificate (Cedula)',
      'Duly filled Application Form',
      'Application Fee (paid in cash)',
      'Certificate of Transfer / Endorsement (if the applicant is a new tenant of less than 6 months)',
    ],
    applicableTo: [],
    downloadables: [
      {
        filename: 'barangay-application-form.pdf',
        label: 'Application Form',
        type: 'form',
      },
      {
        filename: 'barangay-requirements-checklist.pdf',
        label: 'Requirements Checklist',
        type: 'checklist',
      },
    ],
  },

  {
    name: 'BFP',
    fullName: 'Bureau of Fire Protection',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: 'https://bfp.gov.ph',
    link: '',
    description: 'Issues the Fire Safety Inspection Certificate (FSIC) required for all business establishments.',
    services: [
      'Fire Safety Inspection Certificate (FSIC)',
      'Fire Safety Maintenance Report (FSMR) review',
      'Fire Safety Clearance for welding/hot works',
    ],
    requirements: [
      'Duly accomplished BFP Application Form for Business',
      'Assessment of Business Permit Fee / Tax Assessment Bill from BPLO',
      'Certified true copy of valid Certificate of Occupancy (for new businesses)',
      'Copy of Fire Insurance, if necessary',
      {
        label: 'For Renewals',
        items: [
          'One (1) set of Fire Safety Maintenance Report (FSMR), if necessary',
          'Fire Safety Clearance for welding/hot works, if required',
        ],
      },
    ],
    applicableTo: [],
    downloadables:[],
  },

  {
    name: 'CPDO',
    fullName: 'City Planning and Development Office – Zoning Division',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues the Zoning Clearance confirming that the proposed business use is allowed in the location\'s zoning classification.',
    services: ['Zoning Clearance'],
    requirements: [
      'Business Application Form',
      'Pictures of the Area/Vicinity Map',
    ],
    applicableTo: [],
    downloadables:[],
  },

  {
    name: 'CHO',
    fullName: 'City Health Office',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: 'https://bacolodcityhealth.com/esd/',
    link: '',
    description: 'Issues the Sanitary Permit to Operate as part of the business permit application process.',
    services: ['Sanitary Permit to Operate'],
    requirements: [
      'Duly Accomplished Form',
      'Business Permit Application',
    ],
    applicableTo: [],
    downloadables:[],
  },

  {
    name: 'OBO',
    fullName: 'Office of the Building Official',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues the OBO Clearance certifying the structural compliance and occupancy status of the business premises.',
    services: [
      'OBO Clearance',
      'Certificate of Occupancy',
      'Annual Inspection',
    ],
    requirements: [
      {
        label: 'For Newly Constructed',
        items: ['Certificate of Occupancy'],
      },
      {
        label: 'For Tenants',
        items: [
          'Duly notarized Contract of Lease, OR',
          'Notarized Affidavit of Non-Rental (conformed by the building owner) if no rent is paid',
        ],
      },
      {
        label: 'For Altered Structures',
        items: [
          'Photos of the renovated structure',
          'Applicable ancillary permits (e.g., Electrical, Mechanical, Plumbing)',
        ],
      },
      {
        label: 'For Renewals',
        items: [
          'Annual Inspection Billing with O.R. / Certificate of Annual Inspection',
          ' Business Permit Application',
        ],
      },
      {
        label: 'For Amendments',
        items: ['Business Permit Application with supporting documents reflecting the new owner or address'],
      },
    ],
    applicableTo: [],
    downloadables:[],
  },

  {
    name: 'BENRO',
    fullName: 'Bacolod Environment and Natural Resources Office',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues the BENRO Clearance covering environmental compliance requirements for business operations.',
    services: [
      'BENRO Clearance',
      'Discharge Permit for Wastewater',
      'Permit to Operate for Generating Set',
    ],
    requirements: [
      'Baciwa Certification for Water Source, OR Water Permit from NWRB if using a deep well',
      'Discharge Permit for Wastewater compliant with R.A. 9275',
      'Permit to Operate for Generating Set compliant with R.A. 8749, if applicable',
      'Environmental Compliance Certificate (ECC) or Certificate of Non-Coverage (CNC), if applicable',
      'Industry-specific clearances (e.g., Hazardous Waste Generator Registration, DTI Accreditation, Certificate of Verification)',
    ],
    applicableTo: [],
    downloadables:[],
  },

  /* ══════════════════════════════════════════════════════════
     SPECIAL CLEARANCES
     ══════════════════════════════════════════════════════════ */

  {
    name: 'Agriculture',
    fullName: 'City Agriculture Office',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues clearances for agriculture-related businesses and agri-product establishments.',
    services: ['City Agriculture Office Clearance'],
    requirements: [
      'Duly Filled-Out and Signed Application Form',
      'Certification from the Bureau of Animal Industry (BAI)'
    ],
    applicableTo: ['Agriculture-related Businesses'],
    downloadables:[],
  },

  {
    name: 'Veterinary',
    fullName: 'City Veterinary Office',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues clearances for businesses dealing in meat and poultry products.',
    services: ['City Veterinary Office Clearance'],
    requirements: [
      'City Veterinary Office Clearance',
      'Bureau of Animal Industry (BAI) Certification'
    ],
    applicableTo: ['Meat Products', 'Poultry Products'],
    downloadables:[],
  },

  {
    name: 'Tourism',
    fullName: 'City Tourism Office',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues clearances for tourism-related establishments and service providers.',
    services: [
      'City Tourism Office Clearance',
      'Provision of Tour Assistance',
      'Registration Of Tourism-Related Establishments'
    ],
    requirements: [
      {
        label: 'For New Tourism-related Businesses',
        items: [
          'Duly Filled-Out and Signed Application Form',
          'Clearance'
        ],
      },
      {
        label: 'For Renewal of Tourism-related Businesses',
        items: [
          'Duly Filled-Out and Signed Application Form',
        ],
      },
    ],
    applicableTo: ['Tourism-related Businesses'],
    downloadables:[],
  },

  {
    name: 'Admin',
    fullName: 'City Administrator\'s Office',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues City Ad / City Administrator Clearance for businesses operating within the 3 Major Markets & Manukan Country',
    services: [
      'City Administrator Clearance',
      'Request of MABBCAB (Manual Application)',
      'Issuance of Certificate of Recognition',
      'Endorsement Letter to Business Permits & Licensing Office for Business Permit Renewal (Transportation-related Businesses)',
      'Issuance of Identification Card',
    ],
    requirements: [
      {
        label: 'For Offices / Department Heads / Admin. Officers',
        items: [
          ' Daily Trip Ticket (2 Original Copies) ',
          'Travel Order (outside Bacolod City)'
        ],
      },
      {
        label: 'For Existing block/ stall / table awardee or an actual occupant in any public market',
        items: [
          'COMELEC ID or Certification from COMELEC (2 photocopies)',
          'Certification of Barangay Residency (2 photocopies)',
          'Certification from the market collector’s office (1 original copy)',
        ],
      },
      {
        label: ' For Modernize / Traditional Jeepney Coordinators',
        items: [
          'OR / CR of Vehicle (2 photocopies)',
          'Updated Franchise Verification (Present the Original Copy and 2 Photocopies)',
          'Mayor\'s Permit (If applicable)',
          'Special Permit',
        ]
      },
      {
        label: 'For Street Vendors, ambulant vendors or peddlers ',
        items: [
          'COMELEC ID or Certification from COMELEC (2 photocopies)',
          'Registration Form',
          'Heatlh Card (2 photocopies)',
        ],
      },
    ],
    applicableTo: ['Manukan Country'],
    downloadables:[],
  },

  {
    name: 'BTTMD',
    fullName: 'Bacolod Traffic and Transport Management Department',
    address: '',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'Issues Traffic Clearance for businesses regulated under its scope.',
    services: ['Traffic Clearance'],
    requirements: [
      'BTTMD Clearance',
      'Barangay Clearance',
      'Valid Franchise',
    ],
    applicableTo: ['Transportation-related Businesses'],
    downloadables:[],
  },

  {
    name: 'SP',
    fullName: 'Sangguniang Panlungsod',
    address: '2nd Floor, Bacolod City Government Center (BCGC), Bacolod City',
    phone: '',
    email: '',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    website: '',
    link: '',
    description: 'The Sangguniang Panlungsod issues the Resolution of No Objection (RONO), a legislative requirement for specific high-impact business activities or those involving regulated industries.',
    services: [
      'Issuance of Resolution of No Objection (RONO)',
      'Legislative Endorsement',
    ],
    requirements: [
      'Formal Letter of Intent addressed to the Vice Mayor / Presiding Officer',
      'Barangay Resolution of No Objection (from the host Barangay)',
      'Proof of Ownership (TCT) or Notarized Contract of Lease',
      'Vicinity Map and Site Plan',
      'DTI Registration or SEC Articles of Incorporation',
      'Endorsement from relevant National Government Agencies (if applicable)',
    ],
    applicableTo: [
      'Gaming and E-Games Establishments', 
      'Cooperatives'
    ],
    downloadables: [],
  },
];
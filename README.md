# Project File Tree with Labels

```
permit-app/
├── 📁 public/                          # Static assets served as-is
│   ├── 🖼️ favicon.svg                 # Browser tab icon
│   ├── 🖼️ icons.svg                   # SVG icon sprite sheet
│   └── 🖼️ logo.png                    # Logo image
│
├── 📁 src/                             # Main application source code
│   │
│   ├── 📁 assets/                      # Project images & media
│   │   ├── 🖼️ hero.png                # Hero section image
│   │   ├── 🖼️ logo-m.png              # Mobile logo variant
│   │   ├── 🖼️ logo.png                # Desktop logo
│   │   ├── 🖼️ react.svg               # React icon
│   │   └── 🖼️ vite.svg                # Vite build tool icon
│   │
│   ├── 📁 components/                  # Global reusable components
│   │   ├── 📄 Footer.jsx               # Footer component (all pages)
│   │   └── 📄 Header.jsx               # Navigation header (all pages)
│   │
│   ├── 📁 data/                        # Static data & content
│   │   ├── 📄 barangay.js              # Barangay list data
│   │   ├── 📄 constants.js             # App-wide constants
│   │   ├── 📄 newpage.js               # New permit page content
│   │   ├── 📄 offices.js               # Office locations & info
│   │   └── 📄 renewalpage.js           # Renewal permit page content
│   │
│   ├── 📁 frontpage/                   # Landing/Home page
│   │   ├── 📁 components/              # FrontPage-specific components
│   │   │   ├── 📄 Hero.jsx             # Hero banner with CTA
│   │   │   └── 📄 VideoSection.jsx     # Embedded video section
│   │   ├── 🎨 FrontPage.css            # FrontPage styling
│   │   └── 📄 FrontPage.jsx            # Main FrontPage component
│   │
│   ├── 📁 hooks/                       # Custom React hooks
│   │   ├── 📄 useInView.js             # Detect element visibility
│   │   ├── 📄 useIntersectionObserver.js # Intersection observer hook
│   │   └── 📄 useisMobile.js           # Detect mobile viewport
│   │
│   ├── 📁 new/                         # New Permit Application page
│   │   ├── 📁 components/              # NewPage-specific components
│   │   │   ├── 📄 CTASection.jsx       # Call-to-action section
│   │   │   ├── 📄 Hero.jsx             # Page hero/header
│   │   │   ├── 📄 RequirementCard.jsx  # Individual requirement card
│   │   │   ├── 📄 RequirementsSection.jsx # All requirements section
│   │   │   ├── 📄 StepCard.jsx         # Process step card
│   │   │   └── 📄 Stepper.jsx          # Step-by-step process
│   │   ├── 🎨 NewPage.css              # NewPage styling
│   │   └── 📄 NewPage.jsx              # Main NewPage component
│   │
│   ├── 📁 offices/                     # Office Locations page
│   │   ├── 📁 components/              # OfficePage-specific components
│   │   │   ├── 📁 dropdowns/           # Dropdown components
│   │   │   │   ├── 🎨 barangay.css     # Barangay selector styling
│   │   │   │   └── 📄 barangay.jsx     # Barangay dropdown component
│   │   │   ├── 📄 Hero.jsx             # Page hero/header
│   │   │   ├── 📄 OfficeCard.jsx       # Individual office info card
│   │   │   ├── 📄 OfficeTabs.jsx       # Office tabs/switcher
│   │   │   ├── 📄 RequiredSection.jsx  # Required clearances section
│   │   │   └── 📄 SpecialSection.jsx   # Special clearances section
│   │   ├── 🎨 OfficePage.css           # OfficePage styling
│   │   └── 📄 OfficePage.jsx           # Main OfficePage component
│   │
│   ├── 📁 renewal/                     # Permit Renewal page
│   │   ├── 📁 components/              # RenewalPage-specific components
│   │   │   ├── 📄 CTASection.jsx       # Call-to-action section
│   │   │   ├── 📄 Hero.jsx             # Page hero/header
│   │   │   ├── 📄 RequirementCard.jsx  # Individual requirement card
│   │   │   ├── 📄 RequirementsSection.jsx # All requirements section
│   │   │   ├── 📄 StepCard.jsx         # Process step card
│   │   │   └── 📄 Stepper.jsx          # Step-by-step process
│   │   ├── 🎨 RenewalPage.css          # RenewalPage styling
│   │   └── 📄 RenewalPage.jsx          # Main RenewalPage component
│   │
│   ├── 🎨 App.css                      # Global app styles & design tokens
│   ├── 📄 App.jsx                      # Root app component & routing
│   ├── 🎨 index.css                    # Base/reset styles
│   └── 📄 main.jsx                     # React DOM render entry point
│
├── ⚙️ .gitignore                       # Git ignore rules
├── 📝 README.md                        # Project documentation
├── 📄 eslint.config.js                 # ESLint configuration
├── 🌐 index.html                       # HTML entry point
├── ⚙️ package-lock.json                # Locked dependency versions
├── ⚙️ package.json                     # Project dependencies & scripts
└── 📄 vite.config.js                   # Vite bundler configuration
```

---

## 📊 Directory Summary

| Directory | Purpose |
|-----------|---------|
| **public/** | Static assets (favicon, logos, icons) |
| **src/** | All source code |
| **src/assets/** | Images and media files |
| **src/components/** | Reusable components (Header, Footer) |
| **src/data/** | Static data files (office info, barangay list) |
| **src/frontpage/** | Landing page with hero & video |
| **src/hooks/** | Custom React hooks for common logic |
| **src/new/** | New Permit application page |
| **src/offices/** | Office locations & details page |
| **src/renewal/** | Permit renewal page |

---

## 🎨 Styling Architecture

```
App.css (Global Design Tokens & Styles)
├── Design tokens (colors, spacing, typography)
├── Global components (Header, Footer, Buttons)
└── Responsive breakpoints

FrontPage.css     ├── Hero, Video Section
NewPage.css       ├── Steps, Requirements, CTA
OfficePage.css    ├── Office Cards, Tabs, Dropdowns
RenewalPage.css   └── Steps, Requirements, CTA
```

---

## 📄 Component Hierarchy

```
App.jsx (Router)
├── FrontPage.jsx
│   ├── Hero
│   └── VideoSection
├── NewPage.jsx
│   ├── Hero
│   ├── Stepper (StepCard)
│   ├── RequirementsSection (RequirementCard)
│   └── CTASection
├── OfficePage.jsx
│   ├── Hero
│   ├── OfficeTabs
│   ├── RequiredSection
│   │   └── OfficeCard (with OfficeCard__dropdown/barangay.jsx)
│   └── SpecialSection
│       └── OfficeCard
└── RenewalPage.jsx
    ├── Hero
    ├── Stepper (StepCard)
    ├── RequirementsSection (RequirementCard)
    └── CTASection

Header.jsx (Global - all pages)
Footer.jsx (Global - all pages)
```

---

## 🔄 Data Flow

```
src/data/ (Static Content)
├── offices.js      → OfficePage.jsx → OfficeCard.jsx
├── barangay.js     → barangay.jsx (dropdown)
├── newpage.js      → NewPage.jsx
├── renewalpage.js  → RenewalPage.jsx
└── constants.js    → App-wide usage
```

---

## 🎯 Key Files by Purpose

### Configuration Files
- `vite.config.js` - Build configuration
- `package.json` - Dependencies & scripts
- `eslint.config.js` - Code linting rules
- `.gitignore` - Git exclusions

### Entry Points
- `index.html` - HTML template
- `src/main.jsx` - React DOM mount
- `src/App.jsx` - Router & main layout

### Styling
- `src/index.css` - Global reset styles
- `src/App.css` - Design tokens & global styles
- `src/[page]/[page].css` - Page-specific styles

### Hooks (Reusable Logic)
- `useInView.js` - Fade-in animations
- `useIntersectionObserver.js` - Scroll detection
- `useisMobile.js` - Responsive behavior
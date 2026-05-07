import React from 'react';
import HeroSection from './components/Hero';
import Stepper from '../new/components/Stepper';
import RequirementsSection from '../new/components/RequirementsSection';
import CTASection from '../new/components/CTASection';
import './RenewalPage.css';
import { STEPS, REQUIREMENTS } from '../data/renewalpage';

// ─── RenewalPage ──────────────────────────────────────────────────────────────
// Displays the complete business renewal information flow.
// 
// Data Sources (from src/data/renewalpage.js):
//   • STEPS - Three-step renewal process (Application → Assessment → Claim)
//   • REQUIREMENTS - Documents needed per step
//
// Component Reuse:
//   ✓ Stepper: Shared from /new/components (generic, works with any STEPS)
//   ✓ RequirementsSection: Shared from /new/components (generic, works with any REQUIREMENTS)
//   ✓ CTASection: Shared from /new/components (generic, just different callbacks)
//   ✓ Hero: Custom for renewal (time to renew message)
// ──────────────────────────────────────────────────────────────────────────────

function RenewalPage({ onRenewClick }) {
  return (
    <div className="renewalpage renewalpage__content">
      {/* Hero Section - Renewal specific */}
      <HeroSection onRenewClick={onRenewClick} />

      {/* Stepper - Shared component, different STEPS data */}
      <Stepper steps={STEPS} />

      {/* Requirements - Shared component, different REQUIREMENTS data */}
      <RequirementsSection requirements={REQUIREMENTS} />

      {/* CTA - Shared component, renewal-specific callback */}
      <CTASection onRenewClick={onRenewClick} />
    </div>
  );
}

export default RenewalPage;
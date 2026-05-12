import React from 'react';
import HeroSection from './components/Hero';
import Stepper from './components/Stepper';
import RequirementsSection from './components/RequirementsSection';
import CTASection from './components/CTASection';
import './NewPage.css';
import { STEPS, REQUIREMENTS } from '../data/newpage';

// ─── NewPage ──────────────────────────────────────────────────────────────────
// Displays the complete business registration information flow:
// 
// Data Sources (from src/data/newpage.js):
//   • STEPS - Three-step process (Register → Assessment → Claim)
//   • REQUIREMENTS - Documents needed per step with action links
//
// Key Features:
//   ✓ Step 1: Business Name Registration with action links
//     - "Click here for DTI registration" (Sole)
//     - "Click here for SEC registration" (Corporation/Partnership)
//     - "Click here for CDA registration" (Cooperative)
//   ✓ Step 2: Assessment & Payment with "Find Payment Centers" button
//     - Links to dedicated /offices page
//   ✓ Step 3: Permit Claim documentation
// ──────────────────────────────────────────────────────────────────────────────

function NewPage({ onRegisterClick }) {
  return (
    <div className="newpage newpage__content">
      {/* Hero Section - New Business specific */}
      <HeroSection onRegisterClick={onRegisterClick} />

      {/* Stepper - Shared component with New Business labels */}
      <Stepper 
        steps={STEPS}
        label="How to Get a New Business Permit"
        subtitle="Three simple steps to get your Mayor's Permit online"
      />

      {/* Requirements - Shared component, New Business specific data */}
      <RequirementsSection 
        requirements={REQUIREMENTS}
      />

      {/* CTA - Shared component, New Business specific callback */}
      <CTASection onRegisterClick={onRegisterClick} />
    </div>
  );
}

export default NewPage;
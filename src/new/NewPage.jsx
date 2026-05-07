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
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      {/* Hero with main Register button */}
      <HeroSection onRegisterClick={onRegisterClick} />

      {/* ─── Stepper Section ──────────────────────────────────────────────── */}
      {/* Step-by-step process visualization (Steps 1, 2, 3) */}
      <section className="stepper">
        <p className="stepper__label">How It Works</p>
        <h2 className="stepper__subtitle">
          Three simple steps to get your Mayor's Permit online
        </h2>
        <div className="stepper__container">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-card">
                <div className="step-card__badge">
                  <div className="step-card__pulse"></div>
                  <div className="step-card__number">{step.number}</div>
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__description">{step.description}</p>
              </div>
              {/* Connector line between steps (hide on last) */}
              {index < STEPS.length - 1 && (
                <div className="stepper__connector"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ─── Requirements Section ─────────────────────────────────────────── */}
      {/* 
        Displays requirements per step in card format:
        - Step 1: Business Registration with action links
          • Sole → Click here for DTI registration ↗
          • Corporation/Partnership → Click here for SEC registration ↗
          • Cooperative → Click here for CDA registration ↗
          • Proof of Business Location Ownership documents
        
        - Step 2: Assessment & Payment
          • Billing summary info
          • Payment Options
          • "Find Payment Centers" button (navigates to /offices page)
        
        - Step 3: Permit Claim
          • Walk-in documentation requirements
          • Email delivery option
      */}
      <RequirementsSection 
        requirements={REQUIREMENTS}
      />

      {/* ─── CTA Section ──────────────────────────────────────────────────── */}
      {/* Final call-to-action with Register button */}
      <CTASection onRegisterClick={onRegisterClick} />
    </div>
  );
}

export default NewPage;
import React from 'react';

// ─── HeroSection ──────────────────────────────────────────────────────────────
// Displays the main heading, introductory text, and section toggle buttons.
// ──────────────────────────────────────────────────────────────────────────────

const HeroSection = ({ activeSection = 'required', onSectionChange }) => {
  return (
    <div className="hero-offices">
      <h1 className="hero__title">
        List of Regulatory <em>Offices</em>
      </h1>
      <p className="hero__hint">
        Essential Documents Required for Each Clearance and Their Respective Offices
      </p>

      {/* ── Section Toggle Buttons ── */}
      <div className="hero__section-toggle">
        <button
          className={`hero__section-toggle-btn ${activeSection === 'required' ? 'hero__section-toggle-btn--active' : ''}`}
          onClick={() => onSectionChange('required')}
          aria-pressed={activeSection === 'required'}
        >
          Required Clearances
        </button>
        <button
          className={`hero__section-toggle-btn ${activeSection === 'special' ? 'hero__section-toggle-btn--active' : ''}`}
          onClick={() => onSectionChange('special')}
          aria-pressed={activeSection === 'special'}
        >
          Special Clearances
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
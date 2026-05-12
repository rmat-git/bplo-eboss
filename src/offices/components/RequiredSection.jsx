import React, { useRef } from 'react';
import { MdArrowBack } from 'react-icons/md';
import OfficeTabs from './OfficeTabs';
import OfficeCard from './OfficeCard';

// ─── RequiredClearancesSection ─────────────────────────────────────────────────
// Displays the "Required Clearances" section with tab navigation,
// office card for essential business registration offices, and back button.
// ──────────────────────────────────────────────────────────────────────────────

const RequiredClearancesSection = ({ 
  offices, 
  activeTab, 
  onTabChange, 
  isMobile, 
  onNavigateBack,
  onSectionToggle
}) => {
  const sectionRef = useRef(null);
  const currentOffice = offices[activeTab] || offices[0];

  const handleToggleSection = () => {
    onSectionToggle('special');
    // Scroll to special section after state updates
    setTimeout(() => {
      document.querySelector('.clearance-group-section--special')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 0);
  };

  return (
    <section 
      className="clearance-group-section clearance-group-section--required"
      ref={sectionRef}
    >
      <div className="clearance-group-section__inner">
        {/* Section Header */}
        <div className="clearance-group-section__header">
          <h2 className="clearance-group-section__title--required">Required Clearances</h2>
          <p className="clearance-group-section__subtitle--required">
            Offices for Business Registration
          </p>
        </div>

        {/* Tabs */}
        <OfficeTabs
          offices={offices}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />

        {/* Office Card */}
        <div className="offices-page__detail">
          <OfficeCard office={currentOffice} />
        </div>

        {/* Button Wrapper - Both Back and Toggle Buttons */}
        <div className="offices-page__button-wrapper">
          <button
            className="offices-page__back-button"
            onClick={onNavigateBack}
            aria-label="Go back to previous page"
          >
            <MdArrowBack className="offices-page__back-button-icon" />
            Back to previous page
          </button>
          
          <button
            className="offices-page__section-toggle-button"
            onClick={handleToggleSection}
            aria-label="Switch to Special Clearances section"
          >
            View Special Clearances
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequiredClearancesSection;
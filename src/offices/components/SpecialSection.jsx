import React, { useRef } from 'react';
import { MdArrowBack } from 'react-icons/md';
import OfficeTabs from './OfficeTabs';
import OfficeCard from './OfficeCard';

// ─── SpecialClearancesSection ──────────────────────────────────────────────────
// Displays the "Special Clearances" section with tab navigation,
// office card for conditional offices, and a back navigation button.
// ──────────────────────────────────────────────────────────────────────────────

const SpecialClearancesSection = ({
  offices,
  activeTab,
  onTabChange,
  isMobile,
  onNavigateBack,
  onSectionToggle,
}) => {
  const sectionRef = useRef(null);
  const currentOffice = offices[activeTab] || offices[0];

  const handleToggleSection = () => {
    onSectionToggle('required');
    // Scroll to required section after state updates
    setTimeout(() => {
      document.querySelector('.clearance-group-section--required')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 0);
  };

  return (
    <section 
      className="clearance-group-section clearance-group-section--special"
      ref={sectionRef}
    >
      <div className="clearance-group-section__inner">
        {/* Section Header */}
        <div className="clearance-group-section__header">
          <h2 className="clearance-group-section__title--special">Special Clearances</h2>
          <p className="clearance-group-section__subtitle--special">
            As applicable by business type
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
            aria-label="Switch to Required Clearances section"
          >
            View Required Clearances
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialClearancesSection;
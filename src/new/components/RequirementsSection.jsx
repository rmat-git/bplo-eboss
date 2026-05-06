import React from 'react';
import RequirementCard from './RequirementCard';

const RequirementsSection = ({ requirements = [], onOfficeModalOpen }) => {
  // Ensure requirements is always an array
  const requirementsList = Array.isArray(requirements) ? requirements : [];

  const handleButtonClick = (action) => {
    if (action === 'openOfficeModal') {
      // Call the parent handler to open the modal
      if (onOfficeModalOpen) {
        onOfficeModalOpen();
      }
    }
  };

  return (
    <section className="requirements-section">
      <div className="requirements-section__header fade-in visible">
        <h2 className="requirements-section__title">Requirements per Step</h2>
        <p className="requirements-section__subtitle">
          Review what to prepare for registration, payment, and permit release.
        </p>
      </div>
      <div className="requirements-container">
        {requirementsList.map((req) => (
          <RequirementCard
            key={req.stepNumber}
            stepNumber={req.stepNumber}
            title={req.title}
            items={req.items}
            buttonLabel={req.buttonLabel}
            buttonAction={req.buttonAction}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </section>
  );
};

export default RequirementsSection;
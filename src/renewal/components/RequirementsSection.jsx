import React from 'react';
import { useNavigate } from 'react-router-dom';
import RequirementCard from './RequirementCard';

const RequirementsSection = ({ requirements = [] }) => {
  const navigate = useNavigate();
  
  // Ensure requirements is always an array
  const requirementsList = Array.isArray(requirements) ? requirements : [];

  const handleButtonClick = (action) => {
    console.log('Button action:', action);
    
    switch (action) {
      case 'openOfficeModal':
      case 'viewOffices':
        navigate('/offices');
        break;
      case 'renew':
      case 'proceedToRenew':
        navigate('/renew');
        break;
      default:
        console.warn('Unknown action:', action);
    }
  };

  return (
    <section className="requirements-section">
      <div className="requirements-section__header fade-in visible">
        <h2 className="requirements-section__title">Requirements per Step</h2>
        <p className="requirements-section__subtitle">
          Review what to prepare for renewal, payment, and permit release.
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

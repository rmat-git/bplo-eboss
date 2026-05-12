import React from 'react';
import StepCard from './StepCard';

const Stepper = ({ steps, label, subtitle }) => {
  return (
    <section className="stepper">
      <p className="stepper__label">{label}</p>
      <p className="stepper__subtitle">{subtitle}</p>
      <div className="stepper__container">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <StepCard
              number={step.number}
              title={step.title}
              description={step.description}
            />
            {index < steps.length - 1 && (
              <div className="stepper__connector" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stepper;
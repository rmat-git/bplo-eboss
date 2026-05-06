const StepCard = ({ number, title, description }) => {
  return (
    <div className="step-card fade-in">
      <div className="step-card__badge">
        <div className="step-card__number">{number}</div>
        <div className="step-card__pulse" />
      </div>
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__description">{description}</p>
    </div>
  );
};

export default StepCard;
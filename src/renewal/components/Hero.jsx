const HeroSection = ({ onRenewClick }) => {
  return (
    <section className="hero-renewal fade-in visible">
      <h1 className="hero__title">
        Time to <em>Renew?</em>
      </h1>
      <button
        className="button button--primary hero__renew-btn"
        onClick={onRenewClick}
        aria-label="Start business renewal"
      >
        Start Renewal
      </button>
      <p className="hero__hint">
        or check the steps and requirements below
      </p>
    </section>
  );
};

export default HeroSection;
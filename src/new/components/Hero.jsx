const HeroSection = ({ onRegisterClick }) => {
  return (
    <section className="hero-newpage fade-in visible">
      <h1 className="hero__title">
        Ready to <em>Register?</em>
      </h1>
      <button
        className="button button--primary hero__register-btn"
        onClick={onRegisterClick}
        aria-label="Start business registration"
      >
        Start Registration
      </button>
      <p className="hero__hint">
        or check the steps and requirements below
      </p>
    </section>
  );
};

export default HeroSection;
export default function Hero({ onNewPermitClick, onRenewalClick }) {
  return (
    <section id="about" className="hero-frontpage fade-in visible">
      {/* Decorative background circles */}
      <div className="hero-circle hero-circle-top" />
      <div className="hero-circle hero-circle-bottom" />

      <div className="hero-container">
        {/* Badge */}
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Electronic Business Integrated System 4.0</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Bacolod City<br />
          e<span className="hero-highlight">Business </span>One Stop Shop
        </h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Welcome to Bacolod City's Business One Stop Shop
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button 
            type="button"
            onClick={() => {
              console.log('New Business clicked');
              onNewPermitClick();
            }}
                      className="hero-btn hero-btn-primary"
          >
            New Business
          </button>

          <button 
            onClick={onRenewalClick}
            className="hero-btn hero-btn-primary"
          >
            Renewal
          </button>
        </div>
      </div>
    </section>
  );
}
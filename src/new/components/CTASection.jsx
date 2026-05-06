const CTASection = ({ onRegisterClick, onFeedbackClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-section__inner fade-in visible">
        {/* QR Code (Optional - for mobile app link) */}
        <div className="cta-section__qr-wrap">
          <div className="cta-section__qr">
            [ QR Code ]
          </div>
          <p className="cta-section__qr-label">Scan for mobile access & feedback</p>
        </div>

        {/* Divider */}
        <div className="cta-section__divider" />

        {/* Main CTA Content */}
        <div className="cta-section__content">
          <h2 className="cta-section__heading">
            Ready to register your <em>business?</em>
          </h2>
          <p className="cta-section__body">
            Start your application online today. Have your business name registration and proof of location ready before you begin.
          </p>
          
          {/* Action Buttons */}
          <div className="cta-section__actions">
            <button 
              className="button button--primary"
              onClick={onRegisterClick}
            >
              Start Registration
            </button>
            <button 
              className="button button--ghost"
              onClick={onFeedbackClick}
            >
              Give Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
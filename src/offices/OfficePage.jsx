import React, { useState, useEffect } from 'react';
import { MdArrowOutward, MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './OfficePage.css';
import { OFFICES } from '../data/offices';

// ─── OfficesPage ──────────────────────────────────────────────────────────────
// Displays regulatory offices separated into Required and Special clearances.
// Uses tabbed interface to switch between different offices within each category.
// ──────────────────────────────────────────────────────────────────────────────

const OfficesPage = ({ offices = OFFICES }) => {
  const [activeTabRequired, setActiveTabRequired] = useState(0);
  const [activeTabSpecial, setActiveTabSpecial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const officesList = Array.isArray(offices) && offices.length > 0 ? offices : OFFICES;

  // Filter offices into Required and Special categories
  const requiredOffices = [
    officesList.find(o => o.name === 'Barangay Hall'),
    officesList.find(o => o.name === 'BFP'),
    officesList.find(o => o.name === 'CPDO'),
    officesList.find(o => o.name === 'CHO'),
    officesList.find(o => o.name === 'OBO'),
    officesList.find(o => o.name === 'BENRO'),
  ].filter(Boolean);

  const specialOffices = [
    officesList.find(o => o.name === 'CAO'),
    officesList.find(o => o.name === 'CVO'),
    officesList.find(o => o.name === 'CTO'),
    officesList.find(o => o.name === 'CA'),
    officesList.find(o => o.name === 'BTTMD'),
    officesList.find(o => o.name === 'RONO'),
  ].filter(Boolean);

  const currentRequiredOffice = requiredOffices[activeTabRequired] || requiredOffices[0];
  const currentSpecialOffice = specialOffices[activeTabSpecial] || specialOffices[0];

  // Listen for window resize to detect mobile breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Render a single requirement item.
   * Supports:
   * - Plain strings: Simple text list items
   * - Objects with { label, items }: Group header with sub-items
   */
  const renderRequirementItem = (req, index) => {
    if (typeof req === 'string') {
      return (
        <li key={index} className="office-card__req-item">
          {req}
        </li>
      );
    }

    // Object form: { label: 'For Renewals', items: [...] }
    if (req && req.label && Array.isArray(req.items)) {
      return (
        <li key={index} className="office-card__req-item office-card__req-item--group">
          <span className="office-card__req-group-label">{req.label}</span>
          <ul className="office-card__req-sublist">
            {req.items.map((subItem, subIndex) => (
              <li key={subIndex} className="office-card__req-item">
                {subItem}
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return null;
  };

  /**
   * Render office card with all details: contact info, requirements, links.
   */
  const renderOfficeCard = (office) => {
    if (!office) return null;

    return (
      <div className="office-card">
        {/* ── Header ── */}
        <div className="office-card__header">
          <div className="office-card__header-left">
            <span className="office-card__tag">{office.fullName}</span>
            {office.applicableTo && Array.isArray(office.applicableTo) && office.applicableTo.length > 0 && (
              office.applicableTo.map((type, i) => (
                <span key={i} className="office-card__applicable-tag">{type}</span>
              ))
            )}
          </div>
        </div>

        {/* ── Content Section ── */}
        <div className="office-card__content-section">
          <div className="office-card__divider" />

          {/* Address */}
          {office.address && (
            <div className="office-card__info">
              <span className="office-card__label">Address:</span>
              <p className="office-card__text">{office.address}</p>
            </div>
          )}

          {/* Phone */}
          {office.phone && (
            <div className="office-card__info">
              <span className="office-card__label">Phone:</span>
              <a href={`tel:${office.phone}`} className="office-card__contact-link">
                {office.phone}
              </a>
            </div>
          )}

          {/* Email */}
          {office.email && (
            <div className="office-card__info">
              <span className="office-card__label">Email:</span>
              <a href={`mailto:${office.email}`} className="office-card__contact-link">
                {office.email}
              </a>
            </div>
          )}

          {/* Hours */}
          {office.hours && (
            <div className="office-card__info">
              <span className="office-card__label">Hours:</span>
              <p className="office-card__text">{office.hours}</p>
            </div>
          )}

          {/* Description */}
          {office.description && (
            <p className="office-card__description">{office.description}</p>
          )}

          {/* Services */}
          {office.services && Array.isArray(office.services) && office.services.length > 0 && (
            <div className="office-card__info">
              <span className="office-card__label">Services:</span>
              <ul className="office-card__service-list">
                {office.services.map((service, i) => (
                  <li key={i} className="office-card__service-item">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Documentary Requirements */}
          {office.requirements && Array.isArray(office.requirements) && office.requirements.length > 0 && (
            <div className="office-card__requirements">
              <div className="office-card__req-header">
                <span className="office-card__label">Documentary Requirements:</span>
              </div>
              <ul className="office-card__req-list">
                {office.requirements.map((req, i) => renderRequirementItem(req, i))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Footer Links ── */}
        {(office.link || office.website) && (
          <div className="office-card__footer">
            {office.link && (
              <a
                href={office.link}
                target="_blank"
                rel="noopener noreferrer"
                className="office-card__action-link"
              >
                Visit Office <MdArrowOutward className="office-card__action-icon" />
              </a>
            )}
            {office.website && (
              <a
                href={office.website}
                target="_blank"
                rel="noopener noreferrer"
                className="office-card__action-link"
              >
                Website <MdArrowOutward className="office-card__action-icon" />
              </a>
            )}
          </div>
        )}
      </div>
    );
  };

  // Handle empty state
  if (!officesList || officesList.length === 0) {
    return (
      <div className="offices-page__content">
        <div className="hero-offices">
          <h1 className="hero__title">List of Regulatory <em>Offices</em></h1>
          <p className="hero__hint">No offices available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="offices-page__content">
      {/* ── Hero Section ── */}
      <div className="hero-offices">
        <h1 className="hero__title">List of Regulatory <em>Offices</em></h1>
        <p className="hero__hint">
          Provide these essential documents to get your Business Permit cleared and issued
        </p>
      </div>

      {/* ═══ REQUIRED CLEARANCES SECTION ═══ */}
      <section className="clearance-group-section clearance-group-section--required">
        <div className="clearance-group-section__inner">
          {/* Section Header */}
          <div className="clearance-group-section__header">
            <h2 className="clearance-group-section__title--required">Required Clearances</h2>
            <p className="clearance-group-section__subtitle--required">
              Essential offices for business registration
            </p>
          </div>

          {/* Tabs */}
          <div className="offices-page__tabs-container">
            <div className="offices-page__tabs-scroll">
              {requiredOffices.map((office, i) => (
                <button
                  key={i}
                  className={`offices-page__tab${i === activeTabRequired ? ' offices-page__tab--active' : ''}`}
                  onClick={() => setActiveTabRequired(i)}
                  aria-label={`View ${office.name} details`}
                  aria-pressed={i === activeTabRequired}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          {/* Office Card */}
          <div className="offices-page__detail">
            {renderOfficeCard(currentRequiredOffice)}
          </div>
        </div>
      </section>

      {/* ═══ SPECIAL CLEARANCES SECTION ═══ */}
      <section className="clearance-group-section clearance-group-section--special">
        <div className="clearance-group-section__inner">
          {/* Section Header */}
          <div className="clearance-group-section__header">
            <h2 className="clearance-group-section__title--special">Special Clearances</h2>
            <p className="clearance-group-section__subtitle--special">
              As applicable by business type
            </p>
          </div>

          {/* Tabs */}
          <div className="offices-page__tabs-container">
            <div className="offices-page__tabs-scroll">
              {specialOffices.map((office, i) => (
                <button
                  key={i}
                  className={`offices-page__tab${i === activeTabSpecial ? ' offices-page__tab--active' : ''}`}
                  onClick={() => setActiveTabSpecial(i)}
                  aria-label={`View ${office.name} details`}
                  aria-pressed={i === activeTabSpecial}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          {/* Office Card */}
          <div className="offices-page__detail">
            {renderOfficeCard(currentSpecialOffice)}
          </div>

          {/* Back Button */}
          <div className="offices-page__back-button-wrapper">
            <button
              className="offices-page__back-button"
              onClick={() => navigate(-1)}
              aria-label="Go back to previous page"
            >
              <MdArrowBack className="offices-page__back-button-icon" />
              Back to previous page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficesPage;
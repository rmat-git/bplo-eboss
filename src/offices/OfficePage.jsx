import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import './OfficePage.css';
import { OFFICES } from '../data/offices';

const OfficesPage = ({ offices = OFFICES }) => {
  const [activeTabRequired, setActiveTabRequired] = useState(0);
  const [activeTabSpecial, setActiveTabSpecial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const officesList = Array.isArray(offices) && offices.length > 0 ? offices : OFFICES;

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
    officesList.find(o => o.name === 'COL'),
  ].filter(Boolean);

  const currentRequiredOffice = requiredOffices[activeTabRequired] || requiredOffices[0];
  const currentSpecialOffice = specialOffices[activeTabSpecial] || specialOffices[0];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /**
   * Render a single requirement item, supporting plain strings or
   * objects with { label, items } for sub-grouped entries.
   */
  const renderRequirementItem = (req, i) => {
    if (typeof req === 'string') {
      return (
        <li key={i} className="office-card__req-item">
          {req}
        </li>
      );
    }
    // Object form: { label: 'For Renewals', items: [...] }
    return (
      <li key={i} className="office-card__req-item office-card__req-item--group">
        <span className="office-card__req-group-label">{req.label}</span>
        <ul className="office-card__req-sublist">
          {req.items.map((sub, j) => (
            <li key={j} className="office-card__req-item">
              {sub}
            </li>
          ))}
        </ul>
      </li>
    );
  };

  const renderOfficeCard = (office) => (
    <div className="office-card">
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

      <div className="office-card__content-section">
        <div className="office-card__divider" />

        {/* ── Contact & Meta ── */}
        {office.address && (
          <div className="office-card__info">
            <span className="office-card__label">Address:</span>
            <p className="office-card__text">{office.address}</p>
          </div>
        )}

        {office.phone && (
          <div className="office-card__info">
            <span className="office-card__label">Phone:</span>
            <a href={`tel:${office.phone}`} className="office-card__contact-link">
              {office.phone}
            </a>
          </div>
        )}

        {office.email && (
          <div className="office-card__info">
            <span className="office-card__label">Email:</span>
            <a href={`mailto:${office.email}`} className="office-card__contact-link">
              {office.email}
            </a>
          </div>
        )}

        {office.hours && (
          <div className="office-card__info">
            <span className="office-card__label">Hours:</span>
            <p className="office-card__text">{office.hours}</p>
          </div>
        )}

        {office.description && (
          <p className="office-card__description">{office.description}</p>
        )}

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

        {/* ── Documentary Requirements ── */}
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
      <div className="hero-offices">
          <h1 className="hero__title">List of Regulatory <em>Offices</em></h1>
        <p className="hero__hint">Provide these essential documents to get your Business Permit cleared and issued</p>
      </div>

      {/* ═══ SECTION 1: REQUIRED CLEARANCES ═══ */}
      <div className="clearance-group-section clearance-group-section--required">
        <div className="clearance-group-section__inner">
          <div className="clearance-group-section__header">
            <h2 className="clearance-group-section__title">Required Clearances</h2>
            <p className="clearance-group-section__subtitle">Essential offices for business registration</p>
          </div>

          <div className="offices-page__tabs-container">
            <div className="offices-page__tabs-scroll">
              {requiredOffices.map((office, i) => (
                <button
                  key={i}
                  className={`offices-page__tab${i === activeTabRequired ? ' offices-page__tab--active' : ''}`}
                  onClick={() => setActiveTabRequired(i)}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          <div className="offices-page__detail">
            {renderOfficeCard(currentRequiredOffice)}
          </div>
        </div>
      </div>

      {/* ═══ SECTION 2: SPECIAL CLEARANCES ═══ */}
      <div className="clearance-group-section clearance-group-section--special">
        <div className="clearance-group-section__inner">
          <div className="clearance-group-section__header">
            <h2 className="clearance-group-section__title">Special Clearances</h2>
            <p className="clearance-group-section__subtitle">As applicable by business type</p>
          </div>

          <div className="offices-page__tabs-container">
            <div className="offices-page__tabs-scroll">
              {specialOffices.map((office, i) => (
                <button
                  key={i}
                  className={`offices-page__tab${i === activeTabSpecial ? ' offices-page__tab--active' : ''}`}
                  onClick={() => setActiveTabSpecial(i)}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          <div className="offices-page__detail">
            {renderOfficeCard(currentSpecialOffice)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficesPage;
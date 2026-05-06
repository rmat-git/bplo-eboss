import React, { useState, useRef, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const OfficesModal = ({ isOpen, onClose, offices = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [animIn, setAnimIn] = useState(false);
  const tabsRef = useRef(null);
  const officesList = Array.isArray(offices) ? offices : [];

  /* Detect mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* Animate sheet in / reset tab on open */
  useEffect(() => {
    if (isOpen) {
      setActiveTab(0);
      setTimeout(() => setAnimIn(true), 10);
    } else {
      setAnimIn(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (isMobile) {
      setAnimIn(false);
      setTimeout(onClose, 300);
    } else {
      onClose();
    }
  };

  const switchTab = (i) => {
    setActiveTab(i);
    if (tabsRef.current) {
      const tab = tabsRef.current.children[i];
      tab?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  if (!isOpen) return null;

  /* ─────────────────────────────────────────────
     MOBILE: bottom sheet with tab bar
  ───────────────────────────────────────────── */
  if (isMobile) {
    const o = officesList[activeTab] || {};

    return (
      <div
        className="modal-overlay modal-overlay--sheet"
        onClick={handleClose}
      >
        <div
          className="modal-sheet"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: animIn ? 'translateY(0)' : 'translateY(100%)' }}
        >
          {/* Drag handle */}
          <div className="modal-sheet__handle-wrap">
            <div className="modal-sheet__handle" />
          </div>

          {/* Header */}
          <div className="modal-sheet__header">
            <h2 className="modal-title modal-title--sheet">OFFICES</h2>
            <button
              className="modal-close modal-close--sheet"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Scrollable tab bar */}
          <div className="modal-sheet__tabs" ref={tabsRef}>
            {officesList.map((office, i) => (
              <button
                key={i}
                className={`modal-sheet__tab${i === activeTab ? ' modal-sheet__tab--active' : ''}`}
                onClick={() => switchTab(i)}
              >
                {office.name}
              </button>
            ))}
          </div>

          {/* Office detail — re-uses existing office-card classes */}
          <div className="modal-sheet__body" key={activeTab}>
            <div className="office-card__header">
              <div className="office-card__header-left">
                <span className="office-card__tag">{o.name}</span>
              </div>
            </div>
            <div className="office-card__divider" />
            <p className="office-card__fullname">{o.fullName}</p>

            {o.address && (
              <div className="office-card__info">
                <span className="office-card__label">Address:</span>
                <p className="office-card__text">{o.address}</p>
              </div>
            )}
            {o.phone && (
              <div className="office-card__info">
                <span className="office-card__label">Phone:</span>
                <a href={`tel:${o.phone}`} className="office-card__contact-link">{o.phone}</a>
              </div>
            )}
            {o.email && (
              <div className="office-card__info">
                <span className="office-card__label">Email:</span>
                <a href={`mailto:${o.email}`} className="office-card__contact-link">{o.email}</a>
              </div>
            )}
            {o.hours && (
              <div className="office-card__info">
                <span className="office-card__label">Hours:</span>
                <p className="office-card__text">{o.hours}</p>
              </div>
            )}
            {o.description && (
              <p className="office-card__description">{o.description}</p>
            )}
            {o.services && o.services.length > 0 && (
              <div className="office-card__info">
                <span className="office-card__label">Services:</span>
                <ul className="office-card__service-list">
                  {o.services.map((s, i) => (
                    <li key={i} className="office-card__service-item">{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {(o.link || o.website) && (
              <div className="office-card__footer">
                {o.link && (
                  <a href={o.link} target="_blank" rel="noopener noreferrer" className="office-card__action-link">
                    Visit Office <MdArrowOutward className="office-card__action-icon" />
                  </a>
                )}
                {o.website && (
                  <a href={o.website} target="_blank" rel="noopener noreferrer" className="office-card__action-link">
                    Website <MdArrowOutward className="office-card__action-icon" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     DESKTOP: original card grid layout
  ───────────────────────────────────────────── */
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">OFFICES</h2>
        </div>

        <div className="offices-container">
          {officesList.map((office, index) => (
            <div key={index} className="office-card">
              <div className="office-card__header">
                <div className="office-card__header-left">
                  <span className="office-card__tag">{office.name}</span>
                </div>
              </div>

              <div className="office-card__content-section">
                <div className="office-card__divider" />
                <p className="office-card__fullname">{office.fullName}</p>

                {office.address && (
                  <div className="office-card__info">
                    <span className="office-card__label">Address:</span>
                    <p className="office-card__text">{office.address}</p>
                  </div>
                )}
                {office.phone && (
                  <div className="office-card__info">
                    <span className="office-card__label">Phone:</span>
                    <a href={`tel:${office.phone}`} className="office-card__contact-link">{office.phone}</a>
                  </div>
                )}
                {office.email && (
                  <div className="office-card__info">
                    <span className="office-card__label">Email:</span>
                    <a href={`mailto:${office.email}`} className="office-card__contact-link">{office.email}</a>
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
                        <li key={i} className="office-card__service-item">{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {(office.link || office.website) && (
                <div className="office-card__footer">
                  {office.link && (
                    <a href={office.link} target="_blank" rel="noopener noreferrer" className="office-card__action-link">
                      Visit Office <MdArrowOutward className="office-card__action-icon" />
                    </a>
                  )}
                  {office.website && (
                    <a href={office.website} target="_blank" rel="noopener noreferrer" className="office-card__action-link">
                      Website <MdArrowOutward className="office-card__action-icon" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficesModal;
import React, { useRef, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';
import { CgSoftwareDownload } from 'react-icons/cg';
import { MdChecklist } from 'react-icons/md';
import { GrDocumentPdf } from 'react-icons/gr';
import BarangayDropdown from './dropdowns/barangay';
import './dropdowns/barangay.css';

// ─── OfficeCard ───────────────────────────────────────────────────────────────
// Renders a single office with full details: header, contact info, services,
// requirements (supporting both strings and grouped items), and action links.
// 
// Special: If office is Barangay Hall, shows a barangay selector button
// ──────────────────────────────────────────────────────────────────────────────

const OfficeCard = ({ office }) => {
  const [showBarangayDropdown, setShowBarangayDropdown] = useState(false);
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const barangayButtonRef = useRef(null);

  if (!office) return null;

  const isBarangayHall = office.name === 'Barangay';

  /**
   * Handle barangay selection from dropdown
   * Updates the button text and applies selected styling
   */
  const handleBarangaySelect = (barangay) => {
    setSelectedBarangay(barangay);
    setShowBarangayDropdown(false);
    console.log('Selected barangay:', barangay);
    // You can add additional logic here:
    // - Update parent component
    // - Save to form state
    // - Trigger API call
  };

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

  return (
    <>
      <div className="office-card">
        {/* ── Header ── */}
        <div className="office-card__header">
          <div className="office-card__header-left">
            <span className="office-card__tag">{office.fullName}</span>
            {office.applicableTo && Array.isArray(office.applicableTo) && office.applicableTo.length > 0 && (
              office.applicableTo.map((type, i) => (
                <span key={i} className="office-card__applicable-tag">
                  {type}
                </span>
              ))
            )}
          </div>
          
          {/* ════════════════════════════════════════════════════════════════
              BARANGAY HALL BUTTON & DROPDOWN
              ════════════════════════════════════════════════════════════════ */}
          {isBarangayHall && (
            <div className="office-card__barangay-wrapper">
              {/* BUTTON */}
              <button
                ref={barangayButtonRef}
                className={`office-card__barangay-btn ${
                  selectedBarangay ? 'office-card__barangay-btn--selected' : ''
                }`}
                onClick={() => setShowBarangayDropdown(!showBarangayDropdown)}
                aria-label={selectedBarangay ? `Selected: ${selectedBarangay}` : 'Select barangay'}
                aria-expanded={showBarangayDropdown}
                aria-haspopup="listbox"
                title={selectedBarangay || 'Select a barangay'}
              >
                {/* BUTTON TEXT - shows selected barangay or placeholder */}
                <span>{selectedBarangay || 'Select Barangay'}</span>
                
                {/* ICON - only show when NOT selected */}
                {!selectedBarangay && (
                  <IoChevronDown className="office-card__barangay-btn-icon" />
                )}
              </button>
              
              {/* DROPDOWN */}
              {showBarangayDropdown && (
                <BarangayDropdown
                  isOpen={showBarangayDropdown}
                  onClose={() => setShowBarangayDropdown(false)}
                  triggerRef={barangayButtonRef}
                  onSelectBarangay={handleBarangaySelect}
                />
              )}
            </div>
          )}
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

        {/* ── Downloadables Section ── */}
        <div className="office-card__downloadables">
          <div className="office-card__downloadables-header">
            <span className="office-card__label">Downloadables:</span>
          </div>
          <div className="office-card__downloadables-list">
            <div className="office-card__download-row">
              <div className="office-card__download-left">
                <GrDocumentPdf 
                  className="office-card__download-item-icon"
                  style={{ color: 'var(--color-accent-warm)' }}
                />
                <span className="office-card__download-text">Application Form</span>
              </div>
              <button 
                className="office-card__download-btn"
                title="Download application form PDF"
                onClick={() => console.log('Download Application Form')}
              >
                <CgSoftwareDownload className="office-card__download-btn-icon" />
                <span className="office-card__download-btn-label">Download</span>
              </button>
            </div>
            <div className="office-card__download-row">
              <div className="office-card__download-left">
                <MdChecklist 
                  className="office-card__download-item-icon"
                  style={{ color: 'var(--color-accent-warm)' }}
                />
                <span className="office-card__download-text">Requirements Checklist</span>
              </div>
              <button 
                className="office-card__download-btn"
                title="Download requirements checklist PDF"
                onClick={() => console.log('Download Requirements Checklist')}
              >
                <CgSoftwareDownload className="office-card__download-btn-icon" />
                <span className="office-card__download-btn-label">Download</span>
              </button>
            </div>
          </div>
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
    </>
  );
};

export default OfficeCard;
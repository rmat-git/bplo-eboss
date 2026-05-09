import React from 'react';

// ─── OfficeTabs ───────────────────────────────────────────────────────────────
// Reusable tabbed navigation for switching between office options.
// Handles active state, accessibility, and click callbacks.
// ──────────────────────────────────────────────────────────────────────────────

const OfficeTabs = ({ offices, activeTab, onTabChange }) => {
  return (
    <div className="offices-page__tabs-container">
      <div className="offices-page__tabs-scroll">
        {offices.map((office, index) => (
          <button
            key={index}
            className={`offices-page__tab${
              index === activeTab ? ' offices-page__tab--active' : ''
            }`}
            onClick={() => onTabChange(index)}
            aria-label={`View ${office.name} details`}
            aria-pressed={index === activeTab}
          >
            {office.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OfficeTabs;
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfficePage.css';
import { OFFICES } from '../data/offices';

import HeroSection from './components/Hero';
import RequiredClearancesSection from './components/RequiredSection';
import SpecialClearancesSection from './components/SpecialSection';

const OfficesPage = ({ offices = OFFICES }) => {
  // ─── STATE ───────────────────────────────────────────────────────────
  const [activeTabRequired, setActiveTabRequired] = useState(0);
  const [activeTabSpecial, setActiveTabSpecial] = useState(0);
  const [activeSection, setActiveSection] = useState('required');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const navigate = useNavigate();

  // ─── RESPONSIVE DETECTION ────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 480);
      setIsTablet(width > 480 && width <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ─── DATA PROCESSING ─────────────────────────────────────────────────
  const officesList = Array.isArray(offices) && offices.length > 0 
    ? offices 
    : OFFICES;

  const requiredOffices = [
    officesList.find(o => o.name === 'Barangay'),
    officesList.find(o => o.name === 'BFP'),
    officesList.find(o => o.name === 'CPDO'),
    officesList.find(o => o.name === 'CHO'),
    officesList.find(o => o.name === 'OBO'),
    officesList.find(o => o.name === 'BENRO'),
  ].filter(Boolean);

  const specialOffices = [
    officesList.find(o => o.name === 'Agriculture'),
    officesList.find(o => o.name === 'Veterinary'),
    officesList.find(o => o.name === 'Tourism'),
    officesList.find(o => o.name === 'City Admin'),
    officesList.find(o => o.name === 'BTTMD'),
    officesList.find(o => o.name === 'SP'),
  ].filter(Boolean);

  // ─── HANDLERS ────────────────────────────────────────────────────────
  const handleNavigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSectionToggle = useCallback((section) => {
    setActiveSection(section);
    // On mobile, scroll to section header
    if (isMobile) {
      setTimeout(() => {
        const header = document.querySelector('.clearance-group-section__header');
        header?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isMobile]);

  // ─── EARLY RETURN ───────────────────────────────────────────────────
  if (!officesList || officesList.length === 0) {
    return (
      <div className="offices-page__content">
        <HeroSection 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          isMobile={isMobile}
        />
        <div className="offices-page__empty-state">
          <p>No offices available</p>
        </div>
      </div>
    );
  }

  // ─── RENDER ──────────────────────────────────────────────────────────
  return (
    <div className={`offices-page__content offices-page__content--${isMobile ? 'mobile' : 'desktop'}`}>
      <HeroSection 
        activeSection={activeSection} 
        onSectionChange={handleSectionToggle}
        isMobile={isMobile}
      />

      {activeSection === 'required' && (
        <RequiredClearancesSection
          offices={requiredOffices}
          activeTab={activeTabRequired}
          onTabChange={setActiveTabRequired}
          isMobile={isMobile}
          isTablet={isTablet}
          onNavigateBack={handleNavigateBack}
          onSectionToggle={handleSectionToggle}
        />
      )}

      {activeSection === 'special' && (
        <SpecialClearancesSection
          offices={specialOffices}
          activeTab={activeTabSpecial}
          onTabChange={setActiveTabSpecial}
          isMobile={isMobile}
          isTablet={isTablet}
          onNavigateBack={handleNavigateBack}
          onSectionToggle={handleSectionToggle}
        />
      )}
    </div>
  );
};

export default OfficesPage;
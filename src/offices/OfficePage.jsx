import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfficePage.css';
import { OFFICES } from '../data/offices';

import HeroSection from './components/Hero';
import RequiredClearancesSection from './components/RequiredSection';
import SpecialClearancesSection from './components/SpecialSection';

const OfficesPage = ({ offices = OFFICES }) => {
  const [activeTabRequired, setActiveTabRequired] = useState(0);
  const [activeTabSpecial, setActiveTabSpecial] = useState(0);
  const [activeSection, setActiveSection] = useState('required');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
    officesList.find(o => o.name === 'RONO'),
  ].filter(Boolean);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!officesList || officesList.length === 0) {
    return (
      <div className="offices-page__content">
        <HeroSection activeSection={activeSection} onSectionChange={setActiveSection} />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>No offices available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="offices-page__content">
      <HeroSection activeSection={activeSection} onSectionChange={setActiveSection} />

      {activeSection === 'required' && (
        <RequiredClearancesSection
          offices={requiredOffices}
          activeTab={activeTabRequired}
          onTabChange={setActiveTabRequired}
          isMobile={isMobile}
          onNavigateBack={() => navigate(-1)}
          onSectionToggle={setActiveSection}  // ← PASS THIS PROP
        />
      )}

      {activeSection === 'special' && (
        <SpecialClearancesSection
          offices={specialOffices}
          activeTab={activeTabSpecial}
          onTabChange={setActiveTabSpecial}
          isMobile={isMobile}
          onNavigateBack={() => navigate(-1)}
          onSectionToggle={setActiveSection}  // ← PASS THIS PROP
        />
      )}
    </div>
  );
};

export default OfficesPage;
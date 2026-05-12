import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RxDoubleArrowDown } from "react-icons/rx";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './frontpage/FrontPage';
import NewPage from './new/NewPage';
import RenewalPage from './renewal/RenewalPage';
import OfficePage from './offices/OfficePage';

// ─── ScrollIndicator ──────────────────────────────────────────────────────────
// A button that hints to users to scroll down for more information.
// Shows animated arrow icon with "read more" text. Can be placed at the 
// top level or within hero sections.
// ─────────────────────────────────────────────────────────────────────────────
function ScrollIndicator({ onClick, targetSelector = 'main' }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (targetSelector) {
      // Auto-scroll to target element
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <button 
      className="scroll-indicator" 
      onClick={handleClick}
      aria-label="Scroll down for more information"
      type="button"
    >
      <span className="scroll-indicator__text">Read More</span>
      <div className="scroll-indicator__chevron">
        <PiArrowFatLineDownLight size={24} />
      </div>
    </button>
  );
}

// ─── FloatingScrollOverlay ────────────────────────────────────────────────────
// A persistent floating overlay in the bottom right corner that guides users
// to scroll or explore more content. Shows "View More..." text with a large icon.
// Intelligently hides when user is near the bottom of the page.
// ──────────────────────────────────────────────────────────────────────────────
function FloatingScrollOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page user has scrolled
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      // Hide overlay if:
      // 1. User has scrolled more than 50% down the page
      // 2. User is within 400px of the bottom
      const isNearBottom = scrolled > windowHeight * 0.5 || 
                          (documentHeight - scrolled - windowHeight) < 400;
      
      setIsVisible(!isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to next section or continue scrolling
    const nextScroll = window.scrollY + window.innerHeight;
    window.scrollTo({
      top: nextScroll,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`floating-scroll-overlay ${isVisible ? 'floating-scroll-overlay--visible' : ''}`}
      onClick={handleClick}
      aria-label="Continue scrolling to explore more"
      type="button"
      title="Continue scrolling"
    >
      <div className="floating-scroll-overlay__text">View More...</div>
      <div className="floating-scroll-overlay__icon">
        <RxDoubleArrowDown size={40} />
      </div>
    </button>
  );
}

// ─── ScrollToTop ──────────────────────────────────────────────────────────────
// Resets scroll position to top whenever the route changes.
// Solves the issue where navigating to a new page maintains the previous scroll
// position. Fire this after every pathname change.
// ─────────────────────────────────────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ─── App ──────────────────────────────────────────────────────────────────────
// Global application wrapper that manages page navigation using React Router.
// Renders Header, page content via Routes, and Footer globally.
//
// Routes:
//   - '/': Landing page (FrontPage)
//   - '/new': New business permit registration flow (NewPage)
//   - '/renewal': Business permit renewal flow (RenewalPage)
//   - '/offices': Office locations page (OfficePage)
//   - '/register': Registration form (placeholder)
//
// Also includes FloatingScrollOverlay for persistent user guidance.
// ──────────────────────────────────────────────────────────────────────────────

function App() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to registration form or external URL
    navigate('/register');
  };

  const handleRenewClick = () => {
    // Navigate to renewal form or external URL
    navigate('/register');
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <FloatingScrollOverlay />

      {/* Page content via React Router */}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route 
          path="/new" 
          element={<NewPage onRegisterClick={handleRegisterClick} />} 
        />
        <Route 
          path="/renewal" 
          element={<RenewalPage onRenewClick={handleRenewClick} />} 
        />
        <Route path="/offices" element={<OfficePage />} />
        <Route 
          path="/register" 
          element={
            <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '60vh' }}>
              <h1>Registration Form</h1>
              <p>Coming soon...</p>
            </div>
          } 
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './frontpage/FrontPage';
import NewPage from './new/NewPage';
import RenewalPage from './renewal/RenewalPage';
import OfficePage from './offices/OfficePage';

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
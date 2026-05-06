import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './frontpage/FrontPage';
import NewPage from './new/NewPage';

// ─── App ─────────────────────────────────────────────────────────────────────
// Global application wrapper that manages page navigation between FrontPage
// and NewPage. Renders Header, page content, and Footer globally.
//
// Pages:
//   - 'front': Landing page with options
//   - 'new': New business permit registration flow
//   - 'register': Registration form (future)
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  const [currentPage, setCurrentPage] = useState('front'); // 'front', 'new', or 'register'

  // Navigation handlers
  const handleRegister = () => {
    console.log('Register clicked - navigate to registration form');
    setCurrentPage('register'); // TODO: Create RegistrationForm component
  };

  const handleSignIn = () => {
    console.log('Sign In clicked');
    // TODO: Implement sign-in logic
  };

  const handleNewPermit = () => {
    console.log('New Permit clicked - navigate to permit info');
    setCurrentPage('new');
  };

  const handleRenewal = () => {
    console.log('Renewal clicked');
    // TODO: Implement renewal flow
  };

  return (
    <>
      <Header
        onRegisterClick={handleRegister}
        onSignInClick={handleSignIn}
      />

      {/* Page content */}
      {currentPage === 'front' ? (
        <FrontPage 
          onNewPermitClick={handleNewPermit}
          onRenewalClick={handleRenewal}
        />
      ) : currentPage === 'new' ? (
        <NewPage onRegisterClick={handleRegister} />
      ) : currentPage === 'register' ? (
        <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '60vh' }}>
          <h1>Registration Form</h1>
          <p>Coming soon...</p>
          <button onClick={() => setCurrentPage('new')}>Back</button>
        </div>
      ) : null}

      <Footer />
    </>
  );
}

export default App;
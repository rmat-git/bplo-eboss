import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Stepper from './components/Stepper';
import RequirementsSection from './components/RequirementsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import useIntersectionObserver from './hooks/useIntersectionObserver';

// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: 1,
    title: 'Register',
    description: 'Fill out your business application online with your business name and location details.',
  },
  {
    number: 2,
    title: 'Assessment & Payment',
    description: 'Review your tax summary and complete payment over-the-counter or online.',
  },
  {
    number: 3,
    title: 'Claim Permit',
    description: "Pick up your Mayor's Permit in person or receive it via email once approved.",
  },
];

const REQUIREMENTS = [
  {
    stepNumber: 1,
    title: 'Business Registration',
    items: [
      {
        label: 'Business Name Registration',
        sub: ['DTI (Sole Proprietorship)', 'SEC (Corporation/Partnership)', 'CDA (Cooperative)'],
      },
      {
        label: 'Proof of Business Location Ownership',
        sub: ['Tax Declaration', 'Lease Contract', 'Affidavit of Use'],
      },
    ],
  },
  {
    stepNumber: 2,
    title: 'Assessment & Payment',
    items: [
      'System-generated billing summary of taxes, fees & charges',
      'Billing may be sent via email for reference',
      {
        label: 'Payment Options',
        sub: ['Over-the-counter (physical)', 'Online payment (via link)'],
      },
    ],
  },
  {
    stepNumber: 3,
    title: 'Permit Claim',
    items: [
      {
        label: 'Walk-in (Business Owner)',
        sub: ['Government-issued ID', 'Business purpose statement'],
      },
      {
        label: 'Walk-in (Authorized Representative)',
        sub: ['Special Power of Attorney (SPA)', 'Board Resolution', 'Letter of Authority'],
      },
      "Mayor's Permit may also be delivered via email",
    ],
  },
];

// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  useIntersectionObserver('.fade-in');

  const handleRegister = () => console.log('Register clicked');
  const handleSignIn   = () => console.log('Sign In clicked');
  const handleFeedback = () => console.log('Feedback clicked');

  return (
    <>
      <Header
        onRegisterClick={handleRegister}
        onSignInClick={handleSignIn}
      />

      {/* Offset main content so it starts below the fixed header */}
      <main className="header-offset">
        <HeroSection title="How to Apply for NEW BUSINESS" />
        <Stepper steps={STEPS} />
        <RequirementsSection requirements={REQUIREMENTS} />
        <CTASection onFeedbackClick={handleFeedback} />
      </main>

      <Footer />
    </>
  );
}

export default App;
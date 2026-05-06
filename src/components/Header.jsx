import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdCall, MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = ({ onRegisterClick, onSignInClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const contactRef = useRef(null);

  // Scroll listener — triggers frosted bg after 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setContactDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const headerClass = [
    "header",
    scrolled ? "header--scrolled" : "",
    mobileOpen ? "header--open" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header className={headerClass}>
        <div className="header__inner">

          {/* Logo */}
          <a href="/" className="header__logo-link">
            <img
              src={logo}
              alt="eBOSS Logo"
              className="header__logo"
              onError={e => { e.target.style.display = "none"; }}
            />
          </a>

          {/* Navigation — desktop */}
          <nav className="header__nav">
            <a href="/" className="header__nav-link">Home</a>
            
            {/* Contact Us Dropdown */}
            <div className="header__dropdown" ref={contactRef}>
              <button
                className="header__nav-link header__dropdown-toggle"
                onClick={() => setContactDropdown(!contactDropdown)}
              >
                Contact Us
                <IoChevronDown className="header__dropdown-icon" />
              </button>

              {/* Dropdown Menu */}
              <div className={`header__dropdown-menu${contactDropdown ? " header__dropdown-menu--open" : ""}`}>
                <a href="tel:4352606" className="header__dropdown-item">
                  <MdCall className="header__dropdown-item-icon" />
                  435 2606
                </a>
                <a href="mailto:bplo_register@bacolodcity.gov.ph" className="header__dropdown-item">
                  <MdEmail className="header__dropdown-item-icon" />
                  bplo_register@bacolodcity.gov.ph
                </a>
                <a href="https://www.facebook.com/bacolodpermits" target="_blank" rel="noopener noreferrer" className="header__dropdown-item">
                  <FaFacebook className="header__dropdown-item-icon" />
                  Facebook
                </a>
              </div>
            </div>
          </nav>

          {/* Auth buttons — desktop */}
          <div className="header__auth">
            <button className="button button--primary" onClick={onSignInClick}>
              Log In
            </button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`header__hamburger${mobileOpen ? " header__hamburger--open" : ""}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
          </button>
        </div>
      </header>

      {/* ── Mobile backdrop ── */}
      <div
        className={`header__overlay${mobileOpen ? " header__overlay--visible" : ""}`}
        onClick={closeMobile}
      />

      {/* ── Mobile drawer ── */}
      <div className={`header__drawer${mobileOpen ? " header__drawer--open" : ""}`}>
        <nav className="header__drawer-nav">
          <a href="/" className="header__drawer-link" onClick={closeMobile}>Home</a>
          
          <div className="header__drawer-dropdown">
            <button
              className="header__drawer-link header__drawer-dropdown-toggle"
              onClick={() => setContactDropdown(!contactDropdown)}
            >
              Contact Us
              <IoChevronDown className="header__dropdown-icon" />
            </button>
            {contactDropdown && (
              <div className="header__drawer-dropdown-menu">
                <a href="tel:4352606" className="header__drawer-dropdown-item" onClick={closeMobile}>
                  <MdCall className="header__dropdown-item-icon" />
                  435 2606
                </a>
                <a href="mailto:bplo_register@bacolodcity.gov.ph" className="header__drawer-dropdown-item" onClick={closeMobile}>
                  <MdEmail className="header__dropdown-item-icon" />
                  bplo_register@bacolodcity.gov.ph
                </a>
                <a href="https://www.facebook.com/bacolodpermits" target="_blank" rel="noopener noreferrer" className="header__drawer-dropdown-item">
                  <FaFacebook className="header__dropdown-item-icon" />
                  Facebook
                </a>
              </div>
            )}
          </div>
        </nav>

        <button
          className="button button--primary header__drawer-btn"
          onClick={() => { onSignInClick?.(); closeMobile(); }}
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default Header;
import logomitcs from "../assets/logo-m.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content">

        <div className="footer__brand">
          <img
            src={logomitcs}
            alt="eBOSS"
            className="footer__logo"
            onError={e => { e.target.style.display = "none"; }}
          />
          <div className="footer__brand-text">
            <span className="footer__name">eBOSS Portal — Bacolod City</span>
          </div>
        </div>

        <div className="footer__right">
          <span className="footer__copy">
            © {year} EBIS 4.0 — Bacolod City Government. Republic of the Philippines. All rights reserved.
          </span>
          <span className="footer__made-by">
            Crafted by R.M. Negrido, A.C. Kardinas &amp; S.M. Villalobos · MITCS Interns 2025
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
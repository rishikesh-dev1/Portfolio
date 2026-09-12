export default function Header() {
  return (
    <header className="header header-two header-three tw-transition-all tw-z-99 position-relative">
      <div className="container tw-container-1800-px">
        <nav className="d-flex align-items-center justify-content-between position-relative">
          {/* Logo Start */}
          <div className="header-three-logo tw-rounded-md">
            <a
              href="#/"
              className="link"
              onClick={() => {
                window.location.hash = '#/';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="https://res.cloudinary.com/dl6hpq7mm/image/upload/v1789102431/075d53bf-7cc7-4803-a1b0-5ff27ddfd5ed.png"
                alt="Rishikesh Logo"
                className="max-w-200-px"
                style={{ maxHeight: "44px", width: "auto", objectFit: "contain" }}
              />
            </a>
          </div>
          {/* Logo End */}

          {/* Social Links Start */}
          <div className="header-three-social d-none d-lg-block">
            <ul className="d-flex tw-gap-205">
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="https://github.com/rishikesh5577"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="https://linkedin.com/in/rishikesh-wakchaure-06055524b"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="https://rishikeshportfolio-alpha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Portfolio"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="mailto:wakchaurerishi5555@gmail.com"
                  title="Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2.5" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Social Links End */}

          {/* Header Right Start */}
          <div className="header-right d-flex align-items-center tw-gap-705">
            {/* Menu Toggle Button Start */}
            <div className="header-three-menu">
              <button
                className="tw-offcanvas-open-btn tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center tw-transition-3 tw-rounded-md"
                aria-label="Open mobile menu"
              >
                <span>
                  <img
                    className="tw-transition-3"
                    src="/assets/images/icons/header-three-toggle.svg"
                    alt="toggle"
                  />
                </span>
              </button>
            </div>
            {/* Menu Toggle Button End */}


            {/* Download CV Button Start */}
            <div className="header-three-button d-none d-md-block">
              <a
                className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md"
                href="https://drive.google.com/file/d/1RFoJGHYb8cOP2fnlq-inat087bWSMyhK/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                download cv
                <span className="tw-hover-btn-circle-dot bg-main-two-600"></span>
              </a>
            </div>
            {/* Download CV Button End */}
          </div>
          {/* Header Right End */}
        </nav>
      </div>
    </header>
  );
}

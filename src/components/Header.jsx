export default function Header() {
  return (
    <header className="header header-two header-three tw-transition-all tw-z-99 position-relative">
      <div className="container tw-container-1800-px">
        <nav className="d-flex align-items-center justify-content-between position-relative">
          {/* Logo Start */}
          <div className="header-three-logo tw-rounded-md">
            <a href="/" className="link">
              <img
                src="/assets/images/logo/logo-secendary.png"
                alt="Rishikesh Logo"
                className="max-w-200-px"
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
                  <i className="ph-bold ph-github-logo"></i>
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
                  <i className="ph-bold ph-linkedin-logo"></i>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="https://rishiwakchaure.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Portfolio"
                >
                  <i className="ph-bold ph-globe"></i>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="mailto:wakchaurerishi5555@gmail.com"
                  title="Email"
                >
                  <i className="ph-bold ph-envelope"></i>
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
                href="/Rishikesh_CV.pdf"
                download="Rishikesh_Wakchaure_CV.pdf"
                target="_blank"
                rel="noreferrer"
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

export default function Offcanvas() {
  return (
    <div className="tw-offcanvas-2-area p-relative">
      <div className="tw-offcanvas-2-bg is-left left-box"></div>
      <div className="tw-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
      <div className="tw-offcanvas-2-wrapper">
        <div className="tw-offcanvas-2-left left-box">
          <div className="tw-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
            <div className="twoffcanvas__logo">
              <a
                className="logo-1"
                href="#/"
                onClick={() => {
                  document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened');
                  window.location.hash = '#/';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img
                  src="https://res.cloudinary.com/dl6hpq7mm/image/upload/v1789125933/4985a757-e25e-4bc2-83fb-c06fc749bfe8.png"
                  alt="Rishikesh Logo"
                  style={{ maxHeight: "44px", width: "auto", objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="tw-offcanvas-2-close d-md-none text-end">
              <button
                className="tw-offcanvas-2-close-btn tw-offcanvas-2-close-btn"
                aria-label="Close menu"
                onClick={() => document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened')}
              >
                <span className="text">
                  <span className="text-white">close</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32.621"
                        height="1.00918"
                        transform="matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)"
                        fill="currentcolor"
                      />
                      <rect
                        width="32.621"
                        height="1.00918"
                        transform="matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="tw-main-menu-mobile menu-hover-active counter-row">
            <nav>
              <ul>
                <li>
                  <a
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened');
                      window.location.hash = '#/';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>HOME</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#/works"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened');
                      window.location.hash = '#/works';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>WORKS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened');
                      window.location.hash = '#/contact';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>CONTACT</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Rishikesh_CV.pdf"
                    download="Rishikesh_Wakchaure_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened');
                    }}
                  >
                    <span className="d-flex align-items-center gap-2">
                      DOWNLOAD CV <i className="ph ph-download-simple tw-text-xl"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="tw-mt-8 pt-2">
              <a
                className="tw-hover-btn bg-main-two-600 text-white fw-bold tw-py-3 tw-px-8 d-inline-flex align-items-center gap-2 hover-text-white text-uppercase tw-rounded-md"
                href="/Rishikesh_CV.pdf"
                download="Rishikesh_Wakchaure_CV.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened');
                }}
              >
                <i className="ph ph-download-simple tw-text-lg"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="tw-offcanvas-2-right right-box d-none d-md-block p-relative">
          <div className="tw-offcanvas-2-close text-end">
            <button
              className="tw-offcanvas-2-close-btn"
              aria-label="Close menu"
              onClick={() => document.querySelector('.tw-offcanvas-2-area')?.classList.remove('opened')}
            >
              <span className="text">
                <span>close</span>
              </span>
              <span className="d-inline-block">
                <span>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.80859 9.80762L28.1934 28.1924"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.80859 28.1924L28.1934 9.80761"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
          <div className="tw-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
            <div className="twoffcanvas__contact-info">
              <div className="twoffcanvas__contact-title">
                <h5 className="text-white">Contact Info</h5>
              </div>
              <ul>
                <li>
                  <span className="text-main-two-600 tw-text-xl">
                    <i className="ph ph-map-pin-line"></i>
                  </span>
                  <span className="text-white">Maharashtra, India</span>
                </li>
                <li>
                  <span className="text-main-two-600 tw-text-xl">
                    <i className="ph ph-envelope"></i>
                  </span>
                  <a className="text-white" href="mailto:wakchaurerishi5555@gmail.com">
                    <span className="__cf_email__">wakchaurerishi5555@gmail.com</span>
                  </a>
                </li>
                <li>
                  <span className="text-main-two-600 tw-text-xl">
                    <i className="ph ph-phone-call"></i>
                  </span>
                  <a className="text-white" href="tel:+919322330456">+91 9322330456</a>
                </li>
              </ul>
            </div>
            <div
              className="footer-social"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <ul className="tw-gap-2">
                <li>
                  <a href="https://github.com/rishikesh5577" target="_blank" rel="noreferrer">
                    <span className="active-media d-flex align-items-center tw-gap-1">
                      GITHUB <i className="ph ph-arrow-bend-up-right"></i>
                    </span>
                    <span className="hover-media">
                      <i className="ph ph-github-logo"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/rishikesh-wakchaure-06055524b" target="_blank" rel="noreferrer">
                    <span className="active-media d-flex align-items-center tw-gap-1">
                      LINKEDIN <i className="ph ph-arrow-bend-up-right"></i>
                    </span>
                    <span className="hover-media">
                      <i className="ph ph-linkedin-logo"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://rishiwakchaure.vercel.app" target="_blank" rel="noreferrer">
                    <span className="active-media d-flex align-items-center tw-gap-1">
                      PORTFOLIO <i className="ph ph-arrow-bend-up-right"></i>
                    </span>
                    <span className="hover-media">
                      <i className="ph ph-globe"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

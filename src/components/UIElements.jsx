export default function UIElements() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            id="preloaderSvg"
            d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          ></path>
        </svg>
        <div className="preloader-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Sidebar Overlay */}
      <div className="side-overlay"></div>

      {/* Magic Cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      {/* Toast Message Container */}
      <div id="toast-container"></div>

      {/* Scroll to Top */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn" aria-label="Back to top">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default function PortfolioSection() {
  return (
    <section className="portfolio-three-area py-120 position-relative z-1" id="portfolio">
      <div className="portfolio-three-shape">
        <h3 className="portfolio-three-shape-title">works</h3>
      </div>
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-three-wrapper d-flex justify-content-between flex-wrap align-items-start position-relative z-1">
              {/* Project 1: RestroBazaar */}
              <div className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper">
                <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                  <div className="tw-mb-6">
                    <div>
                      <span className="text-main-two-600 tw-text-sm fw-semibold text-uppercase tw-mb-2 d-inline-block">
                        Freelance — Live Project
                      </span>
                      <h2 className="tw-text-605 fw-medium tw-mb-4">
                        <a className="hover-text-main-two-600" href="#portfolio">
                          RestroBazaar
                        </a>
                      </h2>
                    </div>
                    <div className="portfolio-three-list portfolio-list">
                      <ul className="d-flex tw-gap-205 flex-wrap">
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            React.js
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            Node.js
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            AWS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-three-button">
                      <a
                        className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                        href="#portfolio"
                        aria-label="View Project"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                  data-cursor="View"
                >
                  <a className="d-block cursor-hide tw-rounded-lg" href="#portfolio">
                    <img
                      className="w-100 tw-rounded-lg"
                      src="/assets/images/thumbs/portfolio-three-thumb2.jpg"
                      alt="RestroBazaar Multi-vendor eCommerce"
                    />
                  </a>
                </div>
              </div>

              {/* Project 2: AKHD Media */}
              <div className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper">
                <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                  <div className="tw-mb-6">
                    <div>
                      <span className="text-main-two-600 tw-text-sm fw-semibold text-uppercase tw-mb-2 d-inline-block">
                        Freelance — Live Project
                      </span>
                      <h2 className="tw-text-605 fw-medium tw-mb-4">
                        <a className="hover-text-main-two-600" href="#portfolio">
                          AKHD Media
                        </a>
                      </h2>
                    </div>
                    <div className="portfolio-three-list portfolio-list">
                      <ul className="d-flex tw-gap-205 flex-wrap">
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            MERN Stack
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            Amazon S3
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            AWS Hosting
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-three-button">
                      <a
                        className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                        href="#portfolio"
                        aria-label="View Project"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                  data-cursor="View"
                >
                  <a className="d-block cursor-hide tw-rounded-lg" href="#portfolio">
                    <img
                      className="w-100 tw-rounded-lg"
                      src="/assets/images/thumbs/portfolio-three-thumb1.jpg"
                      alt="AKHD Media Video Platform"
                    />
                  </a>
                </div>
              </div>

              {/* Project 3: Smart Agriculture */}
              <div className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper">
                <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                  <div className="tw-mb-6">
                    <div>
                      <span className="text-main-two-600 tw-text-sm fw-semibold text-uppercase tw-mb-2 d-inline-block">
                        Academic & IoT Project
                      </span>
                      <h2 className="tw-text-605 fw-medium tw-mb-4">
                        <a className="hover-text-main-two-600" href="#portfolio">
                          Smart Agriculture
                        </a>
                      </h2>
                    </div>
                    <div className="portfolio-three-list portfolio-list">
                      <ul className="d-flex tw-gap-205 flex-wrap">
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            Python
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            IoT & Sensors
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            ML Models (85%)
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            AI Chatbot
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-three-button">
                      <a
                        className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                        href="#portfolio"
                        aria-label="View Project"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                  data-cursor="View"
                >
                  <a className="d-block cursor-hide tw-rounded-lg" href="#portfolio">
                    <img
                      className="w-100 tw-rounded-lg"
                      src="/assets/images/thumbs/portfolio-three-thumb3.jpg"
                      alt="Smart Agriculture IoT and ML"
                    />
                  </a>
                </div>
              </div>

              {/* Project 4: AI Agents & Automation */}
              <div className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper">
                <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                  <div className="tw-mb-6">
                    <div>
                      <span className="text-main-two-600 tw-text-sm fw-semibold text-uppercase tw-mb-2 d-inline-block">
                        Gamotech Solutions
                      </span>
                      <h2 className="tw-text-605 fw-medium tw-mb-4">
                        <a className="hover-text-main-two-600" href="#portfolio">
                          AI Agents & Workflow Automation
                        </a>
                      </h2>
                    </div>
                    <div className="portfolio-three-list portfolio-list">
                      <ul className="d-flex tw-gap-205 flex-wrap">
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            AI Agents
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            LLM APIs & RAG
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            CRM & Follow-ups
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#portfolio"
                          >
                            React.js
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-three-button">
                      <a
                        className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                        href="#portfolio"
                        aria-label="View Project"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                  data-cursor="View"
                >
                  <a className="d-block cursor-hide tw-rounded-lg" href="#portfolio">
                    <img
                      className="w-100 tw-rounded-lg"
                      src="/assets/images/thumbs/portfolio-three-thumb4.jpg"
                      alt="AI Chatbot and Automation Workflows"
                    />
                  </a>
                </div>
              </div>

              {/* Discover Projects Counter Circle */}
              <div className="about-three-counter portfolio-three-counter d-flex justify-content-center w-100">
                <div className="tw-hover-btn-wrapper d-inline-block">
                  <a
                    className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden"
                    href="#about"
                  >
                    <span className="d-flex flex-column justify-content-center">
                      <span className="text-heading fw-bold tw-transition-3 tw-text-2xl fw-semibold">
                        Discover <br />
                        Our Projects <i className="ph ph-arrow-up-right"></i>
                      </span>
                    </span>
                    <i className="tw-btn-circle-dot bg-main-two-600"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesSection() {
  return (
    <>
      {/* ======================== Marquee section start =========================== */}
      <div className="marquee tw-pt-17 bg-black">
        <div className="marquee_left d-flex align-items-center justify-content-between tw-gap-16 overflow-hidden">
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-white">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-stroke">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-white">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-stroke">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-white">
              Services <span className="text-white">-</span>
            </h2>
          </div>
        </div>
      </div>
      {/* ======================== Marquee section end =========================== */}

      <section className="service-three-area bg-black pt-120 tw-pb-15" id="services">
        <div className="container tw-container-1800-px">
          <div className="row">
            <div className="col-12">
              <div className="service-three-wrapper">
                {/* Service 01 */}
                <div
                  className="service-three-single"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          01
                          <img
                            className="tw-transition-3"
                            src="/assets/images/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="#services">AI Agents & LLM Solutions</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                AI Agents
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                AI Chatbots
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                LLM APIs & RAG
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                Prompt Engineering
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="#services">
                        <img
                          src="/assets/images/thumbs/service-three-ai.jpg"
                          alt="AI Agents & LLM Solutions"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service 02 */}
                <div
                  className="service-three-single ms-auto"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          02
                          <img
                            className="tw-transition-3"
                            src="/assets/images/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="#services">Full Stack & MERN Development</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                React.js
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                Node.js
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                Express.js
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                MongoDB
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="#services">
                        <img
                          src="/assets/images/thumbs/service-three-fullstack.jpg"
                          alt="Full Stack & MERN Development"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service 03 */}
                <div
                  className="service-three-single"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          03
                          <img
                            className="tw-transition-3"
                            src="/assets/images/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="#services">Cloud & DevOps Engineering</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                AWS (EC2 & S3)
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                Docker
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                Git & GitHub
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="#services">
                        <img
                          src="/assets/images/thumbs/service-three-cloud.jpg"
                          alt="Cloud & DevOps Engineering"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service 04 */}
                <div
                  className="service-three-single ms-auto"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="500"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          04
                          <img
                            className="tw-transition-3"
                            src="/assets/images/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="#services">Backend & REST API Engineering</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                REST APIs
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                Python & Java
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#services"
                              >
                                SQL & Postman
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="#services">
                        <img
                          src="/assets/images/thumbs/service-three-backend.jpg"
                          alt="Backend & REST API Engineering"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

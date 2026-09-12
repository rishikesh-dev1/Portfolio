export default function HeroSection() {
  return (
    <section className="banner-three-area">
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner-three-wrapper position-relative z-1">
              <div className="banner-three-hero-stage position-relative">
                <div className="banner-three-man position-absolute start-50 translate-middle-x">
                  <img
                    src="/assets/images/shapes/hero-man.png?v=2"
                    alt="Rishikesh Wakchaure"
                  />
                </div>
                <h1
                  className="banner-three-title text-black mb-2"
                  style={{ letterSpacing: '0.08em' }}
                >
                  engineer
                </h1>
              </div>

              <div className="banner-three-wrap d-flex justify-content-between align-items-end position-relative z-1">
                <div
                  className="banner-three-left tw-rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h2 className="banner-three-left-title tw-text-3xl tw-mb-6">
                    Hello! I'm Rishikesh <br />
                    a Full Stack Software Developer.
                  </h2>
                  <div className="banner-three-list">
                    <ul>
                      <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                        <span>
                          <img
                            src="/assets/images/icons/banner-three-pluse.svg"
                            alt="pluse"
                          />
                        </span>
                        React.js & Full-Stack Web
                      </li>
                      <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                        <span>
                          <img
                            src="/assets/images/icons/banner-three-pluse.svg"
                            alt="pluse"
                          />
                        </span>
                        Node.js & RESTful APIs
                      </li>
                      <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                        <span>
                          <img
                            src="/assets/images/icons/banner-three-pluse.svg"
                            alt="pluse"
                          />
                        </span>
                        AI Agents, Chatbots & RAG
                      </li>
                      <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                        <span>
                          <img
                            src="/assets/images/icons/banner-three-pluse.svg"
                            alt="pluse"
                          />
                        </span>
                        AWS Cloud (EC2, S3) & Docker
                      </li>
                      <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                        <span>
                          <img
                            src="/assets/images/icons/banner-three-pluse.svg"
                            alt="pluse"
                          />
                        </span>
                        MongoDB & SQL Databases
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Center: line+dot above, headline below — original template layout */}
                <div
                  className="banner-three-center text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h3 className="banner-three-center-title tw-text-120">
                    Engineering Scalable Platforms, Cloud Systems & Intelligent AI
                    Solutions.
                  </h3>
                  <div className="banner-three-button">
                    <a
                      className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-lg"
                      href="#portfolio"
                    >
                      view projects
                      <span className="tw-hover-btn-circle-dot bg-main-two-600"></span>
                    </a>
                  </div>
                </div>

                <div
                  className="banner-three-right tw-rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <div className="banner-three-counter-item tw-rounded-md tw-mb-4 position-relative">
                    <h4 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                      <span
                        className="purecounter font-heading"
                        data-purecounter-duration="2"
                        data-purecounter-end="100"
                      ></span>
                      %
                    </h4>
                    <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                      Project Delivery Focus
                    </p>
                  </div>
                  <div className="banner-three-counter-item tw-rounded-md tw-mb-4 ms-auto bg-black">
                    <h4 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-white tw-mb-2 lh-1">
                      <span
                        className="purecounter font-heading"
                        data-purecounter-duration="2"
                        data-purecounter-end="3"
                      ></span>
                      +
                    </h4>
                    <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-white">
                      Live Client & IoT Projects
                    </p>
                  </div>
                  <div className="banner-three-counter-item tw-rounded-md tw-mb-4">
                    <div className="d-flex align-items-center tw-mb-2">
                      <div className="tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-2 tw-hover-z-9 position-relative z-1 border border-2 border-white">
                        <img
                          src="/assets/images/thumbs/team-img1.png"
                          alt="Client Image"
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-2 tw-hover-z-9 position-relative z-2 tw--ms-16-px z-1 border border-2 border-white">
                        <img
                          src="/assets/images/thumbs/team-img2.png"
                          alt="Client Image"
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-2 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-2 border-white">
                        <img
                          src="/assets/images/thumbs/team-img3.png"
                          alt="Client Image"
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-2 tw-hover-z-9 position-relative z-3 tw--ms-16-px z-1 border border-2 border-white">
                        <img
                          src="/assets/images/thumbs/team-img4.png"
                          alt="Client Image"
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                    </div>
                    <h4 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                      7.89
                    </h4>
                    <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                      B.E. IT CGPA (SPPU)
                    </p>
                  </div>
                </div>

                {/* Horizontal line above the center text */}
                <div className="banner-three-line-shape position-absolute start-50 translate-middle-x">
                  <img
                    src="/assets/images/shapes/banner-three-shape.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

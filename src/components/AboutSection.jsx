export default function AboutSection() {
  return (
    <section className="about-three-area py-120 position-relative z-1" id="about">
      <div className="container tw-container-1800-px">
        <div className="about-three-top position-relative z-1">
          <div className="row justify-content-center tw-mb-21">
            <div className="col-xl-9">
              <div className="text-center">
                <h2 className="about-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">
                  Software Developer specializing in full-stack engineering, robust REST APIs, AWS cloud architectures, and intelligent AI agents—building scalable, production-ready platforms with real-world impact.
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-start about-three-bio-row g-4 g-xl-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div
                className="about-three-thumb w-100 tw-rounded-lg overflow-hidden position-relative"
                style={{
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1,
                  maxWidth: '100%',
                }}
              >
                <img
                  className="w-100 tw-rounded-lg d-block"
                  src="https://res.cloudinary.com/dl6hpq7mm/image/upload/v1789093780/e43bc394-e3fc-4bcc-9d4f-3d59413c2049.png"
                  alt="Rishikesh Wakchaure - Full Stack Software Developer"
                  loading="eager"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '16px',
                    visibility: 'visible',
                    opacity: 1,
                  }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div
                className="about-three-right"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div>
                  <p className="tw-text-xl tw-mb-10 about-three-bio-lead">
                    I am Rishikesh Wakchaure, an Information Technology engineering graduate from Amrutvahini College of Engineering, SPPU (CGPA: 7.89 / 10.00), dedicated to full-stack engineering, cloud architectures, and generative AI systems.
                  </p>
                  <p className="tw-text-xl tw-mb-10">
                    Currently working as an Associate Software Developer at Gamotech Solutions Pvt. Ltd., I develop and maintain reusable React.js UI components, design and integrate RESTful APIs with Node.js & Express.js, and build AI agents and chatbot solutions with LLM APIs for automated business workflows and CRM operations.
                  </p>
                  <p className="tw-text-xl tw-mb-10">
                    Previously at Infosys Springboard, I gained deep full-stack experience in end-to-end web applications, databases, and Git collaboration. Certified as an AWS Cloud Practitioner and winner at Amrut Expo 2025, I have successfully delivered live freelance platforms including RestroBazaar and AKHD Media.
                  </p>
                </div>
                <div className="about-three-counter d-inline-block">
                  <div className="tw-hover-btn-wrapper d-inline-block">
                    <a
                      className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden border border-1 border-neutral-200"
                      href="#portfolio"
                    >
                      <span className="d-flex flex-column justify-content-center">
                        <span className="tw-btn-circle-icon text-heading tw-text-8 tw-transition-3 font-heading fw-medium">
                          1+
                        </span>
                        <span className="text-heading fw-bold text-center tw-transition-3 tw-text-2xl fw-medium">
                          Years Hands-on Experience
                        </span>
                      </span>
                      <i className="tw-btn-circle-dot bg-main-two-600"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-three-wrap-shape d-flex justify-content-between">
            <div
              className="banner-three-counter-item tw-rounded-md position-relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h2 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                <span
                  className="purecounter font-heading"
                  data-purecounter-duration="2"
                  data-purecounter-end="100"
                ></span>
                %
              </h2>
              <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                Project Delivery Focus
              </p>
            </div>
            <div
              className="banner-three-counter-item tw-rounded-md position-relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h2 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                <span
                  className="purecounter font-heading"
                  data-purecounter-duration="2"
                  data-purecounter-end="3"
                ></span>
                +
              </h2>
              <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                Live Client & IoT Projects
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="about-three-shape position-absolute start-0 w-100"
          src="/assets/images/shapes/about-three-shape.png"
          alt="shape"
        />
      </div>
    </section>
  );
}

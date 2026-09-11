export default function Footer() {
  return (
    <section className="footer-three-area pt-120 tw-pb-10 position-relative z-1" id="contact">
      <div className="container tw-container-1800-px">
        <div className="row justify-content-between pb-120">
          <div className="col-xl-5 col-lg-6">
            <div
              className="footer-three-top-left tw-me-25"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="tw-mb-9">
                <h2 className="tw-text-15 text-white tw-char-animation">
                  Let's build something scalable
                </h2>
              </div>
              <div className="d-inline-flex align-items-center tw-gap-6 tw-mb-10 flex-wrap">
                <a
                  className="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white"
                  href="https://linkedin.com/in/rishikesh-wakchaure-06055524b"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <span className="tw-text-2xl fw-medium text-main-600">//</span>
                <a
                  className="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white"
                  href="https://github.com/Rishikesh5577"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="footer-three-top-info tw-p-705 tw-rounded-lg d-flex tw-gap-6">
                <div className="footer-three-top-thumb tw-w-160-px">
                  <img
                    className="tw-rounded-lg w-100"
                    src="https://res.cloudinary.com/dl6hpq7mm/image/upload/v1789093780/e43bc394-e3fc-4bcc-9d4f-3d59413c2049.png"
                    alt="Rishikesh Wakchaure"
                  />
                </div>
                <div className="footer-three-top-content d-flex justify-content-between flex-column">
                  <div>
                    <h3 className="tw-text-xl text-white tw-mb-2">
                      Rishikesh Wakchaure
                    </h3>
                    <p className="text-white tw-mb-2">Full Stack Software Developer</p>
                    <p className="text-white-50 tw-text-sm tw-mb-1">
                      <i className="ph ph-envelope tw-me-2 text-main-600"></i>
                      <a href="mailto:wakchaurerishi5555@gmail.com" className="text-white-50 hover-text-white">
                        wakchaurerishi5555@gmail.com
                      </a>
                    </p>
                    <p className="text-white-50 tw-text-sm tw-mb-1">
                      <i className="ph ph-phone-call tw-me-2 text-main-600"></i>
                      <a href="tel:+919322330456" className="text-white-50 hover-text-white">
                        +91 9322330456
                      </a>
                    </p>
                    <p className="text-white-50 tw-text-sm tw-mb-3">
                      <i className="ph ph-map-pin-line tw-me-2 text-main-600"></i>
                      Maharashtra, India
                    </p>
                  </div>
                  <div className="footer-three-social">
                    <ul className="d-flex align-items-center tw-gap-1">
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="https://github.com/rishikesh5577"
                          target="_blank"
                          rel="noreferrer"
                          title="GitHub"
                        >
                          <i className="ph ph-github-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="https://linkedin.com/in/rishikesh-wakchaure-06055524b"
                          target="_blank"
                          rel="noreferrer"
                          title="LinkedIn"
                        >
                          <i className="ph ph-linkedin-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="https://rishiwakchaure.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          title="Portfolio"
                        >
                          <i className="ph ph-globe"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="mailto:wakchaurerishi5555@gmail.com"
                          title="Email"
                        >
                          <i className="ph ph-envelope"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="footer-three-form"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <input
                        type="text"
                        className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <input
                        type="email"
                        className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <textarea
                        className="form-control bg-transparent shadow-none tw-h-196-px tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-button">
                      <button
                        type="submit"
                        className="tw-hover-btn bg-main-600 text-heading tw-text-xl fw-bold tw-py-4 tw-px-10 d-inline-flex justify-content-center w-100 hover-text-heading hover-bg-white tw-transition-3 tw-rounded-lg"
                      >
                        submit message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three-border tw-px-18 tw-mb-10">
        <div className="container-fluid gx-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-three-middile d-flex align-items-center justify-content-between">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h4 className="tw-text-2xl text-white tw-mb-2">
                    Quick Links
                  </h4>
                  <ul className="d-flex tw-gap-2 flex-wrap">
                    <li>
                      <a className="tw-text-lg text-white" href="/">
                        Home,
                      </a>
                    </li>
                    <li>
                      <a className="tw-text-lg text-white" href="#about">
                        About Me,
                      </a>
                    </li>
                    <li>
                      <a className="tw-text-lg text-white" href="#portfolio">
                        Portfolio,
                      </a>
                    </li>
                    <li>
                      <a className="tw-text-lg text-white" href="#services">
                        Service,
                      </a>
                    </li>
                    <li>
                      <a className="tw-text-lg text-white" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <a
                    className="footer-three-back-to-top tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 text-white tw-text-3xl rounded-circle"
                    href="#"
                    aria-label="Back to top"
                  >
                    <i className="ph ph-arrow-up"></i>
                  </a>
                </div>
                <div
                  className="text-lg-end"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <h4 className="tw-text-2xl text-white tw-mb-2">
                    Rishikesh Portfolio
                  </h4>
                  <p className="tw-text-lg text-white">
                    © 2026 Rishikesh Wakchaure. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container tw-container-1800-px">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-three-bottom text-center">
                <h5 className="footer-three-bottom-title text-white text-center">
                  Rishikesh
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="position-absolute top-0 start-0 z-n1"
          src="/assets/images/shapes/footer-three-bg-shape.png"
          alt="shape"
        />
      </div>
    </section>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonial-three-area pt-120 tw-pb-22">
      <div className="container tw-container-1800-px">
        <div className="row justify-content-center tw-mb-21">
          <div className="col-xl-10">
            <div className="text-center">
              <h2 className="testimonial-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">
                Highlights from my journey — industry internships, production platforms, and credentials that reflect commitment to quality engineering
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-three-slider position-relative z-1">
              <div className="testimonial-three-active swiper-container">
                <div className="swiper-wrapper">
                  {/* Item 1 */}
                  <div
                    className="testimonial-three-wrapper d-flex align-items-center tw-gap-9 tw-rounded-lg tw-mb-705 swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="testimonial-three-thumb position-relative z-1">
                      <img
                        className="w-100 h-100 tw-rounded-lg"
                        src="/assets/images/thumbs/testimonial-three-thumb1.jpg"
                        alt="thumb"
                      />
                      <div className="testimonial-three-button position-absolute start-50 top-50 translate-middle">
                        <a
                          className="open-popup testimonial-three-btn tw-w-220 tw-h-220 lh-1 d-inline-flex align-items-center justify-content-center bg-white text-main-two-600 tw-text-2xl position-relative z-1 hover-text-main-two-600 rounded-circle"
                          href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                          data-fancybox="gallery"
                          data-caption=""
                          aria-label="Play video"
                        >
                          <i className="ph-bold ph-play"></i>
                          <span className="ripple"></span>
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-three-content w-100">
                      <div className="d-flex align-items-center justify-content-between tw-mb-16">
                        <div>
                          <span>
                            <img
                              src="/assets/images/icons/testimonial-three-icon.svg"
                              alt="icon"
                            />
                          </span>
                        </div>
                        <div className="testimonial-three-review">
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="tw-mb-15">
                        <p className="testimonial-three-paragraph text-heading tw-text-2xl fw-semibold">
                          Rishikesh delivers production-ready MERN applications with clean architecture, strong cloud practices, and thoughtful UI craftsmanship across live client platforms.
                        </p>
                      </div>
                      <div>
                        <h2 className="tw-text-2xl fw-medium">Hiring Managers</h2>
                        <p className="tw-text-lg">Founder, Startup Studio</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div
                    className="testimonial-three-wrapper d-flex align-items-center tw-gap-9 tw-rounded-lg tw-mb-705 swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <div className="testimonial-three-thumb position-relative z-1">
                      <img
                        className="w-100 h-100 tw-rounded-lg"
                        src="/assets/images/thumbs/testimonial-three-thumb2.jpg"
                        alt="thumb"
                      />
                      <div className="testimonial-three-button position-absolute start-50 top-50 translate-middle">
                        <a
                          className="open-popup testimonial-three-btn tw-w-220 tw-h-220 lh-1 d-inline-flex align-items-center justify-content-center bg-white text-main-two-600 tw-text-2xl position-relative z-1 hover-text-main-two-600 rounded-circle"
                          href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                          data-fancybox="gallery"
                          data-caption=""
                          aria-label="Play video"
                        >
                          <i className="ph-bold ph-play"></i>
                          <span className="ripple"></span>
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-three-content w-100">
                      <div className="d-flex align-items-center justify-content-between tw-mb-16">
                        <div>
                          <span>
                            <img
                              src="/assets/images/icons/testimonial-three-icon.svg"
                              alt="icon"
                            />
                          </span>
                        </div>
                        <div className="testimonial-three-review">
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                          <span className="text-heading tw-text-lg">
                            <i className="ph-bold ph-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="tw-mb-15">
                        <p className="testimonial-three-paragraph text-heading tw-text-2xl fw-semibold">
                          Rishikesh delivers production-ready MERN applications with clean architecture, strong cloud practices, and thoughtful UI craftsmanship across live client platforms.
                        </p>
                      </div>
                      <div>
                        <h2 className="tw-text-2xl fw-medium">Project Leads</h2>
                        <p className="tw-text-lg">CEO, Tech Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { certificatesData } from '../data/certificatesData';

export default function CertificatesSection() {
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;
    let pollTimer = null;
    let isHovered = false;

    const container = sliderContainerRef.current;
    if (!container) return;

    const el = container.querySelector('.testimonial-three-active');
    const nextBtn = container.querySelector('.cert-nav-next');
    const prevBtn = container.querySelector('.cert-nav-prev');

    // 1. Instantly freeze continuous scrolling on hover
    const freezeScrolling = () => {
      if (!swiperInstance) return;

      // Stop autoplay timer
      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();
      }

      if (el) {
        el.classList.remove('is-auto-scrolling');
        const wrapper = el.querySelector('.swiper-wrapper');
        if (wrapper) {
          // Read current rendered horizontal transform matrix
          const computedStyle = window.getComputedStyle(wrapper);
          const transform = computedStyle.transform || computedStyle.webkitTransform;
          let currentTranslate = swiperInstance.getTranslate();

          if (transform && transform !== 'none') {
            try {
              const matrix = new DOMMatrixReadOnly(transform);
              currentTranslate = matrix.m41;
            } catch (e) {
              const parts = transform.match(/matrix.*\((.+)\)/);
              if (parts && parts[1]) {
                const values = parts[1].split(',').map((v) => parseFloat(v.trim()));
                if (values.length === 6) currentTranslate = values[4];
                else if (values.length === 16) currentTranslate = values[12];
              }
            }
          }

          // Abort running 4000ms CSS transition instantly
          wrapper.style.transition = 'none';
          wrapper.style.transitionDuration = '0ms';

          // Lock Swiper translate to current exact pixel
          swiperInstance.setTranslate(currentTranslate);
          swiperInstance.updateProgress(currentTranslate);
          swiperInstance.updateActiveIndex();
          swiperInstance.animating = false;
        }
      }
    };

    // 2. Resume smooth continuous auto-scrolling when cursor leaves
    const resumeScrolling = () => {
      if (!swiperInstance) return;
      if (isHovered) return; // Prevent resume if still hovering

      if (el) {
        el.classList.add('is-auto-scrolling');
        const wrapper = el.querySelector('.swiper-wrapper');
        if (wrapper) {
          wrapper.style.transition = '';
          wrapper.style.transitionDuration = '';
          wrapper.style.transitionTimingFunction = '';
        }
      }

      swiperInstance.params.speed = 4000;
      swiperInstance.animating = false;
      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.start();
      }
    };

    // Hover event listeners on the entire slider container
    const onMouseEnter = () => {
      isHovered = true;
      freezeScrolling();
    };

    const onMouseLeave = () => {
      isHovered = false;
      resumeScrolling();
    };

    // Manual navigation buttons: snappy 350ms card jump
    const onNextClick = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (!swiperInstance) return;

      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();
      }

      if (el) {
        el.classList.remove('is-auto-scrolling');
        const wrapper = el.querySelector('.swiper-wrapper');
        if (wrapper) {
          wrapper.style.transition = '';
          wrapper.style.transitionDuration = '';
        }
      }

      swiperInstance.params.speed = 350;
      swiperInstance.animating = false;
      swiperInstance.slideNext(350);
    };

    const onPrevClick = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (!swiperInstance) return;

      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();
      }

      if (el) {
        el.classList.remove('is-auto-scrolling');
        const wrapper = el.querySelector('.swiper-wrapper');
        if (wrapper) {
          wrapper.style.transition = '';
          wrapper.style.transitionDuration = '';
        }
      }

      swiperInstance.params.speed = 350;
      swiperInstance.animating = false;
      swiperInstance.slidePrev(350);
    };

    // Initialize Swiper with polling until window.Swiper script is ready
    const initSwiper = () => {
      if (typeof window === 'undefined' || !window.Swiper) return false;
      if (!el) return false;

      // Clean up previous instance if already attached
      if (el.swiper) {
        try {
          el.swiper.destroy(true, true);
        } catch (e) {}
      }

      el.classList.add('is-auto-scrolling');

      swiperInstance = new window.Swiper(el, {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        loopedSlides: 4,
        grabCursor: true,
        allowTouchMove: true,
        simulateTouch: true,
        touchRatio: 1.2,
        speed: 4000,
        preventInteractionOnTransition: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Handled precisely by freezeScrolling & resumeScrolling
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        observer: true,
        observeParents: true,
        on: {
          touchStart: () => {
            freezeScrolling();
          },
          touchEnd: () => {
            if (!isHovered) {
              setTimeout(resumeScrolling, 1500);
            }
          },
        },
      });

      // Attach container hover listeners
      container.addEventListener('mouseenter', onMouseEnter);
      container.addEventListener('mouseleave', onMouseLeave);

      // Attach side button click listeners
      if (nextBtn) nextBtn.addEventListener('click', onNextClick);
      if (prevBtn) prevBtn.addEventListener('click', onPrevClick);

      return true;
    };

    // Poll until Swiper is ready
    if (!initSwiper()) {
      pollTimer = setInterval(() => {
        if (initSwiper()) {
          clearInterval(pollTimer);
        }
      }, 80);
    }

    return () => {
      if (pollTimer) clearInterval(pollTimer);
      if (container) {
        container.removeEventListener('mouseenter', onMouseEnter);
        container.removeEventListener('mouseleave', onMouseLeave);
      }
      if (nextBtn) nextBtn.removeEventListener('click', onNextClick);
      if (prevBtn) prevBtn.removeEventListener('click', onPrevClick);
      if (swiperInstance) {
        try {
          swiperInstance.destroy(true, true);
        } catch (e) {}
      }
    };
  }, []);

  return (
    <section className="testimonial-three-area pt-120 tw-pb-22" id="certifications">
      <div className="container position-relative" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="row justify-content-center tw-mb-21">
          <div className="col-xl-10 text-center">
            <span className="badge bg-main-two-600 text-white tw-text-xs px-3 py-1 rounded-pill text-uppercase mb-3 d-inline-block">
              Verified Credentials & Honors
            </span>
            <h2 className="testimonial-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">
              Official Certifications & Engineering Accreditations
            </h2>
            <p className="text-muted tw-text-base mt-3 mx-auto" style={{ maxWidth: '780px' }}>
              Industry-recognized credentials from Oracle Cloud, Amazon Web Services (AWS), IBM, Deloitte, Tata Group, Infosys, and HackerRank validating cloud architecture, AI, and systems engineering excellence.
            </p>
          </div>
        </div>

        {/* Certificates Swiper Slider with Side Buttons */}
        <div className="row">
          <div className="col-xl-12">
            <div ref={sliderContainerRef} className="testimonial-three-slider position-relative z-1">
              {/* Left Navigation Button */}
              <button
                type="button"
                className="cert-nav-btn cert-nav-prev"
                aria-label="Previous Certificate"
              >
                <i className="ph-bold ph-caret-left"></i>
              </button>

              {/* Swiper Slider */}
              <div className="testimonial-three-active swiper-container">
                <div className="swiper-wrapper">
                  {certificatesData.map((cert) => (
                    <div key={cert.id} className="swiper-slide d-flex justify-content-center h-auto">
                      <div
                        className="testimonial-three-wrapper d-flex flex-column justify-content-between tw-rounded-lg"
                        style={{
                          width: '100%',
                          minHeight: '440px',
                          height: '100%',
                          background: '#ffffff',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
                          padding: '18px',
                          borderRadius: '16px',
                          boxSizing: 'border-box',
                        }}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        {/* Top: Certificate Preview Card (Vertical layout on all screen sizes) */}
                        <div
                          className="testimonial-three-thumb position-relative z-1 w-100 flex-shrink-0"
                          style={{
                            height: '185px',
                            background: 'linear-gradient(145deg, #181820 0%, #0d0d12 100%)',
                            border: '1px solid rgba(255, 107, 0, 0.35)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px',
                            textAlign: 'center',
                          }}
                        >
                          {cert.image ? (
                            <a
                              href={cert.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                              title="Click to verify official credential"
                            >
                              <img
                                className="w-100 h-100 tw-rounded-lg"
                                src={cert.image}
                                alt={cert.title}
                                style={{ objectFit: 'contain' }}
                              />
                            </a>
                          ) : (
                            <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
                              <div
                                style={{
                                  width: '48px',
                                  height: '48px',
                                  borderRadius: '50%',
                                  background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, rgba(255, 107, 0, 0.05) 70%)',
                                  border: '1.5px solid rgba(255, 107, 0, 0.6)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginBottom: '8px',
                                }}
                              >
                                <i className="ph ph-certificate text-main-two-600" style={{ fontSize: '24px' }}></i>
                              </div>
                              <span className="badge bg-dark border border-secondary text-white tw-text-xs px-2 py-0.5 rounded mb-1.5">
                                {cert.badge}
                              </span>
                              <span className="text-white-50 tw-text-xs text-uppercase mb-1" style={{ fontSize: '9.5px', letterSpacing: '0.05em' }}>
                                Official PDF Credential
                              </span>
                              <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm px-3 py-0.5 text-white border border-secondary rounded-pill hover-border-main-two-600 hover-bg-main-two-600 tw-transition-3"
                                style={{ fontSize: '10.5px' }}
                              >
                                Inspect File ↗
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Bottom: Certificate Info & Details */}
                        <div
                          className="testimonial-three-content w-100 d-flex flex-column justify-content-between pt-3 flex-grow-1"
                          style={{ minWidth: '0' }}
                        >
                          <div>
                            {/* Category Tag & 5-Star Verified Badge */}
                            <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-1">
                              <span className="badge bg-main-two-600 text-white tw-text-xs px-2.5 py-1 rounded-pill text-uppercase">
                                {cert.category}
                              </span>
                              <div
                                className="d-flex align-items-center gap-1 py-0.5 px-2"
                                style={{ background: '#f1f3f5', borderRadius: '20px' }}
                              >
                                <span className="text-warning tw-text-xs"><i className="ph-fill ph-star"></i></span>
                                <span className="text-warning tw-text-xs"><i className="ph-fill ph-star"></i></span>
                                <span className="text-warning tw-text-xs"><i className="ph-fill ph-star"></i></span>
                                <span className="text-warning tw-text-xs"><i className="ph-fill ph-star"></i></span>
                                <span className="text-warning tw-text-xs"><i className="ph-fill ph-star"></i></span>
                                <span className="text-dark fw-bold ms-1" style={{ fontSize: '9px' }}>VERIFIED</span>
                              </div>
                            </div>

                            {/* Certificate Title (Strict 2 lines max) */}
                            <h3
                              className="fw-bold mb-1.5 text-heading"
                              style={{
                                color: '#111111',
                                fontSize: '1.05rem',
                                lineHeight: '1.35',
                                minHeight: '44px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {cert.title}
                            </h3>

                            {/* Short Description (Strict 2 lines max) */}
                            <p
                              className="mb-0"
                              style={{
                                color: '#555555',
                                fontSize: '12.5px',
                                lineHeight: '1.45',
                                minHeight: '36px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {cert.description}
                            </p>
                          </div>

                          {/* Bottom Bar: Organization & View Button */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 pt-2.5 border-top border-secondary border-opacity-25 mt-3">
                            <div>
                              <span className="fw-bold d-block text-truncate" style={{ color: '#222222', fontSize: '12px', maxWidth: '140px' }}>
                                {cert.org}
                              </span>
                              <span style={{ color: '#777777', fontSize: '10.5px' }}>Issued {cert.year}</span>
                            </div>
                            <div>
                              <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tw-hover-btn bg-main-two-600 text-white fw-bold py-1.5 px-3 rounded-md text-uppercase d-inline-flex align-items-center gap-1 tw-transition-3"
                                style={{ fontSize: '11px' }}
                              >
                                View Credential <i className="ph ph-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Navigation Button */}
              <button
                type="button"
                className="cert-nav-btn cert-nav-next"
                aria-label="Next Certificate"
              >
                <i className="ph-bold ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

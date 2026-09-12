import { projectsData } from '../data/projectsData';

export default function WorksPage() {
  return (
    <div className="works-page-content position-relative z-1 pt-120">
      {/* Works Page Header Banner */}
      <div className="container tw-container-1800-px tw-mb-705">
        <div className="row">
          <div className="col-lg-10">
            <div className="d-flex align-items-center gap-2 tw-mb-3">
              <a
                href="#/"
                className="text-main-two-600 tw-text-sm fw-semibold text-uppercase d-inline-flex align-items-center gap-1 hover-text-heading tw-transition-3"
              >
                <i className="ph ph-arrow-left"></i> Home
              </a>
              <span className="text-muted tw-text-xs">/</span>
              <span className="text-muted tw-text-sm text-uppercase">Works</span>
            </div>
            <h1 className="tw-text-605 fw-bold text-heading mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
              All Works & <span className="text-main-two-600">Production Projects</span>
            </h1>
            <p className="text-muted tw-text-base mb-0" style={{ maxWidth: '680px', lineHeight: '1.7', color: '#555' }}>
              Explore the complete directory of freelance client platforms, multi-vendor e-commerce solutions, enterprise AI agents, and cloud systems engineered for high performance.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section with Same Zig-Zag Zero-Gap Design */}
      <section className="portfolio-three-area py-80 position-relative z-1" id="works-list">
        {/* Sticky Background Title */}
        <div className="portfolio-three-shape">
          <h3 className="portfolio-three-shape-title">works</h3>
        </div>

        <div className="container tw-container-1800-px">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-three-wrapper position-relative z-1">
                {projectsData.map((project) => {
                  const targetUrl = project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl || '#works-list';
                  const isExternal = targetUrl.startsWith('http');

                  return (
                    <div
                      key={project.id}
                      className="portfolio-three-item tw-rounded-lg portfolio-wrapper"
                    >
                      <div className="portfolio-three-wrap">
                        <div className="d-flex justify-content-between align-items-start gap-3 tw-mb-4">
                          <div>
                            <span className="text-main-two-600 tw-text-sm fw-semibold text-uppercase tw-mb-2 d-inline-block">
                              {project.subtitle}
                            </span>
                            <h2 className="tw-text-605 fw-medium mb-0">
                              <a
                                className="hover-text-main-two-600"
                                href={targetUrl}
                                target={isExternal ? '_blank' : '_self'}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                              >
                                {project.title}
                              </a>
                            </h2>
                          </div>
                          <div className="portfolio-three-button flex-shrink-0">
                            <a
                              className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                              href={targetUrl}
                              target={isExternal ? '_blank' : '_self'}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              aria-label={`View ${project.title}`}
                            >
                              <i className="ph ph-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>

                        <div className="portfolio-three-list portfolio-list tw-mb-6">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            {project.tags.map((tag, tIdx) => (
                              <li key={tIdx}>
                                <a
                                  className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                  href={targetUrl}
                                  target={isExternal ? '_blank' : '_self'}
                                  rel={isExternal ? 'noopener noreferrer' : undefined}
                                >
                                  {tag}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div
                        className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                        data-cursor="View"
                      >
                        <a
                          className="d-block cursor-hide tw-rounded-lg"
                          href={targetUrl}
                          target={isExternal ? '_blank' : '_self'}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                        >
                          <img
                            className="w-100 tw-rounded-lg"
                            src={project.img}
                            alt={project.alt}
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}

                {/* Back to Home CTA */}
                <div className="about-three-counter portfolio-three-counter d-flex justify-content-center w-100">
                  <div className="tw-hover-btn-wrapper d-inline-block">
                    <a
                      className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden"
                      href="#/"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <span className="d-flex flex-column justify-content-center">
                        <span className="text-heading fw-bold tw-transition-3 tw-text-xl fw-semibold">
                          Back To <br />
                          Home <i className="ph ph-house"></i>
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
    </div>
  );
}

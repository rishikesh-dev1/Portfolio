import { projectsData } from '../data/projectsData';

export default function PortfolioSection() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="portfolio-three-area py-120 position-relative z-1" id="portfolio">
      <div className="portfolio-three-shape">
        <h3 className="portfolio-three-shape-title">works</h3>
      </div>
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-three-wrapper position-relative z-1">
              {featuredProjects.map((project) => {
                const targetUrl =
                  project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl || '#/works';
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
                          {project.tags.map((tag) => (
                            <li key={tag}>
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
                        <img className="w-100 tw-rounded-lg" src={project.img} alt={project.alt} />
                      </a>
                    </div>
                  </div>
                );
              })}

              <div className="about-three-counter portfolio-three-counter d-flex justify-content-center w-100">
                <div className="tw-hover-btn-wrapper d-inline-block">
                  <a
                    className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden"
                    href="#/works"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="d-flex flex-column justify-content-center">
                      <span className="text-heading fw-bold tw-transition-3 tw-text-2xl fw-semibold">
                        Discover <br />
                        All Works <i className="ph ph-arrow-up-right"></i>
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

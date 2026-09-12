export default function BrandsSection() {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: 'ph ph-code',
      skills: ['Java', 'Python', 'SQL'],
    },
    {
      category: 'Web Technologies',
      icon: 'ph ph-browsers',
      skills: ['React.js', 'HTML', 'CSS', 'Node.js', 'Express.js'],
    },
    {
      category: 'Cloud & Databases',
      icon: 'ph ph-cloud',
      skills: ['AWS', 'Docker', 'MongoDB'],
    },
    {
      category: 'Tools',
      icon: 'ph ph-wrench',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
    {
      category: 'Coursework',
      icon: 'ph ph-graduation-cap',
      skills: ['DSA', 'OOPs', 'Operating Systems', 'Computer Networks', 'SDLC'],
    },
    {
      category: 'Soft Skills',
      icon: 'ph ph-users-three',
      skills: ['Problem Solving', 'Teamwork', 'Leadership', 'Communication'],
    },
  ];

  return (
    <section className="brand-three-area brand-two-area pb-120 pt-80" id="skills">
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="text-center tw-mb-15">
              <h2 className="brand-three-title tw-text-xl tw-char-animation text-uppercase">
                Skills and Interests
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-3 gy-4 justify-content-center">
          {skillsData.map((item, idx) => (
            <div
              key={item.category}
              className="col-xl-4 col-lg-4 col-md-6 col-12 d-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 * ((idx % 3) + 1)}
            >
              <div
                className="brand-item brand-three-item position-relative z-1 w-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
                style={{
                  height: 'auto',
                  minHeight: '190px',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <i className={`${item.icon} tw-text-xl text-main-two-600`}></i>
                  <h3 className="tw-text-lg fw-bold text-heading mb-0 font-heading">
                    {item.category}
                  </h3>
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="brand-skill-pill fw-medium"
                      style={{
                        background: '#ffffff',
                        color: '#0f172a',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

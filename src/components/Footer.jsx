import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer({ isContactPage = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [sentSenderName, setSentSenderName] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_f8k55ud';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ond4o2x';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 's001w1SN5thhb3WmO';

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields (Name, Email, and Message).');
      return;
    }

    setIsSending(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: name,
          from_name: name,
          email: email,
          from_email: email,
          reply_to: email,
          subject: 'New Inquiry from Portfolio Footer',
          message: message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setSentSenderName(name);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Footer Error:', error);
      const errDetail = error?.text || error?.message || 'Transmission failed';
      setErrorMessage(`Could not send message automatically (${errDetail}). Please email directly to wakchaurerishi5555@gmail.com.`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="footer-three-area pt-120 tw-pb-10 position-relative z-1" id="footer">
      {!isContactPage && (
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
              {errorMessage && (
                <div className="p-3 rounded-lg mb-4 text-center bg-danger bg-opacity-25 border border-danger text-white">
                  <p className="tw-text-sm mb-0">{errorMessage}</p>
                </div>
              )}
              <form action="#" onSubmit={handleFooterSubmit}>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <input
                        type="text"
                        required
                        disabled={isSending}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <input
                        type="email"
                        required
                        disabled={isSending}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Email Address *"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <textarea
                        required
                        disabled={isSending}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-control bg-transparent shadow-none tw-h-196-px tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Message *"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-button">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="tw-hover-btn bg-main-600 text-heading tw-text-xl fw-bold tw-py-4 tw-px-10 d-inline-flex justify-content-center align-items-center gap-2 w-100 hover-text-heading hover-bg-white tw-transition-3 tw-rounded-lg"
                        style={{ cursor: isSending ? 'not-allowed' : 'pointer', opacity: isSending ? 0.7 : 1 }}
                      >
                        {isSending ? (
                          <>
                            sending... <i className="ph ph-spinner tw-animate-spin"></i>
                          </>
                        ) : (
                          'submit message'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}
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
                      <a
                        className="tw-text-lg text-white"
                        href="#/"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = '#/';
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        Home,
                      </a>
                    </li>
                    <li>
                      <a
                        className="tw-text-lg text-white"
                        href="#/works"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = '#/works';
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        Works,
                      </a>
                    </li>
                    <li>
                      <a
                        className="tw-text-lg text-white"
                        href="#/contact"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = '#/contact';
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
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

      {/* Rich Success Pop-up Modal */}
      {showSuccessModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowSuccessModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(5, 5, 8, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '20px',
            animation: 'modalOverlayFadeIn 0.25s ease forwards',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              background: 'linear-gradient(150deg, #18181f 0%, #0f0f13 100%)',
              border: '1px solid rgba(255, 107, 0, 0.45)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 45px rgba(255, 107, 0, 0.2)',
              borderRadius: '24px',
              padding: '42px 34px 36px',
              textAlign: 'center',
              animation: 'modalContentPopIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {/* Close 'X' Button */}
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              aria-label="Close popup"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#aaa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 107, 0, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(255, 107, 0, 0.5)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = '#aaa';
              }}
            >
              <i className="ph ph-x"></i>
            </button>

            {/* Glowing Success Badge Icon */}
            <div
              style={{
                width: '82px',
                height: '82px',
                margin: '0 auto 22px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(40, 167, 69, 0.25) 0%, rgba(40, 167, 69, 0.06) 70%)',
                border: '2px solid rgba(40, 167, 69, 0.85)',
                boxShadow: '0 0 35px rgba(40, 167, 69, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i
                className="ph ph-check-circle-fill"
                style={{
                  fontSize: '46px',
                  color: '#28a745',
                }}
              ></i>
            </div>

            {/* Title */}
            <h3
              style={{
                color: '#ffffff',
                fontSize: '1.85rem',
                fontWeight: '800',
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}
            >
              Message Sent!
            </h3>

            {/* Description */}
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.72)',
                fontSize: '15px',
                lineHeight: '1.65',
                marginBottom: '30px',
                maxWidth: '390px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Thank you {sentSenderName ? <span style={{ color: '#ff6b00', fontWeight: 600 }}>{sentSenderName}</span> : 'for reaching out'}! Rishikesh has received your email and will get back to you within 24 hours.
            </p>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              style={{
                background: 'linear-gradient(135deg, #ff6b00 0%, #e65100 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                width: '100%',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(255, 107, 0, 0.35)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 0, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 0, 0.35)';
              }}
            >
              Awesome, Got It!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

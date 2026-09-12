import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [sentSenderName, setSentSenderName] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_f8k55ud';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ond4o2x';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 's001w1SN5thhb3WmO';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSending(true);
    setErrorMessage('');

    const templateParams = {
      name: name,
      from_name: name,
      email: email,
      from_email: email,
      reply_to: email,
      subject: formData.subject.trim() || 'New Inquiry from Portfolio',
      message: formData.subject.trim()
        ? `Subject: ${formData.subject.trim()}\n\n${message}`
        : message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSentSenderName(name);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      const errDetail = error?.text || error?.message || 'Transmission failed';
      setErrorMessage(`Could not send message automatically (${errDetail}). Please email directly to wakchaurerishi5555@gmail.com.`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page-wrapper position-relative z-1 pt-120" style={{ background: '#0e0e10', minHeight: '100vh' }}>
      {/* Contact Banner Header */}
      <div className="container tw-container-1800-px tw-mb-705">
        <div className="row">
          <div className="col-lg-10">
            <div className="d-flex align-items-center gap-2 tw-mb-3">
              <a
                href="#/"
                className="text-main-two-600 tw-text-sm fw-semibold text-uppercase d-inline-flex align-items-center gap-1 hover-text-white tw-transition-3"
              >
                <i className="ph ph-arrow-left"></i> Home
              </a>
              <span className="text-white-50 tw-text-xs">/</span>
              <span className="text-white-50 tw-text-sm text-uppercase">Contact</span>
            </div>
            <h1 className="tw-text-605 fw-bold text-white mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
              Let's Build Something <span className="text-main-two-600">Exceptional</span>
            </h1>
            <p className="text-white-50 tw-text-base mb-0" style={{ maxWidth: '680px', lineHeight: '1.7' }}>
              Have a project in mind, an opportunity, or a client inquiry? Reach out directly via the form below or connect through phone, email, or LinkedIn.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-80 position-relative z-1">
        <div className="container tw-container-1800-px">
          <div className="row justify-content-between align-items-start g-5">
            {/* Left Column: Contact Profile & Direct Details */}
            <div className="col-xl-5 col-lg-6">
              <div
                className="tw-p-8 tw-rounded-lg border border-secondary"
                style={{ background: '#16161a' }}
              >
                <div className="d-flex tw-gap-6 flex-wrap align-items-start mb-4">
                  <div className="tw-w-160-px flex-shrink-0">
                    <img
                      className="tw-rounded-lg w-100"
                      src="https://res.cloudinary.com/dl6hpq7mm/image/upload/v1789093780/e43bc394-e3fc-4bcc-9d4f-3d59413c2049.png"
                      alt="Rishikesh Wakchaure"
                      style={{ objectFit: 'cover', height: '170px' }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <span className="badge bg-main-two-600 text-white tw-text-xs px-3 py-1 rounded-pill text-uppercase mb-2 d-inline-block">
                      Available for Work
                    </span>
                    <h3 className="tw-text-2xl text-white mb-1">Rishikesh Wakchaure</h3>
                    <p className="text-main-two-600 fw-medium tw-text-sm mb-3">Full Stack Software Developer</p>
                    <p className="text-white-50 tw-text-sm mb-0" style={{ lineHeight: '1.6' }}>
                      Specializing in React.js, Node.js, Express, MongoDB, AWS cloud deployments, and AI agent integration.
                    </p>
                  </div>
                </div>

                <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '1.5rem 0' }} />

                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <span className="tw-w-11 tw-h-11 rounded-circle bg-dark border border-secondary d-flex align-items-center justify-content-center text-main-two-600 tw-text-xl flex-shrink-0">
                      <i className="ph ph-envelope"></i>
                    </span>
                    <div>
                      <span className="text-white-50 tw-text-xs text-uppercase d-block">Email</span>
                      <a href="mailto:wakchaurerishi5555@gmail.com" className="text-white fw-medium hover-text-main-two-600 tw-transition-3">
                        wakchaurerishi5555@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <span className="tw-w-11 tw-h-11 rounded-circle bg-dark border border-secondary d-flex align-items-center justify-content-center text-main-two-600 tw-text-xl flex-shrink-0">
                      <i className="ph ph-phone-call"></i>
                    </span>
                    <div>
                      <span className="text-white-50 tw-text-xs text-uppercase d-block">Phone / WhatsApp</span>
                      <a href="tel:+919322330456" className="text-white fw-medium hover-text-main-two-600 tw-transition-3">
                        +91 9322330456
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <span className="tw-w-11 tw-h-11 rounded-circle bg-dark border border-secondary d-flex align-items-center justify-content-center text-main-two-600 tw-text-xl flex-shrink-0">
                      <i className="ph ph-map-pin-line"></i>
                    </span>
                    <div>
                      <span className="text-white-50 tw-text-xs text-uppercase d-block">Location</span>
                      <span className="text-white fw-medium">Maharashtra, India</span>
                    </div>
                  </div>
                </div>

                <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '1.5rem 0' }} />

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <span className="text-white-50 tw-text-xs text-uppercase">Social Profiles</span>
                  <div className="d-flex gap-2">
                    <a
                      className="tw-w-10 tw-h-10 rounded-circle border border-secondary d-flex align-items-center justify-content-center text-white hover-bg-main-two-600 hover-border-main-two-600 tw-transition-3"
                      href="https://github.com/rishikesh5577"
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                    >
                      <i className="ph ph-github-logo"></i>
                    </a>
                    <a
                      className="tw-w-10 tw-h-10 rounded-circle border border-secondary d-flex align-items-center justify-content-center text-white hover-bg-main-two-600 hover-border-main-two-600 tw-transition-3"
                      href="https://linkedin.com/in/rishikesh-wakchaure-06055524b"
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      <i className="ph ph-linkedin-logo"></i>
                    </a>
                    <a
                      className="tw-w-10 tw-h-10 rounded-circle border border-secondary d-flex align-items-center justify-content-center text-white hover-bg-main-two-600 hover-border-main-two-600 tw-transition-3"
                      href="https://rishikeshportfolio-alpha.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      title="Portfolio"
                    >
                      <i className="ph ph-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="tw-p-8 tw-rounded-lg border border-secondary"
                style={{ background: '#16161a' }}
              >
                <h3 className="tw-text-2xl text-white mb-2">Send a Message</h3>
                <p className="text-white-50 tw-text-sm mb-4">
                  Fill in the details below and I will get back to you within 24 hours.
                </p>

                {errorMessage && (
                  <div className="p-4 rounded-lg mb-4 text-center bg-danger bg-opacity-25 border border-danger text-white">
                    <i className="tw-text-3xl mb-2 d-block ph ph-warning-circle text-danger"></i>
                    <h5 className="text-white mb-1">Transmission Notice</h5>
                    <p className="text-white-50 tw-text-sm mb-0">{errorMessage}</p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="text-white-50 tw-text-xs text-uppercase mb-1 d-block">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={isSending}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control bg-dark border-secondary text-white shadow-none tw-rounded-md tw-h-14 px-3"
                        placeholder="John Doe"
                        style={{ background: '#0e0e10', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-white-50 tw-text-xs text-uppercase mb-1 d-block">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        disabled={isSending}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control bg-dark border-secondary text-white shadow-none tw-rounded-md tw-h-14 px-3"
                        placeholder="john@example.com"
                        style={{ background: '#0e0e10', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="text-white-50 tw-text-xs text-uppercase mb-1 d-block">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        disabled={isSending}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-control bg-dark border-secondary text-white shadow-none tw-rounded-md tw-h-14 px-3"
                        placeholder="Project Discussion / Freelance / Role"
                        style={{ background: '#0e0e10', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="text-white-50 tw-text-xs text-uppercase mb-1 d-block">Message *</label>
                      <textarea
                        required
                        rows="5"
                        name="message"
                        disabled={isSending}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-control bg-dark border-secondary text-white shadow-none tw-rounded-md p-3"
                        placeholder="Tell me about your project, timeline, and requirements..."
                        style={{ background: '#0e0e10', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                      ></textarea>
                    </div>
                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="tw-hover-btn bg-main-two-600 text-white tw-text-base fw-bold tw-py-4 tw-px-10 d-inline-flex justify-content-center align-items-center gap-2 w-100 tw-rounded-md text-uppercase tw-transition-3"
                        style={{ cursor: isSending ? 'not-allowed' : 'pointer', opacity: isSending ? 0.7 : 1 }}
                      >
                        {isSending ? (
                          <>
                            Sending Message... <i className="ph ph-spinner tw-animate-spin"></i>
                          </>
                        ) : (
                          <>
                            Submit Message <i className="ph ph-paper-plane-tilt"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

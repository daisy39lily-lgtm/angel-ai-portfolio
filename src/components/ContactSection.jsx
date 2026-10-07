import React, { useRef, useEffect } from 'react';
import { Phone, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

const CONTACT_PHONE = '+92 342 9699013';
const CONTACT_PHONE_RAW = '+923429699013';
const CONTACT_EMAIL = 'daisy39lily@gmail.com';
const CONTACT_INSTAGRAM = '@angeldaisywaish11997';
const CONTACT_INSTAGRAM_URL = 'https://www.instagram.com/angeldaisywaish11997/';

const InstagramIcon = ({ size = 22, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="contact" className="contact-section section-reveal" ref={sectionRef}>
      <div className="contact-bg-deco" aria-hidden="true" />

      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header-center" style={{ marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">
            <span className="eyebrow-star">♡</span>
            GET IN TOUCH
          </div>
          <h2 className="section-headline">
            LET'S <span className="headline-script">Connect</span>
          </h2>
        </div>

        {/* Content Grid: Client Note + 3 Contact Cards */}
        <div className="contact-content-grid">
          {/* Left: Client-Focused Problem Note */}
          <div className="contact-client-note-card">
            <div className="client-note-badge">
              <Sparkles size={14} /> FOR BRANDS &amp; BUSINESSES
            </div>
            <h3 className="client-note-headline">
              Great products deserve ads that actually stop the scroll.
            </h3>
            <p className="client-note-body">
              Your product may be great. But if the creative doesn't stop the scroll,
              communicate the value, and make people want to keep watching, the right
              customer may never notice it.
            </p>
            <p className="client-note-body">
              If your ads feel repetitive, too generic, or simply aren't getting the attention
              they deserve, let's create something your audience actually wants to watch.
            </p>
            <div className="client-note-closing">
              <span>Have a product that deserves better creative?</span>
              <strong>Let's talk. ♡</strong>
            </div>
          </div>

          {/* Right: 3 Separate Contact Option Cards */}
          <div className="contact-cards-stack" ref={cardsRef}>
            {/* Contact Option 01 — Phone */}
            <a href={`tel:${CONTACT_PHONE_RAW}`} className="contact-card-item">
              <div className="contact-card-icon-wrap">
                <Phone size={22} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">PHONE</span>
                <span className="contact-card-val">{CONTACT_PHONE}</span>
              </div>
              <div className="contact-card-action">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Contact Option 02 — Email */}
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-card-item">
              <div className="contact-card-icon-wrap">
                <Mail size={22} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">EMAIL</span>
                <span className="contact-card-val">{CONTACT_EMAIL}</span>
              </div>
              <div className="contact-card-action">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Contact Option 03 — Instagram */}
            <a
              href={CONTACT_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
            >
              <div className="contact-card-icon-wrap">
                <InstagramIcon size={22} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">INSTAGRAM</span>
                <span className="contact-card-val">{CONTACT_INSTAGRAM}</span>
              </div>
              <div className="contact-card-action">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Call-To-Action Banner */}
        <div className="contact-cta-banner">
          <h3 className="cta-banner-heading">
            Ready to give your next ad a better creative direction?
          </h3>
          <p className="cta-banner-subheading">
            Let's create something worth stopping for.
          </p>
          <button className="btn-primary cta-banner-btn" onClick={scrollToCards}>
            LET'S TALK <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

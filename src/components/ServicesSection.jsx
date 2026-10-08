import React, { useEffect, useRef } from 'react';

// ─── EASY TO EDIT ───────────────────────────────────────────────────────────
// Update each service object to customise name, description, or icon.
const services = [
  {
    id: '01',
    title: 'AI UGC VIDEOS',
    description:
      'Short-form UGC-style videos created with AI, designed to feel natural, engaging and native to social media.',
    icon: '◈',
    note: 'real & relatable',
  },
  {
    id: '02',
    title: 'AD CREATIVE',
    description:
      'Scroll-stopping advertising concepts for Meta, Instagram, Facebook and other social platforms.',
    icon: '✦',
    note: 'stops the scroll',
  },
  {
    id: '03',
    title: 'MICRO PRODUCT COMMERCIALS',
    description:
      'Short cinematic product-focused advertisements that make a product look premium and desirable.',
    icon: '✿',
    note: 'cinematic quality',
  },
  {
    id: '04',
    title: 'FOOD ADVERTISING',
    description:
      'Stylized food visuals and short-form food advertisements designed to make the product visually irresistible.',
    icon: '◇',
    note: 'makes you hungry',
  },
  {
    id: '05',
    title: 'HYPERMOTION',
    description:
      'Dynamic motion-based advertising visuals with energetic movement, transitions and visual impact.',
    icon: '★',
    note: 'kinetic & bold',
  },
  {
    id: '06',
    title: 'BEFORE & AFTER ADS',
    description:
      'Transformation-style advertisements designed to clearly communicate product results and benefits.',
    icon: '↔',
    note: 'shows the change',
  },
  {
    id: '07',
    title: 'PRODUCT VISUALS',
    description:
      'Creative product images and visual advertising assets for brands that want to look premium.',
    icon: '◉',
    note: 'beautifully shot',
  },
  {
    id: '08',
    title: 'SOCIAL MEDIA ADS',
    description:
      'Instagram Stories, Meta ads, social posts and other platform-ready creative assets.',
    icon: '❋',
    note: 'platform-native',
  },
  {
    id: '09',
    title: 'HTML EMAIL DESIGN',
    description:
      'Responsive, visually engaging marketing emails designed to make promotions, product launches, announcements, and campaigns look professional and drive action.',
    icon: '✉',
    note: 'conversion-focused',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section section-reveal" ref={sectionRef}>
      {/* Section header */}
      <div className="section-header-center">
        <div className="section-eyebrow">
          <span className="eyebrow-star">✿</span>
          What I Do
        </div>
        <h2 className="section-headline">
          WHAT I <span className="headline-script">Create</span>
        </h2>
        <p className="section-subhead">
          Creative content designed to make brands impossible to scroll past.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={service.id} className="service-card" style={{ animationDelay: `${idx * 0.07}s` }}>
            {/* Card tape */}
            <div className="card-tape" aria-hidden="true" />
            {/* Service number */}
            <span className="service-number">SERVICE {service.id}</span>
            {/* Icon */}
            <div className="service-icon-wrap">
              <span className="service-icon">{service.icon}</span>
            </div>
            {/* Content */}
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            {/* Handwritten note */}
            <span className="service-note">{service.note} ♡</span>
            {/* Bottom decorative border */}
            <div className="card-bottom-deco" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

import React, { useRef, useEffect } from 'react';

// ─── EASY TO EDIT ─────────────────────────────────────────────────────────────
// Update prices, titles or descriptions freely.
const pricingCards = [
  {
    id: 'p-01',
    service: 'AI / UGC VIDEO',
    icon: '◈',
    tagline: 'Short-form, native, relatable.',
    tiers: [
      { label: '20-second video', price: '$100' },
      { label: '30-second video', price: '$150' },
    ],
    note: 'Perfect for social media ads & UGC-style campaigns.',
  },
  {
    id: 'p-02',
    service: 'HYPERMOTION VIDEO',
    icon: '★',
    tagline: 'Dynamic, energetic, eye-catching.',
    tiers: [
      { label: 'Starting at', price: '$70' },
    ],
    note: 'Ideal for product launches & trend-driven content.',
  },
  {
    id: 'p-03',
    service: 'MICRO PRODUCT COMMERCIAL',
    icon: '✿',
    tagline: 'Cinematic, premium, memorable.',
    tiers: [
      { label: 'Starting at', price: '$200' },
    ],
    note: 'Best for e-commerce brands & premium products.',
    featured: true,
  },
  {
    id: 'p-04',
    service: 'HTML EMAIL DESIGN',
    icon: '✉',
    tagline: 'Beautiful, responsive, engaging.',
    tiers: [
      { label: 'Starting at', price: 'Custom' },
    ],
    note: 'Custom pricing based on email complexity and campaign requirements.',
  },
];

const PricingSection = () => {
  const sectionRef = useRef(null);

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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="pricing-section section-reveal" ref={sectionRef}>
      <div className="pricing-bg-deco" aria-hidden="true" />

      <div className="section-header-center">
        <div className="section-eyebrow">
          <span className="eyebrow-star">✦</span>
          Studio Rate Card
        </div>
        <h2 className="section-headline">
          CREATIVE SERVICES <span className="headline-script">&amp; Pricing</span>
        </h2>
        <p className="section-subhead">
          Every project is different. Final pricing depends on concept, research, product
          complexity, video length, revisions and creative requirements.
        </p>
      </div>

      <div className="pricing-cards-row">
        {pricingCards.map((card, idx) => (
          <div
            key={card.id}
            className={`pricing-card${card.featured ? ' pricing-card--featured' : ''}`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {card.featured && (
              <div className="pricing-featured-badge">✦ Most Popular</div>
            )}
            <div className="pricing-card-tape" aria-hidden="true" />
            <div className="pricing-icon-wrap">
              <span className="pricing-icon">{card.icon}</span>
            </div>
            <h3 className="pricing-service-name">{card.service}</h3>
            <p className="pricing-tagline">{card.tagline}</p>

            <div className="pricing-tiers">
              {card.tiers.map((tier) => (
                <div key={tier.label} className="pricing-tier">
                  <span className="tier-label">{tier.label}</span>
                  <span className="tier-price">{tier.price}</span>
                </div>
              ))}
            </div>

            <p className="pricing-card-note">{card.note}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="pricing-disclaimer">
        <p className="disclaimer-text">
          Final pricing is customised based on product research, concept development, video
          length, complexity, revisions and deliverables.
        </p>
      </div>

      {/* Custom CTA */}
      <div className="pricing-custom-cta">
        <p className="pricing-custom-script">"Need something custom?"</p>
        <button className="btn-primary pricing-cta-btn" onClick={scrollToContact}>
          Let's discuss your project →
        </button>
      </div>
    </section>
  );
};

export default PricingSection;

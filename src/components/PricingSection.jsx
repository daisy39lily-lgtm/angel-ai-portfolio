import React, { useRef, useEffect } from 'react';

// ─── EASY TO EDIT ─────────────────────────────────────────────────────────────
// Update prices, titles or descriptions freely.
const pricingCards = [
  {
    id: 'p-01',
    service: 'STATIC IMAGE AD',
    icon: '🖼️',
    tagline: 'High-converting & effective.',
    tiers: [
      { label: 'Rate', price: '$15 – $25' },
    ],
    note: 'Includes design, master prompts, copy and headline.',
  },
  {
    id: 'p-02',
    service: 'UGC TYPE VIDEO (AI)',
    icon: '📱',
    tagline: 'Native and relatable.',
    tiers: [
      { label: 'Rate', price: '$60 – $80' },
    ],
    note: 'Includes AI Avatars/Voiceover, Hook, Script, B-rolls, Dynamic Subtitles.',
  },
  {
    id: 'p-03',
    service: 'IG REEL / TIKTOK AD',
    icon: '✨',
    tagline: 'Fast-paced & trending.',
    tiers: [
      { label: 'Rate', price: '$70 – $90' },
    ],
    note: 'Includes fast-paced editing, trending music/audio sync, scroll-stopper hook.',
  },
  {
    id: 'p-04',
    service: 'HYPER-MOTION VIDEO',
    icon: '⚡',
    tagline: 'Dynamic & eye-catching.',
    tiers: [
      { label: 'Rate', price: '$80 – $120' },
    ],
    note: 'Includes dynamic motion transitions, 3D elements, fast visual hooks.',
  },
  {
    id: 'p-05',
    service: 'CINEMATIC COMMERCIAL',
    icon: '🎬',
    tagline: 'Premium & memorable.',
    tiers: [
      { label: 'Rate', price: '$120 – $200+' },
    ],
    note: 'Premium look, high-end AI video gen, color grading, realistic lighting/vibe.',
    featured: true,
  },
  {
    id: 'p-06',
    service: 'HTML EMAIL AD',
    icon: '✉',
    tagline: 'Responsive & engaging.',
    tiers: [
      { label: 'Rate', price: '$35 – $60' },
    ],
    note: 'Responsive layout, graphics, call-to-action button, dark mode tested.',
  },
  {
    id: 'p-07',
    service: 'BUNDLES & PACKAGES',
    icon: '📦',
    tagline: 'Comprehensive campaigns.',
    tiers: [
      { label: 'Rate', price: 'Let\'s discuss' },
    ],
    note: 'We can discuss and create custom bundles and packages tailored to your needs.',
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

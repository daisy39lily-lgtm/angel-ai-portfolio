import React, { useEffect, useRef } from 'react';

const processSteps = [
  { step: 'IDEA', icon: '✦' },
  { step: 'CONCEPT', icon: '◇' },
  { step: 'CREATE', icon: '✿' },
  { step: 'EDIT', icon: '◈' },
  { step: 'DELIVER', icon: '✉' },
  { step: 'IMPACT', icon: '★' },
];

const AboutSection = () => {
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
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section section-reveal" ref={sectionRef}>
      <div className="about-bg-blob" aria-hidden="true" />

      <div className="about-inner">
        {/* LEFT — Text */}
        <div className="about-text-col">
          <div className="section-eyebrow">
            <span className="eyebrow-star">✦</span>
            The Creative
          </div>

          <h2 className="about-headline">
            ABOUT THE
            <span className="headline-script"> Creative</span>
          </h2>

          <p className="about-tagline">"I turn ideas into scroll-stopping visuals."</p>

          <p className="about-body">
            I'm Angel — an AI creative designer specialising in scroll-stopping advertising
            content, UGC-style videos and branded visual storytelling. I help brands transform
            their products and ideas into visually engaging content designed for modern social
            media and advertising.
          </p>

          <p className="about-body">
            My work lives at the intersection of creative direction, AI technology and human
            storytelling. Every piece I create is crafted to feel native to the platform, natural
            to the audience and impossible to scroll past.
          </p>

          <div className="about-pillars">
            {['AI', 'Creative Direction', 'Storytelling', 'Video', 'Advertising'].map((p, i) => (
              <span key={i} className="about-pillar">{p}</span>
            ))}
          </div>

          <p className="about-handwritten">"From idea → to something people remember ♡"</p>
        </div>

        {/* RIGHT — Creative Process Card */}
        <div className="about-visual-col">
          <div className="process-card">
            <div className="process-card-tape" aria-hidden="true" />
            <div className="process-card-header">
              <span className="process-card-label">My Creative Process</span>
              <span className="process-card-deco">✦</span>
            </div>
            <div className="process-steps">
              {processSteps.map((item, idx) => (
                <React.Fragment key={item.step}>
                  <div className="process-step">
                    <span className="step-icon">{item.icon}</span>
                    <span className="step-name">{item.step}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="step-arrow" aria-hidden="true">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="process-card-footer">
              <span className="process-note">From brief to beautiful ♡</span>
            </div>
          </div>

          <div className="about-deco-heart anim-float-2" aria-hidden="true">♡</div>
          <div className="about-deco-star anim-float-3" aria-hidden="true">✦</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

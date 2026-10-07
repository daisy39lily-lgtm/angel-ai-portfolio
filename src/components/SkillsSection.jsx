import React, { useRef, useEffect } from 'react';

// ─── EASY TO EDIT ─────────────────────────────────────────────────────────────
// Update skills, levels (1-5), or categories freely.
const skills = [
  { name: 'AI Video Generation',    stars: 5, category: 'AI' },
  { name: 'AI Image Generation',    stars: 5, category: 'AI' },
  { name: 'UGC Content Creation',   stars: 5, category: 'Content' },
  { name: 'Ad Creative',            stars: 5, category: 'Advertising' },
  { name: 'Hypermotion Ads',        stars: 5, category: 'Advertising' },
  { name: 'Micro Commercials',      stars: 5, category: 'Advertising' },
  { name: 'Creative Direction',     stars: 5, category: 'Direction' },
  { name: 'Brand Storytelling',     stars: 5, category: 'Direction' },
  { name: 'Product Advertising',    stars: 5, category: 'Advertising' },
  { name: 'Social Media Creative',  stars: 5, category: 'Content' },
  { name: 'Visual Storytelling',    stars: 5, category: 'Direction' },
  { name: 'Content Strategy',       stars: 4, category: 'Direction' },
];

const categoryColors = {
  AI:          '#D9A5B3',
  Content:     '#C5B3D9',
  Advertising: '#D9C5A5',
  Production:  '#B3C5D9',
  Direction:   '#D9B3B3',
};

const Stars = ({ count }) => (
  <div className="stars-row" aria-label={`${count} out of 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={`star ${i <= count ? 'star--filled' : 'star--empty'}`}>
        ★
      </span>
    ))}
  </div>
);

const SkillsSection = () => {
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

  return (
    <section id="skills" className="skills-section section-reveal" ref={sectionRef}>
      <div className="skills-bg-deco" aria-hidden="true" />

      <div className="section-header-center">
        <div className="section-eyebrow">
          <span className="eyebrow-star">✦</span>
          Expertise
        </div>
        <h2 className="section-headline">
          MY CREATIVE <span className="headline-script">Toolkit</span>
        </h2>
      </div>

      {/* Handwritten annotations */}
      <span className="skills-annotation skills-annotation--left anim-float-2">
        "tools I love ♡"
      </span>
      <span className="skills-annotation skills-annotation--right anim-float-3">
        "always creating →"
      </span>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{
              animationDelay: `${idx * 0.06}s`,
              '--cat-color': categoryColors[skill.category] || '#D9A5B3',
            }}
          >
            <div className="skill-card-tape" aria-hidden="true" />
            <span
              className="skill-category-badge"
              style={{ backgroundColor: `${categoryColors[skill.category]}22` }}
            >
              {skill.category}
            </span>
            <h3 className="skill-name">{skill.name}</h3>
            <Stars count={skill.stars} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

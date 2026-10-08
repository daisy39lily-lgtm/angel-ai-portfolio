import React, { useRef, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Mail } from 'lucide-react';

const EMAIL_PROJECTS = [
  {
    id: 'e01',
    title: 'Luxury Cosmetics',
    category: 'Beauty / Skincare',
    imageUrl: '/Luxury_cosmetic_product_showcase…_2K_20261008042122.jpg',
  },
  {
    id: 'e02',
    title: 'Crystal Skincare',
    category: 'Special Offer / Sale',
    imageUrl: '/Crystal_skincare_tools_sale_2K_20261008042126.jpg',
  },
  {
    id: 'e03',
    title: 'Cafe Pastries',
    category: 'Food / Beverage',
    imageUrl: '/Cafe_pastries_and_iced_beverages_2K_20261008042119.jpg',
  },
  {
    id: 'e04',
    title: 'E-commerce Drops',
    category: 'Product Launch',
    imageUrl: '/E-commerce_promotional_banner_la…_2K_20261008042039.jpg',
  },
  {
    id: 'e05',
    title: 'Baby Blue Event',
    category: 'Event Invitation',
    imageUrl: '/Baby_Blue_Night_event_invitation_2K_20261008042027.jpg',
  },
  {
    id: 'e06',
    title: 'Birthday Celebration',
    category: 'Brand Announcement',
    imageUrl: '/Birthday_party_celebration_poste…_2K_20261008042216.jpg',
  },
  {
    id: 'e07',
    title: 'Pastel Horizons',
    category: 'Travel / Lifestyle',
    imageUrl: '/Airplane_flying_through_pastel_c…_2K_20261008042211.jpg',
  },
];

const EmailShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-visible');
        });
      },
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeItem = activeItemIndex !== null ? EMAIL_PROJECTS[activeItemIndex] : null;

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : EMAIL_PROJECTS.length - 1));
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev < EMAIL_PROJECTS.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex]);

  return (
    <section id="email-showcase" className="showcase-section section-reveal" ref={sectionRef}>
      <div className="section-header-center">
        <div className="section-eyebrow">
          <span className="eyebrow-star">✉</span>
          HTML EMAIL DESIGN
        </div>
        <h2 className="section-headline">
          EMAIL <span className="headline-script">Showcase</span>
        </h2>
        <p className="section-subhead">
          Beautiful, conversion-focused HTML emails designed to help brands communicate, promote, and sell.
        </p>
      </div>

      <div className="showcase-group-container">
        <div className="group-header">
          <div className="group-title-row">
            <Mail size={20} className="group-icon" />
            <h3 className="group-title">MARKETING EMAILS</h3>
          </div>
          <p className="group-subtitle">Responsive designs built for modern campaigns.</p>
        </div>

        <div className="showcase-editorial-masonry">
          {EMAIL_PROJECTS.map((item, idx) => (
            <div
              key={item.id}
              className="showcase-card-editorial"
              onClick={() => setActiveItemIndex(idx)}
              style={{ animationDelay: `${(idx % 10) * 0.05}s` }}
            >
              <div className="showcase-media-wrap">
                <img
                  src={item.imageUrl}
                  alt={`Project ${item.title}`}
                  className="showcase-media-img"
                  loading="lazy"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                
                <div className="showcase-hover-overlay">
                  <div className="hover-content">
                    <Eye size={15} className="hover-icon" />
                    <span className="hover-explore">VIEW DESIGN</span>
                  </div>
                </div>
              </div>

              <div className="showcase-info-clean">
                <span className="showcase-title-minimal">{item.title}</span>
                <span className="showcase-category-minimal">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="lightbox-modal" onClick={() => setActiveItemIndex(null)}>
          <button className="lightbox-close" onClick={() => setActiveItemIndex(null)} aria-label="Close preview">
            <X size={24} />
          </button>

          <button className="lightbox-nav lightbox-nav-prev" onClick={handlePrev} aria-label="Previous project">
            <ChevronLeft size={28} />
          </button>
          <button className="lightbox-nav lightbox-nav-next" onClick={handleNext} aria-label="Next project">
            <ChevronRight size={28} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', width: '100%' }}>
            <div className="lightbox-media-container" style={{ overflowY: 'auto', maxHeight: '85vh', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '20px' }}>
              <img
                src={activeItem.imageUrl}
                alt={`Project ${activeItem.title}`}
                style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div className="lightbox-info" style={{ marginTop: '20px' }}>
              <div className="lightbox-header-row">
                <span className="lightbox-number">{activeItem.title}</span>
                <span className="lightbox-category">{activeItem.category}</span>
                <span className="lightbox-count">
                  {activeItemIndex + 1} / {EMAIL_PROJECTS.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmailShowcaseSection;

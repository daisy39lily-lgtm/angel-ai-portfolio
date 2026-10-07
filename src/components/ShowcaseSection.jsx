import React, { useRef, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Eye, Film, Image as ImageIcon } from 'lucide-react';
import { PROJECTS_DATA, VIDEO_PROJECTS, IMAGE_PROJECTS, CATEGORIES } from '../data/projectsData';

// Individual Video Card Component with Dynamic Aspect Ratio & Muted Hover Preview
const VideoCard = ({ item, index, onSelect }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVertical, setIsVertical] = useState(true); // Default vertical until metadata loaded

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      if (videoWidth && videoHeight) {
        setIsVertical(videoWidth / videoHeight < 0.95);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`showcase-video-card ${isVertical ? 'video-card--vertical' : 'video-card--landscape'}`}
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${(index % 6) * 0.08}s` }}
    >
      <div className={`video-frame ${isVertical ? 'phone-mockup-frame' : 'cinematic-frame'}`}>
        {/* Subtle Phone Notch for Vertical Videos */}
        {isVertical && (
          <div className="phone-notch-bar">
            <div className="phone-speaker-line" />
          </div>
        )}

        <div className="video-media-wrap">
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted
            playsInline
            loop
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="video-element"
          />

          {/* Minimal Play Badge */}
          <div className={`play-overlay-badge ${isHovered ? 'play-badge--active' : ''}`}>
            <Play size={18} fill="currentColor" />
          </div>

          {/* Hover Overlay */}
          <div className="showcase-hover-overlay">
            <div className="hover-content">
              <Film size={15} className="hover-icon" />
              <span className="hover-explore">WATCH {item.number || item.title}</span>
            </div>
          </div>

          {/* Video Number Badge */}
          <div className="showcase-card-num video-num-badge">
            {item.number || item.title}
          </div>
        </div>
      </div>

      {/* Card Minimal Info */}
      <div className="showcase-info-clean">
        <span className="showcase-title-minimal">{item.title}</span>
        <span className="showcase-category-minimal">{item.category}</span>
      </div>
    </div>
  );
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeItemsList, setActiveItemsList] = useState([]);
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

  // Currently active item for Lightbox
  const activeItem = activeItemIndex !== null && activeItemsList[activeItemIndex] ? activeItemsList[activeItemIndex] : null;

  const openLightbox = (items, index) => {
    setActiveItemsList(items);
    setActiveItemIndex(index);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (activeItemIndex !== null && activeItemsList.length > 0) {
      setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : activeItemsList.length - 1));
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (activeItemIndex !== null && activeItemsList.length > 0) {
      setActiveItemIndex((prev) => (prev < activeItemsList.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, activeItemsList]);

  return (
    <section id="showcase" className="showcase-section section-reveal" ref={sectionRef}>
      {/* ── MAIN SECTION HEADER ───────────────────────────────────────────── */}
      <div className="section-header-center">
        <div className="section-eyebrow">
          <span className="eyebrow-star">◈</span>
          SELECTED CREATIVE WORK
        </div>
        <h2 className="section-headline">
          MY <span className="headline-script">Work</span>
        </h2>
        <p className="section-subhead">
          Ads created to make brands impossible to scroll past.
        </p>

        {/* ── CATEGORY FILTER TABS ────────────────────────────────────────── */}
        <div className="showcase-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${activeCategory === cat.id ? 'filter-tab--active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveItemIndex(null);
              }}
            >
              {cat.label}
              {cat.id === 'ALL' && <span className="tab-count">{PROJECTS_DATA.length}</span>}
              {cat.id === 'VIDEO' && <span className="tab-count">{VIDEO_PROJECTS.length}</span>}
              {cat.id === 'IMAGE' && <span className="tab-count">{IMAGE_PROJECTS.length}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ── VIDEO WORK SECTION ───────────────────────────────────────────── */}
      {(activeCategory === 'ALL' || activeCategory === 'VIDEO') && (
        <div className="showcase-group-container">
          <div className="group-header">
            <div className="group-title-row">
              <Film size={20} className="group-icon" />
              <h3 className="group-title">VIDEO WORK</h3>
            </div>
            <p className="group-subtitle">Ads designed to stop the scroll.</p>
          </div>

          <div className="showcase-video-grid">
            {VIDEO_PROJECTS.map((item, idx) => (
              <VideoCard
                key={item.id}
                item={item}
                index={idx}
                onSelect={() => openLightbox(VIDEO_PROJECTS, idx)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── IMAGE WORK SECTION ───────────────────────────────────────────── */}
      {(activeCategory === 'ALL' || activeCategory === 'IMAGE') && (
        <div className="showcase-group-container">
          <div className="group-header">
            <div className="group-title-row">
              <ImageIcon size={20} className="group-icon" />
              <h3 className="group-title">IMAGE ADS</h3>
            </div>
            <p className="group-subtitle">High-impact static campaign visuals.</p>
          </div>

          <div className="showcase-editorial-masonry">
            {IMAGE_PROJECTS.map((item, idx) => (
              <div
                key={item.id}
                className="showcase-card-editorial"
                onClick={() => openLightbox(IMAGE_PROJECTS, idx)}
                style={{ animationDelay: `${(idx % 10) * 0.05}s` }}
              >
                <div className="showcase-media-wrap">
                  <img
                    src={item.imageUrl}
                    alt={`Project ${item.title}`}
                    className="showcase-media-img"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="showcase-hover-overlay">
                    <div className="hover-content">
                      <Eye size={15} className="hover-icon" />
                      <span className="hover-explore">EXPLORE {item.title}</span>
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="showcase-card-num">
                    {item.number || item.title}
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
      )}

      {/* ── LIGHTBOX PREVIEW MODAL ────────────────────────────────────────── */}
      {activeItem && (
        <div className="lightbox-modal" onClick={() => setActiveItemIndex(null)}>
          {/* Close button */}
          <button
            className="lightbox-close"
            onClick={() => setActiveItemIndex(null)}
            aria-label="Close preview"
          >
            <X size={24} />
          </button>

          {/* Navigation Controls */}
          {activeItemsList.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-nav-prev"
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                className="lightbox-nav lightbox-nav-next"
                onClick={handleNext}
                aria-label="Next project"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-media-container">
              {activeItem.type === 'video' ? (
                <div className="lightbox-video-wrapper">
                  <video
                    src={activeItem.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="lightbox-media lightbox-video-player"
                  />
                </div>
              ) : (
                <img
                  src={activeItem.imageUrl}
                  alt={`Project ${activeItem.title}`}
                  className="lightbox-media"
                />
              )}
            </div>

            {/* Modal Info Footer */}
            <div className="lightbox-info">
              <div className="lightbox-header-row">
                <span className="lightbox-number">
                  {activeItem.number ? `${activeItem.number} — ${activeItem.title}` : activeItem.title}
                </span>
                <span className="lightbox-category">{activeItem.category}</span>
                <span className="lightbox-count">
                  {activeItemIndex + 1} / {activeItemsList.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowcaseSection;

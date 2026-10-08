import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Play, Camera, Heart, Film, Wand2, Menu, X } from 'lucide-react';
import './index.css';
import AboutSection    from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ShowcaseSection from './components/ShowcaseSection';
import PricingSection  from './components/PricingSection';
import SkillsSection   from './components/SkillsSection';
import ContactSection  from './components/ContactSection';
import SiteFooter      from './components/SiteFooter';
import EmailShowcaseSection from './components/EmailShowcaseSection';

// ─── Navigation config ───────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Work',     id: 'showcase' },
  { label: 'Services', id: 'services' },
  { label: 'Pricing',  id: 'pricing' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Contact',  id: 'contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);

  // Scroll spy + nav background on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
      let current = 'home';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <nav className={`nav-header${scrolled ? ' nav-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          Angel
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link${activeSection === item.id ? ' nav-link--active' : ''}`}
              onClick={() => scrollTo(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="mobile-menu-inner">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link${activeSection === item.id ? ' mobile-nav-link--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION — DO NOT MODIFY ─────────────────────────────────── */}
      <section id="home" className="hero-editorial">
        <div className="hero-content-split">
          
          {/* LEFT SIDE — MAIN MESSAGE */}
          <div className="hero-left">
            <div className="eyebrow">
              <Sparkles size={14} />
              AI UGC &amp; AD CREATIVE PORTFOLIO
            </div>
            
            <h1 className="hero-title">
              CREATIVE
              <span className="title-script">Visuals</span>
              THAT SELL
            </h1>
            
            <p className="hero-subtitle">
              I create scroll-stopping ads, UGC-style videos and cinematic brand visuals using AI, creative direction and storytelling.
            </p>
            
            <div className="cta-group">
              <button className="btn-primary" onClick={() => scrollTo('showcase')}>
                VIEW MY WORK <ArrowRight size={16} />
              </button>
              <button className="link-secondary" onClick={() => scrollTo('contact')}>
                Let's create together ♡
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — CREATIVE VISUAL COLLAGE */}
          <div className="hero-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="flower-wing-container" style={{ position: 'relative', width: '400px', height: '700px' }}>
              
              <div style={{ position: 'relative', width: '500px', height: '500px' }}>
                
                {/* Top Right Flower */}
                <div className="anim-float-2" style={{ position: 'absolute', top: '40px', right: '0px', zIndex: 10, transform: 'rotate(15deg)' }}>
                  <img src="/flat_flower_nobg.png" alt="Flower" style={{ width: '280px', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
                </div>

                {/* Bottom Right Flower */}
                <div className="anim-float-3" style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 20, transform: 'rotate(-10deg)' }}>
                  <img src="/flat_flower_nobg.png" alt="Flower" style={{ width: '290px', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
                </div>

                {/* Center Left Flower (Largest, overlaps the others) */}
                <div className="anim-float-1" style={{ position: 'absolute', top: '120px', left: '-20px', zIndex: 30, transform: 'rotate(-5deg)' }}>
                  <img src="/flat_flower_nobg.png" alt="Flower" style={{ width: '340px', filter: 'drop-shadow(-10px 10px 20px rgba(0,0,0,0.15))' }} />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <div className="features-strip">
          <div className="feature-item">
            <div className="feature-icon-wrapper"><Wand2 size={24} /></div>
            <div>
              <div className="feature-title">AI Videos</div>
              <div className="feature-desc">that feel real</div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper"><Film size={24} /></div>
            <div>
              <div className="feature-title">Creative Ads</div>
              <div className="feature-desc">that stop the scroll</div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper"><Camera size={24} /></div>
            <div>
              <div className="feature-title">UGC Style</div>
              <div className="feature-desc">that builds trust</div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper"><Heart size={24} /></div>
            <div>
              <div className="feature-title">Brand Storytelling</div>
              <div className="feature-desc">that grows brands</div>
            </div>
          </div>
        </div>
      </section>
      {/* ── END HERO ─────────────────────────────────────────────────────── */}

      {/* ── NEW SECTIONS ─────────────────────────────────────────────────── */}
      <AboutSection />
      <ServicesSection />
      <ShowcaseSection />
      <EmailShowcaseSection />
      <PricingSection />
      <SkillsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

export default App;

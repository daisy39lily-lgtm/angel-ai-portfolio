import React from 'react';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SiteFooter = () => {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-deco-line" aria-hidden="true" />

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand-col">
          <span className="footer-logo">Angel</span>
          <p className="footer-tagline">
            AI Creative Designer • UGC • Advertising • Visual Storytelling
          </p>
        </div>

        {/* Nav */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="footer-nav-link"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Handwritten */}
        <p className="footer-handwritten">"creating beautiful things, one frame at a time ♡"</p>
      </div>

      <div className="footer-copyright">
        <span>© {new Date().getFullYear()} Angel. All rights reserved.</span>
        <span className="footer-star">✦</span>
        <span>AI Creative Designer</span>
      </div>
    </footer>
  );
};

export default SiteFooter;

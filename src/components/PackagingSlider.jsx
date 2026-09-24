import React from 'react';
import './PackagingSlider.css';

// Import looping background video
import videoBg from '../assets/images/gif1-min.gif';

// Import packaging images from assets
import r999Jp from '../assets/images/packaging/shiroikona-r-999-jp.jpeg';
import r777 from '../assets/images/packaging/shiroikona-r-777.jpeg';
import r555 from '../assets/images/packaging/shiroikona-r-555.jpeg';
import r111 from '../assets/images/packaging/shiroikona-r-111.jpeg';

const PACKAGING_SLIDES = [
  { img: r999Jp, title: '白いイコナ R-999', subtitle: 'チタン 二酸化物 • Japan Edition', badge: 'R-999' },
  { img: r777, title: 'Shiroikona R-777', subtitle: 'Titanium Dioxide Rutile Grade', badge: 'R-777' },
  { img: r555, title: 'Shiroikona R-555', subtitle: 'High Opacity Rutile Pigment', badge: 'R-555' },
  { img: r111, title: 'Shiroikona R-111', subtitle: 'Universal Rutile 25 Kg Pack', badge: 'R-111' },
  { img: r999Jp, title: '白いイコナ R-999', subtitle: 'Osaka Formulation • 25 Kg', badge: 'R-999' },
  { img: r777, title: 'Shiroikona R-777', subtitle: 'Weather Resistant Rutile Grade', badge: 'R-777' },
  { img: r555, title: 'Shiroikona R-555', subtitle: 'Industrial Coating Standard', badge: 'R-555' },
  { img: r111, title: 'Shiroikona R-111', subtitle: 'Multi-Purpose 25 Kg Valve Bag', badge: 'R-111' },
];

const PackagingSlider = ({ 
  title = "Shimanzu Packaging Showcase", 
  subtitle = "Continuous Japanese Formulation Packaging Stream • 25 Kg Standard Bags" 
}) => {
  return (
    <section className="packaging-anim-section">
      {/* Background Video Element */}
      <div className="packaging-video-bg">
        <img 
          src={videoBg} 
          alt="Field & Agro Background Video" 
          className="packaging-bg-video-media" 
        />
        <div className="packaging-video-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* Sleek Minimal Header */}
        <div className="packaging-anim-header">
          <span className="anim-badge-pill">
            <span className="anim-dot"></span>
            SHIMANZU JAPAN • PACKAGING IN MOTION
          </span>
          <h2 className="h2 anim-title">{title}</h2>
          <p className="anim-subtitle">{subtitle}</p>
        </div>
      </div>

      {/* SINGLE Infinite Seamless Sliding Reel (Only 1 row) */}
      <div className="anim-slider-container">
        <div className="anim-slider-track track-left">
          {/* Duplicate 3 times for a 100% gapless continuous loop */}
          {[...PACKAGING_SLIDES, ...PACKAGING_SLIDES, ...PACKAGING_SLIDES].map((item, index) => (
            <div key={`slide-${index}`} className="anim-slide-card">
              <div className="anim-card-glow"></div>
              <div className="anim-bag-box">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="anim-bag-img"
                  loading="lazy"
                />
              </div>
              <div className="anim-card-info">
                <span className="anim-model-badge">{item.badge}</span>
                <h4 className="anim-bag-name">{item.title}</h4>
                <p className="anim-bag-sub">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Brand Ticker */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="anim-footer-note">
          <span>✨ 25 Kg Multi-Ply Moisture Proof Valve Bags</span>
          <span className="note-sep">•</span>
          <span>チタン 二酸化物 (Titanium Dioxide Rutile Grade Pigment)</span>
          <span className="note-sep">•</span>
          <span>Osaka, Japan Collaboration</span>
        </div>
      </div>
    </section>
  );
};

export default PackagingSlider;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

import gif1 from '../assets/images/gif1-min.gif';
import gif2 from '../assets/images/gif2-min.gif';
import gif3 from '../assets/images/gif3-min.gif';

import s1  from '../assets/images/video_slides/slide_1.jpeg';
import s2  from '../assets/images/video_slides/slide_2.jpeg';
import s3  from '../assets/images/video_slides/slide_3.jpeg';
import s4  from '../assets/images/video_slides/slide_4.jpeg';
import s5  from '../assets/images/video_slides/slide_5.jpeg';
import s6  from '../assets/images/video_slides/slide_6.jpeg';
import s7  from '../assets/images/video_slides/slide_7.jpeg';
import s8  from '../assets/images/video_slides/slide_8.jpeg';
import s9  from '../assets/images/video_slides/slide_9.jpeg';
import s10 from '../assets/images/video_slides/slide_10.jpeg';
import s11 from '../assets/images/video_slides/slide_11.jpeg';
import s12 from '../assets/images/video_slides/slide_12.jpeg';
import s13 from '../assets/images/video_slides/slide_13.jpg';
import s14 from '../assets/images/video_slides/slide_14.jpg';
import s15 from '../assets/images/video_slides/slide_15.jpg';
import s16 from '../assets/images/1712639794.png';

// Timeline: 3 GIFs (6s each = 18s) + 6 images (2s each = 12s) = 30s total
const timeline = [
  { type: 'gif', src: gif1,  duration: 6000, label: 'Farmer Harvesting' },
  { type: 'gif', src: gif2,  duration: 6000, label: 'Chemical Testing'  },
  { type: 'gif', src: gif3,  duration: 6000, label: 'Factory Production' },
  { type: 'img', src: s1,   duration: 2000 },
  { type: 'img', src: s4,   duration: 2000 },
  { type: 'img', src: s7,   duration: 2000 },
  { type: 'img', src: s10,  duration: 2000 },
  { type: 'img', src: s13,  duration: 2000 },
  { type: 'img', src: s16,  duration: 2000 },
];

const kbClass = ['kb-zoom-in', 'kb-pan-left', 'kb-pan-right', 'kb-zoom-out', 'kb-zoom-in-left', 'kb-zoom-in-right'];

const FADE = 800; // crossfade ms

const HeroSection = () => {
  const [cur, setCur]           = useState(0);
  const [nxt, setNxt]           = useState(null);
  const [entering, setEntering] = useState(false);
  const timerRef                = useRef(null);
  const imgIdx                  = useRef(0); // tracks kb variant per img slide

  const advance = (from) => {
    const next = (from + 1) % timeline.length;
    setNxt(next);
    setEntering(true);
    setTimeout(() => {
      setCur(next);
      setNxt(null);
      setEntering(false);
    }, FADE);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => advance(cur), timeline[cur].duration);
    return () => clearTimeout(timerRef.current);
  }, [cur]);

  const renderLayer = (index, cls) => {
    const item = timeline[index];
    if (!item) return null;

    if (item.type === 'gif') {
      return (
        <div key={`${index}-${cls}`} className={`hero-layer ${cls}`}>
          <img src={item.src} alt={item.label} className="hero-gif" />
          <div className="hero-overlay" />
        </div>
      );
    }

    const kb = kbClass[index % kbClass.length];
    return (
      <div key={`${index}-${cls}`} className={`hero-layer ${cls}`}>
        <div
          className={`hero-img-bg ${kb}`}
          style={{ backgroundImage: `url(${item.src})` }}
        />
        <div className="hero-overlay" />
      </div>
    );
  };

  return (
    <section className="hero">
      <div className="hero-stage">
        {renderLayer(cur, entering ? 'layer-exit' : 'layer-active')}
        {nxt !== null && renderLayer(nxt, 'layer-enter')}

        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-subtitle">SHIMANZU CHEMICALS PRIVATE LIMITED</span>
            <h1 className="hero-title">
              Empowering Farmers: <br />
              Innovative <span className="text-gradient">Agrochemicals</span> for Sustainable Agriculture
            </h1>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                View Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Progress bar — 30s full cycle */}
        <div className="hero-progress">
          <div className="hero-progress-bar" style={{ animationDuration: '30s' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

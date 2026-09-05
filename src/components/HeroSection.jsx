import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroSection.css';

import slide1Bg from '../assets/images/gif2-min.gif';
import slide2Bg from '../assets/images/gif3-min.gif';

const HeroSection = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true, el: '.hero-pagination' }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="hero-swiper"
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide>
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${slide1Bg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-container" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
              <div className="hero-content animate-fade-in-up">
                <span className="hero-subtitle">SHIMANZU CHEMICALS PRIVATE LIMITED</span>
                <h1 className="hero-title">
                  Revolutionizing Agriculture: <br />
                  <span className="text-gradient">Sustainable Solutions</span> for Enhanced Crop Yield
                </h1>
                <div className="hero-actions">
                  <Link to="/products" className="btn btn-primary">
                    View Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${slide2Bg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-container" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
              <div className="hero-content animate-fade-in-up">
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
          </div>
        </SwiperSlide>

        <div className="hero-pagination" style={{ position: 'absolute', bottom: '30px', left: '0', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'center', gap: '8px' }}></div>
      </Swiper>
    </section>
  );
};

export default HeroSection;

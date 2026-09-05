import React from 'react';
import HeroSection from '../components/HeroSection';
import ImpactCounters from '../components/ImpactCounters';
import { ArrowRight, Truck, Tags, Percent, Headset, ShieldCheck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

import aboutImg from '../assets/images/about-img-1.jpg';
import whyImg from '../assets/images/why.webp';

// Real product images from live site
import prod1 from '../assets/images/1713008833.webp'; // Black Label
import prod2 from '../assets/images/1713008853.webp'; // Khufia Fopronil
import prod3 from '../assets/images/1713009018.webp'; // Forodon
import prod4 from '../assets/images/1713009051.webp'; // GSULF
import prod5 from '../assets/images/1713009112.webp'; // Hanako
import prod6 from '../assets/images/1713009164.webp'; // Kimdan

const Home = () => {
  return (
    <>
      <HeroSection />
      
      {/* Value Propositions */}
      <section className="section-padding" style={{ marginTop: '-60px', position: 'relative', zIndex: 10, paddingBottom: '20px' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '16px' }}><Truck /></div>
              <h3 className="h5" style={{ marginBottom: '8px' }}>Fast Delivery</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Nationwide fast delivery on all items.</p>
            </div>
            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', animationDelay: '0.1s' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '16px' }}><Tags /></div>
              <h3 className="h5" style={{ marginBottom: '8px' }}>Best Price</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Best competitive price across the market.</p>
            </div>
            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', animationDelay: '0.2s' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '16px' }}><Percent /></div>
              <h3 className="h5" style={{ marginBottom: '8px' }}>Great Discounts</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Amazing deals and seasonal discounts.</p>
            </div>
            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', animationDelay: '0.3s' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '16px' }}><Headset /></div>
              <h3 className="h5" style={{ marginBottom: '8px' }}>24/7 Support</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Contact us anytime for assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <img src={aboutImg} alt="Agricultural Researchers" style={{ borderRadius: 'var(--radius-lg)', width: '100%', border: '1px solid var(--border-highlight)' }} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h6 style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>About Us</h6>
              <h2 className="h2" style={{ marginBottom: '24px' }}>SHIMANZU CHEMICALS PRIVATE LIMITED</h2>
              <p className="text-secondary" style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                We are committed to bringing the pinnacle of Japanese agricultural technology to farmers. By establishing state-of-the-art manufacturing plants, we ensure that every product meets the highest standards of quality and efficacy.
              </p>
              <p className="text-secondary" style={{ marginBottom: '32px', lineHeight: '1.7' }}>
                Our mission is to enhance crop productivity, improve farmer income, and promote sustainable agriculture across the nation through our extensive network of distributors and experts.
              </p>
              <Link to="/contact" className="btn btn-outline-gold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <ImpactCounters />

      {/* Featured Products Teaser */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h6 style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>Top Products</h6>
            <h2 className="h2">Popular Products</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '600', marginBottom: '1.5rem' }}>HERBICIDE</div>
              <img src={prod1} alt="Black Label" style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} />
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Black Label - BISCPYRIBAC SODIUM</h3>
              <p className="text-secondary" style={{ marginBottom: '2rem', flexGrow: 1 }}>Premium weed control solution for primary crops.</p>
              <Link to="/products" className="btn btn-outline-gold" style={{ width: '100%' }}>View Product</Link>
            </div>

            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-color)', animationDelay: '0.1s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '600', marginBottom: '1.5rem' }}>INSECTICIDE</div>
              <img src={prod2} alt="Khufia Fopronil" style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} />
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Khufia Fopronil 40%</h3>
              <p className="text-secondary" style={{ marginBottom: '2rem', flexGrow: 1 }}>Advanced protection against chewing pests.</p>
              <Link to="/products" className="btn btn-outline-gold" style={{ width: '100%' }}>View Product</Link>
            </div>

            <div className="animate-fade-in-up" style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-color)', animationDelay: '0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '600', marginBottom: '1.5rem' }}>INSECTICIDE</div>
              <img src={prod3} alt="Forodon" style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} />
              <h3 className="h4" style={{ marginBottom: '1rem' }}>FORODON 3G - CARBOFURAN 3% CG</h3>
              <p className="text-secondary" style={{ marginBottom: '2rem', flexGrow: 1 }}>Premium insecticide for enhanced crop safety.</p>
              <Link to="/products" className="btn btn-outline-gold" style={{ width: '100%' }}>View Product</Link>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="btn btn-gold">
              View All Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h6 style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>Why Choose Us</h6>
              <h2 className="h2" style={{ marginBottom: '32px' }}>Pioneering Excellence in Agrochemicals</h2>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '16px', borderRadius: '50%', height: 'fit-content' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="h5" style={{ marginBottom: '4px' }}>Quality Assurance</h4>
                  <p className="text-secondary">ISO 9001:2015 & 14001:2015 certified processes ensuring world-class standards.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', padding: '16px', borderRadius: '50%', height: 'fit-content' }}>
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="h5" style={{ marginBottom: '4px' }}>Eco-Friendly Solutions</h4>
                  <p className="text-secondary">Sustainable products designed to protect the environment while maximizing yield.</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img src={whyImg} alt="Tractor in field" style={{ borderRadius: 'var(--radius-lg)', width: '100%', border: '1px solid var(--border-color)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

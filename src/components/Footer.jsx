import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';
import logoImg from '../assets/images/1712639794.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Shimanzu Logo" style={{ height: '50px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p className="footer-desc">
              Empowering farmers with advanced Japanese agrochemical research and state-of-the-art manufacturing for sustainable agriculture.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebookF size={18} /></a>
              <a href="#" className="social-icon"><FaInstagram size={18} /></a>
              <a href="#" className="social-icon"><FaTwitter size={18} /></a>
              <a href="#" className="social-icon"><FaLinkedinIn size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="footer-links-col">
            <h4 className="footer-title">Infrastructure</h4>
            <ul className="footer-links">
              <li><a href="#">R&D Laboratory</a></li>
              <li><a href="#">Quality Control (HPLC/GLC)</a></li>
              <li><a href="#">Manufacturing Standards</a></li>
              <li><a href="#">ISO 9001:2015</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Reach Us</h4>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <span>Plot No 271, Village Nawada, Uttam Nagar, New Delhi - 110059</span>
            </div>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <span>1800 309 3053 (Toll-Free)</span>
            </div>
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <span>japan@shimanzu.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} | SHIMANZU CHEMICALS PRIVATE LIMITED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

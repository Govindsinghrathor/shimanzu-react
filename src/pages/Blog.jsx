import React from 'react';
import { motion } from 'framer-motion';
import { Search, Folder, Calendar } from 'lucide-react';

import blog1 from '../assets/images/1694428044.webp';
import blog2 from '../assets/images/1694428268.webp';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Excellence in Agrochemicals: How Japanese Tech Changes Farming",
      desc: "Discover the incredible advancements in crop protection resulting from integration of new technologies.",
      img: blog1,
      category: "Agriculture",
      date: "Oct 15, 2025"
    },
    {
      id: 2,
      title: "Managing Pests Effectively Before Harvest",
      desc: "Learn the best practices to maintain a healthy crop output in the critical weeks before harvesting.",
      img: blog2,
      category: "Pesticides",
      date: "Sep 28, 2025"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '100px' }}>
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '60px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="h2" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Latest Blogs</h1>
          <p className="text-secondary">Home / Blogs</p>
        </motion.div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8" style={{ gridTemplateColumns: '2fr 1fr' }}>
            
            {/* Blog List */}
            <div>
              {blogs.map((blog, idx) => (
                <motion.div 
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                  style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden', marginBottom: '2rem', cursor: 'pointer' }}
                >
                  <motion.div style={{ overflow: 'hidden' }}>
                    <motion.img 
                      src={blog.img} 
                      alt={blog.title} 
                      style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                  <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                        <Folder size={16} /> {blog.category}
                      </span>
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={16} /> {blog.date}
                      </span>
                    </div>
                    <h3 className="h3" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>{blog.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>{blog.desc}</p>
                    <motion.button 
                      whileHover={{ x: 5, backgroundColor: 'var(--accent-gold)', color: 'var(--bg-dark)' }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-outline-gold"
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
                <h4 className="h5" style={{ marginBottom: '16px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Search</h4>
                <div style={{ display: 'flex' }}>
                  <input type="text" placeholder="Search blogs..." style={{ width: '100%', padding: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)', color: 'var(--text-primary)', outline: 'none' }} />
                  <button style={{ background: 'var(--accent-gold)', color: 'var(--bg-dark)', padding: '0 16px', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', border: 'none', cursor: 'pointer' }}>
                    <Search size={20} />
                  </button>
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <h4 className="h5" style={{ marginBottom: '16px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Categories</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }} onMouseOver={e => e.target.style.color = 'var(--accent-gold)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><span>Agriculture</span> <span>(12)</span></a></li>
                  <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }} onMouseOver={e => e.target.style.color = 'var(--accent-gold)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><span>Farming Tech</span> <span>(8)</span></a></li>
                  <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }} onMouseOver={e => e.target.style.color = 'var(--accent-gold)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><span>Pesticides</span> <span>(15)</span></a></li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

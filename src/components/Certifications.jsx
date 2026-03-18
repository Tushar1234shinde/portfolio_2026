import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificationsData } from '../data';
import './Skills.css'; // Reusing skill card styles

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Licenses & <span className="gradient-text">Certifications</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Professional achievements and continuous learning.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {certificationsData.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', borderColor: 'var(--accent-cyan)' }}
          >
            <div style={{ padding: '1rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', color: 'var(--accent-cyan)' }}>
              <Award size={28} />
            </div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>{cert}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

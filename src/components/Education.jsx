import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data';
import './Timeline.css';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Academic background and foundations.
        </p>
      </motion.div>

      <div className="timeline">
        {educationData.map((edu, idx) => (
          <motion.div 
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot" style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)' }}><GraduationCap size={20} /></div>
            <div className="timeline-content" style={{ borderColor: 'var(--card-border)' }}>
              <h3 style={{ color: 'var(--text-primary)' }}>{edu.degree}</h3>
              <h4 style={{ color: 'var(--accent-purple)' }}>{edu.institution}</h4>
              <span className="timeline-date">{edu.duration}</span>
              <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>Grade: {edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

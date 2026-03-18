import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: skillsData.programming },
    { title: "Frontend", skills: skillsData.frontend },
    { title: "Backend", skills: skillsData.backend },
    { title: "Databases", skills: skillsData.databases },
    { title: "Core & Principles", skills: skillsData.core },
    { title: "Tools & Tech", skills: skillsData.tools }
  ];

  return (
    <section id="skills" className="skills-section section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          My armory of languages, frameworks, and tools.
        </p>
      </motion.div>

      <div className="skills-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            className="skill-category-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '2rem'
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
          >
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i} 
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  whileHover={{ backgroundColor: 'var(--accent-purple)', color: '#fff', borderColor: 'var(--accent-purple)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

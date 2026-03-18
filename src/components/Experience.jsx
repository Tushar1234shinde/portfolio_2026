import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data';
import './Timeline.css';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Internship <span className="gradient-text">Experience</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          My professional journey and roles.
        </p>
      </motion.div>

      <div className="timeline">
        {experienceData.map((exp, idx) => (
          <motion.div 
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"><Briefcase size={20} /></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4 className="gradient-text">{exp.company}</h4>
              <span className="timeline-date">{exp.duration}</span>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

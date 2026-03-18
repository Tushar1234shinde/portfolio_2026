import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid"></div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <span className="pulse-dot"></span>
          {personalInfo.role}
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi, I'm <br />
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="hero-subtitle">
          {personalInfo.summary.split('. ')[0]}.
        </motion.p>
        
        <motion.div variants={itemVariants} className="hero-actions">
          <motion.a 
            href="#projects" 
            className="primary-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)", y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Work <ArrowRight size={20} />
          </motion.a>
          
          <div className="social-links">
            <motion.a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "var(--accent-cyan)", scale: 1.1 }}><Github size={26} /></motion.a>
            <motion.a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" whileHover={{ y: -5, color: "var(--accent-cyan)", scale: 1.1 }}><Linkedin size={26} /></motion.a>
            <motion.a href={`mailto:${personalInfo.email}`} className="social-icon" whileHover={{ y: -5, color: "var(--accent-cyan)", scale: 1.1 }}><Mail size={26} /></motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.a href="#about"
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           style={{ display: 'inline-block', cursor: 'pointer' }}
        >
          <ChevronDown size={32} color="var(--text-secondary)" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

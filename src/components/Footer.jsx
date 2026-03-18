import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '3rem 2rem',
      textAlign: 'center',
      background: 'rgba(3, 3, 3, 0.95)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, color: 'var(--accent-cyan)', scale: 1.1 }} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}><Github size={26} /></motion.a>
        <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, color: 'var(--accent-cyan)', scale: 1.1 }} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}><Linkedin size={26} /></motion.a>
        <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ y: -5, color: 'var(--accent-cyan)', scale: 1.1 }} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}><Mail size={26} /></motion.a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        Designed & Built by {personalInfo.name}
      </p>
    </footer>
  );
};
export default Footer;

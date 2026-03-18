import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          I'm currently looking for new opportunities and collaborations!
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Let's talk about your next project</h3>
          <p>My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className="info-list">
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><Mail size={20} /></div>
              <span>{personalInfo.email}</span>
            </motion.div>
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><Phone size={20} /></div>
              <span>{personalInfo.phone}</span>
            </motion.div>
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><MapPin size={20} /></div>
              <span>India</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <input type="text" id="name" placeholder="Name" required />
            <span className="input-focus-bg"></span>
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" required />
            <span className="input-focus-bg"></span>
          </div>
          <div className="form-group">
            <textarea id="message" rows="5" placeholder="Message" required></textarea>
            <span className="input-focus-bg"></span>
          </div>
          
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Layout, Database } from 'lucide-react';
import { personalInfo } from '../data';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Terminal size={32} color="var(--accent-cyan)" />,
      title: 'Backend Development',
      desc: 'Building scalable enterprise systems and REST APIs with Java and Spring Boot.'
    },
    {
      icon: <Layout size={32} color="var(--accent-purple)" />,
      title: 'Frontend Development',
      desc: 'Creating immersive and responsive UIs with modern React.'
    },
    {
      icon: <Database size={32} color="#10b981" />,
      title: 'Database Architecture',
      desc: 'Designing optimal schemas for MySQL and working with relational concepts.'
    },
    {
      icon: <Award size={32} color="#f59e0b" />,
      title: 'Continuous Learner',
      desc: 'Passionate about problem-solving, DSA, and grasping new tech fast.'
    }
  ];

  return (
    <section id="about" className="about-section section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Bridging the gap between complex logic and seamless user experiences.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>My Summary</h3>
          <p>
            {personalInfo.summary}
          </p>
          <p>
            With an engineering mindset and a strong grip on <span className="highlight">Java</span>, <span className="highlight">Spring Boot</span>, and <span className="highlight">React</span>, I aim to craft reliable software solutions that address real-world challenges effectively.
          </p>
        </motion.div>

        <motion.div 
          className="about-cards"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              className="service-card"
              whileHover={{ y: -10, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

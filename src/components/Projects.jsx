import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Showcasing full-stack applications and recent works.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8 }}
          >
             <div className="project-card-inner">
               <div className="project-header">
                 <FolderGit2 size={42} className="folder-icon" />
                 <div className="project-links">
                   <motion.a href={project.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, color: "var(--accent-cyan)" }} aria-label="Github Repo"><Github size={22} /></motion.a>
                   <motion.a href={project.live} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, color: "var(--accent-cyan)" }} aria-label="Live Demo"><ExternalLink size={22} /></motion.a>
                 </div>
               </div>
               
               <h3 className="project-title">{project.title}</h3>
               <div className="project-desc">
                 <ul>
                    {project.description.map((point, i) => (
                      <li key={i} style={{ marginBottom: "4px", fontSize: "0.95rem", color: "var(--text-secondary)" }}>• {point}</li>
                    ))}
                 </ul>
               </div>
               
               <ul className="project-tags">
                 {project.techStack.map((tag, i) => (
                   <li key={i}>{tag}</li>
                 ))}
               </ul>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

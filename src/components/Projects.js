// src/components/Projects.js
import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of project one.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of project two.',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

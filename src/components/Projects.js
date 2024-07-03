// src/components/Projects.js
import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Data Analytics Project',
    description: 'A project demonstrating data analysis techniques using Python and Pandas.',
    link: 'https://github.com/<your-username>/data-analytics-project' // Replace with your GitHub repository link
  }
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

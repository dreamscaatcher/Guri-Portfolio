import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    imageUrl: '/path/to/image1.jpg',
    demoUrl: 'http://example.com/demo1',
    repoUrl: 'http://github.com/user/repo1',
    imageWidth: 300,
    imageHeight: 200
  },
  // Add more projects here
];

const Projects: React.FC = () => (
  <section>
    <h1>My Projects</h1>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;

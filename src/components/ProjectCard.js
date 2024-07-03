import React from 'react';
import styles from '../styles/ProjectCard.module.css';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, demoUrl, repoUrl }) => (
  <div className={styles.card}>
    <Image src={imageUrl} alt={`${title} screenshot`} className={styles.image} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default ProjectCard;

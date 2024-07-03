import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
  imageWidth: number;
  imageHeight: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoUrl, repoUrl, imageWidth, imageHeight }) => (
  <div className={styles.card}>
    <Image src={imageUrl} alt={`${title} screenshot`} width={imageWidth} height={imageHeight} className={styles.image} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default ProjectCard;

// src/components/ProjectCard.js

import React from 'react';
import '../styles/projectCard.css'; // create this file

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

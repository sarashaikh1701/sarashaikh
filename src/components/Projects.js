// src/components/Projects.js

import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
// import { fetchGitHubRepos } from '../utils/api'; // We'll define this
import '../styles/projects.css';


function Projects() {
  // const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   fetchGitHubRepos()
  //     .then(data => setRepos(data))
  //     .catch(err => console.error(err));
  // }, []);

  const projects = [
    {
      title: 'Refugee Population by Country or Territory of Origin',
      description: 'An interactive dashboard to track global refugee population by country of origin from 1951 to 2023.',
      tags: ['DataViz', 'Python', 'Storytelling','Plotly'],
      image: '/assets/images/RefugePopulation.PNG',
      link: 'https://github.com/sarashaikh1701/Refugee-Population-by-Country-or-Territory-of-Origin',
    },
    {
      title: "JP Morgan Chase Co.'s Code For Good Hackathon'22",
      description: 'Streamlined data visualizations to support NGO program analysis.',
      tags: ['Impact', 'Visualization', 'NGO'],
      image: '/assets/images/jpmc.png',
      link: 'https://github.com/sarashaikh1701/JPMC-Anubhuti',
    },
    {
      title: 'Sustainable City Management for Dublin Transportation Systems',
      description: 'Contributed in a Group Project involving the development of a Django based app used to analyse and make decisions for mobility in Dublin City.',
      tags: ['Python', 'Django', 'Database Management', 'Web Development', 'UIUX'],
      image: '/assets/images/SCM.PNG',
      link: 'https://github.com/sarashaikh1701/SustainableCityManagement',
    },
    {
      title: 'Machine Learning for Obesity Prevention in Young Adults',
      description: 'Built a user-friendly website that analyzes imbalanced educational data to offer preventive insights and calculators, achieving ~90% accuracy.',
      tags: ['Data Collection', 'Python', 'Web Development','Predictive Modeling'],
      image: '/assets/images/obesity-prevention.png',
      link: 'https://github.com/sarashaikh1701/Obesity-Prediction-and-Prevention',
    },
    {
      title: 'Sentiment analysis using Twitter API',
      description: 'Used Twitter data and NLP techniques to detect early signs of depression with 92% accuracy, offering insights for public health efforts.',
      tags: ['Social Media Analytics', 'Natural Language Processing', 'Machine Learning'],
      image: '/assets/images/twitter_sentiment_analysis.jpg',
      link: 'https://github.com/sarashaikh1701/Sentiment-analysis-using-Twitter-API',
    },
  ];
  
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}  

export default Projects;

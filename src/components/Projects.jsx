import React from 'react';

import { FaGithub } from 'react-icons/fa';
import buyoraImg from '../assets/images/buyora-ss.png';
import datumSageImg from '../assets/images/datumsage-ss.png';
import bookRecImg from '../assets/images/brks-ss.png';
import uberTripImg from '../assets/images/uber-ss.png';
import tutorPlatformImg from '../assets/images/tutor-ss.png';
import worldpopulationimg from '../assets/images/wpa-ss.png';

const projectsData = [
  {
    title: "Buyora: Full-Stack E-Commerce",
    description: "A full-stack e-commerce platform with a responsive React.js SPA and a secure Node.js RESTful API.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    imageUrl: buyoraImg,
    githubUrl: "https://github.com/CharanDeekonda/Buyora_E-Commerce_Platform"
  },
  {
    title: "DatumSage: AI Data Platform",
    description: "An AI microservice that converts natural language queries into data insights and visualizations.",
    tech: ["Next.js", "Node.js", "Python", "Flask", "LangChain", "Gemini"],
    imageUrl: datumSageImg,
    githubUrl: "https://github.com/CharanDeekonda/DatumSageAI" 
  },
  {
    title: "World Population Analysis",
    description: "A full-stack data application to handle and display massive demographic data using Flask and Python.",
    tech: ["Python", "Flask", "Pandas", "Matplotlib"],
    imageUrl: worldpopulationimg,
    githubUrl: "https://github.com/CharanDeekonda/World-Population-Analysis"
  },
  {
      title: "Uber Trip Analysis",
      description: "The aim of this project is to predict Uber trip demand based on historical ride-hailing data using machine learning models.",
      tech: ["Python","Flask","Numpy", "Pandas", "scikit-learn", "Matplotlib"],
      imageUrl: uberTripImg,
      githubUrl: "https://github.com/CharanDeekonda/Uber-Trip-Analysis"
    },
    {
      title: "Book Recommendation System",
      description: "AI BOOK is an Website the recommends the book based on your recently read book.",
      tech: ["Python", "Numpy", "Pandas", "PyWebIO"],
      imageUrl: bookRecImg,
      githubUrl: "https://github.com/CharanDeekonda/Book-Recommendation-System"
    },
  {
    title: "Tutor Platform: Online Learning",
    description: "An online platform connecting students with tutors, featuring user authentication, profile management, and session scheduling.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    imageUrl: tutorPlatformImg,
    githubUrl: "https://github.com/CharanDeekonda/tutor-platform"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-light-text text-dark-bg py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-dark-bg/80">
            Check out some of my work.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-dark-bg text-light-text rounded-lg shadow-xl overflow-hidden
                         flex flex-col // Ensures footer is at the bottom
                         transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={project.imageUrl} 
                alt={`${project.title} screenshot`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-light-text/90 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-light-text text-dark-bg text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full text-center bg-light-text text-dark-bg px-6 py-3 rounded-md text-lg font-medium
                             hover:bg-opacity-90 transition-all duration-200
                             flex items-center justify-center gap-2"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
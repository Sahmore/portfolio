import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with React and Node.js",
    tech: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/300x200?text=E-Commerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing daily tasks and projects",
    tech: "React, Firebase, Material-UI",
    image: "https://via.placeholder.com/300x200?text=Task+App"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive charts",
    tech: "JavaScript, API, Chart.js",
    image: "https://via.placeholder.com/300x200?text=Weather+App"
  }
];

const Projects = () =>{
    return(
        <>
        <section id="projects" className="projects-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">My Projects</h2>
          <p>page in development...</p>
        </Container>
      </section>
        </>
    )
}

export default Projects;
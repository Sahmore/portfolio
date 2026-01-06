import React from 'react';
import IMG from './IMG.jpg';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Portfolio = () => {
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

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "fab fa-github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram" }
  ];

  return (
    <>
      {/* Navigation is provided by `Header` component */}

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8}>
              <h1 className="hero-title">Hi, I'm Tekgedi Makhoana</h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                I create beautiful and functional web applications using modern technologies. 
                Passionate about clean code and user experience.
              </p>
              
            </Col>

            <Col lg={4} className="text-center">
              <div className="hero-image1">
                <img 
                  src={IMG} 
                  alt="Profile" 
                  className="hero-image"
                />
                  
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Footer */}
      <footer className="footer bg-dark text-light py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="mb-0">&copy; 2024 Tekgedi Makhoana. All rights reserved.</p>
            </Col>
            <Col md={6}>
              <div className="social-links text-md-end">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light me-3"
                  >
                    <i className={social.icon}></i> {social.name}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Portfolio;
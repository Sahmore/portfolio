
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <>
         <section id="about" className="about-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-5">About Me</h2>
              <Row>
                
                <Col md={8}>
                  <p className="about-text">
                    Hello! I'm a passionate full-stack developer. I specialize in React, Node.js, and modern 
                    JavaScript frameworks.
                  </p>
                  <p className="about-text">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or enjoying outdoor activities.
                  </p>
                  <div className="skills mt-4">
                    <h5>Skills:</h5>
                    <div className="skill-tags">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">HTML/CSS</span>
                      <span className="skill-tag">Firebase</span>
                      <span className="skill-tag">Bootstrap</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">Adobe Illustrator</span>
                      <span className="skill-tag">Adobe Photoshop</span>
                      <span className="skill-tag">Microsoft Excel</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
        </>
    )
}

export default About;
import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = ()=>{
    const form = useRef();
    const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

    // Configure these in a .env file or replace the placeholders with your EmailJS IDs
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_wl9tsxe';
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_dovh3ef';
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'oNJxB_vF_nUT83TXo';

    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus('sending');

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log('Email sent:', result.text);
          setStatus('success');
          form.current.reset();
        }, (error) => {
          console.error('Email send error:', error.text);
          setStatus('error');
        });
    }

    return(
        <>
        <section id="contact" className="contact-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-5">Get In Touch</h2>
              <Form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="from_name" type="text" placeholder="Your Name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="reply_to" type="email" placeholder="Your Email" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control name="subject" type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control name="message" as="textarea" rows={5} placeholder="Your Message" required />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
                {status === 'success' && (
                  <p className="mt-3 text-success text-center">Message sent — thank you!</p>
                )}
                {status === 'error' && (
                  <p className="mt-3 text-danger text-center">Failed to send. Please try again later.</p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
        </>
    )
}

export default Contact;
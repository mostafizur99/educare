import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneVolume, } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="Footer text-start bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={4} className="my-4">
                        <h4>About</h4>
                        <p className="footer-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore ratione magni beatae labore deserunt eveniet aliquam quae optio molestias!</p>
                    </Col>
                    <Col md={4} className="my-4">
                        <h4 className="ms-3">Quic Links</h4>
                        <Nav defaultActiveKey="/home" className="flex-column ">
                            <NavLink className="fs-5 mx-3  text-decoration-none footer-item" to="/home">Home</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none footer-item" to="/about">About</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none footer-item" to="/services">Services</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none footer-item" to="/pricing">Pricing</NavLink>

                        </Nav>
                    </Col>
                    <Col md={4} className="my-4">
                        <h4 className="ms-3">Contact Us</h4>
                        <ListGroup className="text-white">
                            <ListGroup.Item className="bg-dark footer-item"><FontAwesomeIcon className="custom-color" icon={faMapMarkerAlt} /> <span>123 Down Street, New York, United State</span></ListGroup.Item>
                            <ListGroup.Item className="bg-dark footer-item"><FontAwesomeIcon className="custom-color" icon={faPhoneVolume} /> <span>+123-456-78</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark footer-item"><FontAwesomeIcon className="custom-color" icon={faEnvelope} /> <span>info@educare.com</span>
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
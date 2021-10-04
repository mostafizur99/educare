import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    const activeStyle = {
        fontWeight: "500",
        color: "#e74d57"
    }
    return (
        <div>
            {/* Topbar-area ] */}
            <div className="topbar py-3">
                <Container>
                    <div className="text-white d-flex justify-content-between">
                        <div>
                            <span className="me-4"><FontAwesomeIcon className="custom-color" icon={faEnvelope} /> info@educare.com</span>
                            <span><FontAwesomeIcon className="custom-color" icon={faPhoneVolume} /> +123-456-78</span>
                        </div>
                        <div >
                            <a href="https://google.com" className="ms-3" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://google.com" className="ms-3" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://google.com" className="ms-3" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPinterestP} /></a>
                            <a href="https://google.com" className="ms-3" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Nav area  */}
            <Navbar bg="light" expand="lg" className="text-secondary py-3">
                <Container>
                    <Navbar.Brand href="/"><span className="logo-icon"><FontAwesomeIcon icon={faBookReader} /></span><span className="logo-text">EduCare</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav >
                            <NavLink className="fs-5 mx-3  text-decoration-none menu-item" to="/home" activeStyle={activeStyle}>Home</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none menu-item" to="/about" activeStyle={activeStyle}>About</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none menu-item" to="/services" activeStyle={activeStyle}>Services</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none menu-item" to="/pricing" activeStyle={activeStyle}>Pricing</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
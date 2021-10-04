import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceBox from '../ServiceBox/ServiceBox';
import './ServicesSection.css'

// Component for home page service section 

const ServicesSection = () => {
    const [srtServices, setSrtSevices] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('./servicesData.JSON')
            .then(res => res.json())
            .then(data => setSrtSevices(data))
    }, []);

    let fourServices = srtServices.slice(0, 4);

    const handleService = () => {
        history.push('/services');
    }
    return (
        <div className="Service-section">
            <Container>
                <Row>
                    <Col md={4} className="d-flex align-items-center">
                        <div>
                            <h6 className="custom-color fs-4">Services</h6>
                            <h3 className="main-color fw-bold">What We Provide To You</h3>
                            <p className="text-color">EduCare provides the world best language course, the ultimate outline for the language to explore world.</p>
                            <button onClick={handleService} className="custom-button">View All Services</button>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="service-items">
                            {
                                fourServices.map(fourService =>
                                    <ServiceBox key={fourService.id} fourService={fourService}></ServiceBox>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesSection;
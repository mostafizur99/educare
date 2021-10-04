import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

// Component for service page 

const ServicePage = () => {
    const [services, setSevices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.JSON')
            .then(res => res.json())
            .then(data => setSevices(data))
    }, []);

    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h6 className="custom-color fs-4">Services</h6>
                        <h3 className="main-color fw-bold">What We Provide To Make You Enrich</h3>
                    </Col>
                </Row>

                <div className="py-5">
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ServicePage;
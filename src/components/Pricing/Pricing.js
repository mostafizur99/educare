import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PricingBox from '../PricingBox/PricingBox';
import './Pricing.css'

const Pricing = () => {
    const [pricings, setPricings] = useState([]);

    useEffect(() => {
        fetch('./pricingData.JSON')
            .then(res => res.json())
            .then(data => setPricings(data))
    }, []);

    return (
        <div className="Pricing">
            <Container>
                <Row>
                    <Col>
                        <h6 className="custom-color fs-4">Our best pricing</h6>
                        <h3 className="main-color fw-bold">Services Package For Membership</h3>
                    </Col>
                </Row>
                <Row >
                    {
                        pricings.map(pricing =>
                            <PricingBox key={pricing.id_} pricing={pricing}></PricingBox>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Pricing;
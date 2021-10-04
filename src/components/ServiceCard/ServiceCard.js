import React from 'react';
import { Card, Col } from 'react-bootstrap';

// Component card design for service page 

const ServiceCard = (props) => {
    const { name, subTitle, price, thumb, srtDesc } = props.service;
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card.Img variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title className="main-color fw-bold">{name}</Card.Title>
                        <Card.Subtitle className="my-3 "><span className="box-price text-white">${price}/lifetimes</span></Card.Subtitle>
                        <Card.Text className="text-color">{srtDesc}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="main-color">{subTitle}</Card.Text>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceCard;
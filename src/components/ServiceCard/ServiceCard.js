import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faAward, faClock } from '@fortawesome/free-solid-svg-icons'


// Component card design for service page 

const ServiceCard = (props) => {
    const { name, duration, price, thumb, srtDesc, liveClass } = props.service;

    let courseType;
    if (liveClass) {
        courseType = <span className="main-color fw-bold">
            <FontAwesomeIcon className="custom-color" icon={faChalkboardTeacher} />  Live Class
        </span>
    }

    return (
        <div>
            <Col>
                <Card className="shadow">
                    <a href="https://google.com" target="_blank" rel="noreferrer"><Card.Img variant="top" src={thumb} /></a>
                    <Card.Body>
                        <Card.Title className="main-color fw-bold"><a href="https://google.com" className="text-decoration-none main-color" target="_blank" rel="noreferrer">{name}</a></Card.Title>
                        <div className="d-flex justify-content-between my-4">
                            <Card.Text><span className="box-price text-white">${price}/lifetimes</span></Card.Text>
                            <div>
                                {courseType}
                            </div>
                        </div>
                        <Card.Text className="fancy-color fst-italic">"{srtDesc}"</Card.Text>
                        <div className="d-flex justify-content-between my-4">
                            <span className="text-color fw-bold">
                                <FontAwesomeIcon className="custom-color" icon={faClock} /> {duration} Week
                            </span>
                            <span className="main-color fw-bold">
                                <FontAwesomeIcon className="custom-color" icon={faAward} />  Certificate
                            </span>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceCard;
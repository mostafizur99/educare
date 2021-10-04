import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceBox.css'

// Component design for homepage service section 

const ServiceBox = (props) => {
    const { name, subTitle, price, thumb } = props.fourService;
    return (
        <div className="ServiceBox">
            <Card className="text-white">
                <div className="box-image">
                    <Card.Img src={thumb} alt="Card image" />
                </div>
                <Card.ImgOverlay className="box-body">
                    <Card.Title className="fs-4 fw-bold">{name}</Card.Title>
                    <Card.Text>
                        {subTitle}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 "><span className="box-price">${price}/lifetimes</span></Card.Subtitle>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default ServiceBox;
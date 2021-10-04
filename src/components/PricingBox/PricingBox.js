import React from 'react';
import { Col } from 'react-bootstrap';


// component in pricing section
const PricingBox = (props) => {
    const { title, price, subTitle } = props.pricing;

    return (
        <Col md={4}>
            <div className="pricing-box shadow py-5 my-5">
                <div className="mb-3">
                    <h3 className="main-color fw-bold">{title}</h3>
                    <span className="text-uppercase">/Month</span>
                </div>
                <div className="price-count">
                    <h2 className="fs-1 custom-color fw-bold my-3"><span>$</span>{price}</h2>
                </div>
                <div className="price-content text-color px-4">
                    <p>{subTitle}</p>
                </div>
                <div className="price-btn">
                    <button className="custom-button my-3 text-uppercase">purchage</button>

                </div>
            </div>
        </Col>
    );
};

export default PricingBox;
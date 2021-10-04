import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import './Banner.css'


// banner at home page 
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="slider-img">
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="mb-5">
                        <h3 className="fs-1">Learn New Daily</h3>
                        <p className="fs-4">We have miltiple language cources to learn.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-img">
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption className="mb-5">
                        <h3 className="fs-1">Learn and Explore World</h3>
                        <p className="fs-4">We have the best communicative language course to explore world</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-img">
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className="mb-5">
                        <h3 className="fs-1">Learn From Home</h3>
                        <p className="fs-4">Have an advantage for e-larning.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
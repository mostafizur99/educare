import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

// component for about us page 
const About = () => {
    const [aboutDatas, setAboutDatas] = useState({});

    // loading data for about us page
    useEffect(() => {
        fetch('./aboutData.JSON')
            .then(res => res.json())
            .then(data => setAboutDatas(data))
    }, []);

    const { aboutThumb, title, subTitle, ourDesc1, ourDesc2 } = aboutDatas;


    return (
        <div className="About">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-image">
                            <img className="img-fluid mt-4" src={aboutThumb} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h6 className="custom-color fs-4">{subTitle}</h6>
                            <h3 className="main-color fw-bold mb-4">{title}</h3>
                            <p className="text-color">{ourDesc1}</p>
                            <p className="text-color">{ourDesc2}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
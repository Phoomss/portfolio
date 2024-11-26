import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import sem1 from '../../assets/seminar/1.png';
import sem2 from '../../assets/seminar/2.png';
import sem3 from '../../assets/seminar/3.png';
import sem4 from '../../assets/seminar/4.png';
import sem5 from '../../assets/seminar/5.png';
import ssnvc1 from '../../assets/nvc/1.png';
import ssnvc2 from '../../assets/nvc/2.png';
import ssnvc3 from '../../assets/nvc/3.png';
import ssnvc4 from '../../assets/nvc/4.png';
import tn1 from '../../assets/tn/2.png';
import tn2 from '../../assets/tn/3.png';
import tn3 from '../../assets/tn/4.png';
import tn4 from '../../assets/tn/6.png';
import tn5 from '../../assets/tn/7.png';
import Aos from 'aos';

const Activity = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const seminarImages = [sem1, sem3, sem4, sem5, sem2];
    const ssnvcImages = [ssnvc2, ssnvc3, ssnvc4, ssnvc1];
    const tnImages = [tn4, tn5, tn1, tn2, tn3];

    return (
        <div className="container mt-5" id="activity" data-aos="fade-up">
            <div className="text-center mb-5">
                <h2 className="display-4 text-primary">ACTIVITY</h2>
                <hr className="border-primary border-3 opacity-100 w-25 mx-auto" />
            </div>
            <div className="content-activity">
                {/* Seminar Section */}
                <div className="activity-section mb-5" data-aos="fade-left">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Carousel>
                                {seminarImages.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 rounded shadow-lg"
                                            src={image}
                                            alt={`Seminar ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3 className="display-5 text-secondary">Seminar</h3>
                            <p className="lead text-muted">Malware, a threat from the Internet</p>
                        </div>
                    </div>
                </div>

                {/* Show and Share - NVC Section */}
                <div className="activity-section mb-5" data-aos="fade-right">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <h3 className="display-5 text-secondary">Show and Share</h3>
                            <p className="lead text-muted">Nakhon Pathom Vocational College</p>
                        </div>
                        <div className="col-lg-6">
                            <Carousel>
                                {ssnvcImages.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 rounded shadow-lg"
                                            src={image}
                                            alt={`NVC ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* Show and Share - NTC Section */}
                <div className="activity-section" data-aos="fade-left">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Carousel>
                                {tnImages.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 rounded shadow-lg"
                                            src={image}
                                            alt={`NTC ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3 className="display-5 text-secondary">Show and Share</h3>
                            <p className="lead text-muted">Nakhon Pathom Technical College</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;

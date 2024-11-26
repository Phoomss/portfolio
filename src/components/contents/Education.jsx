import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import nvc_logo from '../../assets/logo/logo.png';
import npru_logo from '../../assets/logo/Npru-logo.png';

const educationData = [
  {
    id: 1,
    logo: npru_logo,
    degree: "Bachelor's degree",
    institution: "Ratchaphat Nakhon Pathom University (NPRU)",
    faculty: "Faculty of Science and Technology",
    major: "Software Engineering",
    duration: "2024 - NOW",
  },
  {
    id: 2,
    logo: nvc_logo,
    degree: "Dip./High Voc. Cert",
    institution: "Nakhon Pathom Vocational College",
    branch: "Information Technology",
    duration: "2022 - 2023",
  },
  {
    id: 3,
    logo: nvc_logo,
    degree: "Voc. Cert",
    institution: "Nakhon Pathom Vocational College",
    branch: "Business Computer",
    duration: "2019 - 2021",
  },
];

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="education container mt-5" data-aos="fade-up">
      <div className="text-center d-flex flex-column align-items-center">
        <h2 className="fw-bold text-primary">EDUCATION</h2>
        <hr className="border border-primary border-2 opacity-100 w-50" />
      </div>

      <div className="detail-education mt-4">
        {educationData.map((education, index) => (
          <div
            key={education.id}
            className="col-12 mb-4"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div
              className="card shadow-lg border-0 h-100 hover-card"
              style={{ maxWidth: '540px', margin: '0 auto' }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={education.logo || 'path/to/default-image.png'}
                    alt={`${education.institution} logo`}
                    className="img-fluid rounded-start"
                    style={{ objectFit: 'contain', height: '100%' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">{education.degree}</h5>
                    <p className="card-text mb-1">{education.institution}</p>
                    <hr />
                    <p className="card-text mb-1 text-muted">{education.faculty}</p>
                    <p className="card-text mb-2 text-muted">{education.major || education.branch}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">{education.duration}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

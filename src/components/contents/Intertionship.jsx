import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import {
    FaAppStore,
    FaDesktop,
    FaFacebook,
    FaGithub,
    FaHeadset,
    FaLinkedin,
} from "react-icons/fa";
import '../../Css/Intertionship.css'

const detailInternship = {
    content:
        "The National Electricity Authority is located in Bang Kruai, Nonthaburi Province." +
        " I had the opportunity to intern in the Digital Management Division of the Digital Management and Development Department" +
        " from 15 May to 15 September 2023, focusing on developing the contract employee management system.",
    date: "15 May - 15 September 2023"
};

const workDetails = [
    {
        icon: <FaDesktop />,
        title: "DESIGN AND ANALYSIS",
        description:
            "Redesigned database and back-end systems while improving the front-end layout based on user requirements.",
    },
    {
        icon: <FaAppStore />,
        title: "DEVELOPMENT",
        description:
            "Developed a SPA (Single Page Application) to manage employee ID card issuance using component-oriented development.",
    },
    {
        icon: <FaHeadset />,
        title: "SUPPORT",
        description:
            "Maintained and supported the deployed web application, resolving bugs and ensuring smooth user experiences.",
    },
];

const Intertionship = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    });

    return (
        <div className="intertionship container mt-4" data-aos="fade-up">
            <div className="card shadow-sm">
                <div className="card-body">
                    {/* Header Section */}
                    <div className="text-center d-flex flex-column align-items-center">
                        <h2 className="fw-bold text-primary">ABOUT INTERNSHIP OFFICE</h2>
                        <hr className="border border-primary border-2 opacity-100 w-50" />
                    </div>

                    {/* Internship Details */}
                    <div className="detail-inter text-center my-4">
                        <h5 className="fw-bold text-dark">Electricity Generating Authority of Thailand (EGAT)</h5>
                        <p className="text-muted">{detailInternship.content}</p>
                        <span className="badge bg-primary p-2">{detailInternship.date}</span>
                    </div>

                    {/* Information Section */}
                    <div className="information mt-5">
                        <div className="text-center d-flex flex-column align-items-center">
                            <h3 className="fw-bold text-success">INFORMATION</h3>
                            <hr className="border border-success border-2 opacity-100 w-50" />
                        </div>

                        {/* Work Details */}
                        <div className="row text-center mt-4">
                            {workDetails.map((work, index) => (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <div className="card shadow-sm border-0 h-100 hover-card">
                                        <div className="card-body">
                                            <div style={iconInfoStyle}>{work.icon}</div>
                                            <h5 className="card-title fw-bold text-dark pt-2">{work.title}</h5>
                                            <p className="card-text text-muted">{work.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const iconInfoStyle = {
    fontSize: "4rem",
    color: "#007bff",
};

export default Intertionship;

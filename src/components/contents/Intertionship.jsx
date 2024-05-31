import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import {
    FaAppStore,
    FaDesktop,
    FaFacebook,
    FaGithub,
    FaHeadset,
    FaLinkedin,
} from "react-icons/fa";

const detailInternship = {
    content:
        "   It is the National Electricity Authority located in Bang Kruai, Nonthaburi Province." +
        " I had the opportunity to intern in Digital Management Division Digital Management and Development Department Between 15 May - 15 September 2023" +
        "     and the system assigned during the internship is the contract employee management system.",
    date: " 15 May - 15 September 2023"
};

const workDetails = [
    {
        icon: <FaDesktop />,
        title: "DESIGN AND ANALYSIS",
        description:
            "Continuing to develop the system from the original developer, starting with receiving user requirements. Newly designed database system and back-end system, including a new front-end design. and many others according to user needs.",
    },
    {
        icon: <FaAppStore />,
        title: "DEVELOPMENT",
        description:
            "This item was developed for issuing employee ID cards with companies that have contracted with them and want to hire employees. The development is SPA (single page) development. with component-oriented development.",
    },
    {
        icon: <FaHeadset />,
        title: "SUPPORT",
        description:
            "Take care and support The web-application has already been deployed and will support the UI and back-end. at the time of bug or error and many others according to the needs of the user.",
    },
];

const Intertionship = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    })
    return (
        <div className='intertionship container mt-2' data-aos="fade-right">
            <div className="card">
                <div className="card-body">
                    <div className="text-center d-flex flex-column align-items-center">
                        <h2 className='mb-0'>ABOUT INTERTIONSHIP OFFICE!</h2>
                        <hr className="border border-primary border-2 opacity-100 w-25" />
                    </div>

                    <div className="detail-inter text-center" >
                        <h5>Electricity Generating Authority of Thailand(EGAT) </h5>
                        <p>{detailInternship.content}</p>
                        <span className="text-body-secondary">
                            {detailInternship.date}
                        </span>
                    </div>

                    <div className="information mt-4 " data-aos="fade-right">
                        <div className="text-center d-flex flex-column align-items-center">
                            <h3 className='mb-0'>INFORMATION!</h3>
                            <hr className="border border-primary border-2 opacity-100 w-25" />
                        </div>

                        <div className="row text-center pt-4 ">
                            {workDetails.map((work, index) => (
                                <div className="col-lg-4" key={index}>
                                    <div className="card card-color mb-2">
                                        <div className="card-body">
                                            <div style={iconInfoStyle}>{work.icon}</div>
                                            <h5 className="card-title pt-1">{work.title}</h5>
                                            <p className="card-text">{work.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

const iconInfoStyle = {
    fontSize: "5rem",
    marginRight: "10px",
    color: "#6c757d", // Adjust the color here
};

export default Intertionship
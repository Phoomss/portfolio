import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../../assets/profile_1.jpg';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMedium,
} from "react-icons/fa";

const detailAbout = {
    content:
        "I'm a passionate developer who loves creating innovative solutions. With expertise in Full-Stack Development, I specialize in crafting high-quality web and mobile applications. My goal is to turn ideas into impactful digital experiences.",
};

const userData = [
    { label: "Name", value: "Narongsak Pumpasert" },
    { label: "Nickname", value: "Phoom" },
    { label: "Email", value: "narongsak05n@gmail.com" },
    { label: "Tel", value: "083-998-7275" },
];

const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            className="about-me container mt-5"
            id="about"
            style={{ background: "linear-gradient(to bottom, #ffffff, #f3f4f6)", padding: "40px 20px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
        >
            <div className="text-center mb-5">
                <h2 style={{ fontWeight: "bold", color: "#1e3a8a" }}>About Me</h2>
                <hr className="border border-primary border-2 opacity-100 w-25 mx-auto" />
            </div>
            <div className="content-about">
                <div className="row">
                    <div className="col-lg-4 d-flex flex-column align-items-center" data-aos="fade-right">
                        <img
                            src={profile}
                            alt="Profile"
                            className="rounded-4 shadow"
                            style={{
                                width: "250px",
                                // height: "200px",
                                marginBottom: "20px",
                                border: "4px solid #1e3a8a",
                            }}
                        />
                        <div className="d-flex justify-content-center mb-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    style={{ color: link.color, fontSize: "30px", marginRight: "15px" }}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <div className="user-info">
                            {userData.map((item, index) => (
                                <p key={index} style={{ fontSize: "16px", fontWeight: "500" }}>
                                    <strong style={{ color: "#1e3a8a" }}>{item.label}:</strong> {item.value}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-8" data-aos="fade-up">
                        <div className="about-info" style={{ textAlign: "justify", fontSize: "18px", lineHeight: "1.8" }}>
                            <p>{detailAbout.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const socialLinks = [
    {
        href: "https://www.facebook.com/profile.php?id=100007400148307",
        icon: <FaFacebook />,
        color: "#4267B2",
    },
    {
        href: "https://github.com/Phoomss",
        icon: <FaGithub />,
        color: "#333",
    },
    {
        href: "https://www.linkedin.com/in/narongsak-p-4577102a8/",
        icon: <FaLinkedin />,
        color: "#0077b5",
    },
    {
        href: "https://medium.com/@narongsakP",
        icon: <FaMedium />,
        color: "#12100E",
    },
];

export default AboutMe;

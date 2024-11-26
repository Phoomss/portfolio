import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../../assets/profile_1.jpg';
import {
    FaAppStore,
    FaDesktop,
    FaFacebook,
    FaGithub,
    FaHeadset,
    FaLinkedin,
    FaMedium
} from "react-icons/fa";

const detailAbout = {
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla ducimus autem, quam ipsa sint incidunt accusamus excepturi consequuntur ut sequi placeat nostrum at illum enim esse repudiandae officiis ratione." +
        " Non maxime accusantium, voluptas cupiditate, eum veniam harum perferendis blanditiis nostrum odit unde, sint quam perspiciatis officia recusandae autem saepe iusto debitis tempore dolorum asperiores laudantium dignissimos placeat! Eius, molestias." +
        " Nostrum ex ea ullam nam accusamus vero voluptates totam tempora placeat voluptas minus quasi numquam, impedit, minima dicta maxime delectus animi enim odio quisquam. Maiores odit ut non tempora consequuntur?" +
        " Quisquam alias sequi neque dolor totam sit, quasi nostrum voluptatem, autem voluptatibus, nesciunt facilis! Consequuntur voluptates ullam ipsam! Consectetur, provident recusandae obcaecati corrupti corporis ullam illo expedita dolores culpa voluptatibus." +
        " Similique fuga aspernatur tempora vitae voluptatem voluptatum perferendis! Eum officiis similique debitis iste neque corporis nam architecto perspiciatis unde, veniam quam maiores sequi quibusdam omnis et repellat quo hic a.",
};

const userData = [
    { label: "Name", value: "Narongsak Pumpasert" },
    { label: "NickName", value: "Phoom" },
    { label: "Email", value: "narongsak05n@gmail.com" },
    { label: "Tel", value: "083-998-7275" }
];

const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // กำหนดค่า duration สำหรับ animation
    }, []);

    return (
        <div className='about-me container mt-5 ' id='about'>
            <div className="text-center d-flex flex-column align-items-center">
                <h2 className='mb-0'>ABOUT ME!</h2>
                <hr className="border border-primary border-2 opacity-100 w-25" />
            </div>
            <div className="content-about mt-2">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-sm-6 col-lg-12 justify-content-center d-grid" data-aos="fade-right">
                                <img src={profile} alt="" className='rounded-4' width={250} />

                                <div className="d-flex justify-content-center align-items-center p-2">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100007400148307"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pb-2"

                                    >
                                        <FaFacebook style={iconStyle} />
                                    </a>
                                    <a
                                        href="https://github.com/Phoomss"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pb-2"

                                    >
                                        <FaGithub style={iconStyle} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/narongsak-p-4577102a8/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pb-2"

                                    >
                                        <FaLinkedin style={iconStyle} />
                                    </a>
                                    <a
                                        href="https://medium.com/@narongsakP"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pb-2"

                                    >
                                        <FaMedium style={iconStyle} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-12 justify-content-center d-grid align-items-center mt-lg-2" data-aos="fade-left">
                                {userData.map((item, index) => (
                                    <p key={index}>
                                        <span style={{ fontWeight: "bold" }}>{item.label} : </span>
                                        <span>{item.value}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-2 mt-lg-0" data-aos="fade-up">
                        <div className="about-info">
                            <p>{detailAbout.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const iconStyle = {
    fontSize: "25px",
    marginRight: "10px",
    color: "#000", // Adjust the color here
};

export default AboutMe;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/profile_2.jpg";

const Home = () => {
    return (
        <div
            className="home-container"
            style={{
                height: "100vh",
                background: "linear-gradient(to right, #1e3a8a, #2563eb)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <div className="profile-section">
                <img
                    src={profile}
                    alt="Profile"
                    style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
                        marginBottom: "25px",
                        transition: "transform 0.3s ease",
                    }}
                />
            </div>

            <div
                style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                }}
            >
                <h1
                    style={{
                        fontSize: "3.5rem",
                        marginBottom: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Welcome to My Portfolio
                </h1>

                <TypeAnimation
                    sequence={[
                        "I'm Narongsak Pumpasert",
                        1000,
                        "Nickname Phooms",
                        1000,
                        "I'm a Freelance Full-Stack Developer",
                        1000,
                        "Enjoy my Portfolio!",
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: "2rem", marginBottom: "30px" }}
                    repeat={Infinity}
                />

                {/* <a
                    href="#portfolio"
                    style={{
                        textDecoration: "none",
                        color: "#2563eb",
                        backgroundColor: "#fff",
                        fontSize: "1.2rem",
                        padding: "12px 25px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#2563eb";
                        e.target.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#fff";
                        e.target.style.color = "#2563eb";
                    }}
                >
                    View Portfolio
                </a> */}
            </div>
        </div>
    );
};

export default Home;

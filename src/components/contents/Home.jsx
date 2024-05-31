import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return (

        <div className="bg-danger">
            <div
                className="bg-danger d-flex justify-content-center align-items-center container"
                style={{ height: "910px" }}
            >
                <div className="text-center">
                    <p style={{ fontSize: "4rem" }}>
                        Welcome to My Porfolio
                    </p>

                    <TypeAnimation
                        sequence={[

                            "I'm Narongsak Pumpasert",
                            1000,
                            "NickName Phooms",
                            1000,
                            "I'm Freelance Full-Stack Developer",
                            1000,
                            "Enjoy my Portfolio",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: "4em" }}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

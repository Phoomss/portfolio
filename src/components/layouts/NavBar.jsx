import React from "react";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-light-subtle">
                <div
                    className="container-fluid"
                    style={{ maxWidth: "1240px", margin: "0 auto" }}
                >
                    <a className="navbar-brand" href="#">
                        PortFolio
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active  page-scroll" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project">
                                    Project
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#activity">
                                    Activity
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
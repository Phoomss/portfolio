import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";

import profile_1 from "../../assets/profile_1.jpg";
import sem1 from "../../assets/seminar/1.png";
import sem2 from "../../assets/seminar/2.png";
import sem3 from "../../assets/seminar/3.png";
import sem4 from "../../assets/seminar/4.png";
import sem5 from "../../assets/seminar/5.png";

const projects = [
  {
    id: 1,
    title: "REPRI ONLINE SYSTEM",
    description:
      "Tech stack : PHP(Frontend & Backend), Bootstrap(UI Framework), Mysql(Database)",
  },
  {
    id: 2,
    title: "E-COMMERCE SHOP",
    description:
      "Tech stack : React(Frontend), Bootstrap(UI Framework), NodeJs and Express(Backend), Mongodb(Database)",
  },
  {
    id: 3,
    title: "CAKE ORDERING SYSTEM AT NAKHON PATHOM VOCATIONAL COLLEGE",
    description:
      "Tech stack : React(Frontend), MaterialUI(UI Framework), NodeJs and Express(Backend), Mysql(Database), Sequelize(Libarry ORM)",
  },
  {
    id: 4,
    title: "CONTRACT EMPLOYEE MANAGEMENT SYSTEM",
    description:
      "Tech stack : React(Frontend), MaterialUI(Ui Framework), NodeJs and Express(Backend), Mysql(Database), Sequelize(Libarry ORM)",
  },
  {
    id: 5,
    title: "DESIGN ROYAL INITIATIVE WEBSITE",
    description: "Tech stack : HTML CSS JAVASCRIPT",
  },
  {
    id: 6,
    title: "DESIGN MULTIMART SHOP",
    description: "Tech stack : React(Frontend), Bootstrap(UI Framework), Firebase(Database)",
  },
];

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const seminarImages = [sem1, sem3, sem4, sem5, sem2];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container p-5" id="project" data-aos="fade-up">
      <div className="text-center d-flex flex-column align-items-center">
        <h2 className="mb-0 text-primary">PROJECTS</h2>
        <hr className="border border-primary border-2 opacity-100 w-25" />
      </div>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <img
                src={profile_1}
                className="card-img-top rounded"
                alt="Project Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <Button
                  variant="outline-primary"
                  className="mt-3 w-100"
                  onClick={() => handleShow(project)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProject ? selectedProject.title : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {seminarImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded"
                  src={image}
                  alt={`Seminar ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="mt-4">{selectedProject ? selectedProject.description : ""}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Project;

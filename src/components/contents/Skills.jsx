import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import js_logo from '../../assets/JavaScript.png'
import java_logo from '../../assets/java.png'
import php_logo from '../../assets/php.png'
import dart_logo from '../../assets/dart.png'
import node_logo from '../../assets/nodejs.png'
import express_logo from '../../assets/Express.png'
import react_logo from '../../assets/react.svg'
import next_logo from '../../assets/nextjs.png'
import spring_logo from '../../assets/spring-boot.png'
import laravel_logo from '../../assets/laravel.png'
import bootstrap_logo from '../../assets/bootstrap.png'
import mui_logo from '../../assets/material-ui.png'
import chakra_logo from '../../assets/chakra.png'
import mysql_logo from '../../assets/mysql.png'
import mongodb_logo from '../../assets/mongodb.png'
import postgresql_logo from '../../assets/postgresql.png'
import postman_logo from '../../assets/postman.png'
import dbeaver_logo from '../../assets/dbeaver.png'
import vscode_logo from '../../assets/visual-studio-code.png'
import xampp_logo from '../../assets/xampp.png'
import figma_logo from '../../assets/figma.png'
import draw_logo from '../../assets/draw-io.png'
import coreui_logo from '../../assets/coreui.svg'
import sequelize_logo from '../../assets/sequelize.png'
import prisma_logo from '../../assets/prisma.png'

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    const skills = [
        {
            category: 'Language & Framework',
            logos: [
                js_logo,
                java_logo,
                php_logo,
                dart_logo,
                node_logo,
                express_logo,
                react_logo,
                next_logo,
                spring_logo,
                laravel_logo,
                bootstrap_logo,
                mui_logo,
                chakra_logo,
                coreui_logo
            ]
        },
        {
            category: 'Databases & Libarry',
            logos: [
                mysql_logo,
                mongodb_logo,
                postgresql_logo,
                sequelize_logo,
                prisma_logo
            ]
        },
        {
            category: 'Tools',
            logos: [
                postman_logo,
                dbeaver_logo,
                vscode_logo,
                xampp_logo,
                figma_logo,
                draw_logo
            ]
        }
    ];

    return (
        <div className='container skills mt-5' data-aos="fade-up">
            <div className="text-center d-flex flex-column align-items-center">
                <h2 className='mb-0'>SKILLS!</h2>
                <hr className="border border-primary border-2 opacity-100 w-25" />
            </div>
            <div className="row mt-4 text-center">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="col-lg-4">
                        <h3>{skillGroup.category}</h3>
                        <hr />
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            {skillGroup.logos.map((logo, index) => (
                                <img key={index} src={logo} className='rounded m-2' width={75} alt={`${skillGroup.category} Logo`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
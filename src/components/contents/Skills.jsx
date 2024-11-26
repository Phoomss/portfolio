import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../Css/Skill.css'

import react_logo from '../../assets/react.svg';
import js_logo from '../../assets/language/JavaScript.png';
import java_logo from '../../assets/language/java.png';
import php_logo from '../../assets/language/php.png';
import dart_logo from '../../assets/language/dart.png';
import kotlin from '../../assets/language/kotlin.png';

import node_logo from '../../assets/libarry/nodejs.png';
import express_logo from '../../assets/libarry/Express.png';
import sequelize_logo from '../../assets/libarry/sequelize.png';
import prisma_logo from '../../assets/libarry/prisma.png';
import socket_io from '../../assets/libarry/socket.png';
import mongoose from '../../assets/libarry/mongoose.png';

import next_logo from '../../assets/framework/nextjs.png';
import spring_logo from '../../assets/framework/spring-boot.png';
import laravel_logo from '../../assets//framework/laravel.png';
import react_native from '../../assets/framework/react-native.png';
import nuxt from '../../assets/framework/nuxt.png';

import coreui_logo from '../../assets/ui_framework/coreui.svg';
import bootstrap_logo from '../../assets//ui_framework/bootstrap.png';
import mui_logo from '../../assets/ui_framework/material-ui.png';
import chakra_logo from '../../assets/ui_framework/chakra.png';
import tailwind from '../../assets/ui_framework/tailwind.png';

import mysql_logo from '../../assets/database/mysql.png';
import mongodb_logo from '../../assets/database/mongodb.png';
import postgresql_logo from '../../assets/database/postgresql.png';

import postman_logo from '../../assets/tools/postman.png';
import dbeaver_logo from '../../assets/tools/dbeaver.png';
import vscode_logo from '../../assets/tools/visual-studio-code.png';
import xampp_logo from '../../assets/tools/xampp.png';
import figma_logo from '../../assets/tools/figma.png';
import draw_logo from '../../assets/tools/draw-io.png';
import android_studio from '../../assets/tools/Android_Studio.svg.png';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      category: 'Programming Language',
      logos: [js_logo, java_logo, php_logo, dart_logo, kotlin],
    },
    {
      category: 'Framework & Library',
      logos: [
        nuxt,
        react_logo,
        react_native,
        next_logo,
        spring_logo,
        laravel_logo,
        node_logo,
        express_logo,
        socket_io,
      ],
    },
    {
      category: 'UI Framework',
      logos: [bootstrap_logo, mui_logo, chakra_logo, coreui_logo, tailwind],
    },
    {
      category: 'Databases & Library',
      logos: [
        mysql_logo,
        mongodb_logo,
        postgresql_logo,
        sequelize_logo,
        prisma_logo,
        mongoose,
      ],
    },
    {
      category: 'Development Tools',
      logos: [
        postman_logo,
        dbeaver_logo,
        vscode_logo,
        xampp_logo,
        figma_logo,
        draw_logo,
        android_studio,
      ],
    },
  ];

  return (
    <div className="container skills mt-5" data-aos="fade-up">
      <div className="text-center d-flex flex-column align-items-center">
        <h2 className="mb-0 display-4 fw-bold text-primary">Skills</h2>
        <hr className="border border-primary border-2 opacity-100 w-25" />
      </div>
      <div className="row mt-4 text-center">
        {skills.map((skillGroup, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm p-3">
              <h3 className="card-title text-center fw-bold">{skillGroup.category}</h3>
              <hr />
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                {skillGroup.logos.map((logo, index) => (
                  <div key={index} className="m-3">
                    <img
                      src={logo}
                      className="rounded shadow-sm logo-img"
                      alt={`${skillGroup.category} logo`}
                      width={80}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

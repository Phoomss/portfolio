import React from 'react'
import Home from '../components/contents/Home'
import AboutMe from '../components/contents/AboutMe'
import Intertionship from '../components/contents/Intertionship'
import Education from '../components/contents/Education'
import Skills from '../components/contents/Skills'
import Project from '../components/contents/Project'
import Activity from '../components/contents/Activity'

const MainContent = () => {
    return (
        <div>
            <Home />
            <AboutMe />
            <Intertionship />
            <Education />
            <Skills />
            <Project/>
            <Activity/>
        </div>
    )
}

export default MainContent
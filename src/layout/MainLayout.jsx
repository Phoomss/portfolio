import React from 'react'
import NavBar from '../components/layouts/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layouts/Footer'

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
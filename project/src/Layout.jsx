import React from 'react'

import { Outlet } from 'react-router-dom'

import NavMenu from './components/layouts/NavMenu'
import Footer from './components/layouts/Footer'
import Address from './components/layouts/Address'
import Download from './components/layouts/Download'

const Layout = () => {
    return (
        <>
            <NavMenu />

            <Outlet />
            
            <Address />
            <Download />
            <Footer />
        </>
    )
}

export default Layout

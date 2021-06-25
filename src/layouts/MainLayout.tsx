import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Navbar/Header'
import SideBar from '../components/Navbar/SideBar'
import SideMenuContext from '../context/SideMenuContext'
import "./MainLayout.scss"


export const MainLayout = (props) => {
    return (
        <div className="main-container">
        <SideMenuContext>
          <Header />
          <SideBar />
        </SideMenuContext> 
        <div className="main-content">
        {props.children}
        </div>
        <Footer/>
        </div>
    )
}


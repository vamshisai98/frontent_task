import React from 'react'
import { Outlet } from 'react-router-dom';

import Footer from '../common/Footer/Footer';
import Navbar from '../common/Navbar/Navbar';
import './DashboardLayout.scss'

const DashboardLayout = () => {
  return (
    <div className="DashboardLayout__layout">
         <div className="DashboardLayout--container">
        <Navbar />
        <div className="DashboardLayout--content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
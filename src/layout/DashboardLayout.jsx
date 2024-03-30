import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer/Footer';
import Navbar from '../common/Navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default DashboardLayout
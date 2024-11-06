import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-stone-900 text'>
        <Navbar/>
       <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
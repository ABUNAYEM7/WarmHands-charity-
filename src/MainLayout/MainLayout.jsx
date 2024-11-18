import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import 'animate.css'
const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header>
        <Navbar/>
      </header>
      <main className='min-h-screen my-6'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout

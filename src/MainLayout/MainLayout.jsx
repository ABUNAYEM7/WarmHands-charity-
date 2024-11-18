import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import 'animate.css'
import Swal from 'sweetalert2'


const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header>
        <Navbar/>
      </header>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout

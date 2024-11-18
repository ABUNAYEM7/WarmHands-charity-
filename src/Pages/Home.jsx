import React from 'react'
import Banner from '../Components/Banner'
import AboutUs from '../Components/AboutUs'
import HowItWorks from '../Components/HowItWorks'

const Home = () => {
  return (
    <div>
      <Banner/>
      <section className='my-6 p-4'>
        <AboutUs/>
      </section>
      <section className='my-6 p-4'>
        <HowItWorks/>
      </section>
    </div>
  )
}

export default Home

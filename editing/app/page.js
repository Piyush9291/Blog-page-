import React from 'react'
import Header from './components/header/header'
import OurWork from './components/ourwork/ourWork'
import AboutSection from './components/About/about'
import Service from './components/Brand/brand'
import Footer from './components/footer/Footer'


const page = () => {
  return (
    <div> 
      <Header />
      <OurWork/>
      <AboutSection/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default page

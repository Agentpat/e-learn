import React from 'react'

import Mainfeature from './mainfeature/Mainfeature'
import Header from './header/Header'
import PopularCourses from './popularcourses/PopularCourses'
import ExploreCourses from './explore/ExploreCourses'
import About from './about/About'
import Testimonial from './testimonials/Testimonial'
import WhatsUpdate from './update/WhatsUpdate'
import Footer from './Footer/Footer'
import Hero from './hero/Hero'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <Hero/>
        <Mainfeature/>
        <PopularCourses/>
        
        <ExploreCourses
         
          courseDetails={{
            header: 'Metaverse For Beginners',
            description: 'When People talk about the future, they usually mean Virtual Reality',
            price: '$25',
          }}
/>

        <About/>
        <Testimonial/>
        <WhatsUpdate/>
        <Footer/>
    </div>
  )
}

export default Home
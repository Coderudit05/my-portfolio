import React from 'react'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'
import Education from '../Education/Education.jsx'
import Experience from '../Experience/Experience.jsx'
import Skills from '../Skills/Skills.jsx'
import Work from '../Work/Work.jsx'
import Workshops from '../Workshops/Workshops.jsx'
import TestimonialWrapper from '../Testimonial/TestimonialWrapper.jsx'


function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Work />
      <Workshops />
      <TestimonialWrapper />
      <Contact />
    </div>
  )
}

export default Home

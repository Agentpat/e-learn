import React from 'react'
import './Testimonials.css'

function TestimonialCard({heading,author,position}) {
  return (
    <div className='tesztimony'>
        <div className='brdecdor'></div>
        <h2 className='ah2'>{heading}</h2>
        <h3 className='ah3'>{author}</h3>
        <h3 className='ah4'>{position}</h3>
    </div>
  )
}

export default TestimonialCard
import React from 'react'
import './Hero.css'
import Button from  '../button/Button'

function Hero() {
  return (
    <div className='hero'>
      <div className='mainss'>
        <div className='section-a'>
          <h2 className='section-a-head'>Upgrade Yourself</h2>
          <h4 className='description'>Anytime, anywhere. Start learning And Get Exceptional
          Educational Experiences </h4>
           <div className='buttonns'>
            <Button text="SEE DETAILS" className="but1"/>
            <Button text="GET STARTED" className="but2"/>
           </div>
        </div>
        <div className='section-b'>
          <img src='./banner1.png' alt=''/>
        </div>
      </div>
      <div className='hero__categories'>
        <div className='a-1'>
          <h2>Business Solution</h2>
        </div>
        <div className='a-2'>
          <h2>Free Project Quotes</h2>
        </div>
        <div className='a-3'>
          <h2>Nulla lobortis nunc</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
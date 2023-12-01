import React from 'react'
import './Mainfeature.css'

function Mainfeature() {
  return (
    <div className='mainfeature'>
        <div className='top'>
            <h2 className='top_mainfeature'>
                Main Feature
            </h2>
            <h3 className='next'>
            The world's largest selection of courses
            </h3>
        </div>
        <div className='main'>
            
                <div className='upper'>
                    <img src='/Feature1.png' alt=''/>
                    <div className='uppertxt'>
                        <h3 className='big_font'>+100k</h3>
                        <h4 className='small__font'>HD VIDEOS</h4>
                    </div>
                </div>
                <div className='lower'>
                    <img src='/Feature3.png' alt=''/>
                    <div className='uppertxt'>
                        <h3 className='big_font'>$500</h3>
                        <h4 className='small__font'>Saves per Month</h4>
                    </div>
                </div>
                 
           
                <div className='upper'>
                    <img src='/Feature2.png' alt=''/>
                    <div className='uppertxt'>
                        <h3 className='big_font'>+200</h3>
                        <h4 className='small__font'>Professions</h4>
                    </div>
                </div>
                <div className='lower'>
                    <img src='/Feature4.png' alt=''/>
                    <div className='uppertxt'>
                        <h3 className='big_font'>Free</h3>
                        <h4 className='small__font'>Life time Access</h4>
                    </div>
                </div>     
        </div>
    </div>
  )
}

export default Mainfeature
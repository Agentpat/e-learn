import React from 'react'
import './Button.css'

function Button({text}) {
  return (
    <div className='button'>
       <h3>{text}</h3> 
    </div>
  )
}

export default Button
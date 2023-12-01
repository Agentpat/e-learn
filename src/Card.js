import React from 'react'
import { Rating,Button } from '@mui/material'
import './Card.css'

function Card({imageurl, header, description,price,star}) {
  return (
    <div className='card'>
        <img src={imageurl} alt={imageurl} className='card__img'/>
        <h2 className='card__header'>{header}</h2>
        <h4 className='card__description'>{description}</h4>
        <div className='card__ratingandprice'>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <h3 className='card__price'>{price}</h3>
        </div>
        <Button variant="outlined">SEE DETAILS</Button>
    </div>
  )
}

export default Card
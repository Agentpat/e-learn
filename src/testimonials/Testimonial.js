import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Fab } from '@mui/material';
import './Testimonial.css';

function Testimonial() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300;
  const totalCards = 4; // Updated to match the number of cards

  const handleScroll = (direction) => {
    const newPosition =
      direction === 'left' ? scrollPosition - cardWidth : scrollPosition + cardWidth;
    setScrollPosition(Math.max(0, Math.min((totalCards - 1) * cardWidth, newPosition)));
  };

  return (
    <div className='testi'>
      <div className='topes'>
        <h2 className='fonts'>Testimonials</h2>
        <h3 className='fontal'>They Are Doing Great Things With Us</h3>
      </div>
      <div className='middde'>
        <Fab variant='extended' className='arrowss lefts' onClick={() => handleScroll('right')}>
          <ArrowCircleLeftIcon />
        </Fab>
        <div className='buttomss' style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <TestimonialCard
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            author="John Doe"
            position="Graphics Designer"
          />
          <TestimonialCard
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            author="John Doe"
            position="Graphics Designer"
          />
          <TestimonialCard
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            author="John Doe"
            position="Graphics Designer"
          />
          <TestimonialCard
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            author="John Doe"
            position="Graphics Designer"
          />
          
        
        </div>
        <Fab variant='extended' className='arrowss rights' onClick={() => handleScroll('left')}>
          <ArrowCircleRightIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Testimonial;

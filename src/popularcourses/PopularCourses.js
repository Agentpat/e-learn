import React, { useState } from 'react';
import { Button, Fab } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './PopularCourses.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Card from '../Card';

function PopularCourses() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300;
  const totalCards = 5; 

  const handleScroll = (direction) => {
    const newPosition =
      direction === 'left' ? scrollPosition - cardWidth : scrollPosition + cardWidth;
    setScrollPosition(Math.max(0, Math.min((totalCards - 1) * cardWidth, newPosition)));
  };
  

  return (
    <div className='popularCourses'>
      <div className='bdswer'></div>
      <div className='toppe'>
        <div className='toppe-text'>
          <h2>Popular Course</h2>
          <h4>Choose from many options of a popular course at a breakthrough price.</h4>
        </div>
        <div className='toppe-button'>
          <Button variant='text'>
            SEE ALL
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <div className='midde'>
        <Fab variant='extended' className='arrows left' onClick={() => handleScroll('right')}>
          <ArrowCircleLeftIcon />
        </Fab>
        <img src='./popular3d.png' alt='' className='imgsd' />
        <div className='cardsss' style={{ transform: `translateX(-${scrollPosition}px)`, paddingRight: '100px' }}>
          {Array.from({ length: totalCards }, (_, index) => (
            <Card
              key={index}
              imageurl="/imgofcourses1.jpg"
              header={`Instant Kendo UI ${index + 1}`}
              description="Filled with practical, step-by-step instructions and clear explanations for the most important and useful tasks"
              price={`$${10 + index}`}
            />
          ))}
        </div>
        <Fab variant='extended' className='arrows right' onClick={() => handleScroll('left')}>
          <ArrowCircleRightIcon />
        </Fab>
      </div>
    </div>
  );
}

export default PopularCourses;


import { ArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './ExploreCourses.css';
import Card from '../Card';
function ExploreCourses({courseDetails }) {
  return (
    <div className='explore'>
      <div className='topp'>
        <h2 className='topp__max'>Explore Courses</h2>
        <h4 className='topp__min'>Chose from 100,000 online video courses with addition published every month</h4>
      </div>
      <div className='book-section'>
       <div className='wrapper'>
        <div className='nxt__top'>
          <h2 className='nxt__text'>LOREM</h2>
          <Button variant='text'>
            SEE ALL <ArrowRight />
          </Button>
        </div>
       

       
        <div className='explore__books'>
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />

          <Card
              
              imageurl="/imgofcourses1.jpg"
              header="Instant Kendo UI" 
              
            />
        </div>
        </div>
        <div className='wrapper'>
        <div className='nxt__top'>
          <h2 className='nxt__text'>LOREM</h2>
          <Button variant='text'>
            SEE ALL <ArrowRight />
          </Button>
        </div>
        <div className='explore__books'>
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />

          
          <Card
              
              imageurl="/imgofcourses1.jpg"
              header="Instant Kendo UI" 
           
            />
        </div>
        </div>
        <div className='wrapper'>
        <div className='nxt__top'>
          <h2 className='nxt__text'>LOREM</h2>
          <Button variant='text'>
            SEE ALL <ArrowRight />
          </Button>
        </div>
        <div className='explore__books'>
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />

          
          <Card
              
              imageurl="/imgofcourses1.jpg"
              header="Instant Kendo UI" 
           
            />
        </div>
          </div>
        <div className='wrapper'>
        <div className='nxt__top'>
          <h2 className='nxt__text'>LOREM</h2>
          <Button variant='text'>
            SEE ALL <ArrowRight />
          </Button>
        </div>
        <div className='explore__books'>
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />
          <img className='books__slant' src="Book (1).png" alt='' />

          
          <Card
              imageurl="/imgofcourses1.jpg"
              header="Instant Kendo UI"
            />
        </div>
        </div>
      
      </div>
    </div>

  );
}
export default ExploreCourses;

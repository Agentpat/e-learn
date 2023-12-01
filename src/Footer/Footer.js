// Footer.js

import React from 'react';
import { Button } from '@mui/material';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='topppp'>
        <div className='left'>
          <img src='/footer_3d_2x_tivfcv.png' alt='Footerage' />
        </div>
        <div className='subscribed'>
          <h2 className='note'>Subscribe to our newsletter</h2>
          <h3 className='note3'>
            Stay updated with our latest courses and promotions
          </h3>
          <div className='format'>
            <input type='email' placeholder='Enter your email' className='text-field' />
            <Button variant="contained" color="primary">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      <div className='bottommmm'>
        <div className='grid-1'>
          <img src='Landsacpelogo.png' alt='' className='ijsdbq' />
          <p className='dhviuyfe'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className='khsdiyds'>
            @agentpat01
          </p>
        </div>
        <div className='grid-2'>
          <h2 className='headringd'>
            COMPANY
          </h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className='grid-3'>
          <h2 className='headringd'>
            COURSES
          </h2>
          <ul>
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Design</li>
            <li>Business</li>
          </ul>
        </div>
        <div className='grid-4'>
          <h2 className='headringd'>
            CONNECT
          </h2>
          <div className='connect-logos'>
            <img src='facebook (1).png' alt='Facebook' />
            <img src='twitter.png' alt='Twitter' />
            <img src='linkedin (1).png' alt='LinkedIn' />
            <img src='instagram.png' alt='Instagram' />
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Footer;

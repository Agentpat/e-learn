
import './ExploreCards.css'
import * as React from 'react';

import { Button, Rating } from '@mui/material';






function ExploreCards() {
  return (
    <div className='explorecards'>
      <div className='imgsty'>
        <img  className="imgaw" src="https://res.cloudinary.com/imajin/image/upload/v1627130661/education/game_qm9tvu.jpg" alt="title"/>
      </div>
      <div className='desc'>
        <div className='text'>
          <h2 class="title text-truncate">
            Metaverse For Beginners
          </h2>
          <p class="use-text-paragraph">
            When people talk about the future, they usually mean virtual reality.
          </p>
        </div>
        <div>
          <div className='properties'>
            <div class="rating">
              <Rating/>
            </div>
            <strong>$25</strong>
          </div>
          
            <Button variant='outlined' className='buttonss'>
              SEE MORE
            </Button>
        </div>
      </div>
    </div>
  );
}
    
  


export default ExploreCards
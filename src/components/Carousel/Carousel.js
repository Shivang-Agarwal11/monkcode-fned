import React, { Component } from 'react'
import ReactElasticCarousel from 'react-elastic-carousel';

import Item from './Item'
import './Carousels.css'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'
import c5 from './c5.png'
import c6 from './c6.png'
import c7 from './c7.jpg'
export class Carousels extends Component {
    
  render() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

      const images=[c1,c2,c3,c4,c5,c6,c7];
    return (
        <div>
        <h1 className='car-h1'>Courses</h1>
        <div className="Carousel">
          <ReactElasticCarousel breakPoints={breakPoints}>
            {images.map((image)=>
            <Item><img src={image} className="image" alt="course"/> </Item>
            )}
          </ReactElasticCarousel>
        </div>
        </div>
    )
  }
}

export default Carousels
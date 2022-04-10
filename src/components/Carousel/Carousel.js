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
    return (
        <div>
        <h1 className='car-h1'>Courses</h1>
        <div className="Carousel">
          <ReactElasticCarousel breakPoints={breakPoints}>
            <Item><img src={c1} className='image'  alt='job'/></Item>
            <Item><img src={c2}  className='image' alt='job'/></Item>
            <Item><img src={c3}  className='image' alt='job'/></Item>
            <Item><img src={c4}  className='image' alt='job'/></Item>
            <Item><img src={c5}  className='image' alt='job'/></Item>
            <Item><img src={c6} className='image' alt='job'/></Item>
            <Item><img src={c7}  className='image'alt='job'/></Item>
          </ReactElasticCarousel>
        </div>
        </div>
    )
  }
}

export default Carousels
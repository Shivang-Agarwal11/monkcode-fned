import React, { Component } from 'react'
import ReactElasticCarousel from 'react-elastic-carousel';
import Item from '../Carousel/Item'
import '../Carousel/Carousels.css'
import j1 from './j1.png'
import j2 from './j2.svg'
import j3 from './j3.png'
import j4 from './j4.png'
import j5 from './j5.jpg'
import j6 from './j6.png'
import j7 from './j7.png'
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
        <h1 className='car-h1'>Jobs</h1>
        <div className="Carousel">
          <ReactElasticCarousel breakPoints={breakPoints}>
            <Item><img src={j1} className='image' alt='job'/></Item>
            <Item><img src={j2} className='image' alt='job'/></Item>
            <Item><img src={j3}  className='image' alt='job'/></Item>
            <Item><img src={j4} className='image' alt='job'/></Item>
            <Item><img src={j5} className='image' alt='job'/></Item>
            <Item><img src={j6} className='image' alt='job'/></Item>
            <Item><img src={j7} className='image' alt='job'/></Item>
          </ReactElasticCarousel>
        </div>
        </div>
    )
  }
}

export default Carousels
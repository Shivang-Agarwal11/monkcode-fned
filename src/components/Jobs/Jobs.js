import React, { Component } from 'react'
import ReactElasticCarousel from 'react-elastic-carousel';
import Item from '../Carousel/Item'
import '../Carousel/Carousels.css'
import c1 from '../Carousel/c1.jpg'
import c2 from '../Carousel/c2.jpg'
import c3 from '../Carousel/c3.jpg'
import c4 from '../Carousel/c4.jpg'
import c5 from '../Carousel/c5.png'
import c6 from '../Carousel/c6.png'
import c7 from '../Carousel/c7.jpg'
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
            <Item><img src={c4} height={200} width={300} alt='job'/></Item>
            <Item><img src={c5} alt='job'/></Item>
            <Item><img src={c7} alt='job'/></Item>
            <Item><img src={c1} alt='job'/></Item>
            <Item><img src={c2} alt='job'/></Item>
            <Item><img src={c6} alt='job'/></Item>
            <Item><img src={c3} alt='job'/></Item>
          </ReactElasticCarousel>
        </div>
        </div>
    )
  }
}

export default Carousels
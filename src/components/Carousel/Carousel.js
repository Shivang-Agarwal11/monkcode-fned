import React, { Component } from 'react'
import ReactElasticCarousel from 'react-elastic-carousel';
import Item from './Item'
import './Carousels.css'

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
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
          </ReactElasticCarousel>
        </div>
        </div>
    )
  }
}

export default Carousels
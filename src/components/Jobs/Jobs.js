import React from 'react'
import j1 from './j1.png'
import j2 from './j2.svg'
import j3 from './j3.png'
import j4 from './j4.png'
import j5 from './j5.jpg'
import j6 from './j6.png'
import j7 from './j7.png'
import Carousel, { CarouselItem } from "../Carousel/Carousel";
export default function Jobs() {
  const images=[j1,j2,j3,j4,j5,j6,j7];
  return (
    // <div style={{"width":"100%"}}>
      <Carousel>
      {images.map((image)=>
            <CarouselItem><img src={image} className="image" alt="course"/> </CarouselItem>
            )}
      </Carousel>
    // </div>
  );
}
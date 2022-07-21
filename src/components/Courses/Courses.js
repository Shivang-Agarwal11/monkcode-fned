import Carousel, { CarouselItem } from "../Carousel/Carousel";
import React from 'react'
import './Courses.css'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'
import c5 from './c5.png'
import c6 from './c6.png'
import c7 from './c7.jpg'
export default function Courses() {
    const images=[c1,c2,c3,c4,c5,c6,c7];
  return (
      <Carousel>
      {images.map((image)=>
            <CarouselItem><img src={image} className="image" alt="course"/> </CarouselItem>
            )}
      </Carousel>
    
  );
}

import './Carousel.css'

import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Carousel.css";
import { Button } from '@mui/material';

export const CarouselItem = ({ children, width }) => {
  return (
    
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <Button sx={{'fontSize':30}} 
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <BsFillArrowLeftCircleFill className='button-arrow'/>
        </Button>
        <Button sx={{'fontSize':30}}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <BsFillArrowRightCircleFill className='button-arrow'/>
        </Button>
      </div>
    </div>
  );
};

export default Carousel;

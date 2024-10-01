import { useState } from 'react';
import './ImageSlider.css';
import visions from '../../data/vision';
import left from '../../assets/Group 1171275351.png';
import right from '../../assets/Group 1171275350.png';
import EachVision from './EachVision';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % visions.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + visions.length) % visions.length
    );
  };

  return (
    <div className="slider-container">
      <img
        src={left}
        alt="left arrow"
        onClick={prevSlide}
        className="slider-button left"
      />

      <div className="slider-image">
        <img
          src={visions[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
        />
        <EachVision
          title={visions[currentIndex].title}
          description={visions[currentIndex].description}
        />
      </div>

      <img
        src={right}
        alt="right arrow"
        onClick={nextSlide}
        className="slider-button"
      />
    </div>
  );
};

export default ImageSlider;

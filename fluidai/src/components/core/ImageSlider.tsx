import { useState } from 'react';
import './ImageSlider.css';
import visions from '../../data/vision';
import EachVision from './EachVision';

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <img
        src={visions[currentIndex].image}
        alt={visions[currentIndex].title}
        style={{ width: '100%', height: '900px', objectFit: 'cover' }} // Add appropriate styles
      />

      <div className="slider-image">
        <EachVision
          next={nextSlide}
          prev={prevSlide}
          title={visions[currentIndex].title}
          description={visions[currentIndex].description}
        />
      </div>

      {}
      <div className="dot-indicators">
        {visions.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)} // Click to change slide
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

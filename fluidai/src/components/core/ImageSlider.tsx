import { useState } from 'react';
import visions from '../../data/vision';
import EachVision from './EachVision';
import './ImageSlider.css';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === visions.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? visions.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slides">
        {visions.map((vision, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <EachVision
              image={vision.image}
              title={vision.title}
              description={vision.description}
              prev={prevSlide}
              next={nextSlide}
              currentSlide={currentSlide}
              visions={visions}
              goToSlide={goToSlide}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

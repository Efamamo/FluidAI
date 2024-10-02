import { useState } from 'react';
import visions from '../../data/vision';
import EachVision from './EachVision';
import '../../styles/ImageSlider.css';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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

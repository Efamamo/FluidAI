import { useEffect, useState } from 'react';
import features from '../data/features';
import Feature from './Feature';
import iphone from '../assets/Bezel.png';
import './Features.css';

export default function Features() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const threshold1 = 3300;
      const threshold2 = 4150;
      const threshold3 = 5000;

      if (scrollPosition >= threshold3) {
        changeImage(3);
      } else if (scrollPosition >= threshold2) {
        changeImage(2);
      } else if (scrollPosition >= threshold1) {
        changeImage(1);
      } else {
        changeImage(0);
      }
    };

    const changeImage = (index: number) => {
      if (index !== currentImageIndex) {
        setPreviousImageIndex(currentImageIndex);
        setFade(false);
        setTimeout(() => {
          setCurrentImageIndex(index);
          setFade(true);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentImageIndex]);

  return (
    <section className="features">
      <div className="intro">
        <h2>Our Features</h2>
        <h1>
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>
      <div className="sticky-ip">
        <img className="bezel" src={iphone} alt="iPhone" />

        {/* Previous Image */}
        <img
          className={`body ${!fade ? 'active' : ''}`}
          src={features[previousImageIndex].im}
          alt=""
          style={{ zIndex: fade ? 0 : 1 }}
        />

        <img
          className={`body ${fade ? 'active' : ''}`}
          src={features[currentImageIndex].im}
          alt=""
          style={{ zIndex: fade ? 1 : 0 }}
        />
      </div>

      {features.map((feature, idx) => (
        <Feature
          key={idx}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          number={idx + 1}
          total={features.length}
        />
      ))}
    </section>
  );
}

import { useEffect, useState } from 'react';
import union from '../assets/Union.png';
import './Hero.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleFactor = Math.max(0.5, 1 - scrollY / 500); // Scale factor for shrinking

  return (
    <div
      className="hero_wrapper"
      style={{
        transform: `scale(${scaleFactor})`, // Scale hero section
        transformOrigin: 'center', // Scale from center to keep position
      }}
    >
      <div className="hero_container">
        <img src={union} alt="Hero Image" />
        <div className="word">
          <span className="letter letterF">F</span>
          <span className="letter letterL">l</span>
          <span className="letter letterU">u</span>
          <span className="letter letterI">i</span>
          <span className="letter letterD">d</span>
          <span className="letter space"></span>
          <span className="letter letterA">A</span>
          <span className="letter letterI">I</span>
        </div>
      </div>
    </div>
  );
}

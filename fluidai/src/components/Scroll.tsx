import { useEffect, useState } from 'react';
import mouse from '../assets/Frame 1171275577.png';
import './Scroll.css';

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 780);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true && window.innerWidth > 780);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <div className="scroll" style={{ display: isVisible ? 'flex' : 'none' }}>
      <img src={mouse} alt="scroll icon" />
      <h3>Scroll down</h3>
    </div>
  );
}

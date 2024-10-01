import { useEffect, useState } from 'react';
import union from '../assets/Union.png';
import './Hero.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [sticky, setSticky] = useState(true);

  const handleScroll = () => {
    setScrollY(window.scrollY);

    const scrollY = window.scrollY;

    if (window.innerWidth <= 480) {
      if (scrollY < 480) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    } else {
      if (scrollY < 550) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleFactor = Math.max(0.3, 1 - scrollY / 500);

  const st: any = {
    transform: `scale(${scaleFactor})`,
    transformOrigin: 'center',
  };

  if (sticky) {
    st['position'] = 'sticky';
    st['top'] = '20%';
  }

  if (!sticky) {
    st['position'] = 'relative';
    st['top'] =
      window.innerWidth <= 480
        ? '615px'
        : window.innerWidth <= 768
        ? '750px'
        : '630px';
  }

  return (
    <div className="hero_wrapper" style={st}>
      <div className="hero_container">
        <img src={union} alt="Hero Image" />
        <div className="word">
          <span className="letter">F</span>
          <span className="letter">l</span>
          <span className="letter">u</span>
          <span className="letter">i</span>
          <span className="letter">d</span>
          <span className="letter space"></span>
          <span className="letter">A</span>
          <span className="letter">I</span>
        </div>
      </div>
    </div>
  );
}

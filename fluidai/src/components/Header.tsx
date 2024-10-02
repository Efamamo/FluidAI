import { Link } from 'react-router-dom';
import '../styles/Header.css';
import humburger from '../assets/Frame.png';
import { useState } from 'react';

export default function Header() {
  const [isVisible, setVisiblity] = useState(false);

  function toggle() {
    setVisiblity((prev) => !prev);
  }

  return (
    <>
      <img
        onClick={toggle}
        className="humburger"
        src={humburger}
        alt="humburger"
      />
      <nav className="nav">
        <nav className="nav_bar">
          <div>
            <Link to="/what-we-believe">What we believe</Link>
            <Link to="/our-features">Our features</Link>
          </div>
          <div>
            <Link to="/our-story">Our story</Link>
            <Link to="/the-waitlist">The waitlist</Link>
          </div>
        </nav>
      </nav>

      {isVisible && (
        <div onClick={toggle} className="menu">
          <Link to="/what-we-believe">What we believe</Link>
          <Link to="/our-features">Our features</Link>

          <Link to="/our-story">Our story</Link>
          <Link to="/the-waitlist">The waitlist</Link>
        </div>
      )}
    </>
  );
}

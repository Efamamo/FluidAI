import { Link } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
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
  );
}

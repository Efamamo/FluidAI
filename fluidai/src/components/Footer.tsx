import { Link } from 'react-router-dom';
import union from '../assets/Union.png';
import '../styles/Footer.css';
export default function Footer() {
  return (
    <footer>
      <div className="first_section">
        <div className="logo_wrapper">
          <div className="logo_container">
            <img src={union} alt="Hero Image" />
            <div className="word">
              <span className="letter">F</span>
              <span className="letter ">l</span>
              <span className="letter ">u</span>
              <span className="letter ">i</span>
              <span className="letter ">d</span>
              <span className="letter space"></span>
              <span className="letter ">A</span>
              <span className="letter ">I</span>
            </div>
          </div>
        </div>
        <h3>2024 Fluid AI</h3>
      </div>

      <div className="links_container">
        <div className="links">
          <Link to="/our-features">Our Features</Link>
          <Link to="/areas">Areas</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/the-waitlist">The Waitlist</Link>
          <Link to="/contact-us">Contact us</Link>
        </div>
        <div className="links">
          <Link to="/terms-os-services">Terms of Service</Link>
          <Link to="/privacy-olicy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

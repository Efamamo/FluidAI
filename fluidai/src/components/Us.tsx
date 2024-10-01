import Button from './core/Button';
import bg from '../assets/hero-bg.png';
import './Us.css';
export default function Us() {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div style={containerStyle} className="us_container">
      <div className="us">
        <h1>Unlock Seamless Efficiency</h1>
        <Button />
      </div>
    </div>
  );
}

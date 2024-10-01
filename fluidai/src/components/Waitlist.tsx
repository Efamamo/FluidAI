import phone from '../assets/Mask group.png';
import Button from './core/Button';
import './Waitlist.css';
export default function Waitlist() {
  return (
    <div className="waitlist">
      <div>
        <h1>Join the Fluid AI Waitlist Today!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <select>
            <option value="United Arab Emirates" defaultChecked>
              <span className="flag">🇦🇪 </span>
              United Arab Emirates
            </option>
            <option value="USA">
              <span className="flag">🇺🇸</span> USA{' '}
            </option>
            <option value="Poland">
              <span className="flag">🇵🇱 </span> Poland
            </option>
            <option value="France">
              <span className="flag">🇫🇷 </span>France
            </option>
          </select>
          <Button />
        </form>
      </div>
      <div>
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

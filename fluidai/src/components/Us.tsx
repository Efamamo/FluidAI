import Button from './core/Button';
import bg from '../assets/hero-bg.png';
import './Us.css';
import Lodging from './Us/Lodging';
import restourant from '../assets/restourant.png';
import Reservation from './Us/Reservation';
import reserve from '../assets/Rectangle 149996.png';
import tickets from '../assets/new tickets card.png';
import event1 from '../assets/event1.jpeg';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';
import Event from './Us/Event';
import Service from './Us/Service';
import Todo from './Us/Todo';

const events = [event3, event2, event1];
export default function Us() {
  // const containerStyle = {
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };
  return (
    <div className="us_container">
      <div className="us">
        <h1>Unlock Seamless Efficiency</h1>
        <Button />
        <Lodging
          title="Restaurant"
          location="Japanese"
          name="Clap Dubai"
          rating={4.4}
          image={restourant}
        />
        <Reservation
          name="Restaurant Le Bous"
          image={reserve}
          time="4 Oct 20:00"
        />
        <div className="ticket">
          <img src={tickets} alt="ticket" />
        </div>
        <div className="first-event">
          <Event images={events} name="Kite Beach" time="10:00 - 14:00" />
        </div>
        <div className="second-event">
          <Event images={events} name="Kite Beach" time="10:00 - 14:00" />
        </div>
        <div className="first-service">
          <Service name="Book a flight" />
        </div>
        <div className="second-service">
          <Service name="Trip Ideas" />
        </div>
        <div className="third-service">
          <Service name="Café nearby" />
        </div>
        <div className="first-todo">
          <Todo todo="Renew Car insurance" />
        </div>
        <div className="second-todo">
          <Todo todo="Renew Car insurance" />
        </div>
      </div>
    </div>
  );
}

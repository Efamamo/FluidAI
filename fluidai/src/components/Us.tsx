import Button from './core/Button';
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
  return (
    <div className="us_container">
      <div className="us">
        <div>
          <div className="cafe-todo">
            <div className="t">
              <Todo todo="Renew Car insurance" />
            </div>

            <Lodging
              title="Restaurant"
              location="Japanese"
              name="Clap Dubai"
              rating={4.4}
              image={restourant}
            />
          </div>
          <div className="event-service">
            <Event images={events} name="Kite Beach" time="10:00 - 14:00" />
            <Service name="Café nearby" />
          </div>
          <div className="ticket">
            <img src={tickets} alt="ticket" />
          </div>
        </div>

        <div className="middle">
          <h1>Unlock Seamless Efficiency</h1>
          <Button />
        </div>

        <div className="second-container">
          <Todo todo="Renew Car insurance" />
          <div className="ml ev">
            <Event images={events} name="Kite Beach" time="10:00 - 14:00" />
          </div>
          <div className="ml serv">
            <Service name="Book a flight" />
          </div>
          <div className="mlp serv">
            <Service name="Trip Ideas" />
          </div>

          <Reservation
            name="Restaurant Le Bous"
            image={reserve}
            time="4 Oct 20:00"
          />
        </div>
      </div>
    </div>
  );
}

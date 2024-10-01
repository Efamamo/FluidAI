import timeIcon from '../../assets/Icons.png';
import './Event.css';
interface Props {
  name: string;
  time: string;
  images: string[];
}

export default function Event({ name, time, images }: Props) {
  return (
    <div className="event_container">
      <div className="images">
        {images.map((image, idx) => (
          <div
            className="image_cont"
            style={idx > 0 ? { marginLeft: '-10px' } : { marginLeft: '0' }}
          >
            <img src={image} alt="people" />
          </div>
        ))}
      </div>

      <div className="desc">
        <h3>Resevations</h3>
        <h2>{name}</h2>
        <div>
          <img src={timeIcon} alt="time icon" />
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

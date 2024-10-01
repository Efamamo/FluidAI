import left from '../../assets/Group 1171275351.png';
import right from '../../assets/Group 1171275350.png';
interface Props {
  title: string;
  description: string;
  prev: () => void;
  next: () => void;
}
import './EachBox.css';
export default function EachVision({ title, description, prev, next }: Props) {
  return (
    <div className="vision_container">
      <img
        src={left}
        alt="left arrow"
        onClick={() => {
          prev();
        }}
        className="slider-button left"
      />
      <div className="box">
        <p>{description}</p>
        <h2>{title}</h2>
      </div>

      <img
        src={right}
        alt="right arrow"
        onClick={() => {
          next();
        }}
        className="slider-button"
      />
    </div>
  );
}

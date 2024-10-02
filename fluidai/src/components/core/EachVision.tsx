import left from '../../assets/Group 1171275351.png';
import right from '../../assets/Group 1171275350.png';
interface Props {
  title: string;
  description: string;
  prev: () => void;
  next: () => void;
  image: string;
  visions: any[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}
import './EachBox.css';
export default function EachVision({
  title,
  description,
  prev,
  next,
  image,
  visions,
  currentSlide,
  goToSlide,
}: Props) {
  return (
    <>
      <img className="bg" src={image} alt={`Slide image`} />
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
      <div className="dot-indicators">
        {visions.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)} // Click to change slide
          />
        ))}
      </div>
    </>
  );
}

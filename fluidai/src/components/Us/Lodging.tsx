import '../../styles/Loding.css';
import menu from '../../assets/Vector.png';
interface Props {
  title: string;
  rating: number;
  location: string;
  image: string;
  name: string;
}

export default function Lodging({
  title,
  rating,
  location,
  image,
  name,
}: Props) {
  return (
    <div className="loding_card">
      <img src={image} alt="lodging" />
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="dots">
        <img src={menu} alt="menu" />
      </div>
      <div className="desc">
        <h2>{name}</h2>
        <div>
          <p>{rating}</p>

          <p>$$$$</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

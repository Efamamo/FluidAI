import timeIcon from '../../assets/Icons.png';
interface Props {
  name: string;
  time: string;
  image: string;
}
export default function Reservation({ name, image, time }: Props) {
  return (
    <div className="reservation_card">
      <img src={image} alt="reservation" />

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

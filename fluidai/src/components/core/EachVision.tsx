interface Props {
  title: string;
  description: string;
}
import './EachBox.css';
export default function EachVision({ title, description }: Props) {
  return (
    <div className="box">
      <p>{description}</p>
      <h2>{title}</h2>
    </div>
  );
}

import '../../styles/Services.css';
export default function Service({ name }: { name: string }) {
  return (
    <div className="service">
      <h2>{name}</h2>
    </div>
  );
}

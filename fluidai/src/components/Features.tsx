import features from '../data/features';
import Feature from './Feature';
import './Features.css';
export default function Features() {
  return (
    <section className="features">
      <div className="intro">
        <h2>Our Features</h2>
        <h1>
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>

      {features.map((feature, idx) => (
        <Feature
          key={idx}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          number={idx + 1}
          total={features.length}
        />
      ))}
    </section>
  );
}

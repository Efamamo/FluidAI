interface Props {
  title: string;
  description: string;
  image: string;
  number: number;
  total: number;
}

export default function Feature({
  title,
  description,
  image,
  number,
  total,
}: Props) {
  return (
    <div className="feature-container">
      {number % 2 === 0 && (
        <>
          <div className="extra"></div>
          <img src={image} alt="feature image" />
        </>
      )}
      <div className="feature-first_containter">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          {number}/{total}
        </div>
      </div>
      {number % 2 !== 0 && (
        <>
          <img src={image} alt="feature image" />
          <div className="extra"></div>
        </>
      )}
    </div>
  );
}

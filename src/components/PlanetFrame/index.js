import "./style.css";

const PlanetFrame = ({ planet }) => {
  return (
    <div className="destination__info">
      <div className="planet__frame">
        <iframe
          title="venus"
          frameBorder="0"
          src={`https://eyes.nasa.gov/apps/orrery/#/${planet}`}
        />
      </div>
    </div>
  );
};

export default PlanetFrame;

import CardsList from "../../components/CardsList";
import destinations from "../../config/destinations";
import "./style.css";

const Destinations = () => {
  return (
    <>
      <div className="destinations">
        <h1 className="destinations__title">Find your destination</h1>
        <CardsList cardItems={destinations} />
      </div>
    </>
  );
};

export default Destinations;

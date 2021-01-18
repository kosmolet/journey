import CardsList from "../../components/CardsList";
import destinations from "../../config/destinations";
import "./style.css";

const Destinations = () => {
  return (
    <>
      <div className="destinations">
        <CardsList cardItems={destinations} />
      </div>
    </>
  );
};

export default Destinations;

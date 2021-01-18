import Card from "../Card";
import "./style.css";

const CardsList = ({ cardItems }) => {
  return (
    <div className="cards">
      {cardItems.map((item) => {
        return <Card cardInfo={item} />;
      })}
    </div>
  );
};

export default CardsList;

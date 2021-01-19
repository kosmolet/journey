import Card from "../Card";
import "./style.css";

const CardsList = ({ cardItems }) => {
  return (
    <div className="cards">
      {cardItems.map((item) => {
        return <Card cardInfo={item} key={item?.title} />;
      })}
    </div>
  );
};

export default CardsList;

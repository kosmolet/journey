import { Link } from "react-router-dom";
import "./style.css";

const Card = ({ cardInfo }) => {
  return (
    <div className="card" key={cardInfo.title}>
      <Link className="card__link" to={cardInfo.path}>
        {cardInfo.src && (
          <img className="card__img" alt="planet" src={cardInfo.src} />
        )}
        <h6 className="card__text">{cardInfo.title}</h6>
      </Link>
    </div>
  );
};

export default Card;

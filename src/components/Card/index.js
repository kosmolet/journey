import { Link } from "react-router-dom";
import "./style.css";

const Card = (props) => {
  return (
    <>
      <li className="card">
        <Link className="card__link" to={props.path}>
          <figure className="card__img__wrap" data-category={props.label}>
            <img className="card__img" alt="card" src={props.src} />
          </figure>
          <div className="card__info">
            <h6 className="card__text">{props.text}</h6>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Card;

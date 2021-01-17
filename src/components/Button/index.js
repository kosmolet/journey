import { Link } from "react-router-dom";
import "./style.css";

const STYLES = ["btn__primary", "btn__outline", "nav__button__mob"];
const SIZES = ["btn__medium", "btn__large"];
const MOB_STYLES = ["btn__mob__view"];

const Button = ({ children, path, onClick, btnStyle, btnSize, hideInMob }) => {
  const buttonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const buttonSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  const hideInMobView = hideInMob ? MOB_STYLES[0] : "";

  return (
    <Link to={`${path}`}>
      <button
        className={`btn ${buttonStyle} ${hideInMobView} ${buttonSize}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

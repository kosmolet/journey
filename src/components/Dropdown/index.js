import { Link } from "react-router-dom";
import "./style.css";

function Dropdown({ menuItems }) {
  return (
    <>
      {menuItems.map((item) => {
        return (
          <Link
            key={item.title}
            className="dropdown__menu__item"
            to={item.path}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
}

export default Dropdown;

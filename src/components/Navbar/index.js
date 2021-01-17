import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../Button";
import "./style.css";

const Navbar = () => {
  const [showNavBackground, handleShowNavBackground] = useState(false);
  const [showMobMenu, handleMobMenu] = useState(false);
  const [showMobMenuBtn, handleMobMenuBtn] = useState(false);

  const closeMobileMenu = () => handleMobMenu(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 960) {
        handleMobMenuBtn(true);
      } else {
        handleMobMenuBtn(false);
      }
    });

    return () => {
      window.removeEventListener("resize", handleMobMenuBtn);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShowNavBackground(true);
      } else handleShowNavBackground(false);
    });

    return () => {
      window.removeEventListener("scroll", handleShowNavBackground);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${showNavBackground && "navbar__black"}`}>
        <Link
          to="/"
          className="navbar__logo"
          onClick={() => handleMobMenu(false)}
        >
          Kosmolet
        </Link>
        <div className="navbar__container">
          <button
            type="button"
            className="nav__mob__menu__icon"
            onClick={() => {
              handleMobMenu(!showMobMenu);
            }}
          >
            {showMobMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
          <ul className={showMobMenu ? "nav__menu active" : "nav__menu"}>
            <li className="nav__item">
              <Link
                to="/services"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/destinations"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="nav__link__mob"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {!showMobMenuBtn && (
            <Button btnStyle="btn__outline" path="/signup" hideInMob>
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

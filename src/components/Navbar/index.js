import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../Button";
import "./style.css";
import Dropdown from "../Dropdown";
import destinations from "../../config/destinations";
import services from "../../config/services";
import { authContext } from "../../store/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const { setAuthData, auth } = useContext(authContext);
  const [showNavBackground, handleShowNavBackground] = useState(false);
  const [showMobMenu, handleMobMenu] = useState(false);
  const [showMobMenuBtn, handleMobMenuBtn] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const logoutHandler = () => {
    setAuthData(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    history.push("/login");
    handleMobMenu(false);
  };

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

  const onMouseHover = (dd) => {
    if (window.innerWidth < 960) {
      setDropdown("");
    } else {
      setDropdown(dd);
    }
  };

  const onMouseLeave = () => {
    setDropdown("");
  };

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
            <li
              onMouseEnter={() => onMouseHover("services")}
              onMouseLeave={onMouseLeave}
              className="nav__item"
            >
              <Link
                to="/services"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              {dropdown === "services" && <Dropdown menuItems={services} />}
            </li>
            <li
              onMouseEnter={() => onMouseHover("destinations")}
              onMouseLeave={onMouseLeave}
              className="nav__item"
            >
              <Link
                to="/destinations"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                Destinations
              </Link>
              {dropdown === "destinations" && (
                <Dropdown menuItems={destinations} />
              )}
            </li>
            {auth.data ? (
              <>
                <li className="nav__link__mob">
                  <Link to="/account" onClick={closeMobileMenu}>
                    Account
                  </Link>
                </li>
                <li className="nav__link__mob">
                  <Link to="/" onClick={logoutHandler}>
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="nav__link__mob"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
          {!showMobMenuBtn && !auth.data ? (
            <Button btnStyle="btn__outline" path="/login" hideInMob>
              SIGN IN
            </Button>
          ) : (
            <div className="buttons__nav__group">
              <Button btnStyle="btn__primary" path="/login" hideInMob>
                Account
              </Button>
              <Button
                btnStyle="btn__outline"
                path="/"
                onClick={logoutHandler}
                hideInMob
              >
                LOG OUT
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

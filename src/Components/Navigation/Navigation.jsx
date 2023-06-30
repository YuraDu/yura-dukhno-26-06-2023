import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import LanguageSelector from "./../LanguageSelector/LanguageSelector";

import "./Navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../Redux/reducers/generalSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const darkMode = useSelector(state => state.general.darkMode);

  const { t } = useTranslation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HandleStylesChange = () => {
    dispatch(setDarkMode());
  };

  return (
    <div className="nav__container">
      <nav className="navigation">
        <div className="navigation__buttons">
          {!darkMode ? (
            <DarkModeIcon onClick={HandleStylesChange} />
          ) : (
            <LightModeIcon
              style={{ color: "#f2f2f2", opacity: 0.6 }}
              onClick={HandleStylesChange}
            />
          )}
          <LanguageSelector />
        </div>
        <div
          className={`burger ${isMenuOpen ? "burger--open" : ""}`}
          onClick={handleMenuToggle}
        >
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
        <ul className="nav-links">
          {/* <li className="nav-link button"> */}
          <Link to="/start-page" className="active nav-link button">
            {t("main")}
          </Link>
          {/* </li> */}
          <Link to="/game" className="active nav-link button">
            {t("game")}
          </Link>
          <Link to="/leaders" className="active nav-link button">
            {t("leaders")}
          </Link>
        </ul>
        <div
          className={`menu-collapse ${!isMenuOpen ? "collapsed" : "opened"}`}
        >
          <Link to="/start-page" className="active" onClick={handleMenuToggle}>
            {t("main")}
          </Link>
          <Link to="/game" className="active" onClick={handleMenuToggle}>
            {t("game")}
          </Link>
          <Link to="/leaders" className="active" onClick={handleMenuToggle}>
            {t("leaders")}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

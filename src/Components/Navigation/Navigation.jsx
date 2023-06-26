import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "./../LanguageSelector/LanguageSelector";

import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <LanguageSelector />
      <div
        className={`burger ${isMenuOpen ? "burger--open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/start-page" className="active">
            {t("main")}
          </Link>
        </li>
        <li>
          <Link to="/game" className="active">
            {t("game")}
          </Link>
        </li>
        <li>
          <Link to="/leaders" className="active">
            {t("leaders")}
          </Link>
        </li>
      </ul>
      <div className={`menu-collapse ${!isMenuOpen ? "collapsed" : ""}`}>
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
  );
};

export default Navigation;

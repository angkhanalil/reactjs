import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
// import "../i18n"; useContext ==> access context
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { isAuth } = useContext(AuthContext);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [isActive, setIsActive] = useState(false);
  const navbarMenu = isActive ? "navbar-menu is-active" : "navbar-menu";
  const navbarBurger = isActive ? "navbar-burger is-active" : "navbar-burger";
  const links = [
    { to: "/", caption: "Home" },
    { to: "/about", caption: "About" },
    { to: "/use-effect", caption: "UseEffect" },
    { to: "/user-list", caption: "User List" },
    { to: "/timer", caption: "Timer" },
    { to: "/album-list", caption: "Albums" },
    { to: "/clock", caption: "Clock" },
    { to: "/firebase", caption: "Firebase" },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <button
            className={navbarBurger}
            onClick={() => setIsActive((prev) => !prev)}
          >
            <span></span> <span></span> <span></span>
          </button>
        </div>
        <div className={navbarMenu}>
          {links.map((link, idx) => {
            return (
              <Link key={idx} className="navbar-item" to={link.to}>
                {link.caption}
              </Link>
            );
          })}

          {isAuth ? (
            <Link className="navbar-item" to="/logout">
              Logout
            </Link>
          ) : (
            <Link className="navbar-item" to="/">
              Login
            </Link>
          )}
        </div>

        <button
          type="button"
          className="button"
          onClick={() => changeLanguage("th")}
        >
          th
        </button>
        <button
          type="button"
          className="button"
          onClick={() => changeLanguage("en")}
        >
          en
        </button>
        <div>{t("lang_en")}</div>
      </nav>
    </>
  );
};

export default Navbar;
// export default translate("trans")(Navbar);

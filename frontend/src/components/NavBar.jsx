import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";

import logo from "../assets/logo-sans-fond.png";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div id="header" className={`header ${showMenu ? "show-nav" : "hide-nav"}`}>
      <div className="flex justify-between items-center bg-navbar">
        <div className="w-1/4">
          <img className="w-20" src={logo} alt="logo du site" />
        </div>
        <h1 className="text-3xl font-bold w-1/4 text-center">Accueil</h1>
        <button
          type="button"
          className="navbar-burger"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span className="bar" />
        </button>
        <div className="menuWrapper">
          <ul className="flex justify-around w-1/4 flex-wrap">
            <NavLink to="/">
              <li className="text-xl">Accueil</li>
            </NavLink>
            <NavLink to="/PageProfil">
              <li className="text-xl">Profil</li>
            </NavLink>
            <NavLink to="/Page2">
              <li className="text-xl">Page2</li>
            </NavLink>
            <NavLink className="text-xl" to="/Comparatif">
              <li>Comparatif</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

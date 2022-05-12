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
      <div className="flex justify-around items-center bg-navbar">
        <div className="w-1/6">
          <img className="w-20" src={logo} alt="logo du site" />
        </div>
        <h1 className="text-3xl font-bold w-3/5 text-center">Save Our Self!</h1>
        <div className="w-1/6 flex justify-end">
          <button
            type="button"
            className="navbar-burger"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <span className="bar mr-10" />
          </button>
        </div>
      </div>
      <div className="menuWrapper">
        <ul className="flex justify-around w-1/4 flex-wrap">
          <NavLink to="/">
            <li className="text-xl" onClick={() => handleShowMenu()}>
              Accueil
            </li>
          </NavLink>
          <NavLink to="/Profil">
            <li className="text-xl" onClick={() => handleShowMenu()}>
              Profil
            </li>
          </NavLink>
          <NavLink to="/Page2">
            <li className="text-xl" onClick={() => handleShowMenu()}>
              Page2
            </li>
          </NavLink>
          <NavLink
            className="text-xl"
            to="/Comparatif"
            onClick={() => handleShowMenu()}
          >
            <li>Comparatif</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

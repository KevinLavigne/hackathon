import { HashLink as NavLink } from "react-router-hash-link";

import logo from "../assets/logo-sans-fond.png";

function NavBar() {
  return (
    <div className="flex justify-between items-center bg-navbar">
      <div className="w-1/4">
        <img className="w-20" src={logo} alt="logo du site" />
      </div>
      <h1 className="text-3xl font-bold w-1/4 text-center">Accueil</h1>
      <ul className="flex justify-around w-1/4">
        <NavLink to="/">
          <li className="text-xl">Accueil</li>
        </NavLink>
        <NavLink to="/Profil">
          <li className="text-xl">Profil</li>
        </NavLink>
        <NavLink to="/Page2">
          <li className="text-xl">Page2</li>
        </NavLink>
        <NavLink to="/Comparatif">
          <li>Comparatif</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;

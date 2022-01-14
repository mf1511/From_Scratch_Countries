import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigationgood">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink to="/a-propos" activeClassName="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;

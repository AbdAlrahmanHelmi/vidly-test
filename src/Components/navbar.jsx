import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <NavLink className="nav-link text-black" to="/">
          Vidly
        </NavLink>

        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
        <NavLink className="nav-link" to="/customers">
          Custmors
        </NavLink>
        <NavLink className="nav-link " to="/rental">
          Rental
        </NavLink>
        <NavLink className="nav-link " to="/login">
         Login
        </NavLink>
        <NavLink className="nav-link " to="/register">
        Register
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="logout">
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;
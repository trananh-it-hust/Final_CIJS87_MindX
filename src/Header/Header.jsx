import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css"

const Header = () => {
  const activeClass = (params) => {
    return params.isActive ? "active-item link" : "link";
  };

  return (
    <div className="header">
      <NavLink to="/" className={activeClass}>
        All
      </NavLink>
      <NavLink to="/active" className={activeClass}>
        Active
      </NavLink>
      <NavLink to="/completed" className={activeClass}>
        Completed
      </NavLink>
    </div>
  );
};

export default Header;

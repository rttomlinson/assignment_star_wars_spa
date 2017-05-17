import React from "react";
import {NavLink, withRouter} from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <NavLink activeClassName="active" to="/people">People</NavLink>
      <NavLink activeClassName="active" to="/planets">Planets</NavLink>
    </div>
  );
};

export default withRouter(NavLinks);

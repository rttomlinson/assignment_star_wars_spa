import React from "react";
import {NavLink, withRouter} from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/planets">Planets</NavLink>
    </div>
  );
};

export default withRouter(NavLinks);

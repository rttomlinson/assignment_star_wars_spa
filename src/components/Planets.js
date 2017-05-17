import React from "react";
import {withRouter} from "react-router-dom";

const Planets = ({planets}) => {
  return (
    <div>
        <pre>{planets}</pre>
      <h1>Planets Here</h1>
    </div>
  );
};

// export default withRouter(Planets);
export default Planets;

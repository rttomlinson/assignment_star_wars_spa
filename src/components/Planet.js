import React from "react";

const Planet = ({planet}) => {

  return (
    <div key={planet.url}>
        <h1>Name: {planet.name}</h1>
        <h3>Population: {planet.population}</h3>
        <h3>Terrain: {planet.terrain}</h3>
    </div>
  );
};

// export default withRouter(Planets);
export default Planet;

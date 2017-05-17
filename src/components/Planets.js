import React from "react";
import {withRouter} from "react-router-dom";

const Planets = ({planets}) => {
  const planetsList = planets.map(planet => {
    return (
      <div key={planet.url}>
        <h1>Name: {planet.name}</h1>
        <h3>Population: {planet.population}</h3>
        <h3>Terrain: {planet.terrain}</h3>
      </div>
    );
  });
  return (
    <div>
      <pre />
      <h1>{planetsList}</h1>
    </div>
  );
};

// export default withRouter(Planets);
export default Planets;

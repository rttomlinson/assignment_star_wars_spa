import React from "react";
import {withRouter} from "react-router-dom";

const People = ({people}) => {
  const peopleList = people.map(person => {
    return (
      <div key={person.url}>
        <h1>Name: {person.name}</h1>
        <h3>Gender: {person.gender}</h3>
        <h3>Eye Color: {person.eye_color}</h3>
        <h3>Skin Color: {person.skin_color}</h3>
      </div>
    );
  });
  return (
    <div>
      <pre />
      <h1>{peopleList}</h1>
    </div>
  );
};

// export default withRouter(People);
export default People;

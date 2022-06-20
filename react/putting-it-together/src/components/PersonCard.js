import React, { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hair } = props;
  const [personAge, setPersonAge] = useState(age);

  return (
    <div>
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {personAge}</p>
      <p>Hair Color: {hair}</p>
      <button onClick={() => setPersonAge(personAge + 1)}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;

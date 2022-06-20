import React from "react";

const PersonCard = (props) => {
  // destructuring the props makes it easier to use in the component
  //    but is NOT required
  // We will not destructure age from props and will use it directly
  //    in the JSX that is returned to demonstrate a different way to
  //    use props
  const { firstName, lastName, hair } = props;

  return (
    <div className="container">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {hair}</p>
    </div>
  );
};

export default PersonCard;

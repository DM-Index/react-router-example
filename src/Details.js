import React from "react";

export default props => {
  console.log(props);
  return (
    <h1>
      Details! {props.match.params.lng} {props.match.params.lat}
    </h1>
  );
};

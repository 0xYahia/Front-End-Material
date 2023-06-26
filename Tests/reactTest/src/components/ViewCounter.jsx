import React from "react";

const ViewCounter = ({ num, increaseCount }) => {
  console.log("view counter component");

  return (
    <div>
      <p>{num}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default ViewCounter;

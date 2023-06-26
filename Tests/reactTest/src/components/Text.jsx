import React from "react";

const Text = ({ text }) => {
  console.log("text");
  return (
    <>
      <p>{text.name}</p>
      <p>{text.age}</p>
    </>
  );
};

export default Text;

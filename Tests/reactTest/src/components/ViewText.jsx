import React from "react";
import Text from "./Text";

const ViewText = ({ text, addAge }) => {
  console.log("view text component");

  // const apoConnect = () => {
  //   for (let i = 0; i <= 5000000; i++) {}
  //   console.log("view text component");
  // };
  console.log("view Text");
  // apoConnect();
  return (
    <div className="">
      <button onClick={addAge}>Add Age</button>
      <p>the include text</p>
      <Text text={text}></Text>
    </div>
  );
};

export default React.memo(ViewText);

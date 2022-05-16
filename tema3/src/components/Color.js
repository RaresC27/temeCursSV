import { useState } from "react";

const Color = (props) => {
  const [colorCode, setColorCode] = useState();

  const handleClick = (button) => {
    console.log({ colorCode });
  };
  return (
    <div>
      <input type="color"></input>
      <button>Add</button>
    </div>
  );
};

export default Color;

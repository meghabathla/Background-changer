import React, { useState } from "react";
import { ColorButton } from "./component/ColorButton";

import "./index.css";
import { buttonProps } from "./constant";

function App() {
  const [color, setColor] = useState("#E6E6FA");
  const buttonList = buttonProps.map((color) => {
    return (
      <ColorButton
        onClick={(e) => setColor(props.value)}
        name={color.name}
        value={color.value}
      />
    );
  });

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center bottom-8 insert-x-3 px-20 py-10 text-white ">
        <div className=" flex flex-wrap justify-center  gap-3 shadow-xl bg-white px-4 py-2 rounded-2xl">
          {buttonList}
        </div>
      </div>
    </div>
  );
}

export default App;

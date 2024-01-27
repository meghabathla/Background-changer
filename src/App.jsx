import React, { useState } from "react";

import "./index.css";

function App() {
  const [color, setColor] = useState("#E6E6FA");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center bottom-8 insert-x-3 px-20 py-10 text-white ">
        <div className=" flex flex-wrap justify-center  gap-3 shadow-xl bg-white px-4 py-2 rounded-2xl">
          <button
            onClick={(e) => setColor("wheat")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "#wheat" }}
          >
            Wheat
          </button>
          <button
            onClick={(e) => setColor("#FFC0CB")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "#FFC0CB" }}
          >
            Pink
          </button>
          <button
            onClick={(e) => setColor("#66CDAA")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "#66CDAA" }}
          >
            Teal
          </button>
          <button
            onClick={(e) => setColor("moccasin")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "moccasin" }}
          >
            Moccasin
          </button>
          <button
            onClick={(e) => setColor("#DDA0DD")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "	#DDA0DD" }}
          >
            Plum
          </button>
          <button
            onClick={(e) => setColor("#ADD8E6")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "#ADD8E6" }}
          >
            LightBlue
          </button>
          <button
            onClick={(e) => setColor("#D3D3D3")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "#D3D3D3" }}
          >
            LightGray
          </button>
          <button
            onClick={(e) => setColor("black")}
            className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={(e) => setColor("#98FB98")}
            className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
            style={{ backgroundColor: "#98FB98" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

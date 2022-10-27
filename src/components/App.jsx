import React, { useState } from "react";

function App() {
  const [arr, setArr] = useState(["red", "yellow", "green"]);
  const [isColor, setColor] = useState({
    red: true,
    yellow: false,
    green: false,
  });

  function changeColor() {
    setArr(() => {
      return [...arr, arr[0]].filter((value, index) => {
        return index > 0;
      });
    });
    setColor(() => {
      return { ...isColor, [arr[1]]: true, [arr[0]]: false };
    });
  }
  return (
    <div>
      <button type="submit" onClick={changeColor}>
        Next
      </button>
      <div className="light">
        <span
          style={{ backgroundColor: isColor.red ? "red" : "white" }}
          className="dot"
        ></span>
        <span
          style={{ backgroundColor: isColor.yellow ? "yellow" : "white" }}
          className="dot"
        ></span>
        <span
          style={{ backgroundColor: isColor.green ? "green" : "white" }}
          className="dot"
        ></span>
      </div>
    </div>
  );
}
export default App;

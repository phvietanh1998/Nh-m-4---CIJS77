import React from "react";
import List from "./List";
import data from "../data";

function App() {
  return (
    <div>
      {data.map((elementData) => (
        <List
          key={elementData.id}
          content={elementData.content}
          info={elementData.info}
        ></List>
      ))}
    </div>
  );
}
export default App;

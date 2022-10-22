import React from "react";
import List from "./List";
import data from "../data";

function App() {
  return (
    <div>
      {data.map((e) => (
        <List key={e.id} content={e.content} info={e.info}></List>
      ))}
    </div>
  );
}
export default App;

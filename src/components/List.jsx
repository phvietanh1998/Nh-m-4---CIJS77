import React from "react";
import notes from "../data";
function List() {
  return (
    <ul className="list">
      {notes.map((e) => (
        <li key={e.id}>{e.des}</li>
      ))}
    </ul>
  );
}
export default List;

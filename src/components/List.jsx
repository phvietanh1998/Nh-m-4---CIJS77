import React from "react";

import Item from "./Item";

function List(prop) {
  return (
    <div className="list">
      <h2 className="titleList">{prop.content}</h2>
      {prop.info.map((e) => (
        <Item
          key={e.id}
          imageUrl={e.imageUrl}
          title={e.title}
          des={e.description}
        ></Item>
      ))}
    </div>
  );
}

export default List;

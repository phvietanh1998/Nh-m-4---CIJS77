import React from "react";
import Card from "./Card";
import data from "../data";
function Container() {
  return (
    <div className="main">
      <div className="left">
        {data.left.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              url={e.url}
              title={e.title}
              actor={e.actor}
              date={e.date}
            ></Card>
          );
        })}
      </div>
      <div className="right">
        {data.right.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              url={e.url}
              title={e.title}
              actor={e.actor}
              date={e.date}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
export default Container;
console.log(data.left);

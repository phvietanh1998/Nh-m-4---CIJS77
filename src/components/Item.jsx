import React from "react";

function Item(prop) {
  return (
    <div className="item">
      <img
        src={prop.imageUrl}
        alt="Nhạc Cho Thứ Sáu - HIEUTHUHAI, tlinh, OSAD, MCK"
        className="img"
      />
      <h3 className="bigText">{prop.title}</h3>
      <h4 className="smallText">{prop.des}</h4>
    </div>
  );
}
export default Item;

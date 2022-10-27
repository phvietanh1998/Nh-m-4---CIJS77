import React from "react";

function Card(props) {
  return (
    <div className="item">
      <div className="stt">
        <h3 className="soThuTu">{props.id}</h3>
      </div>
      <img src={props.url} alt="music" className="imageItem" />
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.actor}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
export default Card;

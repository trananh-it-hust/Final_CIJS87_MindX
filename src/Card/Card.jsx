import React from "react";
import "./index.css";
const Card = ({ data, handleChange }) => {
  const { done, name, id } = data;
  return (
    <div className="item">
      <input type="checkbox" checked={done} onChange={() => handleChange(id)} />
      <div className="text">{name}</div>
    </div>
  );
};

export default Card;

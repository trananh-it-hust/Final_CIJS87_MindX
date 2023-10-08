import React from "react";
import "./index.css";
const Card = ({ data, handleChange }) => {
  const { done, name, id } = data;
  const doneClass = (done) => {
    return done ? "done text" : "text";
  };
  return (
    <div className="item">
      <input type="checkbox" checked={done} onChange={() => handleChange(id)} />
      <div className={doneClass(done)}>{name}</div>
    </div>
  );
};

export default Card;

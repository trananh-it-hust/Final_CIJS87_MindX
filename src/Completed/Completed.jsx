import React, { useState } from "react";
import Card from "../Card/Card";
import "./index.css";

const Completed = ({ data, setData }) => {
  const handleChange = (id) => {
    setData([
      ...data.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    ]);
  };
  const handleDelete = (id) => {
    setData([...data.filter((item) => item.id !== id)]);
  };

  return (
    <div className="completed">
      {data.map((item, index) => {
        if (item.done == true)
          return (
            <div className="clp_item" key={index}>
              <Card data={item} handleChange={handleChange} />
              <button onClick={() => handleDelete(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          );
      })}
      <div>
        <button
          onClick={() => {
            setData([...data.filter((item) => item.done == false)]);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <p>Clear All</p>
      </div>
    </div>
  );
};

export default Completed;

import React, { useState } from "react";
import Card from "../Card/Card";
import "./index.css";

const Active = ({data,setData}) => {
  const [tmp, setTmp] = useState("");
  const handleChange = (id) => {
    setData([
      ...data.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    ]);
  };

  return (
    <div className="active">
      <input
      className="input_add"
        type="text"
        value={tmp}
        onChange={(e) => {
          setTmp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setData([...data, { done: false, name: tmp, id: data.length + 1 }]);
        }}
      >
        Add
      </button>
      {data.map((item, index) => {
        if (item.done==false)
        return (
          <div key={index}>
            <Card data={item} handleChange={handleChange} />
          </div>
        );
      })}
    </div>
  );
};

export default Active;

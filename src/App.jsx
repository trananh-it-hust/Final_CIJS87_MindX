import React from "react";
import All from "./All/All";
import { Routes, Route } from "react-router-dom";
import Active from "./Active/Active";
import Completed from "./Completed/Completed";
import Header from "./Header/Header";
import data1 from "./Data/data.json";
import { useState } from "react";
import "./app.css"
const App = () => {
  const [data, setData] = useState(data1);
  return (
    <div className="app">
    <h1>#todo</h1>
      <Header/>
      <Routes>
        <Route path="/" element={<All data={data} setData={setData} />} />
        <Route path="/active" element={<Active data={data} setData={setData} />} />
        <Route path="/completed" element={<Completed data={data} setData={setData}/>} />
      </Routes>
    </div>
  );
};

export default App;

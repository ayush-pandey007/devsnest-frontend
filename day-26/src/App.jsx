import React, { useState } from "react";
import "./App.css";
import Display from "./Display";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <h1>Input</h1>
      <Input />
      <h1>Data</h1>
      <Display />
    </div>
  );
}

export default App;

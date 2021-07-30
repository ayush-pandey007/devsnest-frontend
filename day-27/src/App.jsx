import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import InputList from "./components/InputList";

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Input />
      <InputList />
    </div>
  );
}

export default App;

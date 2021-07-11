import React, { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import Template from "./Template";

function App() {
  return (
    <div className="App">
      <div className="card-box">
        <Cards />
      </div>
    </div>
  );
}

export default App;

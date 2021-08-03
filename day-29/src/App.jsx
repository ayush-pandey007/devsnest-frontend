import React, { useState } from "react";
import Weather from "./Weather";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import InputField from "./InputField";
import ToggleTheme from "./ToggleTheme";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={`App ${theme && "App-dark"}`}>
      <ToggleTheme />
      <InputField />
      <Weather />
    </div>
  );
}

export default App;

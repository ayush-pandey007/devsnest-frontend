import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Cards";
let q1;
let q2;
function App() {
  const [userInput, setUserInput] = useState({ food: "", cals: "" });
  const [state, setState] = useState([]);
  const handleDelete = (index) => {
    setState((prevState) => prevState.filter((val, idx) => idx != index));
  };
  const handleEdit = (index, foode, calorie) => {
    setState((prevState) => {
      console.log(prevState);
      return prevState.map((val, idx) => {
        if (index === idx) return { food: foode, cals: calorie };
        return val;
      });
    });
  };
  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          placeholder="Enter item"
          required
          onChange={(e) => setUserInput({ ...userInput, food: e.target.value })}
        />
        <input
          type="number"
          placeholder="enter calories"
          required
          onChange={(e) => setUserInput({ ...userInput, cals: e.target.value })}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(userInput);
            setState([
              ...state,
              { food: userInput.food, cals: userInput.cals },
            ]);
            setUserInput({ item: "", calorie: "" });
          }}
        >
          Add items
        </button>
      </form>
      <div className="cards">
        {state.map((val, idx) => (
          <Card
            food={val.food}
            cal={val.cals}
            key={idx}
            index={idx}
            handleDelete={handleDelete}
            handeleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

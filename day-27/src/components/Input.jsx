import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../action/action";
function Input() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addItem({ title: userInput, done: false }));
          setUserInput("");
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button type="submit">Add Item</button>
      </form>
      {/* <button onClick={() => dispatch(loadTodo())}>Load Todo</button> */}
    </div>
  );
}

export default Input;

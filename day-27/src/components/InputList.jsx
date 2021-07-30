import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../action/action";
function InputList() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      <div className="todo-container">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch(removeItem(index))}>del</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputList;

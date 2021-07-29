import React from "react";
import { UpdateName, UpdateEmail } from "./actions/action";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { userReducer } from "./reducer/userReducer";
function Input() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  return (
    <div className="input">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => dispatch(UpdateName(e.target.value))}
      />

      <input
        type="text"
        placeholder="email"
        onChange={(e) => dispatch(UpdateEmail(e.target.value))}
      />
    </div>
  );
}

export default Input;

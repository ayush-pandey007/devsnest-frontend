import React from "react";
import { useSelector } from "react-redux";
import { useStore } from "react-redux";
function Display() {
  const user = useSelector((state) => state.userReducer);
  const store = useStore();
  return (
    <div>
      <h3>Username:{user.name}</h3>
      <h3>Email:{user.email}</h3>
    </div>
  );
}

export default Display;

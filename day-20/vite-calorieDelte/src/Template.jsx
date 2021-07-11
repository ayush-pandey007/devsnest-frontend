import React from "react";
import "./Template.css";
function Template({ food, cals }) {
  function Delete(e) {
    e.target.parentNode.remove();
  }
  return (
    <div className="calories">
      <h1>{food}</h1>
      <h2>you have consumed {cals} cals today</h2>
      <button onClick={Delete}>Delete</button>
    </div>
  );
}

export default Template;

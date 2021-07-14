import React from "react";
import Template from "./Template";
import data from "./data.js";
import "./Cards.css";

function Cards() {
  console.log(data);
  return (
    <div className="cards">
      {data.map((val, idx) => {
        return <Template food={val.food} cals={val.cal} />;
      })}
    </div>
  );
}

export default Cards;

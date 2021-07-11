import React from "react";
import Template from "./Template";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <Template
        food="Pizza
"
        cals=" 56"
      />
      <Template
        food="Burger
"
        cals="69"
      />
      <Template
        food="Coke
"
        cals="500"
      />
      <Template
        food="Browne
"
        cals="180"
      />
      <Template
        food="Fried Rice
"
        cals="200"
      />
      <Template
        food="Lassania
"
        cals="600 "
      />
      <Template
        food="Pani Puri
"
        cals="10"
      />
    </div>
  );
}

export default Cards;

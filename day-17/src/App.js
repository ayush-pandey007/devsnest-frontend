import React from "react";
import "./style.css";

export default function App() {
  const Card = ({ food, cals }) => {
    return (
      <div className="card">
        <h1>{food}</h1>
        <h2>you have consumed {cals} cals today</h2>
      </div>
    );
  };
  return (
    <div>
      <div className="page">
        <h1>Calorie Read Only</h1>
        <div className="calorie-contaienr">
          <Card food="Pizza" cals="56" />
          <Card food="Burger" cals="69" />
          <Card food="Coke" cals="500" />
          <Card food="Browne" cals="180" />
          <Card food="Fried Rice" cals="90" />
          <Card food="Lassania" cals="200" />
          <Card food="Pani Puri" cals="10" />
        </div>
      </div>
    </div>
  );
}

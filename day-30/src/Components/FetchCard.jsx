import React, { useState, useEffect } from "react";
import Card from "./Cards";

function FetchCard() {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    function fecthing() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => Setdata(data));
    }
    fecthing();
  }, []);

  return (
    <div className="fetching">
      <h1>Redux Cart</h1>
      <section className="products-container">
        {data.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </section>
    </div>
  );
}

export default FetchCard;

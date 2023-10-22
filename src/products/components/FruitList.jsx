import React, { useState } from "react";
import Fruit from "./Fruit";

const FruitList = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", price: 20, stock: true },
    { id: 2, name: "Apple", price: 20, stock: true },
    { id: 3, name: "Dragon", price: 30, stock: true },
    { id: 4, name: "Water-Melon", price: 10, stock: true },
    { id: 5, name: "Lime", price: 2, stock: false },
  ]);
  return (
    <div>
      <h1>Fruits</h1>
      <Fruit fruits={fruits} />
    </div>
  );
};

export default FruitList;

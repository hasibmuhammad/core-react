import React, { useState } from "react";
import Fruit from "./Fruit";

const FruitList = ({ fruits }) => {
  return (
    <div>
      <h1>Fruits</h1>
      {fruits.length === 0 ? "Not Found!" : ""}
      <Fruit fruits={fruits} />
    </div>
  );
};

export default FruitList;

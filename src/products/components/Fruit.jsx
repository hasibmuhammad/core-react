import React from "react";

const Fruit = ({ fruits }) => {
  console.log(fruits);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 200px)",
        gap: "2rem",
      }}
    >
      {fruits.map((fruit) => (
        <div
          style={{
            border: "1px solid purple",
            padding: "1rem 5rem",
            marginBottom: "10px",
            borderRadius: "15px",
          }}
        >
          <p>{fruit.name}</p>
          <p>${fruit.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Fruit;

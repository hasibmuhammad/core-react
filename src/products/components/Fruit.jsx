import React from "react";

const Fruit = ({ fruits }) => {
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
          key={fruit.id}
          style={{
            border: "1px solid orange",
            padding: "1rem 5rem",
            marginBottom: "10px",
            borderRadius: "15px",
          }}
        >
          <p style={fruit.stock ? {} : { color: "red" }}>{fruit.name}</p>
          <p style={fruit.stock ? {} : { color: "red" }}>${fruit.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Fruit;

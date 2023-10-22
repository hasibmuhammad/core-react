import React from "react";

const User = ({ user: { name, email } }) => {
  return (
    <div
      style={{
        border: "1px solid yellow",
        padding: "1rem 4rem",
        borderRadius: "15px",
        marginBottom: "2rem",
      }}
    >
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default User;

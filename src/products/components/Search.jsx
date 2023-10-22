import { useState } from "react";

const Search = ({ onChange }) => {
  //   const [search, setSearch] = useState("");

  return (
    <form>
      <input
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: ".5rem",
          borderRadius: "5px",
          border: "1px solid orange",
          outline: "none",
          backgroundColor: "transparent",
          color: "#fff",
        }}
        type="search"
        placeholder="Enter Fruits Name"
      />
      {/* <button
        style={{
          padding: ".5rem 1rem",
          backgroundColor: "transparent",
          color: "#fff",
          border: "1px solid orange",
          marginLeft: "1rem",
          borderRadius: "5px",
        }}
      >
        Submit
      </button> */}
    </form>
  );
};

export default Search;

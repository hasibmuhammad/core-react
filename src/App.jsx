import { useState } from "react";
import FruitList from "./products/components/FruitList";
import Search from "./products/components/Search";

function App() {
  const [searchedText, setSearchedText] = useState("");

  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", price: 20, stock: true },
    { id: 2, name: "Apple", price: 20, stock: true },
    { id: 3, name: "Dragon", price: 30, stock: true },
    { id: 4, name: "Water-Melon", price: 10, stock: true },
    { id: 5, name: "Lime", price: 2, stock: false },
  ]);

  const filteredFruit = fruits.filter((f) =>
    f.name.toLowerCase().includes(searchedText)
  );

  return (
    <>
      <Search onChange={(text) => setSearchedText(text)} />
      <FruitList fruits={filteredFruit} />
    </>
  );
}

export default App;

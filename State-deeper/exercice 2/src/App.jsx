/** @format */

import React, { useState } from "react";

import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },
  {
    name: "Table",
    price: 60,
  },
];

export default function App() {
  const [stuffs, setStuffs] = useState(INITIAL_STUFFS);
  const handleFormSubmit = (name, price) => {
    setStuffs([...stuffs, { name, price }]);
    console.log(
      "A new object named " +
        nameInput +
        " with a price of " +
        priceInput +
        " has been added to the list"
    );
  };
  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>
      <StuffForm onSubmit={handleFormSubmit} />
      <div className='stuff-list'>
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}

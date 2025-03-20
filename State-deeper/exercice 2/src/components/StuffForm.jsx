/** @format */

import React from "react";

export default function StuffForm({ onSubmit }) {
  const [nameInput, setName] = React.useState("");
  const [priceInput, setPrice] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nameInput, priceInput);
    setName("");
    setPrice("");
  };

  return (
    <form className='stuff-form' onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type='text'
        placeholder='Banana'
        value={nameInput}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type='number'
        placeholder='15'
        value={priceInput}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <button type='submit'>Add Stuff</button>
    </form>
  );
}

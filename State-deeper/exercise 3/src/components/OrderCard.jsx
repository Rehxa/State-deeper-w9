/** @format */

import React, { useState } from "react";

export default function OrderCard({
  product,
  price,
  quantity,
  onQuantityChange,
}) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleAddQuantity = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };
  const handleSubtractQuantity = () => {
    const newQuantity = currentQuantity - 1;
    if (newQuantity >= 0) {
      setCurrentQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className='order'>
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>
      <div className='order-quantity'>
        <div
          className={
            currentQuantity === 0 ? "order-button-disable" : "order-button"
          }
          onClick={handleSubtractQuantity}>
          -
        </div>
        <h4>{currentQuantity}</h4>
        <div className='order-button' onClick={handleAddQuantity}>
          +
        </div>
      </div>
    </div>
  );
}

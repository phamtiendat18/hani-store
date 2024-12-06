import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border-0">
      <button
        onClick={decreaseQuantity}
        className="w-[20px] h-[20px] flex items-center justify-center text-xl bg-[#D9D9D9] rounded-[5px] text-[#FF5959]"
      >
        -
      </button>
      <div className="w-12 h-10 flex items-center justify-center font-normal">
        {quantity}
      </div>
      <button
        onClick={increaseQuantity}
        className="w-[20px] h-[20px] flex items-center justify-center text-xl bg-[#FF5959] text-white rounded-[5px]"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

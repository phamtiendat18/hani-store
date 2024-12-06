import * as React from "react";
import payment1 from "../assets/images/payment1.png";

function OrderItem({ name, variant, price }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
        <div className="flex shrink-0 h-[140px] w-[107px] ">
          <img src={payment1} alt="" />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start self-stretch my-auto text-base text-black max-md:mt-8">
          <div className="self-stretch">{name}</div>
          <div className="mt-4">{variant}</div>
          <div className="mt-4 text-red-600">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;

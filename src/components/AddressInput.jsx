import * as React from "react";

function AddressInput({ label, value, icon }) {
  return (
    <div className="flex gap-5 justify-between py-3.5 pr-3.5 pl-11 mt-2.5 max-w-full text-base bg-white rounded-3xl border border-solid border-zinc-600 text-zinc-600 w-[474px] max-md:pl-5">
      <div>{value}</div>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-start mt-1.5 w-5 aspect-square"
      />
    </div>
  );
}

export default AddressInput;

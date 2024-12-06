import * as React from "react";

function LocationSelect({ label, value, icon }) {
  return (
    <div className="flex flex-col">
      <div className="self-start text-lg text-black">{label}</div>
      <div className="flex gap-5 justify-between px-6 py-4 mt-2.5 text-base bg-white rounded-3xl border border-solid border-zinc-600 text-zinc-600 max-md:pl-5">
        <div>{value}</div>
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 w-5 aspect-square"
        />
      </div>
    </div>
  );
}

export default LocationSelect;

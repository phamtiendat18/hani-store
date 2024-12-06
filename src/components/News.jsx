import React from "react";
import { Link } from "react-router-dom";

export default function News({ src, title, des }) {
  return (
    <div className="w-[350px] h-[600px]">
      <div>
        <img src={src} alt="" />
      </div>
      <div className="">
        <h3 className="font-semibold text-[18px] mb-[10px]">{title}</h3>
        <p>{des}</p>
      </div>
    </div>
  );
}

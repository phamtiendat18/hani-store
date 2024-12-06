import React from "react";

export default function NewsFirst({ src, title, des }) {
  return (
    <div className="flex mb-[30px]">
      <div>
        <img src={src} className="min-w-[495px] h-[275px]" alt="" />
      </div>
      <div className="pl-[20px] pt-[14px]">
        <h2 className="mb-[21px] font-semibold text-[18px]">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
}

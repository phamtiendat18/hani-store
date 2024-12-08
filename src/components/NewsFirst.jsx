import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewsFirst({ src, title, des }) {
  const navigation = useNavigate()
  return (
    <div className="flex mb-[30px]" onClick={() => navigation("/news-detail")}>
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

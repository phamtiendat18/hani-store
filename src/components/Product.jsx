import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from "../assets/images/heart.png";
import like from "../assets/images/like.png";

import hot from "../assets/images/hot.png";
import newIcon from "../assets/images/newIcon.png";

export default function Product({ image, title, price, isLike, type }) {
  const [isFavorite, setIsFavorite] = useState(isLike);
  const navigation = useNavigate();

  return (
    <div className="w-[280px] h-[455px]">
      <div className="bg-white overflow-hidden hover:shadow-xl duration-300 flex flex-col justify-between">
        <div className="relative">
          {type && <div className="absolute left-3 top-3 ">
            <img src={type === "new" ? newIcon : hot} />
          </div>}
          <img
            src={image}
            alt={title}
            className="w-full h-[360px] object-cover"
            onClick={() => navigation("/product-detail")}
          />
          <div
            className="absolute top-4 right-4"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <img src={isFavorite ? like : heart} alt="" className="w-[25px]" />
          </div>
        </div>
        <div
          className="px-1 py-2 h-full w-full flex flex-col justify-between"
          onClick={() => navigation("/product-detail")}
        >
          <h3 className="text-[15px] font-[500] text-gray-800 text-left">
            {title}
          </h3>
          <div className="flex item-center justify-between">
            <div>
              <div className="font-[400] text-[16px] flex justify-between items-center">
                <p className="text-[#E20000] font-medium">{price}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between text-sm text-gray-500 w-full">
                  <div className="flex">
                    <span className="mr-1">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                          fill="gold"
                        />
                      </svg>
                    </span>
                    <span className="mr-1">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                          fill="gold"
                        />
                      </svg>
                    </span>
                    <span className="mr-1">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                          fill="gold"
                        />
                      </svg>
                    </span>
                    <span className="mr-1">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                          fill="gold"
                        />
                      </svg>
                    </span>
                    <span className="mr-1">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                          fill="gold"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-[100px] h-[35px] bg-[#FF5959] border rounded-[99px] text-white font-semibold">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

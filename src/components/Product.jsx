import React from "react";

export default function Product({
  image,
  title,
  price,
  sold,
  rating,
  oldPrice,
}) {
  return (
    <div className="w-[352px] h-[572px]">
      <div className="bg-white overflow-hidden hover:shadow-xl duration-300 h-[572px] flex flex-col justify-between">
        <img
          src={image}
          alt={title}
          className="w-full h-[450px] object-cover"
        />
        <div className="p-2 h-full w-full flex flex-col justify-between">
          <h3 className="text-[15px] font-[500] text-gray-800 text-left">
            {title}
          </h3>
          <div className="font-[400] text-[16px] flex justify-between items-center">
            <p className="text-[#E20000] font-medium">{price}</p>
            <button className="w-[95px] h-[42px] bg-[#FF5959] border rounded-lg text-white">
              Mua ngay
            </button>
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
      </div>
    </div>
  );
}

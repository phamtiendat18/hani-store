import { useState } from "react";
import discount from "../assets/images/discount.png";

function NotifySidebar({ textMenu, setTextMenu }) {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7de0186622932d4b95d0b52a0af3972d1313956a950a903bdde5f068e22cf2e?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
      text: "Tất cả",
      className: `bg-white ${
        textMenu === "Tất cả" && "text-rose-500 font-semibold"
      }`,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e568ecd6d8d9ed11fbac2720b4cfa48a38e6b5d72ac41e9023a21852d4c7303?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
      text: "Đơn hàng",
      className: `bg-white ${
        textMenu === "Đơn hàng" && "text-rose-500 font-semibold"
      }`,
    },
    {
      icon: discount,
      text: "Khuyến mãi",
      className: `bg-white ${
        textMenu === "Khuyến mãi" && "text-rose-500 font-semibold"
      }`,
    },
  ];

  return (
    <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-lg text-black max-md:mt-10">
        <div className="flex flex-col px-px py-7 w-full bg-white rounded-3xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be58a86ec625569ec44b3c30b7e6b1f79409bc09c9bf3995ce66d00e24fa9164?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
            alt="Trần Thị Hạnh profile"
            className="object-contain self-center rounded-full aspect-square w-[50px]"
          />
          <div className="self-center mt-2">Trần Thị Hạnh</div>
          <div className="flex shrink-0 mt-2.5 mr-3.5 ml-3 bg-rose-100 rounded-xl h-[3px] w-[170px] max-md:mx-2.5" />

          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex gap-4 p-4 rounded-3xl ${item.className}`}
              tabIndex="0"
              onClick={() => setTextMenu(item.text)}
            >
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
              <span className="my-auto">{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotifySidebar;

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Breadcrumb } from "../components/Breadcrumb";
import React, { useState } from "react";
import Footer from "../components/Footer";
import boxTime from "../assets/images/boxTime.png";
import magicStar from "../assets/images/magicStar.png";
import truckTick from "../assets/images/truckTick.png";
import box from "../assets/images/box.png";

const orderStatuses = [
  {
    label: "Chờ xác nhận",
    icon: boxTime,
    quantity: 1,
  },
  {
    label: "Chờ giao hàng",
    icon: box,
    quantity: 0,
  },
  {
    label: "Đang giao hàng",
    icon: truckTick,
    quantity: 2,
  },
  {
    label: "Đánh giá",
    icon: magicStar,
    quantity: 0,
  },
];

const utilities = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9838f8175edd609527824f68204961e4d4ed5da573ccdda6504602e49286146d?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    label: "ví tiền",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0a822c776901b6c0bab855444645d13d1d76ce6d827cfa8b2079ba8964c75ed?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    label: "Mua lại",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b58f862a7b8f1e885262c7751c0918bae811843be3f361b1619f8177148ca84?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    label: "Đã xem gần đây",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac33e47444cc5b1fa6f5a49451b3a728e1d4ac3876e1215479ab12d5644da189?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    label: "Kho voucher",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b1cad12106b11dd34c0b383185ed19145fa27311a38204c585e028f5604de7c?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    label: "Khách hàng\nthân thiết",
  },
];

export default function MyOrder() {
  const [activeMenuItem, setActiveMenuItem] = useState("orders");
  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <Breadcrumb />
      <div className="flex mx-[100px]">
        <Sidebar
          onMenuItemClick={handleMenuItemClick}
          activeMenuItem={activeMenuItem}
        />
        <div className="flex flex-col items-end self-center pt-12 mt-6 w-full max-md:max-w-full pr-[45px]">
          <div className="flex flex-col mt-12 max-w-full text-lg font-semibold w-[940px] max-md:mt-10">
            <div className="flex flex-wrap gap-5 justify-between mr-6 max-md:mr-2.5 max-md:max-w-full">
              <div className="text-black">Đơn hàng của tôi</div>
              <a
                href="/orders"
                className="flex gap-3 self-start text-rose-500 items-center"
              >
                <div className="basis-auto">Xem tất cả</div>
                <div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f2bbe2d80fe46f9a21d868195d4734abe38b0acaaa4d772b57877b6f840935e?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
                    alt=""
                    className="object-contain shrink-0 self-start aspect-[0.47] fill-rose-500 w-[7px] flex items-center"
                  />
                </div>
              </a>
            </div>
            <div className="flex shrink-0 mt-3.5 ml-5 w-full rounded-3xl bg-zinc-300 h-[3px]" />
          </div>
          <div className="flex flex-col mt-0 max-w-full w-[968px]">
            <div className="flex flex-col pl-12 w-full text-base text-black max-md:pl-5 max-md:max-w-full mt-[40px] ">
              <div className="flex justify-between px-[90px] max-w-full w-full ">
                {orderStatuses.map((item, index) => (
                  <div key={index} className="flex flex-col items-center ">
                    <div className="relative">
                      <img src={item?.icon} alt="" />
                      {item?.quantity !== 0 && (
                        <div className="absolute w-[25px] h-[25px] rounded-[99px] bg-[#FF3434] text-white top-[-3px] right-[-10px] index-10 text-center text-[14px]">
                          {item.quantity}
                        </div>
                      )}
                    </div>
                    <div>{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 mt-7 rounded-3xl bg-zinc-300 h-[3px] max-md:max-w-full" />
            </div>

            <div className="self-start mt-10 text-lg font-semibold text-black">
              Tiện ích khác
            </div>
            <div className="flex flex-col pl-12 mt-3.5 w-full max-md:pl-5 max-md:max-w-full">
              <div className="flex shrink-0 rounded-3xl bg-zinc-300 h-[3px] max-md:max-w-full" />
              <div className="flex flex-wrap justify-between items-center self-center mt-6 px-[50px] w-full max-md:max-w-full">
                {utilities.map((utility, index) => (
                  <div className="flex flex-col items-center" key={index}>
                    <img
                      loading="lazy"
                      src={utility.icon}
                      alt={utility.label}
                      className="w-[50px]"
                    />
                    <div>{utility.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 self-end mr-36 mt-6 max-w-full rounded-3xl bg-zinc-300 h-[3px] w-[920px] max-md:mr-2.5 mb-[36px]" />
      <Footer />
    </div>
  );
}

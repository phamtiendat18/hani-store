import { Button, Input } from "antd";
import React from "react";
import starList from "../assets/images/starList.png";

const Menu = () => {
  return (
    <div className="min-w-[270px] w-[270px] pt-[11px]">
      <div className="mb-[20px] text-center pb-[16px] border-b-4 border-[#D9D9D9] w-full flex flex-col items-center">
        <h2 className=" text-[18px] font-bold mb-[12px]">Khoảng giá</h2>
        <div className="flex items-center mb-[15px]">
          <Input
            placeholder="Từ"
            style={{
              border: "1px solid #FF5959",
              width: "100px",
              height: "45px",
              marginRight: "12px",
            }}
            className="mr-10px"
          />
          -
          <Input
            placeholder="Đến"
            style={{
              border: "1px solid #FF5959",
              width: "100px",
              height: "45px",
              marginLeft: "12px",
            }}
            className="ml-10px"
          />
        </div>
        <div>
          <Button
            color="primary"
            variant="solid"
            style={{
              borderRadius: "99px",
              width: "100px",
              height: "50px",
              background: "#FF5959",
            }}
          >
            Áp dụng
          </Button>
        </div>
      </div>

      <div className="pb-[16px] border-b-4 border-[#D9D9D9] mb-[16px]">
        <h2 className="text-center text-[18px] font-bold text-lg mb-[10px]">
          Đánh giá
        </h2>
        <div>
          <img src={starList} alt="" />
        </div>
      </div>

      <div className="mb-[20px] border-b-4 border-[#D9D9D9]">
        <h2 className=" text-[18px] font-bold mb-[13px] text-center">
          Dịch vụ <br /> Khuyến mại
        </h2>
        <ul>
          {["Voucher", "Đang giảm giá", "Hàng sẵn có", "Hàng chờ order"].map(
            (brand, index) => (
              <li key={index} className="mb-[20px] flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  className="mr-2 appearance-none w-[20px] h-[20px] border-2 border-[#FF5959] rounded-[5px] checked:bg-[#FF5959] checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:w-4 checked:after:h-4 checked:after:justify-center checked:after:items-center"
                />
                <label htmlFor={`brand-${index}`} className="cursor-pointer">
                  {brand}
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      <div>
        <h2 className="text-[#F88CAD] text-[20px] font-bold text-lg mb-[20px]">
          Size
        </h2>
        <ul>
          {["S", "M", "L", "XL"].map((priceRange, index) => (
            <li key={index} className="mb-[20px] flex items-center">
              <input
                type="checkbox"
                id={`price-${index}`}
                className="mr-2 appearance-none w-[20px] h-[20px] border-2 border-[#FF5959] rounded-[5px] checked:bg-[#FF5959] checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:w-4 checked:after:h-4 checked:after:justify-center checked:after:items-center"
              />
              <label htmlFor={`price-${index}`} className="cursor-pointer">
                {priceRange}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

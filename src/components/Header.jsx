import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import bell from "../assets/images/bell.svg";
import info from "../assets/images/info.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
const { Search } = Input;
export default function Header({ page }) {
  return (
    <div>
      <div className="flex justify-between pr-[115px] pl-[25px] items-center">
        <Link
          to={"#"}
          className="flex items-center mb-5 text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0 block w-[14%] text-center"
        >
          <div className="w-[130px] h-[120px]">
            <img src={logo} />
          </div>
        </Link>
        <div class="w-full max-w-sm min-w-[880px]">
          <div class="relative mt-2">
            <input
              type="text"
              class="w-full h-[60px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#FF5959] rounded-[99px] py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />

            <button
              class="absolute w-[170px] text-[20px] h-[52px] top-1 right-1 flex items-center rounded-[99px] bg-[#FF5959] py-1 px-5 text-center border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Tìm kiếm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-8 h-8 ml-1.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex w-[425px] justify-between">
          <div className="w-[40px]">
            <img src={user} alt="" />
          </div>
          <div className="w-[40px]">
            <img src={cart} alt="" />
          </div>
          <div className="w-[40px]">
            <img src={bell} alt="" />
          </div>
          <div className="w-[40px]">
            <img src={info} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center h-[70px] justify-between bg-[#FFEAEA] px-[150px]">
        <Link
          to={"/"}
          className={`${
            page === "home" ? "text-[#FF5959]" : ""
          } text-gray-600 font-medium block w-[14%] text-[25px] text-center`}
        >
          Trang chủ
        </Link>
        <Link
          to={"/hot-trend"}
          className={`${
            page === "hot" ? "text-[#FF5959]" : ""
          } text-gray-600 font-medium block w-[14%] text-[25px] text-center`}
        >
          Hot
        </Link>
        <Link
          to={"/products"}
          className={`${
            page === "products" ? "text-[#FF5959]" : ""
          } text-gray-600 font-medium block w-[14%] text-[25px] text-center`}
        >
          Sản phẩm
        </Link>
        <Link
          to={"#"}
          className=" text-gray-600 font-medium block w-[14%] text-[25px] text-center"
        >
          Giới thiệu
        </Link>
        <Link
          to={"#"}
          className=" text-gray-600 font-medium block w-[14%] text-[25px] text-center"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}

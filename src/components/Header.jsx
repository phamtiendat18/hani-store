import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import isCart from "../assets/images/cart.png";
import noti from "../assets/images/noti.png";
import bell from "../assets/images/bell.svg";
import info from "../assets/images/info.svg";
import isInfo from "../assets/images/info.png";
import ao from "../assets/images/ao2.png";
import avatar from "../assets/images/avatar.png";
import chanVay from "../assets/images/chan-vay2.png";
import quan from "../assets/images/quan2.png";
import vay from "../assets/images/vay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
const { Search } = Input;
export default function Header({ page, namePage, isProd }) {
  const navigation = useNavigate();
  const [searchResult, setSearchResult] = useState("");
  const handleSearch = () => {
    navigation("/search-results", { state: { key: searchResult } });
  };
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div>
      <div className="flex justify-between pl-[214px] pr-[234px] items-center h-[70px]">
        <Link
          to={"/"}
          className="flex items-center mb-5 text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0 block w-[14%] text-center"
        >
          <div className="w-[90px]">
            <img src={logo} />
          </div>
        </Link>
        <div class="w-full max-w-sm min-w-[550px]">
          <div class="relative">
            <input
              type="text"
              class="w-full h-[41px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#FF5959] rounded-[99px] py-2 px-10 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              onChange={(e) => setSearchResult(e.target.value)}
            />

            <button
              class="absolute w-[170px] text-[20px] h-[33px] top-1 right-1 flex items-center justify-center rounded-[99px] bg-[#FF5959] py-1 px-5 text-center border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleSearch}
            >
              Tìm kiếm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-5 h-5 ml-1.5"
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
        <div className="flex w-[223px] justify-between">
          <Link to={isLogin ? "/me/account" : "/login"} className="w-[20px]">
            <img src={isLogin ? avatar : user} alt="" />
          </Link>
          <Link to={"/cart"} className="w-[20px]">
            <img src={page === "cart" ? isCart : cart} alt="" />
          </Link>
          <Link to={"/notification"} className="w-[20px]">
            <img src={page === "notify" ? noti : bell} alt="" />
          </Link>
          <Link to={"/help"} className="w-[20px]">
            <img src={page === "help" ? isInfo : info} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center h-[40px] justify-between bg-[#FFEAEA] px-[150px]">
        <Link
          to={"/"}
          className={`${page === "home" ? "text-[#FF5959]" : ""
            } font-semibold block w-[14%] text-[20px] text-center hover:text-[#FF5959]`}
        >
          Trang chủ
        </Link>
        <Link
          to={"/hot-trend"}
          className={`${page === "hot" ? "text-[#FF5959]" : ""
            } font-semibold block w-[14%] text-[20px] text-center hover:text-[#FF5959]`}
        >
          Hot
        </Link>
        <Link
          to={"/products"}
          className={`${page === "products" ? "text-[#FF5959]" : ""
            } font-semibold block w-[14%] text-[20px] text-center hover:text-[#FF5959]`}
        >
          Sản phẩm
        </Link>
        <Link
          to={"/about-us"}
          className={`${page === "about-us" ? "text-[#FF5959]" : ""
            } font-semibold block w-[14%] text-[20px] text-center hover:text-[#FF5959]`}
        >
          Giới thiệu
        </Link>
        <Link
          to={"/blog"}
          className={`${page === "blog" ? "text-[#FF5959]" : ""
            } font-semibold block w-[14%] text-[20px] text-center hover:text-[#FF5959]`}
        >
          Blog
        </Link>
      </div>
      <div>
        {namePage && (
          <h1 className="text-[18px] font-semibold text-center mt-[26px] mb-[22px]">
            {namePage}
          </h1>
        )}
      </div>
      {isProd && (
        <div>
          <div className="mx-[181px] flex justify-between px-[70px] py-[26px] shadow-xl rounded-[50px] border border-[#D7D2D2] mb-[35px]">
            <Link to={"/products/dress"} className="text-center font-normal">
              <img src={vay} alt="" className="w-[180px]" />
              <p className="mt-[14px] text-[18px] font-semibold">Đầm / Váy</p>
            </Link>
            <Link to={"/products/t-shirt"} className="text-center font-normal">
              <img src={ao} alt="" className="w-[180px]" />
              <p className="mt-[14px] text-[18px] font-semibold">Áo</p>
            </Link>
            <Link to={"/products/trouser"} className="text-center font-normal">
              <img src={quan} alt="" className="w-[180px]" />
              <p className="mt-[14px] text-[18px] font-semibold">Quần</p>
            </Link>
            <Link to={"/products/shirt"} className="text-center font-normal">
              <img src={chanVay} alt="" className="w-[180px]" />
              <p className="mt-[14px] text-[18px] font-semibold">Chân váy</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import exportIcon from "../assets/images/exportIcon.png";
import heartIcon from "../assets/images/heartIcon.png";
import profileCircle from "../assets/images/profileCircle.png";
import receipt from "../assets/images/receipt.png";
import avatar from "../assets/images/avatar.png";
import userFocus from "../assets/images/userFocus.png";
import heartFocus from "../assets/images/heartFocus.png";
import receiptFocus from "../assets/images/receiptFocus.png";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

function Sidebar({ activeMenuItem, onMenuItemClick }) {
  const navigation = useNavigate();
  console.log(activeMenuItem);

  const user = {
    name: "Trần Thị Hạnh",
    email: "tranthihanh@gmail.com",
    phone: "0968923562",
    birthDate: "12/05/2002",
    address: "Thanh Xuân, Hà Nội",
    avatar: avatar,
  };
  const menuItems = [
    { id: "account", icon: profileCircle, focusIcon: userFocus, label: "Tài khoản" },
    { id: "orders", icon: receipt, focusIcon: receiptFocus, label: "Đơn hàng" },
    { id: "favorites", icon: heartIcon, focusIcon: heartFocus, label: "Yêu thích" },
    { id: "logout", icon: exportIcon, focusIcon: "", label: "Đăng xuất" },
  ];
  const handleClick = (id) => {
    if (id === "logout") {
      notification.success({ message: "Đăng xuất thành công!" });
      localStorage.clear();
      navigation("/");
      return;
    }
    console.log(id);

    onMenuItemClick(id);
    navigation(`/me/${id}`);
  };

  return (
    <div className="flex flex-col w-[20%] max-md:w-full">
      <div className="flex flex-col items-center px-px pt-3.5 pb-9 mt-6 max-w-full bg-white rounded-3xl w-[172px]">
        <img
          src={user.avatar}
          alt={user.name}
          className="object-contain rounded-full aspect-square w-[50px]"
        />
        <div className="mt-2 text-base">{user.name}</div>
        <div className="flex shrink-0 mt-3.5 h-0.5 bg-rose-100 w-[136px]" />
        <div className="flex flex-col self-stretch mt-1.5 text-lg">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex gap-4 p-2 w-full text-left rounded-3xl transition-colors ${activeMenuItem === item.id
                ? "text-[#FF5959] font-semibold"
                : "hover:bg-rose-50"
                }`}
            >
              <img
                src={activeMenuItem === item.id ? item.focusIcon : item.icon}
                alt=""
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
              <span className="my-auto">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

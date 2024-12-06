import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ActionButtons from "../components/ActionButtons";
import Footer from "../components/Footer";
import avatar from "../assets/images/avatar.png";

function UserProfile({ onSave, onCancel }) {
  const [activeMenuItem, setActiveMenuItem] = useState("account");
  const user = {
    name: "Trần Thị Hạnh",
    email: "tranthihanh@gmail.com",
    phone: "0968923562",
    birthDate: "12/05/2002",
    address: "Thanh Xuân, Hà Nội",
    avatar: avatar,
  };
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const handleImageSelect = (file) => {
    console.log("Selected file:", file);
  };

  const navLinks = ["Trang chủ", "Hot", "Sản phẩm", "Giới thiệu", "Blog"];

  const footerData = {
    companyInfo: {
      name: "HANI STORE",
      address: "Định Công - Hoàng Mai - Hà Nội",
      socials: [
        { icon: "/facebook-icon.png", link: "#" },
        { icon: "/twitter-icon.png", link: "#" },
        { icon: "/instagram-icon.png", link: "#" },
      ],
    },
    sections: [
      {
        title: "Về chúng tôi",
        links: [
          "Giới thiệu Hani Store",
          "Cảm hứng thời trang",
          "Danh sách cửa hàng",
        ],
      },
      {
        title: "Hỗ trợ khách hàng",
        links: [
          "Liên hệ đến Hani Store",
          "Câu hỏi thường gặp",
          "Hướng dẫn đặt hàng",
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 mx-[100px] py-8">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar
            user={user}
            activeMenuItem={activeMenuItem}
            onMenuItemClick={handleMenuItemClick}
          />
          <MainContent user={user} onImageSelect={handleImageSelect} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserProfile;

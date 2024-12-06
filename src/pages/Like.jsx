import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import avatar from "../assets/images/avatar.png";
import Product from "../components/Product";

const products = [
  {
    image: img1,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img4,
    price: "248,000 đ",
    title: "Váy skort caro phối ren đính nơ hông",
  },
  {
    image: img2,
    price: "318,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img3,
    price: "198,000 đ",
    title: "Áo thun gân croptop tay ngắn cuốn biên",
  },
  {
    image: img4,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img3,
    price: "258,000 đ",
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img2,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
  },
];

export default function Like() {
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
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 mx-[100px] py-8">
        <div className="flex">
          <Sidebar
            user={user}
            activeMenuItem={activeMenuItem}
            onMenuItemClick={handleMenuItemClick}
          />
          <div className="flex flex-wrap justify-between gap-y-[37px] ml-[146px]">
            {products.map((item) => (
              <Product {...item} isLike={true} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

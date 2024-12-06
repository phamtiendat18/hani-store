import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import { Select } from "antd";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
const { Option } = Select;

const products = [
  {
    image: img1,
    title: "Áo ren 2 dây croptop phối viền đính nơ",
    price: "200.000đ",
    oldPrice: "1000đ",
    sold: 120,
  },
  {
    image: img2,
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
    price: "300.000đ",
    oldPrice: "1000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Đầm mini tay con cổ vuông phối ren ngực đính nơ",
    price: "100.000đ",
    oldPrice: "1000đ",
    sold: 45,
  },
  {
    image: img2,
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
    price: "250.000đ",
    oldPrice: "1000đ",
    sold: 78,
  },
  {
    image: img1,
    title: "Áo ren 2 dây croptop phối viền đính nơ",
    price: "150.000đ",
    oldPrice: "1000đ",
    sold: 98,
  },
  {
    image: img2,
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
    price: "300.000đ",
    oldPrice: "1000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Đầm mini tay con cổ vuông phối ren ngực đính nơ",
    price: "100.000đ",
    oldPrice: "1000đ",
    sold: 45,
  },
  {
    image: img2,
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
    price: "250.000đ",
    oldPrice: "1000đ",
    sold: 78,
  },
  {
    image: img2,
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
    price: "300.000đ",
    oldPrice: "1000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Đầm mini tay con cổ vuông phối ren ngực đính nơ",
    price: "100.000đ",
    oldPrice: "1000đ",
    sold: 45,
  },
  {
    image: img2,
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
    price: "250.000đ",
    oldPrice: "1000đ",
    sold: 78,
  },
  {
    image: img1,
    title: "Áo ren 2 dây croptop phối viền đính nơ",
    price: "150.000đ",
    oldPrice: "1000đ",
    sold: 98,
  },
];

export default function SearchResults() {
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <Header />
      <div className="mx-[100px]">
        <div className="text-[18px] font-medium mb-[52px] mt-[21px]">
          Kết quả tìm kiếm cho "
          <span className="text-[#FF5959]">{state?.key}</span>"
        </div>
        <div className="flex ">
          <Menu />
          <div className="ml-[20px]">
            <div>
              <span className="mr-[9px]">Lọc sản phẩm: </span>
              <Select
                placeholder="Sắp xếp theo"
                style={{
                  width: "200px",
                  height: "50px",
                }}
                className="custom-select"
              >
                <Option value="price">Giá cả</Option>
                <Option value="brand">Thương hiệu</Option>
                <Option value="rating">Đánh giá</Option>
                <Option value="feature">Tính năng</Option>
              </Select>
            </div>
            <div className="pl-[30px]">
              <div className="flex flex-wrap justify-between gap-y-[26px]">
                {products.map((item, index) => (
                  <Product {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

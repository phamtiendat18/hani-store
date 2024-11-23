import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ao from "../assets/images/ao2.png";
import banner from "../assets/images/banner.png";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import banner5 from "../assets/images/banner5.png";
import chanVay from "../assets/images/chan-vay2.png";
import footer from "../assets/images/footer.png";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import quan from "../assets/images/quan2.png";
import vay from "../assets/images/vay.png";
import Header from "../components/Header";
import Product from "../components/Product";
import "./styles.css";
import { Carousel } from "antd";

const products = [
  {
    image: img1,
    title: "Sản phẩm 1",
    price: "200.000đ",
    oldPrice: "1000đ",
    sold: 120,
  },
  {
    image: img1,
    title: "Sản phẩm 2",
    price: "300.000đ",
    oldPrice: "1000đ",
    sold: 85,
  },
  {
    image: img1,
    title: "Sản phẩm 3",
    price: "100.000đ",
    oldPrice: "1000đ",
    sold: 45,
  },
  {
    image: img1,
    title: "Sản phẩm 4",
    price: "250.000đ",
    oldPrice: "1000đ",
    sold: 78,
  },
  {
    image: img1,
    title: "Sản phẩm 5",
    price: "150.000đ",
    oldPrice: "1000đ",
    sold: 98,
  },
];

export default function Home() {
  return (
    <div>
      <Header page={"home"} />
      <Carousel autoplay dotPosition="bottom">
        <div className="w-full">
          <img src={banner1} className="w-full" alt="" />
        </div>
        <div className="w-full">
          <img src={banner2} className="w-full" alt="" />
        </div>
        <div className="w-full">
          <img src={banner3} className="w-full" alt="" />
        </div>
        <div className="w-full">
          <img src={banner4} className="w-full" alt="" />
        </div>
        <div className="w-full">
          <img src={banner5} className="w-full" alt="" />
        </div>
      </Carousel>
      <div className="mx-[214px] flex justify-between px-[60px] pt-[44px] pb-[36px]">
        <div className="text-center font-normal">
          <img src={vay} alt="" />
          <p className="mt-[34px] text-[30px]">Đầm / Váy</p>
        </div>
        <div className="text-center font-normal">
          <img src={ao} alt="" />
          <p className="mt-[34px] text-[30px]">Áo</p>
        </div>
        <div className="text-center font-normal">
          <img src={quan} alt="" />
          <p className="mt-[34px] text-[30px]">Quần</p>
        </div>
        <div className="text-center font-normal">
          <img src={chanVay} alt="" />
          <p className="mt-[34px] text-[30px]">Chân váy</p>
        </div>
      </div>
      <div className=" mb-[33px] mx-[100px]">
        <div className="mb-[39px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="uppercase text-[50px] text-black font-semibold">
                Flash sale
              </h2>
            </div>
            <div>
              <span className="hover:underline text-[#FF5959] font-bold text-[24px]">
                Xem tất cả &gt;
              </span>
            </div>
          </div>
          <div className="flex flex-nowrap justify-between">
            <Product
              image={img1}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img3}
              price={"348,000 đ"}
              rating={5}
              title={"Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên"}
            />
            <Product
              image={img2}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img4}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
          </div>
        </div>
        <div className="mb-[39px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="uppercase text-[50px] text-black font-semibold">
                Mới về
              </h2>
            </div>
            <div>
              <span className="hover:underline text-[#FF5959] font-bold text-[24px]">
                Xem tất cả &gt;
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-[37px]">
            <Product
              image={img1}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img2}
              price={"348,000 đ"}
              rating={5}
              title={"Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên"}
            />
            <Product
              image={img1}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img4}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img3}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img1}
              price={"348,000 đ"}
              rating={5}
              title={"Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên"}
            />
            <Product
              image={img2}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img4}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="uppercase text-[50px] text-black font-semibold">
                Best seller
              </h2>
            </div>
            <div>
              <span className="hover:underline text-[#FF5959] font-bold text-[24px]">
                Xem tất cả &gt;
              </span>
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-y-[37px]">
            <Product
              image={img4}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img3}
              price={"348,000 đ"}
              rating={5}
              title={"Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên"}
            />
            <Product
              image={img1}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img2}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img3}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img1}
              price={"348,000 đ"}
              rating={5}
              title={"Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên"}
            />
            <Product
              image={img4}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
            <Product
              image={img2}
              price={"348,000 đ"}
              rating={5}
              title={"Áo ren 2 dây croptop phối viền đính nơ"}
            />
          </div>
        </div>
      </div>
      <div>
        <img src={footer} className="w-full" alt="" />
      </div>
    </div>
  );
}

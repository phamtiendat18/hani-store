import React, { useEffect, useState } from "react";
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
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
  const [time, setTime] = useState(3600);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return (
      <div className="flex gap-[5px]">
        <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FF5959] text-white font-semibold">
          {String(h).padStart(2, "0")}
        </div>
        :
        <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FF5959] text-white font-semibold">
          {String(m).padStart(2, "0")}
        </div>
        :
        <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FF5959] text-white font-semibold">
          {String(s).padStart(2, "0")}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header page={"home"} />
      <Carousel autoplay dotPosition="bottom" style={{ marginTop: "0" }}>
        <div className="w-full">
          <img src={banner1} className="w-full h-[480px] object-cover" alt="" />
        </div>
        <div className="w-full">
          <img src={banner2} className="w-full h-[480px] object-cover" alt="" />
        </div>
        <div className="w-full">
          <img src={banner3} className="w-full h-[480px] object-cover" alt="" />
        </div>
        <div className="w-full">
          <img src={banner4} className="w-full h-[480px] object-cover" alt="" />
        </div>
        <div className="w-full">
          <img src={banner5} className="w-full h-[480px] object-cover" alt="" />
        </div>
      </Carousel>
      <div className="mx-[181px] flex justify-between px-[70px] py-[26px] shadow-xl rounded-[50px] mt-[40px] border border-[#D7D2D2] mb-[41px]">
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
      <div className=" mb-[33px] mx-[100px]">
        <div className="mb-[39px]">
          <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-[10px]">
              <h2 className="uppercase text-[24px] text-black font-semibold">
                Flash sale
              </h2>
              <div>{formatTime(time)}</div>
            </div>
            <div>
              <span className="hover:underline text-[#FF5959] font-bold text-[18px]">
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
          <div className="flex justify-between items-center mb-[10px]">
            <div className="">
              <h2 className="uppercase text-[24px] text-black font-semibold">
                Mới về
              </h2>
            </div>
            <div>
              <span className="hover:underline text-[#FF5959] font-bold text-[18px]">
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
          <div className="flex justify-between items-center mb-[10px]">
            <div className="">
              <h2 className="uppercase text-[24px] text-black font-semibold">
                Bán chạy
              </h2>
            </div>
            <div>
              <span className="hover:underline text-[#FF5959] font-bold text-[18px]">
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
      <Footer />
    </div>
  );
}

import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import footer from "../assets/images/footer.png";

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
  {
    image: img3,
    price: "348,000 đ",
    title: "Quần ống suông lưng cao dây kéo sau",
  },
  {
    image: img4,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
  },
  {
    image: img4,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Quần ống suông lưng cao dây kéo sau",
  },
  {
    image: img2,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img3,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
  },
  {
    image: img4,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img3,
    price: "348,000 đ",
    title: "Quần ống suông lưng cao dây kéo sau",
  },
  {
    image: img2,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Quần ống suông lưng cao dây kéo sau",
  },
  {
    image: img2,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img3,
    price: "348,000 đ",
    title: "Đầm midi 2 dây nhún tùng phối ren ngực đính nơ 2 bên",
  },
  {
    image: img1,
    price: "348,000 đ",
    title: "Áo sheer tay dài phối viền bèo thắt nơ cổ ",
  },
];

export default function Products(props) {
  return (
    <div>
      <Header {...props} />
      <div className="mx-[100px]">
        <div className="mb-[39px]">
          <div className="flex flex-wrap justify-between gap-y-[37px]">
            {products.map((item) => (
              <Product {...item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src={footer} className="w-full" alt="" />
      </div>
    </div>
  );
}

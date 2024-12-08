import * as React from "react";
import ArticleImage from "../components/ArticleImage";
import ArticleContents from "../components/ArticleContent";
import ArticleStep from "../components/ArticleStep";
import news1 from "../assets/images/news1.png"
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

const steps = [
  {
    title: "Cách 1: Xắn tay áo vest kiểu đơn giản",
    steps: [
      "Nàng gấp tay áo một khoảng dài qua khỏi khuỷu tay để tạo thành nếp gấp",
      "Sau đó lại tiếp tục gấp thêm một lần nữa với độ dài bằng 1/2 nếp gấp ở bước 1",
      "Cuối cùng nàng gấp ngược phần tay áo vest lại là hoàn thành"
    ]
  },
  {
    title: "Cách 2: Xắn tay áo vest với dây chun",
    steps: [
      "Nàng lòng dây chun vào phần ống tay áo",
      "Từ phần khuỷu tay, nàng bắt đầu kéo tay áo lên rồi điều chỉnh là sao để áo vest không bị nếp gấp và gọn gàng nhất"
    ]
  },
  {
    title: "Cách 3: Xắn tay áo vest trang trọng",
    steps: [
      "Nàng gấp nhẹ phần gấu tay áo lên khoảng 3 đến 5cm và để lộ phần áo sơ mi ra bên ngoài,",
      "Tiến hành gập phần áo sơ mi vào và chồng lên nếp gấp của áo vest",
      "Giữa cổ tay nàng gập chiếc áo lại và kéo lên hướng trên, sau đó điều chỉnh tay áo trở nên gọn gàng nhất"
    ]
  }
];

function NewsDetail() {
  return (
    <div>
      <Header />
      <div className="mt-[30px] mx-[100px]">
        <span className="mr-[8px] font-semibold">Trang chủ</span>&gt;<span className="mx-[8px] font-semibold">Blog</span>&gt;<span className="mx-[8px]">Mách nàng cách xắn tay áo</span>
      </div>
      <div className="flex flex-col items-center text-base rounded-none mt-[30px]">
        <div className="text-lg font-semibold text-center text-black">
          Mách Nàng Cách Xắn Tay Áo Vest
          <br /> Chuẩn Đẹp Và Thời Thượng
        </div>

        <ArticleImage
          src={news1}
          alt="Hướng dẫn xắn tay áo vest"
          className="mt-3 w-[496px]"
        />

        <div className="self-stretch mt-5 text-black mx-[100px] mb-[20px]">
          Áo vest là item được rất nhiều chị đẹp chọn diện trong môi trường công
          sở. Tuy nhiên thay vì mặc áo vest theo cách truyền thống thì nhiều nàng
          muốn phá cách để có được một diện mạo trông có gu hơn bằng cách xắn tay
          áo vest. Nó giúp nàng trông thật phong cách và thời thượng hơn. Vậy làm
          thế nào để xắn tay áo vest đẹp và gọn gàng thì hãy để Hani gợi ý cho
          nàng nhé.
          <br />
        </div>

        <ArticleContents />

        <div className="self-start mt-5 text-black max-md:max-w-full mx-[100px]">
          3 cách xắn tay áo vest, áo blazer đẹp cho nàng
        </div>

        {steps.map((stepGroup, index) => (
          <ArticleStep
            key={index}
            title={stepGroup.title}
            steps={stepGroup.steps}
            image={`/src/assets/images/newsDetail${index + 1}.png`}
            imageAlt={`Minh họa ${stepGroup.title}`}
          />
        ))}

        <div className="mt-12 mb-[20px] text-lg text-black max-md:mt-10">
          Có thể bạn sẽ quan tâm
        </div>
        <div className="w-full px-[100px]">
          <div className="flex justify-between mb-[34px] w-full">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsDetail;
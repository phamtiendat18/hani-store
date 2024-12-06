import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsFirst from "../components/NewsFirst";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import news4 from "../assets/images/news4.png";
import newsSpecial from "../assets/images/newsSpecial.png";

import News from "../components/News";

const newsArr = [
  {
    src: news2,
    title: "Hướng dẫn cách thắt dây quần đơn giản mà đẹp",
    des: "Tuy là item thời trang phổ biến nhưng các nàng vẫn có thể biến hóa chiếc quần thắt dây trở nên thú vị và phong cách hơn. Dưới đây, Hani sẽ mách bạn cách thắt dây quần đẹp và sành điệu hơn nhé.",
  },
  {
    src: news3,
    title: "Hướng Dẫn Nàng Cách Giặt Vải Lụa Tơ Tằm Đơn...",
    des: "Lụa tơ tằm là một loại vải tự nhiên, làm tôn lên những nét đẹp duyên dáng cho người diện. Lụa tơ tằm là loại vải mỏng, có bề mặt mịn màng nên đòi hỏi sự cẩn trọng trong cách bảo quản cũng như sử dụng. Đây là loại sợi tơ mảnh nhất, vì vậy khi giặt nàng...",
  },
  {
    src: news4,
    title: "Thời Trang Vintage: Quay Về Quá Khứ Với Phong...",
    des: "Các thiết kế thời trang vintage mang đến sự lôi cuốn, quyến rũ và cá tính, không chỉ thể hiện gu thẩm mỹ của người mặc mà còn thể hiện sự độc đáo, khác biệt và cá tính của mỗi cá nhân. Những cô nàng theo đuổi vintage style mà không biết nên mặc gì thì hãy để Hani gợi ý cho bạn nhé.",
  },
];

export default function Blog() {
  return (
    <div>
      <Header page={"blog"} />
      <div className="mx-[100px] mt-[30px] mb-[47px]">
        <h2 className="font-semibold text-[18px] mb-[25px]">
          Góc tư vấn mặc đẹp
        </h2>
        <NewsFirst
          src={news1}
          title={"Mách nàng cách sắn tay áo  Vest chuẩn, đẹp và thời thượng"}
          des={
            "Áo vest là item được rất nhiều chị đẹp chọn diện trong môi trường công sở. Tuy nhiên thay vì mặc áo vest theo cách truyền thống thì nhiều nàng muốn phá cách để có được một diện mạo trông có gu hơn bằng cách xắn tay áo vest. Nó giúp nàng trông thật phong cách và thời thượng hơn. Vậy làm thế nào để xắn tay áo vest đẹp và gọn gàng thì hãy để Hani gợi ý cho nàng nhé."
          }
        />
        <div className="flex justify-between mb-[30px]">
          {newsArr.map((news) => (
            <News {...news} />
          ))}
        </div>
        <h2 className="font-semibold text-[18px] mb-[18px]">
          Tin tức nhà Hani Store
        </h2>
        <div>
          <img src={newsSpecial} className="w-full" alt="" />
        </div>
        <div className="font-semibold text-[18px] mt-[22px] mb-[14px] text-center">
          DEAL 20/10: GIẢM ĐẾN 50% | HOÀN TIỀN ĐẾN 399K
        </div>
        <div className="text-center mb-[30px]">
          Chúc mừng Ngày Phụ Nữ Việt Nam 20/10, Hani dành tặng Nàng vô vàn ưu
          đãi vừa tinh tế lại vừa kinh tế:
        </div>
        <div className="flex justify-between mb-[30px]">
          {newsArr.map((news) => (
            <News {...news} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

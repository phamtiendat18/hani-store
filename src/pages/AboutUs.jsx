import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";
export default function AboutUs() {
  return (
    <div>
      <Header page={"about-us"} />
      <div className="mx-[100px] mb-[57px]">
        <h2 className="text-[18px] font-semibold mb-[11px] text-center mt-[23px]">
          Về chúng tôi
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[18px] font-semibold mb-[11px]">
              Hani xin chào!
            </h2>
            <p className="max-w-[640px]">
              Chào mừng đến với [Tên Website] - thế giới thời trang dành riêng
              cho phái đẹp! Tại đây, bạn sẽ tìm thấy những thiết kế mới nhất, từ
              thanh lịch đến cá tính, phù hợp với mọi phong cách và xu hướng.
              Khám phá bộ sưu tập đa dạng, trải nghiệm mua sắm tiện lợi và đẳng
              cấp. [Tên Website] không chỉ là nơi để mua sắm, mà còn là không
              gian giúp bạn tỏa sáng với gu thời trang riêng biệt
            </p>
          </div>
          <div>
            <img src={about1} className="w-[358px]" alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src={about2} alt="" />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold mb-[11px]">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="max-w-[687px]">
              Sứ mệnh của chúng tôi là mang đến cho phái đẹp những trải nghiệm
              mua sắm trực tuyến hiện đại và tinh tế, kết nối mọi người với
              những xu hướng thời trang hàng đầu. Chúng tôi cam kết cung cấp các
              sản phẩm chất lượng, phong cách đa dạng, giúp mỗi người phụ nữ tự
              tin thể hiện cá tính và phong cách riêng. Với tất cả sự tận tâm
              trong dịch vụ và chất lượng sản phẩm
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[18px] font-semibold mb-[11px]">Phương châm</h2>
            <p className="max-w-[600px]">
              Phương châm của Hani Store là "Chất lượng, Phong cách và Tận tâm"
              - mang đến những sản phẩm tốt nhất, phù hợp xu hướng và phục vụ
              khách hàng chu đáo, giúp phái đẹp tự tin tỏa sáng theo cách riêng
              của mình.
            </p>
          </div>
          <div>
            <img src={about3} alt="" />
          </div>
        </div>
      </div>
      <div className="text-center mb-[17px] font-semibold text-[18px]">
        “Chúc các bạn có những trải nghiệm mua sắm tuyệt vời và vui vẻ”
      </div>
      <Footer />
    </div>
  );
}

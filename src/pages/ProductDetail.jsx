import React, { useState } from "react";
import QuantitySelector from "../components/QuantitySelecter";
import Header from "../components/Header";
import sp1 from "../assets/images/sp1.png";
import ship from "../assets/images/ship.png";
import cmt1 from "../assets/images/cmt1.png";
import cmt2 from "../assets/images/cmt2.png";
import cmt3 from "../assets/images/cmt3.png";
import paginate from "../assets/images/paginate.png";
import heart from "../assets/images/heart.png";
import like from "../assets/images/like.png";
import chat from "../assets/images/chat.png";
import messages from "../assets/images/messages.png";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import { Modal, notification } from "antd";
import Product from "../components/Product";
import Footer from "../components/Footer";

export default function ProductDetail({ isLike }) {
  const [isFavorite, setIsFavorite] = useState(isLike);
  const [size, setSize] = useState(false);
  const [color, setColor] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="mx-[100px] mt-[15px]">
        <div className="flex relative">
          <div className="w-[619px] h-[539px]">
            <img src={sp1} alt="" />
          </div>
          <div className="pl-[21px] flex flex-col gap-[25px]">
            <div>Áo ren 2 dây croptop phối viền đính nơ</div>
            <button className={`border border-[#FF5959] rounded-[40px] w-[90px] h-[40px] flex justify-center items-center ${color && "bg-[#FF5959] text-white"}`} onClick={() => setColor(!color)}>
              Kem 01
            </button>
            <div className="flex gap-[30px]">
              <div className={`border border-[#FF5959] rounded-[40px] w-[55px] h-[40px] flex justify-center items-center ${size === "s" && "bg-[#FF5959] text-white"}`} onClick={() => setSize("s")}>
                S
              </div>
              <div className={`border border-[#FF5959] rounded-[40px] w-[55px] h-[40px] flex justify-center items-center ${size === "m" && "bg-[#FF5959] text-white"}`} onClick={() => setSize("m")}>
                M
              </div>
              <div className={`border border-[#FF5959] rounded-[40px] w-[55px] h-[40px] flex justify-center items-center ${size === "l" && "bg-[#FF5959] text-white"}`} onClick={() => setSize("l")}>
                L
              </div>
              <div className={`border border-[#FF5959] rounded-[40px] w-[55px] h-[40px] flex justify-center items-center ${size === "xl" && "bg-[#FF5959] text-white"}`} onClick={() => setSize("xl")}>
                XL
              </div>
            </div>
            <div className="font-semibold text-[#E20000]">300,000 đ</div>
            <div className="flex items-center gap-x-[10px]">
              Số lượng: <QuantitySelector />
            </div>
            <div className="flex items-center">
              <span className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                    fill="gold"
                  />
                </svg>
              </span>
              <span className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                    fill="gold"
                  />
                </svg>
              </span>
              <span className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                    fill="gold"
                  />
                </svg>
              </span>
              <span className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                    fill="gold"
                  />
                </svg>
              </span>
              <span className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                    fill="gold"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">5/5</span>
            </div>
            <div>
              <img src={ship} alt="" />
            </div>
            <div className="flex pl-[22px] gap-x-[10px]">
              <button
                className="border border-[#FF5959] text-[#FF5959] w-[200px] h-[45px] rounded-[99px]"
                onClick={() =>
                  notification.success({ message: "Thêm đơn hàng thành công!" })
                }
              >
                Thêm vào giỏ hàng
              </button>
              <button className="border border-[#FF5959] text-white bg-[#FF5959] w-[200px] h-[45px] rounded-[99px]">
                {" "}
                Mua ngay
              </button>
            </div>
          </div>
          <img
            src={isFavorite ? like : heart}
            className="absolute right-[5px] w-[25px]"
            alt=""
            onClick={() => setIsFavorite(!isFavorite)}
          />
          <img
            src={messages}
            className="absolute right-[-40px] bottom-[-40px]"
            alt=""
            onClick={() => setOpen(true)}
          />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold mt-[18px] mb-[10px]">
            Mô tả sản phẩm
          </h2>
          <p className="leading-[28px]">
            - Áo ren 2 dây croptop phối viền đính nơ.
            <br /> - Chất liệu ren lưới hoa đứng form, sang trọng có độ bền cao
            và dày dặn.
            <br /> - Phù hợp mặc đi chơi, dạo phố, cà phê cuối tuần cùng bạn bè.
            <br />
            Thông số sản phẩm:
            <br /> - Dài áo giữa thân trước (không tính bèo): 20 - 21 - 22 - 23
            <br />- Rộng ngực: 74 - 78 - 82 - 86  <br />- Rộng chân ngực: 64 -
            68 - 72 - 76 <br />- Rộng lai: 60.5 - 64.5 - 68.5 - 72.5
          </p>
        </div>
        <div className="my-[30px] px-[50px] flex justify-between">
          <div className="bg-[#FFEAEA] w-[300px] h-[80px] flex flex-col justify-center items-center rounded-[30px]">
            <div className="text-center font-semibold">Chất liệu</div>
            <div className="text-center">Ren lưới hoa</div>
          </div>
          <div className="bg-[#FFEAEA] w-[300px] h-[80px] flex flex-col justify-center items-center rounded-[30px]">
            <div className="text-center font-semibold">Đặc tính</div>
            <div className="text-center">Dày dặn, độ bền cao, sang trọng</div>
          </div>
          <div className="bg-[#FFEAEA] w-[300px] h-[80px] flex flex-col justify-center items-center rounded-[30px]">
            <div className="text-center font-semibold">Form</div>
            <div className="text-center">Ôm</div>
          </div>
        </div>
        <div>
          <h2 className="text-[18px] font-semibold mt-[30px] mb-[10px]">
            Hướng dẫn bảo quản
          </h2>
          <p className="leading-[28px]">
            - Giặt tay để tránh bay màu hoặc xù lông, ủi nhiệt độ bình thường.
            <br />
            - Không vắt hoặc xoắn mạnh vì điều này có thể gây ra các nếp nhăn và
            ảnh hưởng đến độ bền, cấu trúc của vải.
            <br />
            - Phơi, ủi mặt trái sản phẩm.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[18px] text-center mt-[50px]">
            Đánh giá sản phẩm
          </h2>
          <div>
            <div>
              <img src={cmt1} alt="" />
            </div>
            <div>
              <img src={cmt2} alt="" />
            </div>
            <div>
              <img src={cmt3} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FF5959] rounded-[99px] text-white">
                1
              </div>
              <img src={paginate} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-[18px] text-center mt-[40px] mb-[20px]">
            Sản phẩm khác
          </h2>
          <div className="flex justify-between mb-[23px]">
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
        <Modal open={open} onCancel={() => setOpen(false)} footer={[]} closable={false} className="custom-modal">
          <img src={chat} alt="" />
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import call from "../assets/images/call.png";
import { Button } from "antd";
export default function HelpCenter() {
  return (
    <div>
      <Header page={"help"} />
      <div className="px-[100px] py-[14px]">
        <h2 className="text-[20px] font-semibold text-[#FF5959]">
          Trung tâm trợ giúp
        </h2>
      </div>
      <div className="pt-[21px] pb-[82px] bg-[#FFEAEA]">
        <h2 className="text-[18px] font-semibold text-center mb-[20px]">
          Xin chào, Hani có thể giúp gì cho bạn ?
        </h2>
        <div class="w-full max-w-sm min-w-[650px] mx-auto">
          <div class="relative">
            <input
              type="text"
              placeholder="Nhập từ khóa hoặc nội dung cần tìm"
              class="w-full h-[60px] bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-[#FF5959] rounded-[99px] py-2 px-10 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />

            <button
              class=" text-center absolute w-[120px] text-[20px] h-[52px] top-1 right-1 rounded-[99px] bg-[#FF5959]  text-center border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
      <div className="px-[100px] pt-[14px]">
        <h2 className="text-[18px] font-semibold mb-[22px]">
          Câu hỏi thường gặp
        </h2>
        <div className="flex flex-col gap-[34px]">
          <div>[ Cảnh báo lừa đảo ] Mua sắm an toàn cùng Hani ?</div>
          <div>
            [ Tài khoản Hani ] Tôi không thể đặt hàng/ đăng ký/ đăng nhập tài
            khoản do số điện thoại đã tồn tại ?
          </div>
          <div>
            [ Cảnh báo lừa đảo ] Làm thế nào để bảo vệ bản thân khỏi những kẻ
            lừa đảo ?
          </div>
          <div>
            [ Thành viên mới ] Tại sao tôi không thể sử dụng số điện thoại để để
            đăng ký tài khoản ?
          </div>
          <div>
            [ Tài khoản ] Cách thêm địa chỉ/ email liên kết với tài khoản Hani ?
          </div>
          <div>
            [ Thông tin vận chuyển ] Làm sao để liên hệ Đơn vị vận chuyển/ Tra
            cứu thông tin vận chuyển ?
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-[18px] font-semibold text-center mt-[22px]">
          Bạn muốn thêm thông tin gì không ?
        </h2>
        <button className="flex items-center justify-center border border-[#FF5959] rounded-[99px] w-[200px] h-[50px] mx-auto mt-[22px] mb-[30px]">
          <img src={call} alt="" />{" "}
          <span className="text-[18px] font-semibold ml-3">Liên hệ Hani</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

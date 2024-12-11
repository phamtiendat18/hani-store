import { Modal } from "antd";
import React, { useState } from "react";
import VerificationCode from "./VerificationCode";

const Checkout = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="container max-w-6xl bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Thông tin giao hàng */}
        <div>
          <h2 className="text-lg font-bold mb-4">Thông tin giao hàng</h2>
          <div className="space-y-4">
            {/* Tỉnh Thành phố */}
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600">Tỉnh Thành phố</label>
              <input
                type="text"
                defaultValue="Hà Nội"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Quận */}
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600">Quận</label>
              <input
                type="text"
                defaultValue="Hoàng Mai"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Phường */}
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600">Phường</label>
              <input
                type="text"
                defaultValue="Phương Liệt"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Địa chỉ chi tiết */}
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600">Địa chỉ chi tiết</label>
              <input
                type="text"
                defaultValue="96A Định Công"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Tên người nhận */}
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600">Tên người nhận</label>
              <input
                type="text"
                defaultValue="Trần Thị Hạnh"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Số điện thoại */}
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600">Số điện thoại</label>
              <input
                type="text"
                defaultValue="0869452190"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>

        {/* Thông tin đơn hàng */}
        <div>
          <h2 className="text-lg font-bold mb-4">Thông tin đơn hàng</h2>
          <div className="space-y-4">
            {/* Sản phẩm */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-800">
                  Áo ren 2 dây croptop phối viền đính nơ
                </h3>
                <p className="text-sm text-gray-600">Kern/S</p>
                <p className="text-sm font-bold text-gray-800">318,000 đ</p>
              </div>
            </div>

            {/* Tổng hợp đơn hàng */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Số lượng</span>
                <span>1</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tổng tiền hàng</span>
                <span>318,000 đ</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Phí vận chuyển</span>
                <span>30,000 đ</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ưu đãi vận chuyển</span>
                <span>-20,000 đ</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Hani Voucher</span>
                <span>-20,000 đ</span>
              </div>
              <div className="border-t border-gray-300 my-2"></div>
              <div className="flex justify-between text-base font-bold text-gray-800">
                <span>Tổng thanh toán</span>
                <span className="text-red-500">308,000 đ</span>
              </div>
            </div>

            {/* Chọn phương thức thanh toán */}
            <div>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>Chọn phương thức thanh toán</option>
                <option>Thanh toán khi nhận hàng</option>
                <option>Chuyển khoản ngân hàng</option>
              </select>
            </div>
          </div>
          <button className="mt-6 bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition-all w-full" onClick={() => setOpen(true)}>
            Đặt hàng
          </button>
        </div>
      </div>
      <Modal open={open}>
        <VerificationCode />
      </Modal>
    </div>
  );
};

export default Checkout;

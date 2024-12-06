import { useState } from "react";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import trash from "../assets/images/trash.png";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button, Popconfirm, Table } from "antd";
import Footer from "../components/Footer";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Áo ren 2 dây croptop phối viền đính nơ",
      image: img1,
      type: "Kem 01",
      price: "318,000",
      oldPrice: 250000,
      size: "S",
      quantity: 1,
    },
    {
      id: 2,
      name: "Đầm 2 dây in hoa tùng xéo phối bèo",
      image: img3,
      type: "Kem 01",
      price: "199,000",
      oldPrice: 250000,
      size: "S",
      quantity: 1,
    },
    {
      id: 3,
      name: "Đầm mini tay con cổ vuông phối ren ngực đính nơ",
      image: img4,
      type: "Kem 01",
      price: "252,000",
      oldPrice: 250000,
      size: "S",
      quantity: 1,
    },
  ]);

  const navigation = useNavigate();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Xử lý tăng/giảm số lượng
  const handleQuantityChange = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Xử lý xóa sản phẩm
  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setSelectedRowKeys((prev) => prev.filter((key) => key !== id)); // Xóa khỏi danh sách được chọn
  };

  const totalPrice = selectedRowKeys.reduce((total, id) => {
    const product = cart.find((item) => item.id === id);
    return total + (product?.price || 0) * (product?.quantity || 1);
  }, 0);

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex ">
          <img
            src={record.image}
            alt={text}
            className="w-[159px] h-[253px] object-cover rounded"
          />
          <div className="pl-[23px]">
            <div className=" text-left mb-[32px]">{text}</div>
            <div className="text-left mb-[20px] text-[#E20000]">
              {record?.price} đ
            </div>
            <div className="text-left mb-[20px] w-[90px] h-[40px] border border-[#FF5959] rounded-[99px] flex justify-center items-center">
              {record?.type}
            </div>
            <div className="text-left w-[55px] h-[40px] border border-[#FF5959] rounded-[99px] flex justify-center items-center">
              {record?.size}
            </div>
          </div>
        </div>
      ),
      align: "center",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleQuantityChange(record.id, -1)}
            className="mr-2 rounded-[5px] flex item-center justify-center leading-[15px]"
            style={{
              background: "#D9D9D9",
              border: "1px solid #D9D9D9",
              color: "#FF5959",
              width: "20px",
              height: "20px",
              fontSize: "18px",
            }}
          >
            -
          </button>
          <span className="text-[18px] w-10 text-center">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(record.id, 1)}
            className="ml-2 rounded-[5px] flex item-center justify-center leading-[15px]"
            style={{
              background: "#FF5959",
              border: "1px solid #FF5959",
              color: "white",
              width: "20px",
              height: "20px",
              fontSize: "18px",
            }}
          >
            +
          </button>
        </div>
      ),
      align: "center",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Bạn có chắc muốn xóa sản phẩm này?"
          onConfirm={() => handleDelete(record.id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <button>
            <img src={trash} className="w-[26px]" alt="" />
          </button>
        </Popconfirm>
      ),
      align: "center",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  return (
    <div>
      <Header />
      <div className=" min-h-screen mb-[40px] mx-[100px]">
        <div className="w-fit flex flex-col items-center mb-[45px] mt-[34px] m-auto">
          <h2 className="uppercase text-[#E45C81] font-medium text-[32px] mb-[10px]">
            Giỏ hàng
          </h2>
        </div>
        <div className="flex justify-between">
          <Table
            rowKey="id"
            dataSource={cart}
            columns={columns}
            rowSelection={rowSelection}
            pagination={false}
            className="custom-table"
            style={{ width: "800px" }}
          />
          {selectedRowKeys.length ? (
            <div>
              <div className="flex flex-col items-center justify-center w-[330px] p-4">
                <div className="bg-white rounded-[30px] shadow-md p-6 bg-[#F1EFEF] w-full max-w-md">
                  <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
                    Đơn hàng
                  </h2>
                  <div className="px-2 border-t-2 border-[#626161] border-b-2 flex flex-col gap-[15px] py-3 mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Số lượng</span>
                      <div className="w-[80px] flex justify-between items-center">
                        <span>:</span>1
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Tổng tiền hàng</span>
                      <div className="w-[80px] flex justify-between items-center">
                        <span>:</span>318,000 đ
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Phí vận chuyển</span>
                      <div className="w-[80px] flex justify-between items-center">
                        <span>:</span>30,000 đ
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Ưu đãi vận chuyển</span>
                      <div className="w-[80px] flex justify-between items-center">
                        <span>:</span>-20,000 đ
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Hani Voucher</span>
                      <div className="w-[80px] flex justify-between items-center">
                        <span>:</span>-20,000 đ
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-base text-gray-800">
                    <span>Tổng thanh toán</span>
                    <span className="text-[#FF5959]">308,000 đ</span>
                  </div>
                </div>
                <button className=" w-full mt-6 bg-[#FF5959] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition-all" onClick={() => navigation("/payment")}>
                  Thanh toán
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

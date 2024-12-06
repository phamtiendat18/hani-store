import React from "react";
import AddressInput from "../components/AddressInput";
import Footer from "../components/Footer";
import OrderItem from "../components/OrderItem";
import LocationSelect from "../components/LocationSelect";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

function CheckoutPage() {
  const navigation = useNavigate();
  const locationData = {
    city: {
      label: "Tỉnh Thành phố",
      value: "Hà Nội",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/123ecf9a98ed5536c5ed47adecbd17d80aab8ba5bea49e2384470020544dafc9?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    },
    district: {
      label: "Quận",
      value: "Hoàng Mai",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d94f2b2cd702802825d95a6f5f2790ba3c37db69a694922d7cee3c209c262eef?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    },
    ward: {
      label: "Phường",
      value: "Phương Liệt",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5997a0576848d10eaf8b723d6f263d613fa801f3ccc5ec92e3659f49f345d1c?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    },
  };

  const addressInputs = [
    {
      label: "Đia chỉ chi tiết",
      value: "96A Định Công",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a272106d72cb32c9682abc5ed7bb434ca82bbd6112028a2de3d35d23d49e620c?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    },
    {
      label: "Tên người nhận",
      value: "Trần Thị Hạnh",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5146715b6c54b8301b6bb314b33d7702828c6a3a50c5721ce4a07ca984bf0671?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    },
    {
      label: "Số điện thoại",
      value: "0869452190",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e93ef770a6699db520888162506e8380c4910e25d78f73e2b04798a72744f7d9?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pt-5 bg-white">
      <div className="ml-12 w-full max-w-[1265px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-6 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1159196da4dec0a7c06f72e1376bc22cdb3880969e2af3953c60b13293a4881?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
                  alt="Logo 1"
                  className="object-contain shrink-0 my-auto aspect-square w-[30px]"
                  onClick={() => navigation(-1)}
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/993e8851b4bd50be9efda255134e5ead35646e6ac532c9bd8a12357a5fcdf768?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
                  alt="Logo 2"
                  className="object-contain shrink-0 aspect-[0.53] w-[60px]"
                />
              </div>
              <div className="flex flex-col items-start pl-14 mt-8 w-full max-md:pl-5 max-md:max-w-full">
                <div className="text-lg font-semibold text-black mb-[34px]">
                  Thông tin giao hàng
                </div>
                <LocationSelect {...locationData.city} />
                <div className="flex flex-wrap gap-10 self-stretch mt-6">
                  <div className="flex-1 grow shrink-0 basis-0 w-fit">
                    <LocationSelect {...locationData.district} />
                  </div>
                  <div className="flex-1 grow shrink-0 basis-0 w-fit">
                    <LocationSelect {...locationData.ward} />
                  </div>
                </div>
                {addressInputs.map((input, index) => (
                  <React.Fragment key={index}>
                    <div className="mt-6 text-lg text-black">{input.label}</div>
                    <AddressInput {...input} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-36 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-lg font-semibold text-black">
                Thông tin đơn hàng
              </div>
              <div className="flex flex-col items-end pl-2.5 mt-3.5 w-full max-md:max-w-full">
                <div className="self-start max-w-full w-[429px]">
                  <OrderItem
                    name="Áo ren 2 dây croptop phối viền đính nơ"
                    variant="Kem/ S"
                    price="318,000 đ"
                  />
                </div>
                <div className="flex gap-5 justify-between mt-10 mr-10 max-w-full text-base text-black w-[335px] max-md:mr-2.5">
                  <div className="flex flex-col items-start">
                    <div>Số lượng:</div>
                    <div className="mt-8">Tổng tiền hàng: </div>
                    <div className="mt-8">Phí vận chuyển:</div>
                    <div className="self-stretch mt-8">Ưu đãi vận chuyển: </div>
                    <div className="mt-8">Hani Voucher:</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="self-end">1</div>
                    <div className="flex flex-col px-1 mt-8">
                      <div>318,000 đ</div>
                      <div className="self-start mt-8">30,000 đ</div>
                    </div>
                    <div className="mt-8">- 20,000 đ</div>
                    <div className="mt-8">- 20,000 đ</div>
                  </div>
                </div>
                <div className="flex shrink-0 mt-4 max-w-full bg-neutral-400 h-[3px] w-[400px]" />
                <div className="flex gap-5 justify-between mt-4 mr-7 max-w-full text-lg font-semibold w-[345px] max-md:mr-2.5">
                  <div className="text-black">Tổng thanh toán</div>
                  <div className="text-[#FF5959]">308,000 đ</div>
                </div>
                <div className="flex shrink-0 mt-6 mr-11 max-w-full h-0 bg-white rounded-3xl w-[285px] max-md:mr-2.5" />
                <div>
                  <select className="flex gap-2 py-4 pr-3 pl-1.5 mr-11 text-base text-black bg-white rounded-3xl border-2 border-[#FF5959] border-solid max-md:mr-2.5">
                    <option>Chọn phương thức thanh toán</option>
                    <option>Thanh toán khi nhận hàng</option>
                    <option>Chuyển khoản ngân hàng</option>
                  </select>
                </div>
                <div>
                  <button
                    className="overflow-hidden gap-2 self-center px-4 py-3 py-3.5 mt-5 mr-24 mb-8 max-w-full text-lg text-center text-white bg-[#FF5959] min-h-[50px] rounded-[200px] w-[180px]"
                    onClick={() => {
                      notification.success({ message: "Đặt hàng thành công" });
                      navigation("/");
                    }}
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;

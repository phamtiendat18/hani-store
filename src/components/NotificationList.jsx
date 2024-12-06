import * as React from "react";
import NotificationCard from "./NotificationCard";
import noti1 from "../assets/images/noti1.png";
import noti2 from "../assets/images/noti2.png";

function NotificationList({ textMenu }) {
  const sales = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e9107db97c7f052cc5b8dd2ed0f0eec9435fba9e1ca78f0ddf16a939040bc3?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
      title: '"Black Friday " ngập tràn ưu đãi',
      description:
        "Ngày 15-10 ngập tràn ưu đãi\nĐón chào những deal giảm giá siêu hời",
      timestamp: "Thời gian 08 : 12 ngày 10-10-2024",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c4af63edd8bfd4a52225e80c2726046304d554f945551923f0e3617249dc55f9?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
      title:
        "Chương trình sale đầu tháng\nChào mứng tháng mới, với hàng ngàn ưu đãi",
      description:
        "Ngày hội săn sale đôi 10/10. Hani xin dành tặng bạn ngàn voucher và khuyến mãi đặc biệt",
      timestamp: "Thời gian 08 : 12 ngày 10-10-2024",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e9107db97c7f052cc5b8dd2ed0f0eec9435fba9e1ca78f0ddf16a939040bc3?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
      title: "Săn sale ngày đôi, lấy ngay deal hời",
      description:
        "Ngày hội săn sale đôi 10/10. Hani xin dành tặng bạn ngàn voucher và khuyến mãi đặc biệt  ",
      timestamp: "Thời gian 08 : 12 ngày 10-10-2024",
    },
    // Add more notifications as needed
  ];
  const orders = [
    {
      image: noti1,
      title: "Đơn hàng đã được xác nhận",
      description: "Kiện hàng HaNi01234567891 của đơn hàng 2410080JNR2H8P",
      timestamp: "Thời gian 08 : 12 ngày 10-10-2024",
    },
    {
      image: noti2,
      title: "Đơn hàng đã được xác nhận",
      description: "Kiện hàng HaNi01234567891 của đơn hàng 2410080JNR2H8P",
      timestamp: "Thời gian 08 : 12 ngày 10-10-2024",
    },
  ];
  const notifications =
    textMenu === "Đơn hàng"
      ? orders
      : textMenu === "Khuyến mãi"
      ? sales
      : [...orders, ...sales];

  return (
    <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full mb-10">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="self-start ml-64 text-lg font-semibold text-black max-md:ml-2.5">
          Thông báo
        </div>
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            image={notification.image}
            title={notification.title}
            description={notification.description}
            timestamp={notification.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default NotificationList;

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Breadcrumb } from "../components/Breadcrumb";
import React, { useState } from "react";
import Footer from "../components/Footer";
import boxTime from "../assets/images/boxTime.png";
import magicStar from "../assets/images/magicStar.png";
import truckTick from "../assets/images/truckTick.png";
import progress from "../assets/images/progress.png";
import box from "../assets/images/box.png";

const orderStatuses = [
    {
        label: "Chờ xác nhận",
        icon: boxTime,
        quantity: 1,
    },
    {
        label: "Chờ giao hàng",
        icon: box,
        quantity: 0,
    },
    {
        label: "Đang giao hàng",
        icon: truckTick,
        quantity: 2,
    },
    {
        label: "Đánh giá",
        icon: magicStar,
        quantity: 0,
    },
];

const utilities = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9838f8175edd609527824f68204961e4d4ed5da573ccdda6504602e49286146d?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
        label: "ví tiền",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0a822c776901b6c0bab855444645d13d1d76ce6d827cfa8b2079ba8964c75ed?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
        label: "Mua lại",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b58f862a7b8f1e885262c7751c0918bae811843be3f361b1619f8177148ca84?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
        label: "Đã xem gần đây",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac33e47444cc5b1fa6f5a49451b3a728e1d4ac3876e1215479ab12d5644da189?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
        label: "Kho voucher",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b1cad12106b11dd34c0b383185ed19145fa27311a38204c585e028f5604de7c?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61",
        label: "Khách hàng\nthân thiết",
    },
];

export default function Process() {
    const [activeMenuItem, setActiveMenuItem] = useState("orders");
    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };

    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <Header />
            <Breadcrumb />
            <div className="flex mx-[100px]">
                <Sidebar
                    onMenuItemClick={handleMenuItemClick}
                    activeMenuItem={activeMenuItem}
                />
                <div className="flex flex-col items-end self-center pt-12 mt-6 w-full max-md:max-w-full pr-[45px]">
                    <img src={progress} alt="" />
                </div>
            </div>
            <div className="flex shrink-0 self-end mr-36 mt-6 max-w-full rounded-3xl bg-zinc-300 h-[3px] w-[920px] max-md:mr-2.5 mb-[36px]" />
            <Footer />
        </div>
    );
}

import * as React from "react";
import NotificationList from "../components/NotificationList";
import NotifySidebar from "../components/NotifiSidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function Notifications() {
  const [textMenu, setTextMenu] = useState("Tất cả");
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header page={"notify"} />
      <div className="flex flex-col self-center mt-5 w-full max-w-[1240px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <NotifySidebar setTextMenu={setTextMenu} textMenu={textMenu} />
            <NotificationList textMenu={textMenu} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notifications;

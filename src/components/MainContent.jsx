import React from "react";
import ActionButtons from "./ActionButtons";

function MainContent({ user, onImageSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="flex flex-col ml-5 w-[82%]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col mt-9 max-w-full">
          <div className="self-center text-lg font-semibold">
            Thông tin cá nhân
          </div>
          <div className="grid grid-cols-[3fr_1fr] gap-5 mt-5">
            <div className="space-y-6">
              {[
                { label: "Họ và tên:", value: user.name },
                { label: "Email:", value: user.email },
                { label: "Số điện thoại:", value: user.phone },
                { label: "Ngày sinh:", value: user.birthDate },
                { label: "Địa chỉ:", value: user.address },
              ].map((field) => (
                <div
                  key={field.label}
                  className="flex items-center gap-10 text-lg"
                >
                  <span className="font-semibold min-w-[120px]">
                    {field.label}
                  </span>
                  <div className="flex-1 p-2.5 border border-zinc-600 rounded-3xl">
                    {field.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <label className="mt-4 px-4 py-3 border border-rose-500 rounded-[200px] text-rose-500 cursor-pointer hover:bg-rose-50">
                Chọn ảnh
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <ActionButtons />
    </div>
  );
}

export default MainContent;

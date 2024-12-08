import React from "react";

function ActionButtons({ onSave, onCancel }) {
  return (
    <div className="flex gap-5 self-center mt-6 max-w-full w-full ml-[260px]">
      <button
        onClick={onCancel}
        className="px-4 py-3.5 text-main border border-main rounded-[200px] min-w-[150px] "
      >
        Hủy
      </button>
      <button
        onClick={onSave}
        className="px-4 py-3.5 text-white bg-main rounded-[200px] min-w-[150px] "
      >
        Lưu
      </button>
    </div>
  );
}

export default ActionButtons;

import React from "react";

function ActionButtons({ onSave, onCancel }) {
  return (
    <div className="flex gap-5 self-center mt-6 max-w-full w-full ml-[260px]">
      <button
        onClick={onCancel}
        className="px-4 py-3.5 text-rose-500 border border-rose-500 rounded-[200px] min-w-[150px] hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        Hủy
      </button>
      <button
        onClick={onSave}
        className="px-4 py-3.5 text-white bg-rose-500 rounded-[200px] min-w-[150px] hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        Lưu
      </button>
    </div>
  );
}

export default ActionButtons;

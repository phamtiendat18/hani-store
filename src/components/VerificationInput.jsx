import React, { useRef } from "react";

function VerificationInput() {
    const digitBoxes = Array(6).fill(null);
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < digitBoxes.length - 1) {
            inputRefs.current[index + 1]?.focus(); // Focus vào ô tiếp theo
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputRefs.current[index - 1]?.focus(); // Focus lại ô trước nếu xóa
        }
    };

    return (
        <div className="flex px-10 justify-between">
            {digitBoxes.map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    aria-label={`Digit ${index + 1} of verification code`}
                    className="flex shrink-0 bg-white border-solid border-[0.5px] border-zinc-600 h-[55px] w-[45px] justify-center items-center p-4 text-xl font-semibold"
                    tabIndex={index}
                    ref={(el) => (inputRefs.current[index] = el)} // Gán ref cho từng ô input
                    onChange={(e) => handleInputChange(e, index)} // Xử lý khi nhập dữ liệu
                    onKeyDown={(e) => handleKeyDown(e, index)} // Xử lý khi nhấn phím
                />
            ))}
        </div>
    );
}

export default VerificationInput;

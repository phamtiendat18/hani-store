import { notification } from "antd";
import VerificationInput from "./VerificationInput";
import { useNavigate } from "react-router-dom";

function VerificationCode() {
    const navigation = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col w-[400px] max-w-[400px]">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center bg-white rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
                <div className="text-[18px] font-semibold text-black text-center mb-4
                pt-3">
                    Nhập mã xác nhận thanh toán
                </div>
                <div className="self-start w-[400px] mb-2">
                    <VerificationInput />
                </div>
                <button
                    type="submit"
                    className="overflow-hidden gap-2 self-center px-4 py-2 mt-3 max-w-full text-lg font-semibold text-center text-white bg-[#FF5959] min-h-[45px] rounded-[200px] w-[150px] mb-5"
                    onClick={() => {
                        notification.success({ message: "Đặt đơn hàng thành công" })
                        navigation("/")
                    }}
                >
                    Xác nhận
                </button>
            </form>
        </div>
    );
}

export default VerificationCode;
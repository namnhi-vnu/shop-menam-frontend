import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuTicket } from "react-icons/lu";
import { PiTimer } from "react-icons/pi";

const ShipmentDetails = () => {
    return (
        <div>
            <div>
                <ul>
                    <li className="flex items-center gap-8 py-2">
                        <span className="text-color-green text-2xl">
                            <LuTicket />
                        </span>
                        <span>Sử dụng mã giảm giá ở bước thanh toán</span>
                    </li>
                    <li className="flex items-center gap-8 py-2">
                        <span className="text-color-green text-2xl">
                            <AiOutlineSafetyCertificate />
                        </span>
                        <span>Thông tin bảo mật và mã̃ hóa</span>
                    </li>
                    <li className="flex items-center gap-8 py-2">
                        <span className="text-color-green text-2xl">
                            <LiaShippingFastSolid />
                        </span>
                        <span>
                            <span className="font-semibold">
                                Miễn phí vận chuyển:
                            </span>{" "}
                            đơn hàng 399k
                        </span>
                    </li>
                    <li className="flex items-center gap-8 py-2">
                        <span className="text-color-green text-2xl">
                            <PiTimer />
                        </span>
                        <span>
                            <span className="font-semibold">Giao hàng:</span> Từ
                            1 - 3 ngày
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ShipmentDetails;

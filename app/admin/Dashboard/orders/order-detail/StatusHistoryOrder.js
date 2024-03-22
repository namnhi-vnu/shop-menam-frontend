import { formatDate } from "@/app/store/utils/FormatPrice";
import React from "react";

const StatusHistoryOrder = ({ statusOrder }) => {
    return (
        <div>
            <div className="py-4">
                <div className="text-sm border border-dashed border-gray-500 p-2 leading-6 rounded-md">
                    <p className="py-1">
                        Trạng thái đơn hàng được chuyển từ
                        <span className="text-teal-500 font-semibold inline-block px-1">
                            {statusOrder?.status}
                        </span>
                        sang
                        <span className="text-teal-500 font-semibold inline-block px-1">
                            {statusOrder?.newStatus}
                        </span>
                    </p>
                    <div>
                        <p className="text-teal-500 text-sm border-t border-dashed py-1 border-gray-500">
                            <span>{formatDate(statusOrder?.updatedAt)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusHistoryOrder;

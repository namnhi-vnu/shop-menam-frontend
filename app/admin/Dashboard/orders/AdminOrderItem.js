import { formatDate, formatterPrice } from "@/app/store/utils/FormatPrice";
import Link from "next/link";

const AdminOrderItem = ({ orderItem }) => {
    // bg status
    const success =
        orderItem?.orderStatus === "Đã giao thành công"
            ? "bg-teal-600"
            : "bg-orange-400";
    const canceled = orderItem?.orderStatus === "Đã bị huỷ" ? "bg-red-500" : "";

    return (
        <div className="p-4  border-b border-gray-600 hover:bg-gray-700">
            <Link
                href={`/admin/Dashboard/orders/order-detail/?orderId=${orderItem?._id}`}
            >
                <div className="flex items-center gap-3 text-sm ">
                    <div className="w-[8%] overflow-hidden">
                        <span className="font-semibold  text-orange-600">
                            #{orderItem?._id}
                        </span>
                    </div>
                    <div className="w-[12%]">
                        <span className="font-light text-sm">
                            {formatDate(orderItem?.createdAt)}
                        </span>
                    </div>
                    <div className="w-[22%]">
                        {orderItem?.products?.map((prdItem) => (
                            <p key={prdItem._id} className="py-1 font-semibold">
                                {prdItem?.product?.title},
                            </p>
                        ))}
                    </div>
                    <div className="w-[22%]">
                        <div className="flex flex-col">
                            <span>{orderItem?.orderDetails?.fullname}</span>
                            <span>{orderItem?.orderDetails?.phone}</span>
                            <span>{orderItem?.orderDetails?.street}</span>
                            <span>
                                {orderItem?.orderDetails?.ward},{" "}
                                {orderItem?.orderDetails?.district},{" "}
                            </span>
                            <span>{orderItem?.orderDetails?.city}</span>
                        </div>
                    </div>
                    <div className="w-[12%] text-center">
                        <span className="text-sm font-semibold inline-block py-1 px-3 bg-teal-600 text-white rounded-full">
                            {formatterPrice.format(
                                orderItem?.paymentIntent?.amount,
                            )}
                        </span>
                    </div>
                    <div className="w-[14%] text-center">
                        <span>{orderItem?.paymentMethod}</span>
                    </div>
                    <div className="w-[10%] text-center">
                        <span
                            className={`text-sm  px-2 py-1 rounded-full ${success} ${canceled} `}
                        >
                            {orderItem?.orderStatus}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdminOrderItem;

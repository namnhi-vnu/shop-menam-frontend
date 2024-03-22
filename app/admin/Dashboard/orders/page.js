"use client";
import Link from "next/link";
import { PiPlusBold } from "react-icons/pi";
import AdminOrderItem from "./AdminOrderItem";
import { useContext, useEffect } from "react";
import AdminOrderContext from "../../store/contexts/AdminOrderContext";

const page = () => {
    const { state, getAllOrderUser } = useContext(AdminOrderContext);

    const { allOrder } = state;
    useEffect(() => {
        getAllOrderUser();
    }, []);
    const urlOrders = "/admin/Dashboard/orders";
    return (
        <div>
            <div>
                <div className="sticky top-0 z-50 bg-[#24303F]">
                    <div className="p-4 flex items-center justify-between">
                        <h2 className="uppercase text-xl font-semibold">
                            Quản Lý Đơn hàng
                        </h2>
                        <div>
                            <Link
                                href={`${urlOrders}/new-order`}
                                className="flex items-center gap-2 font-semibold bg-teal-500 text-teal-900 py-2 px-3 rounded-full hover:opacity-70"
                            >
                                <span>
                                    <PiPlusBold />
                                </span>
                                <span>Tạo đơn hàng</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" p-4 pt-8">
                    <div className="bg-[#24303F]  rounded-md">
                        <div className="p-4 pb-8 border-b border-gray-600">
                            <div className="flex items-center gap-2 font-bold">
                                <div className="w-[8%]">
                                    <span>Mã</span>
                                </div>
                                <div className="w-[12%]">
                                    <span>Ngày đặt</span>
                                </div>
                                <div className="w-[22%]">
                                    <span>Tên Sản Phẩm</span>
                                </div>
                                <div className="w-[22%]">
                                    <span>Khách hàng</span>
                                </div>
                                <div className="w-[12%] text-center">
                                    <span>Tổng tiền</span>
                                </div>
                                <div className="w-[14%] text-center ">
                                    <span>Thanh toán</span>
                                </div>
                                <div className="w-[10%] text-center">
                                    <span>Trạng thái</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            {allOrder?.map((orderItem) => (
                                <AdminOrderItem
                                    key={orderItem._id}
                                    orderItem={orderItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

"use client";
import Image from "next/image";

import Select from "react-select";
import AdminProductOrderDetailItem from "./AdminProductOrderDetailItem";
import { useContext, useEffect } from "react";
import AdminOrderContext from "@/app/admin/store/contexts/AdminOrderContext";
import { formatDate, formatterPrice } from "@/app/store/utils/FormatPrice";
import StatusHistoryOrder from "./StatusHistoryOrder";
import { setUpdateOrderDetail } from "@/app/admin/store/acttions/adminOrderActions";

const page = (param) => {
    const { state, dispatch, getOrderDetails, updateOrderStatus } =
        useContext(AdminOrderContext);
    const {
        orderDetail,
        getOrderStatus: { orderStatus },
    } = state;

    useEffect(() => {
        getOrderDetails(param?.searchParams?.orderId);
    }, []);
    const provinces = [
        { label: "Chờ xử lý", value: "CHOXULY" },
        { label: "Đã xác nhận", value: "DAXACNHAN" },
        { label: "Chờ thanh toán", value: "CHOTHANHTOAN" },
        { label: "Chờ giao", value: "CHOGIAOHANG" },
        { label: "Đang giao", value: "DANGGIAO" },
        { label: "Đã giao thành công", value: "DAGIAOTHANHCONG" },
        { label: "Đã bị huỷ", value: "DABIHUY" },
        // Thêm các tỉnh/thành phố khác vào đây
    ];
    const handlerChageStatus = (e) => {
        dispatch(setUpdateOrderDetail({ orderStatus: e.label }));
    };
    const handlerUpdateStatus = () => {
        updateOrderStatus(param?.searchParams?.orderId, orderStatus);
    };
    return (
        <div>
            <div>
                <div className="sticky top-0 z-50 bg-[#24303F]">
                    <div className="p-4 flex items-center justify-between">
                        <h2 className="uppercase text-xl font-semibold">
                            Chi Tiết đơn hàng
                        </h2>
                    </div>
                </div>

                <div className="p-8">
                    <div className="">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-3 bg-[#24303F] p-8 rounded-md h-max">
                                <div className="border-b border-gray-600 flex items-center justify-between">
                                    <h2 className="">
                                        Mã Đơn:{" "}
                                        <span className="text-orange-500">
                                            #{orderDetail?._id}
                                        </span>
                                    </h2>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div>
                                        <div>
                                            <div>
                                                <h2 className="text-xl">
                                                    Chung
                                                </h2>
                                            </div>
                                            <div className="pt-2">
                                                <div className="p-4 border border-dashed border-gray-500 rounded-md ">
                                                    <div className="border-b pb-2 border-dashed border-gray-500">
                                                        <p className="font-semibold text-orange-500 pb-2">
                                                            Ngày tạo đơn:
                                                        </p>
                                                        <p>
                                                            <span className="border text-sm border-gray-600 inline-block py-1 px-2">
                                                                {formatDate(
                                                                    orderDetail?.createdAt,
                                                                )}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="border-b pb-2 border-dashed border-gray-500">
                                                        <p className="font-semibold py-2 text-orange-500">
                                                            Khách hàng:
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                {
                                                                    orderDetail
                                                                        ?.orderDetails
                                                                        ?.fullname
                                                                }
                                                            </li>
                                                            <li>
                                                                {
                                                                    orderDetail
                                                                        ?.orderDetails
                                                                        ?.phone
                                                                }
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="border-b pb-2 border-dashed border-gray-500">
                                                        <p className="font-semibold py-2 text-orange-500">
                                                            Giao nhận:
                                                        </p>
                                                        <p>
                                                            {
                                                                orderDetail
                                                                    ?.orderDetails
                                                                    ?.street
                                                            }
                                                        </p>
                                                        <p>
                                                            {
                                                                orderDetail
                                                                    ?.orderDetails
                                                                    ?.ward
                                                            }
                                                            ,{" "}
                                                            {
                                                                orderDetail
                                                                    ?.orderDetails
                                                                    ?.district
                                                            }
                                                        </p>
                                                        <p>
                                                            {
                                                                orderDetail
                                                                    ?.orderDetails
                                                                    ?.city
                                                            }
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold py-2 text-orange-500">
                                                            Thanh toán:
                                                        </p>
                                                        <span className="bg-teal-600 py-1 px-2 rounded-full">
                                                            {
                                                                orderDetail?.paymentMethod
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl">Sản phẩm</h2>
                                        <div className="py-4">
                                            {orderDetail?.products?.map(
                                                (prdItem) => (
                                                    <AdminProductOrderDetailItem
                                                        key={prdItem._id}
                                                        prdItem={prdItem}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <div className="pt-4 text-xl border-t  border-dashed border-gray-500">
                                        <p>
                                            Tổng tiền:{" "}
                                            <span className="text-orange-500 text-2xl font-semibold">
                                                {formatterPrice.format(
                                                    orderDetail?.paymentIntent
                                                        ?.amount,
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#24303F] p-4 rounded-md">
                                    <div className="border-b border-gray-600 pb-4">
                                        <h2 className="text-lg font-semibold">
                                            Các Thao Tác
                                        </h2>
                                        <div className="text-black py-4">
                                            <Select
                                                options={provinces}
                                                value={provinces.find(
                                                    (option) =>
                                                        option.label ===
                                                        orderStatus?.orderStatus,
                                                )}
                                                onChange={handlerChageStatus}
                                                placeholder="Chọn tác vụ ..."
                                                className="w-full bg-slate-400 focus:border-gray-200"
                                            />
                                        </div>
                                        <button
                                            onClick={() =>
                                                handlerUpdateStatus()
                                            }
                                            className="bg-teal-600 text-white py-1 px-2 rounded-md hover:opacity-70"
                                        >
                                            Cập nhật
                                        </button>
                                    </div>
                                    <div className="pt-4">
                                        <div>
                                            <h2 className="text-lg font-semibold">
                                                Lịch sử đơn hàng
                                            </h2>
                                        </div>
                                        <div>
                                            {orderDetail?.statusHistory
                                                ?.length > 0 &&
                                                orderDetail?.statusHistory?.map(
                                                    (statusOrder) => (
                                                        <StatusHistoryOrder
                                                            key={
                                                                statusOrder._id
                                                            }
                                                            statusOrder={
                                                                statusOrder
                                                            }
                                                        />
                                                    ),
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

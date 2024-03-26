import Link from "next/link";
import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiTimerLight } from "react-icons/pi";
import { formatDate, formatterPrice } from "@/app/store/utils/FormatPrice";
const OrderItem = ({ product }) => {
    const formattedDate = formatDate(product?.createdAt);
    return (
        <div className="p-4 shadow rounded-md border border-gray-100">
            <div className="pb-2 ">
                <div className="flex items-center justify-between max-md:flex-col max-md:items-end max-md:gap-1">
                    <div className="flex items-center gap-4 max-md:gap-1 max-md:items-start">
                        <div className="max-md:flex-1">
                            <span className="uppercase text-[15px] font-semibold">
                                Mã đơn:
                            </span>{" "}
                            <span className="max-md:text-gray-500 max-md:text-sm">
                                {" "}
                                #{product?._id}
                            </span>
                        </div>
                        <div className="flex items-center max-md:justify-end gap-1 text-[13px] text-gray-600 max-md:flex-1">
                            <p>
                                <PiTimerLight />
                            </p>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                    <div>
                        <p className=" ">
                            <span
                                className={`relative inline-block px-3 py-1 font-semibold leading-tight ${product?.orderStatus === "Đã giao thành công" ? "text-green-900" : "text-orange-600"} `}
                            >
                                <span
                                    aria-hidden
                                    className={`absolute inset-0  opacity-50 rounded-full ${product?.orderStatus === "Đã giao thành công" ? "bg-green-200" : "bg-orange-200"}`}
                                ></span>
                                <span className="flex items-center gap-2">
                                    <span className="relative">
                                        {/* <FaHandHoldingDollar /> */}
                                        <LiaShippingFastSolid />
                                    </span>
                                    <span className="max-md:text-xs">
                                        {product?.orderStatus}
                                    </span>
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between ">
                    <div>
                        {product?.products?.map((item) => (
                            <div
                                key={item?._id}
                                className="flex justify-between border-t py-4 border-gray-100"
                            >
                                <div className="flex gap-3">
                                    <div>
                                        <Image
                                            src={item?.product?.image[0]?.url}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="rounded-md w-100% h-100% max-md:w-[60px] max-md:h-[60px]"
                                        />
                                    </div>
                                    <div>
                                        <h2
                                            title={item?.product?.title}
                                            className="text-[1.1em]"
                                        >
                                            <Link
                                                href={`/product/${item?.product?.slug}`}
                                            >
                                                {item?.product?.title}
                                            </Link>
                                        </h2>
                                        <p className="text-color-old-price max-md:text-sm">
                                            Số lượng: {item?.count}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-start justify-end">
                                    <div className="flex gap-2 items-center max-md:flex-col">
                                        <span className="text-color-old-price text-sm line-through">
                                            {formatterPrice.format(
                                                item?.product?.oldPrice,
                                            )}
                                        </span>
                                        <span className="text-color-price font-semibold">
                                            {formatterPrice.format(
                                                item?.product?.price,
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center pt-4 border-t border-gray-200 justify-between ">
                        <div className="min-h">
                            <div className="flex flex-col justify-end ">
                                <div className="flex gap-2 items-center justify-end">
                                    <span className="text-color-old-price ">
                                        Thành tiền:{" "}
                                    </span>
                                    <span className="text-color-price font-semibold text-xl">
                                        {formatterPrice.format(
                                            product?.paymentIntent?.amount,
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-4 max-md:px-2 max-md:gap-2 max-sm:flex-col">
                            <Link
                                href="#"
                                className="bg-orange-500 inline-block rounded-md py-2 px-4 text-white hover:opacity-80 max-md:px-2 max-md:text-sm"
                            >
                                Mua Lại
                            </Link>
                            <Link
                                href="#"
                                className="border border-gray-200  bg-gray-200 inline-block rounded-md py-2 px-4 hover:opacity-80 max-md:px-2 max-md:text-sm"
                            >
                                Đánh giá
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;

"use client";
import Link from "next/link";
import { PiDotsThreeOutlineThin, PiPlusBold } from "react-icons/pi";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import AdminProductItem from "./AdminProductItem";
import { useContext } from "react";
import AdminProductContext from "../../store/contexts/AdminProductContext";
const page = () => {
    const urlProduct = "/admin/Dashboard/product";

    const { state, dispatch, deleteProduct } = useContext(AdminProductContext);
    const { allProduct } = state;
    // console.log(allProduct);
    const handlerDeleteProduct = (id) => {
        deleteProduct(id);
    };
    return (
        <div>
            <div>
                <div className=" mx-auto">
                    <div>
                        <div>
                            <div className="sticky top-0 z-50 bg-[#24303F]">
                                <div className="p-4 flex items-center justify-between">
                                    <h2 className="uppercase text-xl font-semibold">
                                        Quản Lý Sản Phẩm
                                    </h2>
                                    <div>
                                        <Link
                                            href={`${urlProduct}/new-product`}
                                            className="flex items-center gap-2 font-semibold bg-teal-500 text-teal-900 py-2 px-3 rounded-full hover:opacity-70"
                                        >
                                            <span>
                                                <PiPlusBold />
                                            </span>
                                            <span>Thêm Sản phẩm</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="py-2">
                                    <div className=" text-gray-300">
                                        <p>Tổng: 30 Sản phẩm</p>
                                    </div>
                                </div>
                                <div className="bg-[#24303F] p-8  rounded-md">
                                    <div className="pb-4 border-b border-gray-600">
                                        <div className="flex items-center gap-2 font-bold">
                                            <div className="w-[5%]">
                                                <span>STT</span>
                                            </div>
                                            <div className="w-[10%]">
                                                <span>Hình Ảnh</span>
                                            </div>
                                            <div className="w-3/6">
                                                <span>Tên Sản Phẩm</span>
                                            </div>
                                            <div className="w-[15%]">
                                                <span>Danh Mục</span>
                                            </div>
                                            <div className="w-[15%]">
                                                <span>Giá</span>
                                            </div>
                                            <div className="w-[5%] flex items-center gap-2">
                                                <span>
                                                    <PiDotsThreeOutlineThin />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        {allProduct?.map((product, index) => (
                                            <AdminProductItem
                                                product={product}
                                                index={index}
                                                handlerDeleteProduct={
                                                    handlerDeleteProduct
                                                }
                                                key={product?._id}
                                            />
                                        ))}
                                    </div>

                                    <div>
                                        <ul className="flex items-center gap-1">
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="hover:opacity-70 w-8 h-8 flex items-center justify-center rounded-md bg-teal-500"
                                                >
                                                    <CgChevronLeft />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="hover:opacity-70 w-8 h-8 flex items-center justify-center rounded-md border border-teal-500"
                                                >
                                                    1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="hover:opacity-70 w-8 h-8 flex items-center justify-center rounded-md bg-teal-500"
                                                >
                                                    2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="hover:opacity-70 w-8 h-8 flex items-center justify-center rounded-md bg-teal-500"
                                                >
                                                    3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="hover:opacity-70 w-8 h-8 flex items-center justify-center rounded-md bg-teal-500"
                                                >
                                                    <CgChevronRight />
                                                </Link>
                                            </li>
                                        </ul>
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

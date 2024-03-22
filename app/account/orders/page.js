"use client";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";

import Layout from "@/app/layouts/Layout";
import NavbarLeftAccount from "../../components/Header/NavbarLeftAccount";
import BannerTopPage from "../pages/BannerTopPage";
import OrderItem from "./OrderItem";
import AuthLogin from "@/app/store/middleware/LoginAuth";
import CartContext from "@/app/store/contexts/cartContext";

const page = () => {
    const { state, dispatch, getOrderByUser } = useContext(CartContext);
    const { orderUser } = state;
    // console.log(orderUser);
    useEffect(() => {
        getOrderByUser();
    }, []);
    AuthLogin();
    return (
        <Layout type="main">
            <div className="max-md:hidden">
                <BannerTopPage title="Đơn hàng" />
            </div>
            <div>
                <div className="container mx-auto py-7 ">
                    <div>
                        <div className="flex items-start gap-8 max-md:block">
                            <div>
                                <NavbarLeftAccount />
                            </div>
                            <div className="flex-1">
                                <div className="shadow">
                                    <div>
                                        <div className="p-5 py-8 max-md:pb-5 border-b border-b-gray-200">
                                            {/* tab */}
                                            <div className="">
                                                <ul className="flex items-center justify-between ">
                                                    <li className="text-xl font-semibold">
                                                        Tất cả đơn hàng
                                                    </li>
                                                    <li>
                                                        <p className="text-gray-500">
                                                            {" "}
                                                            {
                                                                orderUser?.length
                                                            }{" "}
                                                            Đơn hàng
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* check orders empty */}
                                {/* <div>
                                    <div>
                                        <div className="flex flex-col items-center justify-center pt-8">
                                            <div className="">
                                                <p className="text-[200px] text-orange-400">
                                                    <PiShoppingCartThin />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xl">
                                                    Bạn chưa có đơn hàng nào{" "}
                                                </p>
                                                <p className="py-4 text-center">
                                                    <Link
                                                        href="/"
                                                        className="bg-orange-500 hover:opacity-80 inline-block py-1 px-3 rounded-md text-white"
                                                    >
                                                        Mua ngay
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* order not empty */}
                                <div>
                                    <div>
                                        <div>
                                            {/* head */}
                                            <div></div>
                                            {/* list order detail */}
                                            <div className="pt-10 max-md:pt-3">
                                                <div className="flex flex-col gap-5 max-md:p-1">
                                                    {orderUser?.map(
                                                        (product) => (
                                                            <OrderItem
                                                                key={
                                                                    product?._id
                                                                }
                                                                product={
                                                                    product
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
            </div>
        </Layout>
    );
};

export default page;
